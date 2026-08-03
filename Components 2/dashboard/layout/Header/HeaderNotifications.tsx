"use client";

import * as React from "react";

import { Bell } from "lucide-react";

import { Button } from "@/components/ui";

export function HeaderNotifications() {
  return (
    <Button
      variant="ghost"
      size="sm"
      typography="default"
      className="h-10 w-10 rounded-lg p-0"
      aria-label="Notifications"
    >
      <Bell className="h-5 w-5" />
    </Button>
  );
}