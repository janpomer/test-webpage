import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jan Pomer - Solution Architect",
  author: "Jan Pomer",
  description:
    "I’m a dedicated software engineer with strong leadership experience in both Team Lead and Tech Lead roles, with a Master's Degree in Computer Science and Information Technologies from the University of Maribor. As a Team Lead, I mentor and support engineers in sharpening their Java development skills and growing professionally. As a Tech Lead, I guide cross-functional teams, define software architecture, and ensure the successful delivery of scalable, high-quality solutions across blockchain, SaaS, and enterprise domains. I thrive in dynamic environments, promote collaboration, and focus on building products that deliver real value to users and organizations.",
  lang: "en",
  siteLogo: "assets/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "assets/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jan Pomer",
    specialty: "Solution Architect",
    summary: "Short description about me",
    email: "jan.pomer@gmail.com",
  },
  experience: [
    {
      company: "Teranode Group",
      position: "Software Architect / Technical Lead",
      startDate: "May 2025",
      endDate: "present",
      summary: [
        "• Leading architecture for blockchain-based systems",
        "• Developing secure document signing platform (Teranode Sign)",
        "• Driving scalability, security, and performance",
      ],
    },
    {
      company: "Equaleyes Solution Lts",
      position: "Team Lead / Senior Software Engineer",
      startDate: "Sep 2024",
      endDate: "present",
      summary: [
        "• Leading 10+ engineers, optimizing delivery and team productivity",
        "• Mentoring developers and supporting career growth",
        "• Ensuring cross-team collaboration and execution",
      ],
    },
    {
      company: "nChain",
      position: "Team Lead / Senior Software Engineer",
      startDate: "Oct 2021",
      endDate: "Aug 2024",
      summary: [
        "• Progressed from Engineer to Team Lead managing 10+ developers",
        "• Delivered blockchain solutions including document signing and data platforms",
        "• Contributed to scalable blockchain infrastructure (Teranode PoC)",
      ],
    },
    {
      company: "Inova IT",
      position: "Software Developer",
      startDate: "Oct 2018",
      endDate: "Aug 2020",
      summary: [
        "• Built enterprise systems: EV charging API (OCPP), tax systems, loan platform, healthcare solutions",
        "• Focused on backend development and integrations",
      ],
    },
    {
      company: "Teletech d.o.o.",
      position: "Software Developer",
      startDate: "Oct 2018",
      endDate: "Aug 2020",
      summary: [
        "• Worked on telecom systems, number portability, and secure archiving",
      ],
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "assets/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "assets/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "assets/clone-ig.png",
    },
  ],
  about: {
    description: `
      I’m a dedicated software engineer with strong leadership experience in both Team Lead and Tech Lead roles, 
      with a Master's Degree in Computer Science and Information Technologies from the University of Maribor. 
      As a Team Lead, I mentor and support engineers in sharpening their Java development skills and growing professionally. 
      As a Tech Lead, I guide cross-functional teams, define software architecture, and ensure the successful 
      delivery of scalable, high-quality solutions across blockchain, SaaS, and enterprise domains. I thrive in dynamic 
      environments, promote collaboration, and focus on building products that deliver real value to users and organizations.
    `,
    image: "assets/alejandro-big.jpg",
  },
};

// #5755ff
