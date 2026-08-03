import {
  Server,
  Shield,
  Ticket,
  Users,
} from "lucide-react";

import type { DashboardStat } from "./types";

export const dashboardStats: DashboardStat[] = [
  {
    title: "Open Tickets",
    value: 18,
    description: "Awaiting review",
    icon: Ticket,
  },
  {
    title: "Online Staff",
    value: 12,
    description: "Currently available",
    icon: Shield,
  },
  {
    title: "Players",
    value: "2,481",
    description: "Last 24 hours",
    icon: Users,
  },
  {
    title: "Servers",
    value: 4,
    description: "Operational",
    icon: Server,
  },
];