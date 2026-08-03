import {
  AlertTriangle,
  BookOpen,
  Gavel,
  Megaphone,
  Server,
  Ticket,
  Users,
} from "lucide-react";

import { Card, CardContent } from "@/Components 2/primitives/surfaces/Card/index";

export type ActivityType =
  | "ticket"
  | "warning"
  | "ban"
  | "announcement"
  | "rule"
  | "server"
  | "staff";

export interface ActivityItemProps {
  type: ActivityType;
  title: string;
  description: string;
  timestamp: string;
  metadata?: string;
  priority?: "normal" | "important" | "critical";
}

const iconMap = {
  ticket: Ticket,
  warning: AlertTriangle,
  ban: Gavel,
  announcement: Megaphone,
  rule: BookOpen,
  server: Server,
  staff: Users,
};

const priorityColours = {
  normal: "bg-emerald-500",
  important: "bg-amber-500",
  critical: "bg-red-500",
};

export function ActivityItem({
  type,
  title,
  description,
  timestamp,
  metadata,
  priority = "normal",
}: ActivityItemProps) {
  const Icon = iconMap[type];

  return (
    <Card className="transition-colors hover:bg-accent/40">
      <CardContent className="flex gap-4 p-4">
        <div
          className={`mt-1 h-3 w-3 shrink-0 rounded-full ${priorityColours[priority]}`}
        />

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1 space-y-1">
          <h4 className="font-semibold leading-none">
            {title}
          </h4>

          <p className="text-sm text-muted-foreground">
            {description}
          </p>

          {metadata && (
            <p className="text-xs font-medium text-primary">
              {metadata}
            </p>
          )}

          <p className="pt-2 text-xs text-muted-foreground">
            {timestamp}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}