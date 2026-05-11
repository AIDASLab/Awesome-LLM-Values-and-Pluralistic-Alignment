# Awesome-LLM-Values-and-Pluralistic-Alignment

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
![Maintained](https://img.shields.io/badge/Maintained-2026-blue?style=flat-square)

A curated collection of papers, benchmarks, datasets, and tools on human values in LLMs and pluralistic alignment.

---

## ⚙️ Overview

### Surveys & Useful Resources
   - [Blogs & Lectures]
   - [Github Repos]
   - [Survey & Position Papers]

### Datasets and Resources
   - [Psychometric Inventories]
   - [Survey Datasets]
   - [Value Annotation Datasets]
   - [Public Opinion Datasets]

### Human Values in LLMs
1. [**Value Theory**]
   - [Basic Human Values]
   - [Moral Values and Moral Foundations]
   - [Cultural and Cross-Cultural Values]
   - [Political, Civic Values and Human Rights]

2. [**Value Representation and Extraction**]
   - [Value Classification]
   - [Value Embedding]
   - [Value Profiling]
   - [Value Relation Extraction]

3. [**Value Measurement, Evaluation, and Benchmarks**]
   - [Value Orientation Benchmarks]
   - [Value Understanding Benchmarks]
   - [Survey-Based Evaluation]
   - [Cross-Cultural Evaluation]

4. [**Value Alignment and Steering**]
   - [Prompt-Based Alignment]
   - [Fine-Tuning and RLHF]
   - [Activation-Based Steering]
   - [Multi-Value Control]

   

### Pluralistic Alignment
1. [**Theoretical Foundations**]
   - [Value Pluralism]
   - [Moral Pluralism]
   - [Political Pluralism]
   - [Social Choice and Democratic Theory]

2. [**Multicultural and Cross-Cultural Alignment**]
   - [Country-Level Alignment]
   - [Language-Level Alignment]
   - [Culture-Aware Evaluation] 

3. [**Distributional Pluralism**]
4. [**Steerable Pluralism**]
5. [**Overton Pluralism**]

---
# Surveys & Useful Resources

### 📚 Blogs & Lectures
- [Neurips 2025 Tutorial: Human-AI Alignment](https://hai-alignment-course.github.io/tutorial/)
- [Stanford 2025 Lecture: Machine Learning from Human Preferences](https://web.stanford.edu/class/cs329h/)
- [Stanford 2025 Lecture: Human-Centered LLMs](https://web.stanford.edu/class/cs329x/)
  
### 💾 Github Repos
- [Alignment-Goal-Survey](https://github.com/ValueCompass/Alignment-Goal-Survey)
- [Awesome-Personalized-Alignment](https://github.com/liyongqi2002/Awesome-Personalized-Alignment)
- [Awesome-LLM-in-Social-Science](https://github.com/ValueByte-AI/Awesome-LLM-in-Social-Science)
- [Awesome-LLM-Psychometrics](https://github.com/ValueByte-AI/Awesome-LLM-Psychometrics)
- [Awesome-Pluralistic-Alignment](https://github.com/anudeex/Awesome-Pluralistic-Alignment)

### 📝 Survey & Perspective Papers
| Paper Title | Year | Venue | Remark |
| :--- | :---: | :---: | :--- |
|[Aligning Large Language Models with Human: A Survey](https://arxiv.org/abs/2307.12966) | 2023.07 | Arxiv | - |
|[From Instructions to Intrinsic Human Values -- A Survey of Alignment Goals for Big Models](https://arxiv.org/abs/2308.12014) | 2023.08 | Arxiv | - |
|[AI Alignment: A Comprehensive Survey](https://arxiv.org/abs/2310.19852) | 2023.10 | Arxiv | - |
|[A Roadmap to Pluralistic Alignment](https://arxiv.org/abs/2402.05070) | 2024.02 | ICML 2024 Position | - |
|[Position: Towards Bidirectional Human-AI Alignment](https://arxiv.org/abs/2406.09264) | 2024.06 | NeurIPS 2025 Position | - |
|[The Potential and Challenges of Evaluating Attitudes, Opinions, and Values in Large Language Models](https://arxiv.org/abs/2406.11096) | 2024.06 | Arxiv | - |
|[A Survey on Human-Centric LLMs](https://arxiv.org/abs/2411.14491) | 2024.11 | Arxiv | - |
|[From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents](https://arxiv.org/abs/2412.03563) | 2024.12 | Arxiv | - |
|[Large Language Model Psychometrics: A Systematic Review of Evaluation, Validation, and Enhancement](https://arxiv.org/abs/2505.08245) | 2025.05 | Arxiv | - |
|[Missing the Margins: A Systematic Literature Review on the Demographic Representativeness of LLMs](https://arxiv.org/abs/2511.01864) | 2025.11 | ACL 2025 Findings | - |
|[A roadmap for evaluating moral competence in large language models](https://www.nature.com/articles/s41586-025-10021-1) | 2026.02 | Nature | - |

---
# Datasets and Resources

### Psychometric Inventories
| Category | Examples |
| :--- | :--- |
| Value inventories | SVS, PVQ, Rokeach Value Survey |
| Moral inventories | MFQ, DIT, Ethics Position Questionnaire |
| Personality inventories | Big Five, NEO-PI-R, HEXACO, MBTI |

### Survey Datasets
| Survey | Remarks |
| :--- | :--- |
| [WVS (World Values Survey)](https://www.worldvaluessurvey.org/) | - |
| [EVS (European Values Survey)](https://europeanvaluesstudy.eu/) | - |
| [ESS (European Social Survey)](https://www.europeansocialsurvey.org/data-portal) | - |
| [GSS (General Social Survey)](https://gss.norc.org/) | - |

### Value Annotation Datasets
| Dataset | Year | Remark |
| :--- | :---: | :---: |
|[(ETHICS) Aligning AI With Shared Human Values](https://arxiv.org/abs/2008.02275) | 2020.08 | Ethics |
|[Scruples: A Corpus of Community Ethical Judgments on 32,000 Real-Life Anecdotes](https://arxiv.org/abs/2008.09094) | 2020.08 | Ethics |
|[ProsocialDialog: A Prosocial Backbone for Conversational Agents](https://arxiv.org/abs/2205.12688) | 2022.05 | Ethics |
|[NormBank: A Knowledge Bank of Situational Social Norms](https://arxiv.org/abs/2305.17008) | 2023.05 | Ethics |
|[DailyDilemmas: Revealing Value Preferences of LLMs with Quandaries of Daily Life](https://arxiv.org/abs/2410.02683) | 2024.10 | Ethics, Schwartz, MFT |
|[ValueNet: A New Dataset for Human Value Driven Dialogue System](https://arxiv.org/abs/2112.06346) | 2021.12 | Schwartz |
|[(Valueeval) The Touché23-ValueEval Dataset for Identifying Human Values behind Arguments](https://arxiv.org/abs/2301.13771) | 2023.01 | Schwartz |
|[Moral Foundations Twitter Corpus: A Collection of 35k Tweets Annotated for Moral Sentiment](https://journals.sagepub.com/doi/10.1177/1948550619876629) | 2020.02 | MFT |
|[Social Chemistry 101: Learning to Reason about Social and Moral Norms](https://arxiv.org/abs/2011.00620) | 2020.11 | MFT |
|[The Moral Integrity Corpus: A Benchmark for Ethical Dialogue Systems](https://arxiv.org/abs/2204.03021) | 2022.04 | MFT |
|[The Moral Foundations Reddit Corpus](https://arxiv.org/abs/2208.05545) | 2022.08 | MFT |
|[Moral Stories: Situated Reasoning about Norms, Intents, Actions, and their Consequences](https://arxiv.org/abs/2012.15738) | 2020.12 | Morality |


### Public Opinion & Social Simulation Datasets
| Dataset | Year | Remark |
| :--- | :---: | :---: |


---
# Human Values in LLMs

## 1. Value Theory

### 1.1 Basic Human Values
| Paper Title | Year | Remark |
| :--- | :---: | :---: |
|[Universals in the content and structure of values: Theoretical advances and empirical tests in 20 countries.](https://psycnet.apa.org/record/2003-00370-001) | 1992 | Schwartz |
|[Basic human values: Theory, measurement, and applications](https://www.researchgate.net/publication/286951722_Basic_human_values_Theory_measurement_and_applications) | 2006 | Schwartz |
|[An Overview of the Schwartz Theory of Basic Values](https://scholarworks.gvsu.edu/orpc/vol2/iss1/11/) | 2012 | Schwartz |
|[Refining the theory of basic individual values](https://pubmed.ncbi.nlm.nih.gov/22823292/) | 2012 | Schwartz |
|[Measuring the Refined Theory of Individual Values in 49 Cultural Groups: Psychometrics of the Revised Portrait Value Questionnaire](https://www.researchgate.net/publication/349058866_Measuring_the_Refined_Theory_of_Individual_Values_in_49_Cultural_Groups_Psychometrics_of_the_Revised_Portrait_Value_Questionnaire) | 2022 | Schwartz |
|[The nature of human values.](https://psycnet.apa.org/record/2011-15663-000) | 1973 | Rokeach |
|[Mental representations of social values.](https://psycnet.apa.org/record/2012-14612-001) | 2010 | Maio |
|[Functional theory of human values: Testing its content and structure hypotheses](https://www.researchgate.net/publication/259486885_Functional_theory_of_human_values_Testing_its_content_and_structure_hypotheses) | 2013 | Gouveia |

### 1.2 Moral Values and Moral Foundations
| Paper Title | Year | Remark |
| :--- | :---: | :---: |
|[Liberals and conservatives rely on different sets of moral foundations](https://pubmed.ncbi.nlm.nih.gov/19379034/) | 2009 | MFT |
|[The Righteous Mind](https://righteousmind.com/) | 2012 | MFT |
|[Moral Foundations Theory: The Pragmatic Validity of Moral Pluralism](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2184440) | 2013 | MFT |
|[The theory of dyadic morality: Reinventing moral judgment by redefining harm.](https://psycnet.apa.org/record/2018-02142-002) | 2018 | TDM |

### Cultural and Cross-Cultural Values
| Paper Title | Year | Remark |
| :--- | :---: | :---: |
|[Culture's consequences: International differences in work-related values](https://philpapers.org/rec/HOFCCI-2) | 1980 | Hofstede |
|[Cultures and organizations: software of the mind](https://books.google.co.kr/books/about/Cultures_and_Organizations_Software_of_t.html?id=o4OqTgV3V00C&redir_esc=y) | 2010 | Hofstede |
|[Mapping and interpreting cultural differences around the world](https://www.researchgate.net/publication/265596552_Mapping_and_interpreting_cultural_differences_around_the_world) | 2004 | Schwartz |
|[Cultural Value Orientations: Nature & Implications of National Differences](https://www.researchgate.net/publication/265997557_Cultural_Value_Orientations_Nature_Implications_of_National_Differences) | 2008 | Schwartz |
|[Modernization and Postmodernization: Cultural, Economic, and Political Change in 43 Societies](https://www.jstor.org/stable/j.ctv10vm2ns) | 1997 | Inglehart |
|[Modernization, Cultural Change, and Democracy: The Human Development Sequence](https://www.researchgate.net/publication/230557603_Modernization_Cultural_Change_and_Democracy_The_Human_Development_Sequence) | 2005 | Inglehart |

### Political, Civic Values and Human Rights
| Paper Title | Year | Remark |
| :--- | :---: | :---: |
|[Citizenship and Social Class](https://books.google.co.kr/books/about/Citizenship_and_Social_Class.html?id=99v4JQAACAAJ&redir_esc=y) | 1950 | Marshall |
|[A theory of justice.](https://www.jstor.org/stable/j.ctvjf9z6v) | 1971 | Rawls |
|[A 30-year struggle; the sustained efforts to give force of law to the Universal Declaration of Human Rights](https://unesdoc.unesco.org/ark:/48223/pf0000048063) | 1977 | Vasak |
|[The Theory of Communicative Action](https://philpapers.org/rec/HABTTO) | 1981 | Habermas |
|[Creating Capabilities: The Human Development Approach and Its Implementation](https://www.cambridge.org/core/journals/hypatia/article/abs/creating-capabilities-the-human-development-approach-and-its-implementation/6774FAF6E6CEC38018F9733B188A1A6C) | 2009 | Nussbaum |

