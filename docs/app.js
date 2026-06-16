// Static paper board for Awesome-LLM-Values-and-Pluralistic-Alignment.
// Data source: ./data.json (generated from README.md by scripts/build-data.js).
// No backend: search / filter / sort / paginate all run client-side.

const PAGE_SIZE = 24;

const state = {
  category: "All",
  subcategory: "all",
  query: "",
  sort: "newest",
  page: 1,
  papers: [],
  categories: [],
  counts: {},
  saved: new Set(JSON.parse(localStorage.getItem("values-board-saved") || "[]")),
};

const categoryTabs = document.querySelector("#categoryTabs");
const subSelect = document.querySelector("#subSelect");
const sortSelect = document.querySelector("#sortSelect");
const searchInput = document.querySelector("#searchInput");
const pagination = document.querySelector("#pagination");
const paperGrid = document.querySelector("#paperGrid");
const paperTotal = document.querySelector("#paperTotal");

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function categoriesFor(paper) {
  return (paper.categories && paper.categories.length ? paper.categories : ["Other Related Works"]).filter(
    Boolean,
  );
}

function saveSaved() {
  localStorage.setItem("values-board-saved", JSON.stringify([...state.saved]));
}

function matchesPaper(paper) {
  const cats = categoriesFor(paper);
  const categoryMatch = state.category === "All" || cats.indexOf(state.category) !== -1;
  const subMatch =
    state.subcategory === "all" ||
    (paper.subcategories || []).indexOf(state.subcategory) !== -1;
  if (!categoryMatch || !subMatch) return false;
  const q = state.query.toLowerCase().trim();
  if (!q) return true;
  const haystack = [
    paper.title,
    paper.authors,
    paper.org,
    paper.venue,
    paper.year,
    paper.summary,
    paper.code,
    cats.join(" "),
    (paper.subcategories || []).join(" "),
    (paper.tags || []).join(" "),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.indexOf(q) !== -1;
}

function comparePapers(a, b) {
  if (state.sort === "oldest") {
    return (a.pubKey || 0) - (b.pubKey || 0) || a.title.localeCompare(b.title);
  }
  if (state.sort === "venue") {
    return (
      (b.venue ? 1 : 0) - (a.venue ? 1 : 0) ||
      String(a.venue || "").localeCompare(String(b.venue || "")) ||
      (b.pubKey || 0) - (a.pubKey || 0)
    );
  }
  if (state.sort === "title") {
    return a.title.localeCompare(b.title);
  }
  // newest (default)
  return (b.pubKey || 0) - (a.pubKey || 0) || a.title.localeCompare(b.title);
}

function renderTabs() {
  const tabs = ["All"].concat(state.categories);
  categoryTabs.innerHTML = tabs
    .map((category) => {
      const count =
        category === "All" ? state.papers.length : state.counts[category] || 0;
      return (
        '<button class="tab" type="button" aria-pressed="' +
        (state.category === category) +
        '" data-category="' +
        escapeHtml(category) +
        '">' +
        escapeHtml(category) +
        " · " +
        count +
        "</button>"
      );
    })
    .join("");
}

function renderSubOptions() {
  const subs = new Set();
  for (const p of state.papers) {
    if (state.category !== "All" && categoriesFor(p).indexOf(state.category) === -1) continue;
    for (const s of p.subcategories || []) subs.add(s);
  }
  const ordered = [...subs].sort((a, b) => a.localeCompare(b));
  const current = state.subcategory;
  subSelect.innerHTML =
    '<option value="all">All</option>' +
    ordered
      .map(
        (s) =>
          '<option value="' +
          escapeHtml(s) +
          '"' +
          (s === current ? " selected" : "") +
          ">" +
          escapeHtml(s) +
          "</option>",
      )
      .join("");
  if (current !== "all" && ordered.indexOf(current) === -1) {
    state.subcategory = "all";
    subSelect.value = "all";
  }
}

function renderPagination(totalItems) {
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
  if (totalItems <= PAGE_SIZE) {
    pagination.hidden = true;
    pagination.innerHTML = "";
    return;
  }
  pagination.hidden = false;
  const current = Math.min(state.page, totalPages);
  const start = (current - 1) * PAGE_SIZE + 1;
  const end = Math.min(current * PAGE_SIZE, totalItems);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1).filter(
    (page) => page === 1 || page === totalPages || Math.abs(page - current) <= 1,
  );
  const pageButtons = pages
    .map((page, index) => {
      const previous = pages[index - 1];
      const gap = previous && page - previous > 1 ? '<span class="page-gap">...</span>' : "";
      return (
        gap +
        '<button type="button" data-page="' +
        page +
        '" aria-current="' +
        (page === current ? "page" : "false") +
        '">' +
        page +
        "</button>"
      );
    })
    .join("");
  pagination.innerHTML =
    '<span class="page-status">' +
    start +
    "-" +
    end +
    " of " +
    totalItems +
    '</span><div class="page-actions">' +
    '<button type="button" data-page="' +
    (current - 1) +
    '" ' +
    (current === 1 ? "disabled" : "") +
    ">Prev</button>" +
    pageButtons +
    '<button type="button" data-page="' +
    (current + 1) +
    '" ' +
    (current === totalPages ? "disabled" : "") +
    ">Next</button></div>";
}

function metaRow(paper) {
  const bits = [];
  if (paper.venue) bits.push('<span class="venue">' + escapeHtml(paper.venue) + "</span>");
  if (paper.year) bits.push("<span>" + escapeHtml(paper.year.replace(".", " · ")) + "</span>");
  if (paper.org) bits.push("<span>" + escapeHtml(paper.org) + "</span>");
  if (paper.authors) bits.push("<span>" + escapeHtml(paper.authors) + "</span>");
  return bits.join("");
}

function pillRow(paper) {
  return categoriesFor(paper)
    .map((c) => '<span class="category-pill">' + escapeHtml(c) + "</span>")
    .join("");
}

function tagRow(paper) {
  const tags = (paper.subcategories || []).concat(paper.tags || []);
  return tags
    .filter(Boolean)
    .map((t) => '<span class="tag">' + escapeHtml(t) + "</span>")
    .join("");
}

function renderPapers() {
  const visible = state.papers.filter(matchesPaper).sort(comparePapers);
  const totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  state.page = Math.min(Math.max(1, state.page), totalPages);
  const pageStart = (state.page - 1) * PAGE_SIZE;
  const pageItems = visible.slice(pageStart, pageStart + PAGE_SIZE);

  if (!visible.length) {
    paperGrid.innerHTML = '<div class="empty">No papers match this filter.</div>';
    renderPagination(0);
    return;
  }

  paperGrid.innerHTML = pageItems
    .map((paper) => {
      const saved = state.saved.has(paper.id);
      const summary = paper.summary ? escapeHtml(paper.summary) : "TL;DR pending.";
      const codeLink = paper.code
        ? '<a href="' + escapeHtml(paper.code) + '" target="_blank" rel="noopener noreferrer">Code</a>'
        : "";
      const projectLink = paper.project
        ? '<a href="' +
          escapeHtml(paper.project) +
          '" target="_blank" rel="noopener noreferrer">Project</a>'
        : "";
      return (
        '<article class="paper-card"><div class="paper-body">' +
        '<div class="card-head"><div class="category-row">' +
        pillRow(paper) +
        '</div><button class="save-button" type="button" data-save="' +
        escapeHtml(paper.id) +
        '" aria-pressed="' +
        saved +
        '" aria-label="' +
        (saved ? "Unsave" : "Save") +
        " " +
        escapeHtml(paper.title) +
        '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 21 12 17 5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z"></path></svg></button></div>' +
        '<h3><a href="' +
        escapeHtml(paper.url) +
        '" target="_blank" rel="noopener noreferrer">' +
        escapeHtml(paper.title) +
        "</a></h3>" +
        '<div class="meta">' +
        metaRow(paper) +
        "</div>" +
        '<p class="summary"><strong>TL;DR</strong> ' +
        summary +
        "</p>" +
        '<div class="tag-row">' +
        tagRow(paper) +
        "</div>" +
        '<div class="card-footer"><div class="action-row">' +
        '<a href="' +
        escapeHtml(paper.url) +
        '" target="_blank" rel="noopener noreferrer">Paper</a>' +
        codeLink +
        projectLink +
        "</div></div>" +
        "</div></article>"
      );
    })
    .join("");
  renderPagination(visible.length);
}

function render() {
  paperTotal.textContent = String(state.papers.length);
  renderTabs();
  renderSubOptions();
  renderPapers();
}

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  state.subcategory = "all";
  state.page = 1;
  render();
});

subSelect.addEventListener("change", () => {
  state.subcategory = subSelect.value;
  state.page = 1;
  renderPapers();
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  state.page = 1;
  renderPapers();
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  state.page = 1;
  renderPapers();
});

pagination.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-page]");
  if (!button || button.disabled) return;
  state.page = Number(button.dataset.page);
  renderPapers();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

paperGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-save]");
  if (!button) return;
  const id = button.dataset.save;
  if (state.saved.has(id)) state.saved.delete(id);
  else state.saved.add(id);
  saveSaved();
  button.setAttribute("aria-pressed", String(state.saved.has(id)));
});

async function loadPapers() {
  paperGrid.innerHTML = '<div class="empty">Loading papers...</div>';
  try {
    const response = await fetch("./data.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Unable to load data.json (" + response.status + ")");
    const data = await response.json();
    state.papers = data.papers || [];
    state.categories = data.categories || [];
    state.counts = data.counts || {};
    render();
  } catch (error) {
    paperGrid.innerHTML = '<div class="empty">Failed to load papers: ' + escapeHtml(error.message) + "</div>";
  }
}

loadPapers();
