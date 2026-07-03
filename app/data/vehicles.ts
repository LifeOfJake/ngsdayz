import { RuleCategory } from "./types";

export const vehicles: RuleCategory = {
  id: "vehicles",

  title: "Vehicles",

  subtitle: "Drive Smart. Respect Ownership.",

  description:
    "Rules covering vehicles, parking, theft, storage and fair use across the server.",

  icon: "car",

  rules: [
    {
      title: "Vehicle Ownership",
      description:
        "Any vehicle you discover in the world may be claimed unless it is clearly inside another player's secured base.",
      severity: "Info",
    },

    {
      title: "Vehicle Theft",
      description:
        "Stealing unsecured vehicles is part of the survival experience. Breaking server rules to obtain one is not.",
      severity: "Important",
    },

    {
      title: "Blocking Roads",
      description:
        "Do not intentionally block major roads, bridges or high-traffic routes in a way that disrupts normal gameplay.",
      severity: "Important",
    },

    {
      title: "Vehicle Storage",
      description:
        "Vehicles should not be stored using exploits or inside inaccessible locations that cannot be reached legitimately.",
      severity: "Critical",
    },

    {
      title: "Safe Parking",
      description:
        "Park responsibly. Vehicles deliberately left to obstruct key loot locations or spawn areas may be removed by staff.",
      severity: "Info",
    },

    {
      title: "Intentional Destruction",
      description:
        "Destroying vehicles purely to grief another player or community without gameplay value is not permitted.",
      severity: "Important",
    },

    {
      title: "Duplication",
      description:
        "Duplicating vehicles or using any duplication exploit is strictly prohibited.",
      severity: "Critical",
    },

    {
      title: "Abandoned Vehicles",
      description:
        "Vehicles left unused for extended periods may be removed during scheduled server clean-ups.",
      severity: "Info",
    },
  ],
};