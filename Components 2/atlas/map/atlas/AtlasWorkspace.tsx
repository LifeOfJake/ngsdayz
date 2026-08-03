"use client";

import LeafletMap from "./LeafletMap";
import MapSidebar from "../layout/MapSidebar";

export default function AtlasWorkspace() {
  return (
    <div className="flex h-full overflow-hidden bg-zinc-950">
      <MapSidebar />

      <main className="relative flex-1 overflow-hidden">
        <LeafletMap />
      </main>
    </div>
  );
}