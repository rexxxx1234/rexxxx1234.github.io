export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Sept. 2020 - Present",
    title: "Machine Learning Researcher",
    company: "Vector Institute",
    description:
      "AI for biology, multimodal integration, biology foundational models.",
    advisor: "Bo Wang",
    companyUrl: "https://vectorinstitute.ai/",
  },
  {
    date: "Summer 2022",
    title: "Research Scientist Intern",
    company: "Fable Therapeutics",
    description:
      "De novo antibody protein design, 3D geometric deep learning, protein structure generation.",
    advisor: "Phlip Kim",
    companyUrl: "https://www.fabletherapeutics.com/",
  },
  {
    date: "Summer 2019",
    title: "Machine Learning Intern",
    company: "University Health Network",
    description:
      "Prognosis prediction of patients with heart failure, deep learning for single-cell RNA-seq data.",
    advisor: "Bo Wang",
    companyUrl: "https://www.uhn.ca/",
  },
  {
    date: "May 2017 - May 2018",
    title: "Software Engineering Intern",
    company: "IBM",
    description:
      "Worked on DB2 Availability & Recovery Domain.",
    companyUrl: "https://www.ibm.com/ca-en",
  },
];
