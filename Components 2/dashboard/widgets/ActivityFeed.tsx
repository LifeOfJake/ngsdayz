import { Card, CardContent, CardHeader } from "@/Components 2/primitives/surfaces/Card/index";
import { ActivityItem } from "./ActivityItem";

const activity = [
  {
    type: "server",
    title: "Server Restart",
    description: "EU1 restarted successfully.",
    metadata: "Scheduled Restart",
    timestamp: "Today • 18:42",
    priority: "normal",
  },
  {
    type: "warning",
    title: "Player Warning",
    description: "Moderator Alex warned Player123.",
    metadata: "Combat Logging",
    timestamp: "Today • 18:15",
    priority: "important",
  },
  {
    type: "ticket",
    title: "Ticket Assigned",
    description: "Ticket #438 assigned to Sarah.",
    metadata: "High Priority",
    timestamp: "Today • 17:56",
    priority: "important",
  },
  {
    type: "rule",
    title: "Rule Updated",
    description: "Combat Rule C-04 was updated.",
    timestamp: "Yesterday • 22:14",
    priority: "critical",
  },
] as const;

export function ActivityFeed() {
  return (
    <Card className="h-full">
      <CardHeader>
        <h2 className="text-lg font-semibold">Activity Feed</h2>
        <p className="text-sm text-muted-foreground">
          Recent moderation and server events.
        </p>
      </CardHeader>

      <CardContent className="space-y-3">
        {activity.map((item, index) => (
          <ActivityItem
            key={index}
            {...item}
          />
        ))}
      </CardContent>
    </Card>
  );
}