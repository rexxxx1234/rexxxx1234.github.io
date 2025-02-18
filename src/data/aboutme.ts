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
  description: `
  <p>I am currently a Computer Science PhD candidate at the <a href="https://www.utoronto.ca/">University of Toronto</a>, supervised by Dr. <a href="https://x.com/BoWang87">Bo Wang</a>.</p>
  <br/>
  <p>My research focuses on multimodal integration, biology foundational models, and LLM in biomedicine. I employ advanced AI techniques to harness diverse biological data, aiming to develop models that drive precision medicine and foster innovative approaches to drug discovery.</p>
  `.trim(),
  email: "rex.ma@mail.utoronto.ca",
  imageUrl:
    "https://github.com/rexxxx1234/my-research-website/blob/main/src/img/headshot.jpg?raw=true",
  googleScholarUrl: "https://scholar.google.com/citations?user=JeW_QPYAAAAJ&hl=en",
  githubUsername: "rexxxx1234",
  linkedinUsername: "rex-ma-20a455113",
  twitterUsername: "RexMa9",
  cvUrl: "https://rexxxx1234.github.io/rexxxx1234.github.io/src/CV/Shihao_Ma_s_Resume.pdf",
  institutionUrl: "https://www.utoronto.ca/",
  // altName: "",
  // secretDescription: "I like dogs.",
};



