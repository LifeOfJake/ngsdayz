"use client";

import MapCanvas from "./MapCanvas";
import MapSidebar from "../layout/MapSidebar";

export default function AtlasWorkspace() {
  return (
    <div className="flex h-full overflow-hidden bg-zinc-950">

      <MapSidebar />

      <main className="relative flex-1 overflow-hidden">

        <MapCanvas />

      </main>

    </div>
  );
}