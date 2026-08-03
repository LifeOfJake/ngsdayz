import { dashboardStats } from "@/data/dashboard";

import { DashboardStatCard } from "./DashboardStatCard";

export function DashboardStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 2xl:grid-cols-4">
      {dashboardStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <DashboardStatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            icon={<Icon className="h-6 w-6" />}
          />
        );
      })}
    </section>
  );
}