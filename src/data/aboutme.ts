export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Shihao(Rex) Ma",
  title: "Ph.D. Candidate",
  institution: "University of Toronto",
  // Note that links work in the description
  description:
    "Rex is a PhD candidate in Computer Science at the University of Toronto, where he also received his BASc in Computer Engineering in 2020. He is passionate about applying machine learning and artificial intelligence to solve challenging problems in healthcare and biology.",
  email: "rex.ma@mail.utoronto.ca",
  imageUrl:
    "https://github.com/rexxxx1234/my-research-website/blob/main/src/data/headshot.jpg?raw=true",
  googleScholarUrl: "https://scholar.google.com/citations?user=JeW_QPYAAAAJ&hl=en",
  githubUsername: "rexxxx1234",
  linkedinUsername: "rex-ma-20a455113",
  twitterUsername: "RexMa9",
  blogUrl: "https://",
  cvUrl: "https://",
  institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
