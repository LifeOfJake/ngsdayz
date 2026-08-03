"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import SidebarNavigation, {
  SidebarPanel,
} from "./SidebarNavigation";
import SidebarWorkspace from "./SidebarWorkspace";

import SearchProvider from "../search/SearchProvider";
import SearchBar from "../search/SearchBar";

export default function MapSidebar() {
  const [activePanel, setActivePanel] =
    useState<SidebarPanel>("layers");

  return (
    <SearchProvider>

      <aside className="grid h-full w-80 grid-rows-[auto_auto_1fr_auto] border-r border-zinc-900 bg-zinc-950 text-white">

        {/* Search */}

        <section className="border-b border-zinc-900 px-6 py-4">

          <SearchBar />

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

    </SearchProvider>
  );
}