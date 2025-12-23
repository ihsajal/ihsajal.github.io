export const siteConfig = {
  name: "Ibrahim Hossain Sajal",
  title: "Postdoctoral Fellow @ NCI, NIH",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#1d4ed8",
  social: {
    email: "ihossain2@isrt.ac.bd",
    linkedin: "https://www.linkedin.com/in/ihsajal/",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/ihsajal",
  },
  aboutMe:
    "I'm a postdoctoral fellow at the National Cancer Institute (NCI) with expertise in statistical genetics, biostatistics, and cancer epidemiology. My research focuses on genetic association methods, Bayesian and machine-learning approaches, and the development of personalized cancer risk prediction models, particularly in breast and other cancers. I have extensive experience working with large-scale population and registry data, including BCSC, SEER, and biobank resources, and I develop scalable multivariate methods to study complex genetic and molecular mechanisms underlying cancer risk and outcomes.",
  skills: ["R", "Python", "SAS", "C++", "STATA", "AWS", "HPC Environments", "Shell scripting"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "National Cancer Institute, National Institutes of Health",
      title: "Postdoctoral Fellow",
      dateRange: "Jan 2025 - Present",
      bullets: [
        "Investigate proteomic intermediaries linking risk factors to cancer, complemented by colocalization and differential gene expression.",
        "Build a summary-statistics based multivariate test by aggregating multiple tests with complementary strength in capturing genetic association.",
        "Conduct multivariate analyses to identify associations with pan-cancer phenotypes, protein modules (WGCNA), and predefined pathways (KEGG, Hallmark).",
        "Study protein module associations with cancer using Bayesian Non-Negative Matrix Factorization (BNMF).",
        "Perform survival analyses in RCC cases and examine relationships with risk factors and polygenic risk scores.",
        "Integrate multi-omics data to elucidate molecular mechanisms underlying cancer.",
      ],
    },
    {
      company: "University of Texas at Dallas",
      title: "Graduate Assistant",
      dateRange: "Aug 2019 - Dec 2024",
      bullets: [
        "Developed CBCRisk-Black and CBCRisk-Mastectomy, personalized absolute risk prediction tools for contralateral breast cancer patients.",
        "Conducted comprehensive analyses using population and registry data (BCSC, SEER) to identify risk factors and estimate hazard rates.",
        "Designed haplotype-based genetic association tests, including the bivariate Quantitative Bayesian LASSO (QBL) for correlated phenotypes",
        "Extended bivariate QBL to a multivariate framework using mean-field variational Bayes (MFVB) for scalable genetic association analyses.",
      ],
    },
    {
      company: "BRAC James P Grant School of Public Health",
      title: "Statistician",
      dateRange: "Jan 2018 - Jun 2019",
      bullets: [
        "Implemented evaluation plans for a UNICEF-funded infotainment intervention, including developing evaluation metrics and monitoring data collection.",
        "Analyzed program data and prepared comprehensive reports to assess the impact of the intervention on target communities.",
        "Conducted social network analysis to study psychological morbidity among young men in urban slums of Dhaka, assessing how social ties influence depression and anxiety.",
      ],
    },
  ],
  education: [
    {
      school: "University of Texas at Dallas",
      degree: "PhD in Data Science and Statistics",
      dateRange: "2019 - 2024",
      achievements: [
        "Completed four research projects across two distinct thematic areas, resulting in three peer-reviewed scientific publications",
        "Awarded a PhD Research Small Grant Program in recognition of research merit",
        "Recipient of the Mei Lein Fellowship for academic excellence"
      ],
    },
    {
      school: "University of Dhaka",
      degree: "Masters in Applied Statistics",
      dateRange: "2017-2018",
      achievements: [
        "Graduated summa cum laude with 3.98 GPA",
        "Completed 40 credit-hours of courseworks, studied Bayesian Statistics, Longitudinal Data Analysis, Clinical Trials, Spatial Analysis.",
      ],
    },
    {
      school: "University of Dhaka",
      degree: "Bachelor in Applied Statistics",
      dateRange: "2013-2016",
      achievements: [
        "Completed 140 credit-hours of courseworks",
        "Studied Probability and Statistics, Statistical Inferences, Linear Regression, Design of Experiments, Generalized Linear Models, Survival Analysis, Time Series, Applied Multivariate Analysis.",
        "Hands-on experience in C++, R, SAS, Stata",
      ],
    },
  ],
};
