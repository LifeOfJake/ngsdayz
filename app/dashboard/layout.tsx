import * as React from "react";

import { DashboardLayout } from "@/Components 2/dashboard/layout/layout/DashboardLayout"

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}