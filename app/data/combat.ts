import { RuleCategory } from "./types";

export const combat: RuleCategory = {
  id: "combat",

  title: "Combat & PvP",

  subtitle: "Fight Hard. Fight Fair.",

  description:
    "Everything relating to player versus player combat, engagements and hostile encounters.",

  icon: "swords",

  rules: [

    {
      title: "Combat Logging",
      description:
        "Logging out to avoid an active engagement is strictly prohibited.",
      severity: "Critical",
    },

    {
      title: "Safe Logout",
      description:
        "Only disconnect when your character is no longer involved in combat or immediate danger.",
      severity: "Important",
    },

    {
      title: "Stream Sniping",
      description:
        "Using livestreams, broadcasts or external information to gain an advantage is not permitted.",
      severity: "Critical",
    },

    {
      title: "Exploiting",
      description:
        "Any exploit used to gain an unfair combat advantage is prohibited.",
      severity: "Critical",
    },

    {
      title: "Third-Party Software",
      description:
        "Cheats, scripts, macros or external tools that provide an unfair advantage are forbidden.",
      severity: "Critical",
    },

    {
      title: "Intentional Abuse",
      description:
        "Deliberately abusing game mechanics to avoid intended gameplay is not allowed.",
      severity: "Important",
    },

    {
      title: "Harassment",
      description:
        "Repeatedly targeting or harassing players outside normal gameplay may result in staff intervention.",
      severity: "Important",
    },

    {
      title: "Staff Decisions",
      description:
        "Always follow staff instructions during investigations or disputes.",
      severity: "Info",
    },

  ],
};