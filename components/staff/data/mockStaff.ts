// =============================================================================
// Imports
// =============================================================================

import type { StaffMember } from "../types";

// =============================================================================
// Mock Staff
// =============================================================================

export const mockStaff: StaffMember[] = [
  {
    id: "1",
    discordId: "339657208453136385",
    username: "tesco_value",
    displayName: "Tesco Value",
    role: "Owner",
    status: "Online",
    joinedAt: "2025-01-01",
    lastSeen: "Just now",
    active: true,
  },

  {
    id: "2",
    discordId: "223456789012345678",
    username: "john_admin",
    displayName: "John Smith",
    role: "Senior Admin",
    status: "Away",
    joinedAt: "2025-02-15",
    lastSeen: "15 mins ago",
    active: true,
  },

  {
    id: "3",
    discordId: "323456789012345678",
    username: "alex_admin",
    displayName: "Alex Johnson",
    role: "Admin",
    status: "Online",
    joinedAt: "2025-04-10",
    lastSeen: "2 mins ago",
    active: true,
  },

  {
    id: "4",
    discordId: "423456789012345678",
    username: "trial_admin",
    displayName: "Jamie Wilson",
    role: "Trial Admin",
    status: "Offline",
    joinedAt: "2025-05-22",
    lastSeen: "Yesterday",
    active: true,
  },

  {
    id: "5",
    discordId: "523456789012345678",
    username: "ngs_mod",
    displayName: "Morgan Taylor",
    role: "Mod",
    status: "Online",
    joinedAt: "2026-07-28",
    lastSeen: "Just now",
    active: true,
  },

  {
    id: "6",
    discordId: "623456789012345678",
    username: "server_dev",
    displayName: "Server Developer",
    role: "Server Dev",
    status: "Online",
    joinedAt: "2025-06-12",
    lastSeen: "5 mins ago",
    active: true,
  },

  {
    id: "7",
    discordId: "723456789012345678",
    username: "discord_dev",
    displayName: "Discord Developer",
    role: "Discord Dev",
    status: "Away",
    joinedAt: "2025-07-18",
    lastSeen: "1 hour ago",
    active: true,
  },

  {
    id: "8",
    discordId: "823456789012345678",
    username: "events_team",
    displayName: "Events Coordinator",
    role: "Events Team",
    status: "Online",
    joinedAt: "2025-09-03",
    lastSeen: "Just now",
    active: true,
  },
];