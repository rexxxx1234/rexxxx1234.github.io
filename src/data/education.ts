export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2020—Present",
    institution: "University of Toronto",
    degree: "Ph.D. in Computer Science",
    advisor: "Prof. Bo Wang",
  },
  {
    year: "2015—2020",
    institution: "University of Toronto",
    degree: "B.A.Sc. in Computer Engineering",
    thesis: "",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
