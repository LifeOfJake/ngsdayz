export interface NewsArticle {
  id: string;

  category: string;

  title: string;

  date: string;

  description: string;

  featured: boolean;
}

export const news: NewsArticle[] = [
  {
    id: "website-v3",

    category: "Development",

    title: "NGS Website V3 Begins",

    date: "June 2026",

    description:
      "The official NGS website is now under development, bringing together everything players need in one place.",

    featured: true,
  },

  {
    id: "server-development",

    category: "Server",

    title: "Building the Ultimate DayZ Experience",

    date: "Coming Soon",

    description:
      "Custom military locations, redesigned traders, expanded base building and much more are currently in development.",

    featured: false,
  },

  {
    id: "community",

    category: "Community",

    title: "Join the Journey",

    date: "Today",

    description:
      "NGS is being built from the ground up with community feedback at its core. Every suggestion helps shape the future.",

    featured: false,
  },
];