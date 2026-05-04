import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jan Pomer - Solution Architect",
  author: "Jan Pomer",
  description:
    "I’m a dedicated software engineer with strong leadership experience in both Team Lead and Tech Lead roles, with a Master's Degree in Computer Science and Information Technologies from the University of Maribor. As a Team Lead, I mentor and support engineers in sharpening their Java development skills and growing professionally. As a Tech Lead, I guide cross-functional teams, define software architecture, and ensure the successful delivery of scalable, high-quality solutions across blockchain, SaaS, and enterprise domains. I thrive in dynamic environments, promote collaboration, and focus on building products that deliver real value to users and organizations.",
  lang: "en",
  siteLogo: "assets/jan-pomer.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/jan-pomer-595122b7" },
    { text: "Github", href: "https://github.com/janpomer" },
  ],
  socialImage: "assets/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jan Pomer",
    specialty: "Solution Architect / Technical Lead",
    summary: "Software Architect and Technical Lead specializing in scalable blockchain and enterprise solutions. I bridge the gap between complex system design and high-performing engineering teams.",
    email: "jan.pomer@gmail.com",
  },
  experiences: [
    {
      company: "Teranode Group",
      logo: "assets/teranode-logo.png",
      position: "Software Architect / Technical Lead",
      startDate: "May 2025",
      endDate: "present",
      summary: [
        "• Leading architecture for blockchain-based systems",
        "• Developing secure document signing platform (Teranode Sign)",
        "• Driving scalability, security, and performance",
      ],
      href: "https://teranode.group",
    },
    {
      company: "Equaleyes Solution Ltd",
      logo: "assets/eq-logo.png",
      position: "Team Lead / Senior Software Engineer",
      startDate: "Sep 2024",
      endDate: "present",
      summary: [
        "• Leading 10+ engineers, optimizing delivery and team productivity",
        "• Mentoring developers and supporting career growth",
        "• Ensuring cross-team collaboration and execution",
      ],
      href: "https://equaleyes.com/",
    },
    {
      company: "nChain",
      logo: "assets/nchain-logo.svg",
      position: "Team Lead / Senior Software Engineer",
      startDate: "Oct 2021",
      endDate: "Aug 2024",
      summary: [
        "• Progressed from Engineer to Team Lead managing 10+ developers",
        "• Delivered blockchain solutions including document signing and data platforms",
        "• Contributed to scalable blockchain infrastructure (Teranode PoC)",
      ],
      href: "https://nchain.com/",
    },
    {
      company: "Inova IT",
      logo: "assets/inova-logo.png",
      position: "Software Developer",
      startDate: "Oct 2018",
      endDate: "Aug 2020",
      summary: [
        "• Built enterprise systems: EV charging API (OCPP), tax systems, loan platform, healthcare solutions",
        "• Focused on backend development and integrations",
      ],
      href: "https://www.inova.si/",
    },
    {
      company: "Teletech d.o.o.",
      logo: "assets/teletech-logo.png",
      position: "Software Developer",
      startDate: "Oct 2018",
      endDate: "Aug 2020",
      summary: [
        "• Worked on telecom systems, number portability, and secure archiving",
      ],
      href: ""
    },
  ],
  projects: [
    {
      name: "Teranode Sign",
      summary:
        "Blockchain-based document signing service ensuring secure, legally compliant PDF signatures.",
      linkPreview: "https://products.teranode.group/",
      linkSource: "",
      image: "assets/teranode-sign.png",
    },
    {
      name: "Teranode POC",
      summary:
        "Engineered for Scalability, Primed for Growth: Unleash Innovation with Uncompromised Data Integrity, Powered by BSV’s Teranode Technology.",
      linkPreview: "https://bsvassociation.org/protocol/teranode/",
      linkSource: "",
      image: "assets/teranode-poc.png",
    },
  ],
  about: {
    description: [
      "I am a dedicated Software Engineer and Technical Lead with a Master’s Degree in Computer Science from the University of Maribor. With over a decade of experience across blockchain, SaaS, and enterprise domains, I specialize in architecting scalable, high-quality solutions that bridge the gap between complex technology and real-world value.",
      "Currently, I serve as a Software Architect and Tech Lead at Teranode Group, where I lead the development of secure, blockchain-based document signing services. My leadership extends beyond code; as a Team Lead for over 10+ engineers, I am passionate about mentoring the next generation of Java developers, optimizing cross-functional workflows, and fostering professional growth within high-performing teams."
    ],
    image: "assets/jan-pomer.png",
  },
};
