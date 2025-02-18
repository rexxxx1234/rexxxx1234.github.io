export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "Nature Machine Intelligence",
    title: "Moving towards genome-wide data integration for patient stratification with Integrate Any Omics",
    authors: "Shihao Ma, Andy G.X. Zeng, Benjamin Haibe-Kains, Anna Goldenberg, John E. Dick, Bo Wang",
    paperUrl: "https://www.nature.com/articles/s42256-024-00942-3",
    codeUrl: "https://github.com/bowang-lab/IntegrAO/tree/main",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "IntegrAO (Integrate Any Omics) is an unsupervised platform designed to tackle the challenges of incomplete multi-omics data. Crucially, it can be seamlessly transformed into a prediction model after integration, enabling robust classification of new patient samples—even when only partial omics data is available.",
    imageUrl:
      "https://github.com/rexxxx1234/my-research-website/blob/main/src/img/IntegrAO.png?raw=true",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2024",
    conference: "Nature Communications",
    title: "AGILE platform: a deep learning powered approach to accelerate LNP development for mRNA delivery",
    authors: "Yue Xu*, Shihao Ma*, Haotian Cui*, Jingan Chen, Shufen Xu, Fanglin Gong, Alex Golubovic, Muye Zhou, Kevin Chang Wang, Andrew Varley, Rick Xing Ze Lu, Bo Wang, Bowen Li",
    paperUrl: "https://www.nature.com/articles/s41467-024-50619-z",
    codeUrl: "https://github.com/bowang-lab/AGILE",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "AGILE (AI-Guided Ionizable Lipid Engineering) platform streamlines the iterative development of ionizable lipids, crucial components for LNP-mediated mRNA delivery. ",
    imageUrl:
      "https://github.com/rexxxx1234/my-research-website/blob/main/src/img/AGILE.png?raw=true",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2024",
    conference: "American Heart Journal",
    title: "Comparison of machine learning and conventional statistical modeling for predicting readmission following acute heart failure hospitalization",
    authors: "Karem Abdul-Samad, Shihao Ma, David E Austin, Alice Chong, Chloe X Wang, Xuesong Wang, Peter C Austin, Heather J Ross, Bo Wang, Douglas S Lee",
    paperUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0002870324001832",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Developing accurate models for predicting the risk of 30-day readmission is a major healthcare interest.",
    imageUrl:
      "https://github.com/rexxxx1234/my-research-website/blob/main/src/img/AGILE.png?raw=true",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2021",
    conference: "Journal of the American Geriatrics Society",
    title: "Predictors of mortality among long‐term care residents with SARS‐CoV‐2 infection",
    authors: "Douglas S Lee*, Shihao Ma*, Anna Chu, Chloe X Wang, Xuesong Wang, Peter C Austin, Finlay A McAlister, Sunil V Kalmady, Moira K Kapral, Padma Kaul, Dennis T Ko, Paula A Rochon, Michael J Schull, Barry B Rubin, Bo Wang, CORONA Collaboration",
    paperUrl: "https://agsjournals.onlinelibrary.wiley.com/doi/abs/10.1111/jgs.17425",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "We studied residents living in LTC homes in Ontario, Canada and examined predictors of all-cause death within 30 days after a positive test for SARS-CoV-2.",
    imageUrl:
      "https://github.com/rexxxx1234/my-research-website/blob/main/src/img/AGILE.png?raw=true",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2021",
    conference: "The Lancet Digital Health",
    title: "Long-term mortality risk stratification of liver transplant recipients: real-time application of deep learning algorithms on longitudinal data",
    authors: "Osvald Nitski, Amirhossein Azhie, Fakhar Ali Qazi-Arisar, Xueqi Wang, Shihao Ma, Leslie Lilly, Kymberly D Watt, Josh Levitsky, Sumeet K Asrani, Douglas S Lee, Barry B Rubin, Mamatha Bhat, Bo Wang",
    paperUrl: "https://www.thelancet.com/journals/landig/article/PIIS2589-7500(21)00040-6/fulltext",
    codeUrl: "https://github.com/bowang-lab/Transplant_Time_Series",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "We propose Deep Learning models designed for longitudinal data that reliably predicts an updated clinical outlook for individual patients.",
    imageUrl:
      "https://github.com/rexxxx1234/my-research-website/blob/main/src/img/AGILE.png?raw=true",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
];
