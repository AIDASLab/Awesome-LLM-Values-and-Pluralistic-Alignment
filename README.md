# Awesome-LLM-Values-and-Pluralistic-Alignment

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
![Maintained](https://img.shields.io/badge/Maintained-2026-blue?style=flat-square)

A curated collection of papers, benchmarks, datasets, and tools on human values in LLMs and pluralistic alignment.

---

## ⚙️ Overview

### [A. Surveys & Useful Resources](#surveys--useful-resources)
   - [Blogs & Lectures](#-blogs--lectures)
   - [Github Repos](#-github-repos)
   - [Survey & Position Papers](#-survey--perspective-papers)

### [B. Datasets and Benchmarks](#datasets-and-benchmarks)
   - [Psychometric Inventories](#psychometric-inventories)
   - [Survey Datasets](#survey-datasets)
   - [Value Annotation Datasets](#value-annotation-datasets)
   - [Public Opinion & Cultural Datasets](#public-opinion--cultural-datasets)

### [C. Human Values in LLMs](#human-values-in-llms)
[**1. Value Theory**](#1-value-theory)
   - [1.1 Basic Human Values](#11-basic-human-values)
   - [1.2 Moral Values and Moral Foundations](#12-moral-values-and-moral-foundations)
   - [1.3 Cultural and Cross-Cultural Values](#13-cultural-and-cross-cultural-values)
   - [1.4 Political, Civic Values and Human Rights](#14-political-civic-values-and-human-rights)

[**2. Value Representation and Extraction**](#2-value-representation-and-extraction)
   - [Value Identification and Classification](#21-value-identification-and-classification)
   - [Value Representation and Embedding](#22-value-representation-and-embedding)
   - [Value System Construction and Discovery](#23-value-system-construction-and-discovery)
   - [Value Profiling](#24-value-profiling)

[**3. Value Measurement and Evaluation**](#3-value-measurement-and-evaluation)
   - [Value Orientation and Psychometric Measurement](#31-value-orientation-and-psychometric-measurement)
   - [Value Understanding and Reasoning](#32-value-understanding-and-reasoning)
   - [Robustness, Stability, and Consistency](#33-robustness-stability-and-consistency)
   - [Value-Action Alignment, Behavioral Evaluation, and Interpretability](#34-value-action-alignment-behavioral-evaluation-and-interpretability)

[**4. Value Alignment and Steering**]
   - [Prompt-Based Alignment]
   - [Fine-Tuning and RLHF]
   - [Activation-Based Steering]
   - [Multi-Value Control]

[**5. Other Related Works**]   

### [D. Pluralistic Alignment](#pluralistic-alignment)
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
# Datasets and Benchmarks

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
| Dataset | Year | Category | Remark |
| :--- | :---: | :---: | :---: |
|[(ETHICS) Aligning AI With Shared Human Values](https://arxiv.org/abs/2008.02275) | 2020.08 | Dataset | Ethics |
|[Scruples: A Corpus of Community Ethical Judgments on 32,000 Real-Life Anecdotes](https://arxiv.org/abs/2008.09094) | 2020.08 | Dataset | Ethics |
|[ProsocialDialog: A Prosocial Backbone for Conversational Agents](https://arxiv.org/abs/2205.12688) | 2022.05 | Dataset |  Ethics |
|[NormBank: A Knowledge Bank of Situational Social Norms](https://arxiv.org/abs/2305.17008) | 2023.05 | Dataset | Ethics |
|[DailyDilemmas: Revealing Value Preferences of LLMs with Quandaries of Daily Life](https://arxiv.org/abs/2410.02683) | 2024.10 | Dataset | Ethics, Schwartz, MFT |
|[ValueNet: A New Dataset for Human Value Driven Dialogue System](https://arxiv.org/abs/2112.06346) | 2021.12 | Dataset | Schwartz |
|[(Valueeval) The Touché23-ValueEval Dataset for Identifying Human Values behind Arguments](https://arxiv.org/abs/2301.13771) | 2023.01 | Dataset | Schwartz |
|[ValueBench: Towards Comprehensively Evaluating Value Orientations and Understanding of Large Language Models](https://arxiv.org/abs/2406.04214) | 2024.06 | Benchmark | Schwartz |
|[Moral Foundations Twitter Corpus: A Collection of 35k Tweets Annotated for Moral Sentiment](https://journals.sagepub.com/doi/10.1177/1948550619876629) | 2020.02 | Dataset | MFT |
|[Social Chemistry 101: Learning to Reason about Social and Moral Norms](https://arxiv.org/abs/2011.00620) | 2020.11 | Dataset | MFT |
|[The Moral Integrity Corpus: A Benchmark for Ethical Dialogue Systems](https://arxiv.org/abs/2204.03021) | 2022.04 | Dataset | MFT |
|[The Moral Foundations Reddit Corpus](https://arxiv.org/abs/2208.05545) | 2022.08 | Dataset | MFT |
|[Moral Stories: Situated Reasoning about Norms, Intents, Actions, and their Consequences](https://arxiv.org/abs/2012.15738) | 2020.12 | Dataset | Morality |
|[(MoralChoice) Evaluating the Moral Beliefs Encoded in LLMs](https://arxiv.org/abs/2307.14324) | 2023.06 | Benchmark | Morality |
|[(ValuePrism) Value Kaleidoscope: Engaging AI with Pluralistic Human Values, Rights, and Duties](https://arxiv.org/abs/2309.00779) | 2023.10 | Dataset | Value, Duty, Right |


### Public Opinion & Cultural Datasets
| Dataset | Year | Remark |
| :--- | :---: | :---: |
|[(OpinionsQA) Whose Opinions Do Language Models Reflect?](https://arxiv.org/abs/2208.05545) | 2023.03 | - |
|[(GlobalOpinionQA) Towards Measuring the Representation of Subjective Global Opinions in Language Models](https://arxiv.org/abs/2306.16388) | 2023.06 | - |
|[The PRISM Alignment Dataset: What Participatory, Representative and Individualised Human Feedback Reveals About the Subjective and Multicultural Alignment of Large Language Models](https://arxiv.org/abs/2404.16019) | 2024.04 | - |
|[(NYTBookOpinions) Benchmarking Distributional Alignment of Large Language Models](https://arxiv.org/abs/2411.05403) | 2024.11 | - |
|[CIVICS: Building a Dataset for Examining Culturally-Informed Values in Large Language Models](https://arxiv.org/abs/2405.13974) | 2024.05 | - |

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

### 1.3 Cultural and Cross-Cultural Values
| Paper Title | Year | Remark |
| :--- | :---: | :---: |
|[Culture's consequences: International differences in work-related values](https://philpapers.org/rec/HOFCCI-2) | 1980 | Hofstede |
|[Cultures and organizations: software of the mind](https://books.google.co.kr/books/about/Cultures_and_Organizations_Software_of_t.html?id=o4OqTgV3V00C&redir_esc=y) | 2010 | Hofstede |
|[Mapping and interpreting cultural differences around the world](https://www.researchgate.net/publication/265596552_Mapping_and_interpreting_cultural_differences_around_the_world) | 2004 | Schwartz |
|[Cultural Value Orientations: Nature & Implications of National Differences](https://www.researchgate.net/publication/265997557_Cultural_Value_Orientations_Nature_Implications_of_National_Differences) | 2008 | Schwartz |
|[Modernization and Postmodernization: Cultural, Economic, and Political Change in 43 Societies](https://www.jstor.org/stable/j.ctv10vm2ns) | 1997 | Inglehart |
|[Modernization, Cultural Change, and Democracy: The Human Development Sequence](https://www.researchgate.net/publication/230557603_Modernization_Cultural_Change_and_Democracy_The_Human_Development_Sequence) | 2005 | Inglehart |

### 1.4 Political, Civic Values and Human Rights
| Paper Title | Year | Remark |
| :--- | :---: | :---: |
|[Citizenship and Social Class](https://books.google.co.kr/books/about/Citizenship_and_Social_Class.html?id=99v4JQAACAAJ&redir_esc=y) | 1950 | Marshall |
|[A theory of justice.](https://www.jstor.org/stable/j.ctvjf9z6v) | 1971 | Rawls |
|[A 30-year struggle; the sustained efforts to give force of law to the Universal Declaration of Human Rights](https://unesdoc.unesco.org/ark:/48223/pf0000048063) | 1977 | Vasak |
|[The Theory of Communicative Action](https://philpapers.org/rec/HABTTO) | 1981 | Habermas |
|[Creating Capabilities: The Human Development Approach and Its Implementation](https://www.cambridge.org/core/journals/hypatia/article/abs/creating-capabilities-the-human-development-approach-and-its-implementation/6774FAF6E6CEC38018F9733B188A1A6C) | 2009 | Nussbaum |


## 2. Value Representation and Extraction

### 2.1 Value Identification and Classification
| Paper Title | Year | Venue | Remark |
| :--- | :---: | :---: | :--- |
|[ValueNet: A New Dataset for Human Value Driven Dialogue System](https://arxiv.org/abs/2112.06346) | 2021.12 | AAAI 2022 | Schwartz |
|[SemEval-2023 Task 4: ValueEval: Identification of Human Values Behind Arguments](https://aclanthology.org/2023.semeval-1.313/) | 2023.07 | SemEval 2023 | Schwartz |
|[What does a Text Classifier Learn about Morality? An Explainable Method for Cross-Domain Comparison of Moral Rhetoric](https://aclanthology.org/2023.acl-long.789/) | 2023.07 | ACL 2024 | Morality |
|[Value FULCRA: Mapping Large Language Models to the Multidimensional Spectrum of Basic Human Values](https://arxiv.org/abs/2311.10766) | 2023.11 | NAACL 2024 | Schwartz |
|[Investigating Human Values in Online Communities](https://arxiv.org/abs/2402.14177) | 2024.02 | NAACL 2025 | Schwartz |
|[MoralBERT: A Fine-Tuned Language Model for Capturing Moral Values in Social Discussions](https://arxiv.org/abs/2403.07678) | 2024.03 | GoodIT 2024 | Morality |
|[The Value of Nothing: Multimodal Extraction of Human Values Expressed by TikTok Influencers](https://arxiv.org/abs/2501.11770) | 2025.01 | Arxiv | Schwartz |
|[EAVIT: Efficient and Accurate Human Value Identification from Text data via LLMs](https://arxiv.org/abs/2505.12792) | 2025.05 | Arxiv | Schwartz |
|[MoVa: Towards Generalizable Classification of Human Morals and Values](https://arxiv.org/abs/2509.24216) | 2025.10 | EMNLP 2025 | Morality, Schwartz |

### 2.2 Value Representation and Embedding
| Paper Title | Year | Venue | Remark |
| :--- | :---: | :---: | :--- |
|[Morality is Non-Binary: Building a Pluralist Moral Sentence Embedding Space using Contrastive Learning](https://arxiv.org/abs/2401.17228) | 2024.01 | EACL 2024 Findings | Morality |
|[High-Dimension Human Value Representation in Large Language Models](https://arxiv.org/abs/2404.07900) | 2024.04 | NAACL 2025 | - |
|[VALUEFLOW: Toward Pluralistic and Steerable Value-based Alignment in Large Language Models](https://arxiv.org/abs/2602.03160) | 2026.02 | ICML 2026 | Schwartz, Morality, Right, Duty |

### 2.3 Value System Construction and Discovery
| Paper Title | Year | Venue | Remark |
| :--- | :---: | :---: | :--- |
|[Value Kaleidoscope: Engaging AI with Pluralistic Human Values, Rights, and Duties](https://arxiv.org/abs/2309.00779) | 2023.09 | AAAI 24 | - |
|[Generative Psycho-Lexical Approach for Constructing Value Systems in Large Language Models](https://arxiv.org/abs/2502.02444) | 2025.02 | ACL 2025 | - |
|[Utility Engineering: Analyzing and Controlling Emergent Value Systems in AIs](https://arxiv.org/abs/2502.08640) | 2025.02 | NeurIPS 2025 | - |
|[Values in the Wild: Discovering and Analyzing Values in Real-World Language Model Interactions](https://arxiv.org/abs/2504.15236) | 2025.04 | Arxiv | - |
|[Learning the Value Systems of Societies from Preferences](https://arxiv.org/abs/2507.20728) | 2025.07 | ECAI 2025 | - |
|[Value Lens: Using Large Language Models to Understand Human Values](https://arxiv.org/abs/2512.15722) | 2025.12 | ECAI 2025 | - |
|[Exploring Universal Human Values with Large Language Models: The AWARE-Value Model](https://www.researchsquare.com/article/rs-8188052/v1) | 2026.01 | - | - |

### 2.4 Value Profiling
| Paper Title | Year | Venue | Remark |
| :--- | :---: | :---: | :--- |
|[Do Differences in Values Influence Disagreements in Online Discussions?](https://arxiv.org/abs/2310.15757) | 2023.10 | EMNLP 2023 | Schwartz |
|[Value Profiles for Encoding Human Variation](https://arxiv.org/abs/2503.15484) | 2025.03 | EMNLP 2025 | - |
|[SOLAR: Towards Characterizing Subjectivity of Individuals through Modeling Value Conflicts and Trade-offs](https://arxiv.org/abs/2504.12633) | 2025.04 | EMNLP 2025 | - |
|[Value Alignment of Social Media Ranking Algorithms](https://arxiv.org/abs/2509.14434) | 2025.10 | CHI 2026 | Schwartz |
|[VALUEFLOW: Toward Pluralistic and Steerable Value-based Alignment in Large Language Models](https://arxiv.org/abs/2602.03160) | 2026.02 | ICML 2026 | Schwartz, Morality, Right, Duty |


## 3. Value Measurement and Evaluation

### 3.1 Value Orientation and Psychometric Measurement
| Paper Title | Year | Venue | Remark |
| :--- | :---: | :---: | :--- |
|[Heterogeneous Value Alignment Evaluation for Large Language Models](https://arxiv.org/abs/2305.17147) | 2023.05 | AAAI 24 Workshop | - |
|[ValueBench: Towards Comprehensively Evaluating Value Orientations and Understanding of Large Language Models](https://arxiv.org/abs/2406.04214) | 2024.06 | ACL 2024 | Schwartz |
|[CLAVE: An Adaptive Framework for Evaluating Values of LLM Generated Responses](https://arxiv.org/abs/2407.10725) | 2024.07 | NeurIPS 2024 | - |
|[LocalValueBench: A Collaboratively Built and Extensible Benchmark for Evaluating Localized Value Alignment and Ethical Safety in Large Language Models](https://arxiv.org/abs/2408.01460) | 2024.07 | Arxiv | - |
|[Measuring Human and AI Values Based on Generative Psychometrics with Large Language Models](https://arxiv.org/abs/2409.12106) | 2024.09 | AAAI 2025 | GPV |
|[Value-Spectrum: Quantifying Preferences of Vision-Language Models via Value Decomposition in Social Media Contexts](https://arxiv.org/abs/2411.11479) | 2024.11 | ACL 2025 | Multimodal |
|[Value Compass Benchmarks: A Platform for Fundamental and Validated Evaluation of LLMs Values](https://arxiv.org/abs/2501.07071) | 2025.01 | ACL 2025 Demo | - |
|[Value Portrait: Assessing Language Models' Values through Psychometrically and Ecologically Valid Items](https://arxiv.org/abs/2505.01015) | 2025.05 | AAAI 2025 | Schwartz |
|[AdAEM: An Adaptively and Automated Extensible Measurement of LLMs' Value Difference](https://arxiv.org/abs/2505.13531) | 2025.05 | ICLR 2026 | - |
|[Implicit Values Embedded in How Humans and LLMs Complete Subjective Everyday Tasks](https://arxiv.org/abs/2510.03384) | 2025.10 | EMNLP 2025 | - |
|[Deep Value Benchmark: Measuring Whether Models Generalize Deep Values or Shallow Preferences](https://arxiv.org/abs/2511.02109) | 2025.11 | NeurIPS 2025 | - |
|[VALUEFLOW: Toward Pluralistic and Steerable Value-based Alignment in Large Language Models](https://arxiv.org/abs/2602.03160) | 2026.02 | ICML 2026 | Schwartz, Morality, Right, Duty |

### 3.2 Value Understanding and Reasoning
| Paper Title | Year | Venue | Remark |
| :--- | :---: | :---: | :--- |
|[ValueDCG: Measuring Comprehensive Human Value Understanding Ability of Language Models](https://arxiv.org/abs/2310.00378) | 2023.10 | Arxiv | - |
|[Can Language Models Reason about Individualistic Human Values and Preferences?](https://arxiv.org/abs/2410.03868) | 2024.10 | ACL 2025 | - |
|[Multimodal understanding of human values in videos: A benchmark dataset and PLM-based method](https://www.sciencedirect.com/science/article/pii/S0925231225008422) | 2025.07 | Neurocomputing 2025 | Multimodal |
|[Investigating Value-Reasoning Reliability in Small Large Language Models](https://aclanthology.org/2025.emnlp-main.395/) | 2025.11 | EMNLP 2025 | - |

### 3.3 Robustness, Stability, and Consistency
| Paper Title | Year | Venue | Remark |
| :--- | :---: | :---: | :--- |
|[Raising the Bar: Investigating the Values of Large Language Models via Generative Evolving Testing](https://arxiv.org/abs/2406.14230) | 2024.06 | ICML 2025 | - |
|[Do LLMs have Consistent Values?](https://arxiv.org/abs/2407.12878) | 2024.07 | ICLR 2025 | - |
|[Are Large Language Models Consistent over Value-laden Questions?](https://arxiv.org/abs/2407.02996) | 2024.07 | EMNLP 2024 Findings | - |
|[Stick to your role! Stability of personal values expressed in large language models](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0309114) | 2024.08 | PLOS One | - |
|[Revisiting LLM Value Probing Strategies: Are They Robust and Expressive?](https://arxiv.org/abs/2507.13490) | 2025.07 | EMNLP 2025 | - |
|[ValueFlow: Measuring the Propagation of Value Perturbations in Multi-Agent LLM Systems](https://arxiv.org/abs/2602.08567) | 2026.02 | Arxiv | - |

### 3.4 Value-Action Alignment, Behavioral Evaluation, and Interpretability
| Paper Title | Year | Venue | Remark |
| :--- | :---: | :---: | :--- |
|[Are the Values of LLMs Structurally Aligned with Humans? A Causal Perspective](https://arxiv.org/abs/2501.00581) | 2024.12 | ACL 2025 Findings | - |
|[Mind the Value-Action Gap: Do LLMs Act in Alignment with Their Values?](https://arxiv.org/abs/2501.15463) | 2025.01 | EMNLP 2025 | - |
|[Following the Whispers of Values: Unraveling Neural Mechanisms Behind Value-Oriented Behaviors in LLMs](https://arxiv.org/abs/2504.04994) | 2025.04 | Arxiv | - |
|[Understanding How Value Neurons Shape the Generation of Specified Values in LLMs](https://arxiv.org/abs/2505.17712) | 2025.05 | EMNLP 2025 Findings | - |
|[Dual Mechanisms of Value Expression: Intrinsic vs. Prompted Values in Large Language Models](https://arxiv.org/abs/2509.24319) | 2025.10 | Arxiv | - |
|[Context-Value-Action Architecture for Value-Driven Large Language Model Agents](https://arxiv.org/abs/2604.05939) | 2026.04 | ACL 2026 Findings | - |




## 4. Value Alignment and Steering
| Paper Title | Year | Venue | Remark |
| :--- | :---: | :---: | :--- |
|[Rethinking Machine Ethics -- Can LLMs Perform Moral Reasoning through the Lens of Moral Theories?](https://arxiv.org/abs/2308.15399) | 2023.08 | NAACL 2024 Findings | Morality |
|[Unintended Harms of Value-Aligned LLMs: Psychological and Empirical Insights](https://arxiv.org/abs/2506.06404) | 2025.06 | ACL 2025 | Safety |
|[From Values to Opinions: Predicting Human Behaviors and Stances Using Value-Injected Large Language Models](https://arxiv.org/abs/2310.17857) | 2023.08 | EMNLP 2023 | Schwartz, VIM |
|[Value FULCRA: Mapping Large Language Models to the Multidimensional Spectrum of Basic Human Values](https://arxiv.org/abs/2311.10766) | 2023.11 | NAACL 2024 | Schwartz |
|[Value Alignment of Social Media Ranking Algorithms](https://arxiv.org/abs/2509.14434) | 2025.10 | CHI 2026 | Schwartz |
|[VISA: Value Injection via Shielded Adaptation for Personalized LLM Alignment](https://arxiv.org/abs/2603.04822) | 2026.03 | Arxiv | - |
|[ValuePilot: A Two-Phase Framework for Value-Driven Decision-Making](https://arxiv.org/abs/2503.04569) | 2025.03 | Arxiv | - |
|[Survey-to-Behavior: Downstream Alignment of Human Values in LLMs via Survey Questions](https://arxiv.org/abs/2508.11414) | 2025.08 | Arxiv | - |
|[PICACO: Pluralistic In-Context Value Alignment of LLMs via Total Correlation Optimization](https://arxiv.org/abs/2507.16679) | 2025.06 | Arxiv | - |
|[Dual Mechanisms of Value Expression: Intrinsic vs. Prompted Values in Large Language Models](https://arxiv.org/abs/2509.24319) | 2025.10 | Arxiv | - |
|[Controllable Value Alignment in Large Language Models through Neuron-Level Editing](https://arxiv.org/abs/2602.07356) | 2026.02 | Arxiv | - |
|[Utility Engineering: Analyzing and Controlling Emergent Value Systems in AIs](https://arxiv.org/abs/2502.08640) | 2025.02 | NeurIPS 2025 | - |
|[Internal Value Alignment in Large Language Models through Controlled Value Vector Activation](https://arxiv.org/abs/2507.11316) | 2025.07 | ACL 2025 | - |
|[Controllable Value Alignment in Large Language Models through Neuron-Level Editing](https://arxiv.org/abs/2602.07356) | 2026.02 | Arxiv | - |
|[Strong and weak alignment of large language models with human values](https://arxiv.org/abs/2408.04655) | 2024.08 | Scientific Reports | - |
|[What are human values, and how do we align AI to them?](https://arxiv.org/abs/2404.10636) | 2024.03 | Arxiv | - |

## 5. Other Related Works
| Paper Title | Year | Venue | Remark |
| :--- | :---: | :---: | :--- |
|[Bridging Values and Behavior: A Hierarchical Framework for Proactive Embodied Agents](https://arxiv.org/abs/2604.27699) | 2026.04 | Arxiv | Robotic Agent |
|[Value-Based Human–Robot-Interaction: A Perceptual Control Theory Approach Toward Socially Intelligent Agents](https://link.springer.com/chapter/10.1007/978-3-031-99290-2_7) | 2026.02 | SOCUSRA 2026 | Robotic Agent |
|[If they disagree, will you conform? Exploring the role of robots’ value awareness in a decision-making task](https://www.jbe-platform.com/content/journals/10.1075/is.25030.pus) | 2025.12 | Interaction Studies 2025 | Robotic Agent |
