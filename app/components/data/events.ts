export interface Event {
  id: string;

  title: string;

  category: string;

  description: string;

  content: string;

  day: string;

  time: string;

  duration: string;

  location: string;

  recommendedPlayers: string;

  difficulty: "Easy" | "Medium" | "Hard" | "Extreme";

  status: "Preparing" | "Active" | "Completed";

  featured: boolean;

  image: string;

  gallery: string[];

  objectives: string[];

  rewards: string[];

  tips: string[];

  icon: string;
}

export const events: Event[] = [
  {
    id: "military-convoy",

    title: "Military Convoy",

    category: "Featured Event",

    description:
      "A heavily armed convoy moves across Chernarus carrying high-value military supplies.",

    content:
      "Intercept a moving NATO convoy transporting high-value military equipment across Chernarus. Expect intense PvP, dangerous AI resistance and valuable rewards. Every convoy follows a unique route, ensuring every operation unfolds differently.",

    day: "Every Saturday",

    time: "20:00 UTC",

    duration: "90 Minutes",

    location: "Dynamic Route",

    recommendedPlayers: "4–8 Survivors",

    difficulty: "Extreme",

    status: "Preparing",

    featured: true,

    image: "/operation-iron-convoy.png",

    gallery: [
      "/operation-iron-convoy.png",
      "/events-hero.png",
      "/hero.png",
    ],

    objectives: [
      "Locate the convoy.",
      "Eliminate the escort forces.",
      "Secure the military cargo.",
      "Extract with the supplies alive.",
    ],

    rewards: [
      "High-tier military weapons",
      "Rare armour and equipment",
      "Building materials",
      "Explosives and ammunition",
    ],

    tips: [
      "Travel as a squad whenever possible.",
      "Bring medical supplies and explosives.",
      "Expect other survivors to contest the convoy.",
      "Secure overwatch before approaching the vehicles.",
    ],

    icon: "🚛",
  },

  {
    id: "king-of-the-hill",

    title: "King of the Hill",

    category: "Weekly Event",

    description:
      "Fight for control of a valuable objective against every other survivor.",

    content:
      "Capture and defend a strategic objective while every nearby survivor competes for control. Holding the hill rewards your squad with exclusive military loot and supplies.",

    day: "Every Friday",

    time: "19:00 UTC",

    duration: "60 Minutes",

    location: "Rotating Military Locations",

    recommendedPlayers: "3–6 Survivors",

    difficulty: "Hard",

    status: "Preparing",

    featured: false,

    image: "/events-hero.png",

    gallery: [
      "/events-hero.png",
      "/hero.png",
      "/operation-iron-convoy.png",
    ],

    objectives: [
      "Capture the objective.",
      "Defend against enemy squads.",
      "Maintain control until completion.",
      "Secure the reward crate.",
    ],

    rewards: [
      "Military equipment",
      "Weapon attachments",
      "Building supplies",
      "Cash rewards",
    ],

    tips: [
      "High ground wins fights.",
      "Use smoke to revive teammates.",
      "Coordinate pushes together.",
      "Don't stay exposed.",
    ],

    icon: "🎯",
  },

  {
    id: "toxic-expedition",

    title: "Toxic Expedition",

    category: "Community Event",

    description:
      "Explore dangerous contaminated zones searching for rare military equipment.",

    content:
      "Equip NBC gear and venture into contaminated military zones filled with valuable loot and dangerous environmental hazards. Preparation is essential for survival.",

    day: "Monthly",

    time: "TBA",

    duration: "Open",

    location: "Toxic Zones",

    recommendedPlayers: "2–5 Survivors",

    difficulty: "Medium",

    status: "Preparing",

    featured: false,

    image: "/events-hero.png",

    gallery: [
      "/events-hero.png",
      "/hero.png",
      "/operation-iron-convoy.png",
    ],

    objectives: [
      "Acquire NBC protection.",
      "Enter the contaminated zone.",
      "Locate rare military equipment.",
      "Escape before supplies run out.",
    ],

    rewards: [
      "NBC equipment",
      "Rare military loot",
      "Medical supplies",
      "Special event rewards",
    ],

    tips: [
      "Always carry spare filters.",
      "Watch your contamination timer.",
      "Travel light for faster extraction.",
      "Avoid unnecessary firefights.",
    ],

    icon: "☢️",
  },
];