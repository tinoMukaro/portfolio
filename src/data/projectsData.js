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
  },
  {
  id: 3,
  title: "FoodWise",
  image: "/foodwise.png",
  shortDesc: "Food deals platform to reduce food waste.",
  repoLink: "https://github.com/tinoMukaro/foodWise",
  details:
    `FoodWise is a web platform that helps reduce food waste by connecting users with 
    discounted surplus food from local businesses. Businesses can create time-limited deals 
    that automatically expire, while users can browse active deals and reserve them in advance.

    The system supports order creation and status tracking, allowing businesses to view incoming 
    reservations and users to collect deals before expiry. The platform is built with a modern 
    full-stack architecture, featuring a React frontend, an Express backend with Drizzle ORM, 
    PostgreSQL for data storage, and JWT-based authentication for secure user access.`,
  techStack: ["React", "Express", "PostgreSQL", "Drizzle ORM"],
},


];
