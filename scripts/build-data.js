#!/usr/bin/env node
/*
 * build-data.js
 * Single source of truth: ../README.md
 * Parses the awesome-list tables into docs/data.json for the static board.
 *
 * Run: node scripts/build-data.js
 * Re-run whenever README.md changes. Enrichment (tldr/authors/code) is merged
 * from docs/enrichment.json if present, so it survives rebuilds.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const README = path.join(ROOT, "README.md");
const OUT = path.join(ROOT, "docs", "data.json");
const ENRICH = path.join(ROOT, "docs", "enrichment.json");

// Top-level categories shown as tabs, in display order.
const CATEGORY_ORDER = [
  "Surveys & Resources",
  "Datasets & Benchmarks",
  "Value Theory",
  "Representation & Extraction",
  "Measurement & Evaluation",
  "Alignment & Steering",
  "Other Related Works",
  "Pluralistic Alignment",
];

// Map the Human-Values "## N. ..." headings to clean category names.
const HV_MAP = {
  "Value Theory": "Value Theory",
  "Value Representation and Extraction": "Representation & Extraction",
  "Value Measurement and Evaluation": "Measurement & Evaluation",
  "Value Alignment and Steering": "Alignment & Steering",
  "Other Related Works": "Other Related Works",
};

function stripEmoji(s) {
  return s
    .replace(/[\u{1F000}-\u{1FFFF}]/gu, "")
    .replace(/[←-➿]/g, "")
    .replace(/[️⃣]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// strip HTML tags, emoji, then leading "1.1 " / "3.4 " style numbering
function cleanSummary(s) {
  return stripEmoji(s.replace(/<[^>]+>/g, ""))
    .replace(/^\d+(\.\d+)*\s+/, "")
    .trim();
}

function firstLink(row) {
  const m = row.match(/\[([^\]]*?)\]\((https?:[^)\s]+)\)/);
  if (!m) return null;
  let text = m[1].replace(/\*\*/g, "").replace(/`/g, "").trim();
  return { title: text, url: m[2].trim() };
}

function parseYear(row) {
  const m = row.match(/`(\d{4})\.(\d{2})`/);
  if (!m) return { year: "", pubKey: 0 };
  return { year: m[1] + "." + m[2], pubKey: Number(m[1]) * 100 + Number(m[2]) };
}

function parseVenue(row) {
  if (/badge\/arXiv/i.test(row)) return "arXiv";
  const m = row.match(/badge\/([A-Za-z0-9_]+)-(\d{2})\b/);
  if (!m) return "";
  return m[1].replace(/_/g, " ") + " 20" + m[2];
}

// pull plain-text cells (no links, no badges, no separators) as tags
function extraTags(row) {
  const cells = row.split("|").map((c) => c.trim());
  const tags = [];
  for (const c of cells) {
    if (!c) continue;
    if (/https?:/i.test(c)) continue;
    if (/badge\//i.test(c)) continue;
    if (/^[:\- ]+$/.test(c)) continue;
    if (/`\d{4}\.\d{2}`/.test(c)) continue;
    const clean = stripEmoji(c.replace(/\*\*/g, ""));
    if (clean && clean.length <= 40 && !/^Survey$/i.test(clean)) tags.push(clean);
  }
  return tags;
}

function arxivId(url) {
  const m = url.match(/arxiv\.org\/abs\/([0-9.]+v?\d*)/i);
  return m ? m[1].replace(/v\d+$/, "") : "";
}

function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
}

function idFor(url, title) {
  const ax = arxivId(url);
  if (ax) return ax;
  return slug(title || url);
}

function main() {
  const text = fs.readFileSync(README, "utf8");
  const lines = text.split(/\r?\n/);

  let topH = "";
  let h2 = "";
  let h3 = "";
  let summary = "";

  const byKey = new Map(); // url -> record

  for (const raw of lines) {
    const line = raw.trim();

    let m;
    if ((m = line.match(/^#\s+(.*)$/))) {
      topH = cleanSummary(m[1]);
      h2 = "";
      h3 = "";
      summary = "";
      continue;
    }
    if ((m = line.match(/^##\s+(.*)$/))) {
      h2 = cleanSummary(m[1]);
      h3 = "";
      summary = "";
      continue;
    }
    if ((m = line.match(/^###\s+(.*)$/))) {
      h3 = cleanSummary(m[1]);
      summary = "";
      continue;
    }
    if ((m = line.match(/<summary>(.*?)<\/summary>/))) {
      summary = cleanSummary(m[1]);
      if (/click to expand/i.test(summary)) summary = "";
      continue;
    }

    if (!line.startsWith("|")) continue;
    if (/^\|[\s:\-|]+\|?$/.test(line)) continue; // separator row
    const link = firstLink(line);
    if (!link) continue;

    // --- resolve category + subcategory ---
    let category = "";
    let subcategory = "";

    if (/^Pluralistic Alignment/i.test(topH)) {
      category = "Pluralistic Alignment";
      subcategory = h2 || summary;
      if (summary && h2 && summary !== h2) subcategory = h2 + " — " + summary;
    } else if (HV_MAP[h2]) {
      category = HV_MAP[h2];
      subcategory = summary || h2;
    } else if (/^Surveys/i.test(topH)) {
      category = "Surveys & Resources";
      subcategory = summary || h3;
    } else if (/^Datasets/i.test(topH)) {
      category = "Datasets & Benchmarks";
      subcategory = summary || h3;
    } else {
      continue; // outside known content zones (e.g. ToC, header)
    }

    const yr = parseYear(line);
    const rec = {
      id: idFor(link.url, link.title),
      title: link.title,
      url: link.url,
      year: yr.year,
      pubKey: yr.pubKey,
      venue: parseVenue(line),
      authors: "",
      org: "",
      code: "",
      project: "",
      summary: "",
      tags: extraTags(line),
      categories: [category],
      subcategories: subcategory ? [subcategory] : [],
    };

    const key = link.url.replace(/\/$/, "");
    if (byKey.has(key)) {
      const ex = byKey.get(key);
      if (ex.categories.indexOf(category) === -1) ex.categories.push(category);
      if (subcategory && ex.subcategories.indexOf(subcategory) === -1)
        ex.subcategories.push(subcategory);
      for (const t of rec.tags) if (ex.tags.indexOf(t) === -1) ex.tags.push(t);
      if (!ex.year && rec.year) {
        ex.year = rec.year;
        ex.pubKey = rec.pubKey;
      }
      if (!ex.venue && rec.venue) ex.venue = rec.venue;
    } else {
      byKey.set(key, rec);
    }
  }

  let papers = Array.from(byKey.values());

  // merge enrichment (tldr / authors / org / code) keyed by url or id
  if (fs.existsSync(ENRICH)) {
    const enr = JSON.parse(fs.readFileSync(ENRICH, "utf8"));
    const map = new Map();
    const list = Array.isArray(enr) ? enr : enr.papers || [];
    for (const e of list) {
      if (e.url) map.set(e.url.replace(/\/$/, ""), e);
      if (e.id) map.set("id:" + e.id, e);
    }
    for (const p of papers) {
      const e = map.get(p.url.replace(/\/$/, "")) || map.get("id:" + p.id);
      if (!e) continue;
      if (e.summary || e.tldr) p.summary = e.summary || e.tldr;
      if (e.authors) p.authors = e.authors;
      if (e.org) p.org = e.org;
      if (e.code) p.code = e.code;
      if (e.project) p.project = e.project;
    }
  }

  // category counts (a paper can be in several)
  const counts = {};
  for (const c of CATEGORY_ORDER) counts[c] = 0;
  for (const p of papers) for (const c of p.categories) if (counts[c] != null) counts[c]++;

  // stable order: newest first, then title
  papers.sort((a, b) => b.pubKey - a.pubKey || a.title.localeCompare(b.title));

  const out = {
    generatedAt: new Date().toISOString(),
    count: papers.length,
    categories: CATEGORY_ORDER,
    counts: counts,
    papers: papers,
  };

  if (!fs.existsSync(path.dirname(OUT))) fs.mkdirSync(path.dirname(OUT));
  fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
  console.log("Wrote " + papers.length + " papers to docs/data.json");
  console.log("Counts:", JSON.stringify(counts));
  const withYear = papers.filter((p) => p.year).length;
  const withVenue = papers.filter((p) => p.venue).length;
  console.log("with year: " + withYear + ", with venue: " + withVenue);
}

main();
