export const projects = [
  {
    id: 1,
    title: "Mind Mirror",
    image: "public/mindmirror.png",
    shortDesc: "AI-powered journaling app for mood tracking.",
    liveLink: "https://mind-mirror-three.vercel.app/",
    repoLink: "https://github.com/tinoMukaro/mindMirror",
    details:
      "Mind Mirror is a journaling app that uses machine learning to summarize user entries and analyze mood trends weekly. It connects a React frontend to a Express + Hugging Face backend using JWT authentication.",
    techStack: ["React", "Express", "Hugging Face API"],
  },
  {
    id: 2,
    title: "Traffic Offence Management System (TOMS)",
    image: "public/toms.png",
    shortDesc: "A web system to manage and track traffic offences.",
    repoLink: "https://github.com/tinoMukaro/TOMS",
    details:
      "TOMS enables authorities to record, manage, and resolve traffic offences efficiently. It supports authentication, role-based access, and dynamic fine adjustments.",
    techStack: ["React", "Express", "PostgreSQL"],
  }
];
