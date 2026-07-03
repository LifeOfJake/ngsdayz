import { RuleCategory } from "./types";

export const community: RuleCategory = {
  id: "community",

  title: "Community",

  subtitle: "Respect Everyone. Improve Together.",

  description:
    "NGS is built around creating a welcoming, fair and enjoyable community for every survivor.",

  icon: "users",

  rules: [
    {
      title: "Respect Other Players",
      description:
        "Treat every player with respect, regardless of experience, skill level or playstyle. Healthy competition is encouraged; personal attacks are not.",
      severity: "Important",
    },

    {
      title: "Harassment",
      description:
        "Repeated harassment, bullying or deliberately targeting another player outside normal gameplay will not be tolerated.",
      severity: "Critical",
    },

    {
      title: "Discrimination",
      description:
        "Racism, sexism, homophobia, hate speech or discriminatory behaviour of any kind will result in severe staff action.",
      severity: "Critical",
    },

    {
      title: "Voice & Text Chat",
      description:
        "Keep communication respectful. Excessive toxicity, abuse or disruptive behaviour in-game or on Discord may result in moderation.",
      severity: "Important",
    },

    {
      title: "Impersonating Staff",
      description:
        "Pretending to be a member of the NGS staff team or misleading players using staff authority is strictly prohibited.",
      severity: "Critical",
    },

    {
      title: "Reporting Issues",
      description:
        "Report bugs, exploits and rule violations through the correct Discord channels instead of attempting to resolve them yourself.",
      severity: "Info",
    },

    {
      title: "Constructive Behaviour",
      description:
        "Feedback is always welcome. Help us improve the community by remaining constructive and respectful when raising concerns.",
      severity: "Info",
    },

    {
      title: "Support Staff",
      description:
        "Please cooperate with staff during investigations. Providing truthful information helps us resolve issues fairly and quickly.",
      severity: "Important",
    },
  ],
};