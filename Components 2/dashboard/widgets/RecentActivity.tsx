import { Section } from "@/components/ui";

export function RecentActivity() {
  return (
    <Section
      title="Recent Activity"
      description="Latest moderation actions will appear here."
    >
      <p className="text-sm text-muted-foreground">
        No recent activity.
      </p>
    </Section>
  );
}