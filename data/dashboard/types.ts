import type { LucideIcon } from "lucide-react";

export interface DashboardStat {
  title: string;
  value: number | string;
  description: string;
  icon: LucideIcon;
}

export interface QuickAction {
  title: string;
}

export type BriefingPriority =
  | "normal"
  | "important"
  | "critical";

export type BriefingType =
  | "ticket"
  | "ban"
  | "rule"
  | "server";

export interface BriefingItem {
  type: BriefingType;
  title: string;
  description: string;
  timestamp: string;
  metadata?: string;
  priority: BriefingPriority;
}