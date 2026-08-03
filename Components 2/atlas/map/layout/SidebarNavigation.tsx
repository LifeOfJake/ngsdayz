"use client";

import type { LucideIcon } from "lucide-react";
import {
  Layers3,
  NotebookPen,
  Route,
  Ruler,
  Settings,
} from "lucide-react";

export type SidebarPanel =
  | "layers"
  | "notes"
  | "routes"
  | "measure"
  | "settings";

interface SidebarNavigationProps {
  activePanel: SidebarPanel;
  onSelect: (panel: SidebarPanel) => void;
}

interface NavigationItem {
  id: SidebarPanel;
  label: string;
  icon: LucideIcon;
}

const ITEMS: NavigationItem[] = [
  {
    id: "layers",
    label: "Layers",
    icon: Layers3,
  },
  {
    id: "notes",
    label: "Field Notes",
    icon: NotebookPen,
  },
  {
    id: "routes",
    label: "Route Planner",
    icon: Route,
  },
  {
    id: "measure",
    label: "Measure",
    icon: Ruler,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function SidebarNavigation({
  activePanel,
  onSelect,
}: SidebarNavigationProps) {
  return (
    <nav className="space-y-1">

      {ITEMS.map((item) => {
        const Icon = item.icon;

        const active = activePanel === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all duration-200 ${
              active
                ? "bg-zinc-900 text-white"
                : "text-zinc-400 hover:bg-zinc-900/60 hover:text-white"
            }`}
          >
            <Icon size={18} />

            <span className="text-sm font-medium">
              {item.label}
            </span>
          </button>
        );
      })}

    </nav>
  );
}