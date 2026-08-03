import type { BriefingItem } from "./types";

export const shiftBriefing: BriefingItem[] = [
  {
    type: "ticket",
    title: "18 New Tickets",
    description: "New support tickets were created while you were away.",
    timestamp: "Today • 09:12",
    priority: "important",
  },
  {
    type: "ban",
    title: "Player Banned",
    description: "Player123 received a permanent ban.",
    metadata: "Cheating",
    timestamp: "Today • 09:44",
    priority: "critical",
  },
  {
    type: "rule",
    title: "Rule Updated",
    description: "Combat Rule C-04 was amended.",
    timestamp: "Today • 10:28",
    priority: "important",
  },
  {
    type: "server",
    title: "EU1 Restarted",
    description: "Scheduled restart completed successfully.",
    timestamp: "Today • 11:00",
    priority: "normal",
  },
];