export const projects = [
  {
    id: 1,
    title: "Mind Mirror",
    image: "/mindmirror.png",
    shortDesc: "AI-powered journaling app for mood tracking.",
    liveLink: "https://mind-mirror-three.vercel.app/",
    repoLink: "https://github.com/tinoMukaro/mindMirror",
    details:
      `Mind Mirror is a journaling web app powered by machine learning. 
      It summarizes user entries and tracks mood trends on a weekly basis. 
      The app features a React frontend connected to an Express + Hugging Face backend, secured with JWT authentication, 
      Arcjet for rate limiting and bot protection, and Zod for input validation.`,
    techStack: ["React", "Express", "Hugging Face API"],
  },
  {
    id: 2,
    title: "Traffic Offence Management System (TOMS)",
    image: "/toms.jpg",
    shortDesc: "A web system to manage and track traffic offences.",
    repoLink: "https://github.com/tinoMukaro/TOMS",
    details:
      "TOMS enables authorities to record, manage, and resolve traffic offences efficiently. It supports authentication, role-based access, and dynamic fine adjustments.",
    techStack: ["React", "Express", "PostgreSQL"],
  }
];
