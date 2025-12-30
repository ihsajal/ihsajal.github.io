export const siteConfig = {
  name: "Ibrahim Hossain Sajal",
  title: "Postdoctoral Fellow @ NCI, NIH",
  description: "Portfolio website of Ibrahim Hossain Sajal",
  accentColor: "#1d4ed8",
  social: {
    email: "ihossain2@isrt.ac.bd",
    linkedin: "https://www.linkedin.com/in/ihsajal/",
    github: "https://github.com/ihsajal",
  },
  aboutMe:
    "I'm a postdoctoral fellow at the National Cancer Institute (NCI) with expertise in statistical genetics, biostatistics, and cancer epidemiology. My research focuses on genetic association methods, Bayesian and machine-learning approaches, and the development of personalized cancer risk prediction models, particularly in breast and other cancers. I have extensive experience working with large-scale population and registry data, including BCSC, SEER, and biobank resources, and I develop scalable multivariate methods to study complex genetic and molecular mechanisms underlying cancer risk and outcomes.",
  skills: ["R", "Python", "SAS", "C++", "STATA", "AWS", "HPC Environments", "Shell scripting"],
  projects: [
    {
      name: "CBCRISK-BLACK",
      description:
        "Personalized Risk Prediction for Contralateral Breast Cancer in Black Women",
      link: "https://ihsajal.github.io/projects/cbcrisk-black",
      skills: ["Survival Analysis", "Conditional Logistic Regression with LASSO", "Absolute Risk", "Discrimination", "Calibration"],
    },
    {
      name: "CBCRISK-MASTECTOMY",
      description:
        "Personalized Contralateral Breast Cancer Risk Prediction to Inform Prophylactic Mastectomy Decisions",
      link: "https://ihsajal.github.io/projects/cbcrisk-mastectomy",
      skills: ["Multiple Imputation", "Variable Selection", "MILRT", "Cross-Validation"],
    },
    {
      name: "Proteomic Intermediates of Risk Factors Effects in Lung Cancer",
      description:
        "Identified plasma proteins that can potentially mediate the effects of risk factors on renal cell carcinoma using a two-step Mendelian randomization",
      link: "https://ihsajal.github.io/projects/plasma-protein",
      skills: ["GWAS", "Instrument Variable Analysis", "Colocalization", "Differential Gene Expression", "Mediation Analysis"],
    },
    {
      name: "Bivariate Quantitative Bayesian Lasso",
      description:
        "Bivariate Quantitative Bayesian Lasso to detect rare haplotype association with two correlated continuous phenotypes",
      link: "https://ihsajal.github.io/projects/biQBL",
      skills: ["Bayesian LASSO", "Latent Variable", "Bayesian Inference", "MCMC", "Genetic Analysis Workshop 19"],
    },
    {
      name: "Multivariate Bayesian Lasso (Ongoing)",
      description:
        "Multivariate Quantitative Bayesian Lasso via Mean-Field Variational Bayes to detect rare haplotype association with two correlated continuous phenotypes",
      link: "https://ihsajal.github.io/projects/mfvb",
      skills: ["Machine Learning", "Variational Inference", "Coordinate Ascent", "Simulation"],
    },
  ],
  experience: [
    {
      company: "National Cancer Institute, National Institutes of Health",
      title: "Postdoctoral Fellow",
      location: "Rockville, MD, USA",
      dateRange: "Jan 2025 - Present",
      bullets: [
        "Investigate proteomic intermediaries linking risk factors to cancer, complemented by colocalization and differential gene expression.",
        "Build a summary-statistics based multivariate test by aggregating multiple tests with complementary strength in capturing genetic association.",
        "Conduct multivariate analyses to identify associations with pan-cancer phenotypes, protein modules (WGCNA), and predefined pathways (KEGG, Hallmark).",
        "Study protein module associations with cancer using Bayesian Non-Negative Matrix Factorization (BNMF).",
        "Perform survival analyses in RCC cases and examine relationships with risk factors and polygenic risk scores.",
        "Integrate multi-omics data to elucidate molecular mechanisms underlying cancer.",
      ],
      logo: "/logos/nci.png"
    },
    {
      company: "University of Texas at Dallas",
      title: "Graduate Assistant",
      location: "Richardson, TX, USA",
      dateRange: "Aug 2019 - Dec 2024",
      bullets: [
        "Developed CBCRisk-Black and CBCRisk-Mastectomy, personalized absolute risk prediction tools for contralateral breast cancer patients.",
        "Conducted comprehensive analyses using population and registry data (BCSC, SEER) to identify risk factors and estimate hazard rates.",
        "Designed haplotype-based genetic association tests, including the bivariate Quantitative Bayesian LASSO (QBL) for correlated phenotypes",
        "Extended bivariate QBL to a multivariate framework using mean-field variational Bayes (MFVB) for scalable genetic association analyses.",
      ],
      logo: "/logos/utdallas.svg"
    },
    {
      company: "BRAC James P Grant School of Public Health",
      title: "Statistician",
      location: "Mohakhali, Dhaka, Bangladesh",
      dateRange: "Jan 2018 - Jun 2019",
      bullets: [
        "Implemented evaluation plans for a UNICEF-funded infotainment intervention, including developing evaluation metrics and monitoring data collection.",
        "Analyzed program data and prepared comprehensive reports to assess the impact of the intervention on target communities.",
        "Conducted social network analysis to study psychological morbidity among young men in urban slums of Dhaka, assessing how social ties influence depression and anxiety.",
      ],
      logo: "/logos/brac.svg"
    },
  ],
  education: [
    {
      school: "The University of Texas at Dallas, TX, USA",
      degree: "Ph.D. in Data Science and Statistics",
      dateRange: "2019-2024",
      achievements: [
        "Completed four research projects across two distinct thematic areas, resulting in three peer-reviewed scientific publications",
        "Awarded a PhD Research Small Grant Program in recognition of research merit",
        "Recipient of the Mei Lein Fellowship for academic excellence"
      ],
      logo: "/logos/utdallas.svg",
    },
    {
      school: "University of Dhaka, Bangladesh",
      degree: "Master's in Applied Statistics",
      dateRange: "2017-2018",
      achievements: [
        "Graduated summa cum laude with 3.98 GPA",
        "Completed 40 credit-hours of courseworks, studied Bayesian Statistics, Longitudinal Data Analysis, Clinical Trials, Spatial Analysis.",
      ],
      logo: "/logos/dhaka.svg",
    },
    {
      school: "University of Dhaka, Bangladesh",
      degree: "Bachelor's in Applied Statistics",
      dateRange: "2013-2016",
      achievements: [
        "Completed 140 credit-hours of courseworks",
        "Studied Probability and Statistics, Statistical Inferences, Linear Regression, Design of Experiments, Generalized Linear Models, Survival Analysis, Time Series, Applied Multivariate Analysis.",
        "Hands-on experience in C++, R, SAS, Stata",
      ],
      logo: "/logos/dhaka.svg",
    },
  ],
  honors: [
  {
    title: "Fellows Award for Research Excellence (FARE)",
    organization: "National Institutes of Health",
    year: "July 2025",
    description: "FARE is sponsored by the NIH Fellows Committee (FelCom), the Scientific Directors, and the NIH Office of Intramural Training & Education.",
    pdf: "/documents/fare26.pdf",
  },
  {
    title: "Mei Lein Fellowship",
    organization: "The University of Texas at Dallas",
    year: "May 2023, May 2022",
    description: "Awarded fellowship for academic excellence, sponsored by School of Natural Science & Mathematics.",
  },
  {
    title: "Conference Travel Award",
    organization: "Advances in Statistical and Computational Methods for Analysis of Biomedical, Genetic, and Omics Data.",
    year: "Jan 2023",
    description: "",
  },
  {
    title: "Boyd Harshburger Travel Award",
    organization: "Southern Regional Conference on Statistics",
    year: "Sep 2022",
    description: "",
  },
  {
    title: "PhD Research Small Grant",
    organization: "University of Texas at Dallas",
    year: "May 2022",
    description: "Competitive research funding awarded for dissertation research, funded by the Office of Graduate Education.",
  },
  {
    title: "Summer Institute in Statistical Genetics Scholarship",
    organization: "University of Washington",
    year: "May 2021",
    description: "Awarded scholarship to attend summer school in statistical genetics, funded by University of Washington.",
  },
  {
    title: "Academic Excellence Award",
    organization: "University of Dhaka",
    year: "Dec 2018",
    description: "Received merit award for securing first position in the Master’s program (non-thesis group), funded by University of Dhaka.",
  },
],
publications: [
  {
    title:
      "Bivariate Quantitative Bayesian LASSO for Detecting Association of Rare Haplotypes with Two Correlated Continuous Phenotypes",
    authors:
      "<strong>IH Sajal</strong> and S. Biswas",
    venue: "Frontiers in Genetics",
    year: "2023",
    details: "Volume 14",
  },
  {
    title:
      "CBCRisk-Black: A Personalized Contralateral Breast Cancer Risk Prediction Model for Black Women",
    authors:
      "<strong>IH Sajal</strong>, M. Chowdhury, T. Wang, D. Euhus, P. Choudhary, and S. Biswas",
    venue: "Breast Cancer Research and Treatment",
    year: "2022",
    details: "194(1):179–186",
  },
  {
    title:
      "Association between Height and Hypertension among US Adults: Analyses of NHANES 2007–2018",
    authors:
      "R. Das Gupta, M. Akonde, <strong>IH Sajal</strong>, A. Kibria, G. Muhammed",
    venue: "Clinical Hypertension",
    year: "2021",
    details: "27(1):1–12",
  },
  {
    title:
      "Association between Television Viewing and Overweight and Obesity among Women of Reproductive Age in Timor-Leste",
    authors:
      "A. Talukder, R. Das Gupta, M. R. Hashan, S. S. Haider, <strong>IH Sajal</strong>, M. Sarker",
    venue: "BMJ Open",
    year: "2021",
    details: "11(8):e045547",
  },
  {
    title:
      "Factors Associated with Tobacco Use among Nepalese Men Aged 15–49 Years",
    authors:
      "R. Das Gupta, M. Jahan, M. Hasan, I. Sutradhar, <strong>IH Sajal</strong>, S. S. Haider, M. Sarker",
    venue: "Clinical Epidemiology and Global Health",
    year: "2020",
    details: "8(3):748–757",
  },
  {
    title:
      "Association of Frequency of Television Watching with Overweight and Obesity among Women of Reproductive Age in India",
    authors:
      "R. Das Gupta, S. S. Haider, I. Sutradhar, M. R. Hashan, <strong>IH Sajal</strong>, M. Sarker",
    venue: "PLOS ONE",
    year: "2019",
    details: "14(8):e0221758",
  },
  {
    title:
      "Association between the Frequency of Television Watching and Overweight and Obesity among Women of Reproductive Age in Nepal",
    authors:
      "R. Das Gupta, S. S. Haider, M. R. Hashan, M. Hasan, I. Sutradhar, <strong>IH Sajal</strong>, H. Joshi, M. R. Haider, M. Sarker",
    venue: "PLOS ONE",
    year: "2019",
    details: "15(2):e0228862",
  },
  {
    title:
      "Frequency of Television Viewing and Association with Overweight and Obesity among Women of Reproductive Age in Myanmar",
    authors:
      "R. Das Gupta, <strong>IH Sajal</strong>, M. Hasan, I. Sutradhar, M. R. Haider, M. Sarker",
    venue: "BMJ Open",
    year: "2019",
    details: "9(3):e024680",
  },
],
talks: [
  {
    title: "Prioritizing plasma proteomic mediators of the effects of risk factors on renal cell carcinoma",
    event: "NIH Research Festival",
    location: "Bethesda, MD, USA",
    year: "2025",
    type: "Poster Presentation",
    description:
      "Presented research on investigating proteomic intermediaries linking cancer risk factors to lung cancer.",
    logo: "/logos/nih.svg",
  },
  {
    title: "Mean-Field Variational Bayes (MFVB) for Multivariate Genetic Association Analysis",
    event: "Joint Statistical Meetings (JSM)",
    location: "Nashville, TN, USA",
    year: "2025",
    type: "Invited Talk",
    description:
      "Invited presentation on MFVB methods for scalable haplotype-based multivariate genetic association testing.",
    logo: "/logos/jsm.png",
  },
  {
    title:
      "Bivariate Quantitative Bayesian LASSO for Detecting Rare Haplotype Association with Two Correlated Phenotypes",
    event:
      "Advances in Statistical and Computational Methods for Analysis of Biomedical, Genetic, and Omics Data (ABGOD)",
    location: "Richardson, TX, USA",
    year: "2023",
    type: "Poster Presentation",
    description:
      "Presented methodological work, simulation, and findings from application of bivariate QBL to Genetic Analysis Workshop 19 dataset for rare haplotype association analysis.",
    logo: "/logos/abgod.jpeg",
  },
  {
    title:
      "Bivariate Quantitative Bayesian LASSO for Detecting Rare Haplotype Association with Two Correlated Phenotypes",
    event: "Southern Regional Council on Statistics (SRCOS)",
    location: "Jekyll Island, GA, USA",
    year: "2022",
    type: "Poster Presentation",
    description:
      "Presented methodological work and simulation findings on bivariate QBL for rare haplotype association analysis.",
    logo: "/logos/srcos.png",
  },
],

cv: {
    label: "Download CV (PDF)",
    pdf: "/documents/IbrahimHossainSajal_CV.pdf",
    updated: "Dec 2025",
  },

resume: {
    label: "Download Resume (PDF)",
    pdf: "/documents/IbrahimHossainSajal_Resume.pdf",
    updated: "Dec 2025",
  },

references: [
    {
      name: "Dr. Swati Biswas",
      title: "Professor, The University of Texas at Dallas",
      relation: "PhD advisor",
      email: "swati.biswas@utdallas.edu",
    },
    {
      name: "Dr. Pankaj Choudhary",
      title: "Professor, The University of Texas at Dallas",
      relation: "Research advisor",
      email: "pankaj@utdallas.edu",
    },
    {
      name: "Dr. Diptavo Dutta",
      title: "Investigator, National Cancer Institute (NCI), NIH",
      relation: "Postdoctoral supervisor",
      email: "diptavo.dutta@nih.gov",
    },
  ],    

};
