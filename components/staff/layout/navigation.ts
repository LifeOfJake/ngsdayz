import {
  BookOpen,
  LayoutDashboard,
  Settings,
  Shield,
  Ticket,
  Users,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
  permission: string;
}

export const NAVIGATION: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/staff/dashboard",
    icon: LayoutDashboard,
    permission: "dashboard:view",
  },
  {
    title: "Players",
    href: "/staff/players",
    icon: Users,
    permission: "players:view",
  },
  {
    title: "Tickets",
    href: "/staff/tickets",
    icon: Ticket,
    permission: "tickets:view",
  },
  {
    title: "Knowledge Base",
    href: "/staff/knowledge",
    icon: BookOpen,
    permission: "knowledge:view",
  },
  {
    title: "Staff",
    href: "/staff/staff",
    icon: Shield,
    permission: "staff:view",
  },
  {
    title: "Audit Log",
    href: "/staff/audit",
    icon: ClipboardList,
    permission: "audit:view",
  },
  {
    title: "Settings",
    href: "/staff/settings",
    icon: Settings,
    permission: "settings:view",
  },
];