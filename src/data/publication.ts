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
      "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2023",
    conference: "ICML",
    title: "Robust Causal Discovery Under Distribution Shift",
    authors: "Jane Smith, Xue Chen, Sarah Johnson",
    paperUrl: "https://arxiv.org/abs/2302.13095",
    codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
];
