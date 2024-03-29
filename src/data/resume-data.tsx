import { GitHubIcon, LinkedInIcon, ResearchGate } from "@/components/icons";

export const RESUME_DATA = {
  name: "Bruna Los",
  initials: "BL",
  location: "Berlin, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Berlin",
  about:
    "Data Scientist | Data Analyst",
  summary:
    "I am a former researcher transitioning to a data scientist. I have experience in statistical analysis, including descriptive statistics, hypothesis testing, and linear regression, as well as data analysis and visualization using Python and R. I have competence in libraries such as pandas, numpy, matplotlib, seaborn, scikit-learn, tidyverse, dplyr, ggplot2.",
  avatarUrl: "/avatar.png",
  personalWebsiteUrl: "https://brunalos.com",
  contact: {
    email: "hey@brunalos.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/brunalos",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/brunalos/",
        icon: LinkedInIcon,
      },
      {
        name: "ResearchGate",
        url: "https://www.researchgate.net/profile/Bruna-Los",
        icon: ResearchGate,
      },
     
    ],
  },
  education: [
    {
      school: "Freie Universität Berlin | Max Planck Institute for Molecular Genetics",
      degree: "Doctoral Degree: Biochemistry",
      start: "2019",
      end: "2023",
    },
    {
      school: "Universidade de São Paulo",
      degree: "Master of Science: Pharmacy",
      start: "2019",
      end: "2016",
    },
    {
      school: "Pontifícia Universidade Católica do Paraná",
      degree: "Bachelor of Science: Biological Sciences",
      start: "2015",
      end: "2011",
    },
  ],
  work: [
    {
      company: "Freie Universität Berlin",
      badges: ["On-site"],
      title: "Research Assistant",
      start: "2019",
      end: "2023",
      link: "",
      description:
        "Overseeing long-term research projects. Presenting research findings at national and international congresses and seminars. Supervising undergraduate research projects. Data analysis and visualization using Python and R. Collaborating effectively in team environments for successful project execution.",
    },
    {
      company: "Universidade de São Paulo",
      badges: ["On-site"],
      title: "Academic Researcher",
      start: "2016",
      end: "2019",
      link: "",
      description:
        "Leading long-term research projects, including project development planning. Designing and implementing experimental protocols. Conducting statistical analysis of data using SPSS. Compiling reports for funding agencies to communicate project results. Presenting research outcomes at national and international conferences.",
    },

  ],
  skills: [
    "Statistical Analysis",
    "Data Analysis",
    "Machine Learning",
    "Python",
    "R",
    "SQL",
  ],
  projects: [
    {
      title: "Predicting Participant's Dropout Rates",
      techStack: [
        "Side Project",
        "Python",
        "Jupyter Notebook",
        "pandas",
        "numpy",
        "matplotlib",
        "seaborn",
        "scikit-learn",
        "xgboost",
      ],
      description: "Predicting participants dropout rates in vaccine clinical trials using machine learning.",
      link: {
        href: "https://github.com/brunalos/clinical-trials-ml",
      },
    },
    {
      title: "Gene Expression Analysis",
      techStack: ["Research Project", "Python", "Jupyter Notebook", "pandas", "numpy", "matplotlib", "seaborn", "scikit-learn", "R", "RStudio", "tidyverse", "dplyr", "ggplot2"],
      description:
        "Gene expression analysis across various stages of B-lymphocyte activation and differentiation.",
      link: {
        href: "https://github.com/brunalos/bcell-manuscript-figures",
      },
    },

  ],
} as const;
