"use client";

import * as React from "react";

import { Page } from "@/components/staff/layout";

import {
  DashboardStats,
  QuickActions,
  RecentActivity,
  ServerStatus,
  ShiftBriefing,
} from ".";

import Button from "@/Components 2/primitives/forms/Button";

export function Dashboard() {
  const [briefingOpen, setBriefingOpen] =
    React.useState(false);

  return (
    <>
      <Page
        title="Dashboard"
        description="Overview of the current state of NGS."
        actions={
          <Button
            variant="secondary"
            typography="default"
            onClick={() => setBriefingOpen(true)}
          >
            View Briefing
          </Button>
        }
      >
        <DashboardStats />

        <section className="grid gap-8 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <RecentActivity />
          </div>

          <QuickActions />
        </section>

        <ServerStatus />
      </Page>

      <ShiftBriefing
        open={briefingOpen}
        onClose={() => setBriefingOpen(false)}
      />
    </>
  );
}