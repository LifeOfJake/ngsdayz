import Button from "@/Components 2/primitives/forms/Button";

import { Section } from "@/components/ui";

import { quickActions } from "@/data/dashboard";

export function QuickActions() {
  return (
    <Section
      title="Quick Actions"
      description="Common staff tools."
    >
      <div className="space-y-3">
        {quickActions.map((action) => (
          <Button
            key={action.title}
            variant="secondary"
            typography="default"
            fullWidth
            className="justify-start"
          >
            {action.title}
          </Button>
        ))}
      </div>
    </Section>
  );
}