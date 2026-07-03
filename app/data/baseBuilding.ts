import { RuleCategory } from "./types";

export const baseBuilding: RuleCategory = {
  id: "base-building",

  title: "Base Building",

  subtitle: "Build Smart. Defend Fairly.",

  description:
    "Everything relating to building, territories, storage, raiding and protecting your home.",

  icon: "hammer",

  rules: [
    {
      title: "Base Construction",
      description:
        "Bases must be built using intended game mechanics. Exploiting terrain or objects to create inaccessible bases is prohibited.",
      severity: "Important",
    },

    {
      title: "Territory Flags",
      description:
        "Flag poles protect structures within their territory. Understand how territory mechanics work before building.",
      severity: "Info",
    },

    {
      title: "Glitch Building",
      description:
        "Building inside objects, rocks or structures in ways not intended by the game is prohibited.",
      severity: "Critical",
    },

    {
      title: "Storage Placement",
      description:
        "Storage should not intentionally block roads, military loot, spawn points or essential map locations.",
      severity: "Important",
    },

    {
      title: "Raiding",
      description:
        "Only raid using methods permitted by the server. Any unintended raiding methods are prohibited.",
      severity: "Critical",
    },

    {
      title: "Boosting",
      description:
        "Boosting into bases is only permitted where allowed by the server rules. Using exploits to bypass walls is forbidden.",
      severity: "Critical",
    },

    {
      title: "Base Griefing",
      description:
        "Destroying items or structures purely to ruin another player's experience is not permitted.",
      severity: "Important",
    },

    {
      title: "Abandoned Bases",
      description:
        "Inactive or abandoned bases may be removed during scheduled server maintenance.",
      severity: "Info",
    },

    {
      title: "Shared Bases",
      description:
        "Everyone granted access to a base is responsible for ensuring it complies with the server rules.",
      severity: "Info",
    },
  ],
};