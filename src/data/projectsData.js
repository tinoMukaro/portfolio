export const projects = [
  {
    id: 1,
    title: "Mind Mirror",
    image: "/mindmirror.png",
    shortDesc: "AI-powered journaling app for mood tracking.",
    goal:
      "Help users reflect on journal entries faster by summarizing their writing and turning mood patterns into weekly insights.",
    liveLink: "https://mind-mirror-three.vercel.app/",
    repoLink: "https://github.com/tinoMukaro/mindMirror",
    details:
      `Mind Mirror is a journaling web app powered by machine learning. 
      It summarizes user entries and tracks mood trends on a weekly basis. 
      The app features a React frontend connected to an Express + Hugging Face backend, secured with JWT authentication, 
      Arcjet for rate limiting and bot protection, and Zod for input validation.`,
    techStack: [
      "React",
      "Express",
      "Hugging Face API",
      "JWT",
      "Arcjet",
      "Zod",
    ],
    challenge:
      "The app needed to accept personal journal content without exposing the backend to noisy or abusive AI requests.",
    solution:
      "I added JWT-protected routes, Zod validation before processing entries, and Arcjet rate limiting/bot protection around the AI endpoints.",
  },
  {
    id: 2,
    title: "FoodWise",
    image: "/foodwise.png",
    shortDesc: "Food deals platform to reduce food waste.",
    goal:
      "Connect customers with discounted surplus food while giving businesses a simple way to publish and manage expiring deals.",
    repoLink: "https://github.com/tinoMukaro/foodWise",
    details:
      `FoodWise is a web platform that helps reduce food waste by connecting users with 
    discounted surplus food from local businesses. Businesses can create time-limited deals 
    that automatically expire, while users can browse active deals and reserve them in advance.

    The system supports order creation and status tracking, allowing businesses to view incoming 
    reservations and users to collect deals before expiry. The platform is built with a modern 
    full-stack architecture, featuring a React frontend, an Express backend with Drizzle ORM, 
    PostgreSQL for data storage, and JWT-based authentication for secure user access.`,
    techStack: ["React", "Express", "PostgreSQL", "Drizzle ORM", "JWT"],
    challenge:
      "Deals had to stay accurate as time-limited offers moved from active to expired while users were browsing and reserving them.",
    solution:
      "I modeled deal and order status explicitly in PostgreSQL through Drizzle ORM, then used backend checks to keep reservations tied to valid active offers.",
  },
  {
    id: 3,
    title: "Travel Torch",
    image: "/traveltorch.png",
    shortDesc: "Personal travel concierge website for a Harare-based business.",
    goal:
      "Give a Harare-based travel concierge a polished web presence that turns service interest into direct WhatsApp enquiries.",
    liveLink: "https://traveltorch.vercel.app/",
    details:
      `Travel Torch is a lead-generation website for a travel concierge business based in Harare, Zimbabwe.
  It features a full one-page layout covering services, about, and contact sections with a WhatsApp click-to-chat integration.
  Built with plain HTML, CSS, and JavaScript, with a mobile-first responsive design, 
  smooth scroll animations via IntersectionObserver, hamburger navigation, and client-side form validation.`,
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "IntersectionObserver",
      "WhatsApp click-to-chat",
    ],
    challenge:
      "The site needed to feel lightweight and responsive while still guiding visitors toward a clear contact action.",
    solution:
      "I built a mobile-first one-page flow with smooth section reveals, compact navigation, form validation, and a persistent WhatsApp path for quick enquiries.",
  },
];
