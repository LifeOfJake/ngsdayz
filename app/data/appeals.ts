import { RuleCategory } from "./types";

export const appeals: RuleCategory = {
  id: "appeals",

  title: "Appeals & Support",

  subtitle: "We're Here To Help.",

  description:
    "If something goes wrong, we're committed to resolving it fairly, consistently and respectfully. Communication is always better than assumption.",

  icon: "life-buoy",

  rules: [
    {
      title: "Opening a Ticket",
      description:
        "All player reports, ban appeals and support requests should be submitted through the appropriate Discord ticket system.",
      severity: "Info",
    },

    {
      title: "Provide Evidence",
      description:
        "Screenshots, video clips and any other relevant evidence help staff investigate incidents accurately and fairly.",
      severity: "Important",
    },

    {
      title: "Be Honest",
      description:
        "Providing false information, fabricated evidence or intentionally misleading staff may result in additional action.",
      severity: "Critical",
    },

    {
      title: "Staff Decisions",
      description:
        "Please respect the outcome of investigations. If you believe a genuine mistake has been made, you may request a review through the correct process.",
      severity: "Important",
    },

    {
      title: "Appeal Process",
      description:
        "Submitting an appeal does not guarantee that a decision will be overturned. Every appeal is reviewed individually using the available evidence.",
      severity: "Info",
    },

    {
      title: "Response Times",
      description:
        "Our staff team will respond as quickly as possible. Complex investigations may require additional time to ensure a fair outcome.",
      severity: "Info",
    },

    {
      title: "Respect Staff",
      description:
        "Abuse, harassment or repeated spam towards staff members during an investigation will not be tolerated.",
      severity: "Critical",
    },

    {
      title: "Final Decisions",
      description:
        "Some decisions may be considered final following review by senior staff. Repeated appeals without new evidence may be declined.",
      severity: "Important",
    },
  ],
};