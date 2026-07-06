"use client";

import { useState } from "react";
import { Search, Plus } from "lucide-react";

import SidebarNavigation, {
  SidebarPanel,
} from "./SidebarNavigation";
import SidebarWorkspace from "./SidebarWorkspace";

export default function MapSidebar() {
  const [activePanel, setActivePanel] =
    useState<SidebarPanel>("layers");

  return (
    <aside className="grid h-full w-80 grid-rows-[auto_auto_auto_1fr_auto] border-r border-zinc-900 bg-zinc-950 text-white">

      {/* Header */}

      <header className="border-b border-zinc-900 px-6 py-5">

        <h2 className="text-lg font-semibold tracking-tight">
          Project Atlas
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Your survivor's companion.
        </p>

      </header>

      {/* Search */}

      <section className="border-b border-zinc-900 px-6 py-4">

        <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2">

          <Search
            size={16}
            className="text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search locations..."
            className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 outline-none"
          />

        </div>

      </section>

      {/* Navigation */}

      <section className="border-b border-zinc-900 p-4">

        <SidebarNavigation
          activePanel={activePanel}
          onSelect={setActivePanel}
        />

      </section>

      {/* Active Tool */}

      <section className="min-h-0 overflow-hidden">

        <SidebarWorkspace
          activePanel={activePanel}
        />

      </section>

      {/* Footer */}

      <footer className="border-t border-zinc-900 p-4">

        <button className="flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white">

          <Plus size={16} />

          <span>New Field Note</span>

        </button>

      </footer>

    </aside>
  );
}