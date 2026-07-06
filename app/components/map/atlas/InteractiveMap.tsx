"use client";

import AtlasWorkspace from "./AtlasWorkspace";
import MapHeader from "../layout/MapHeader";

export default function InteractiveMap() {
  return (
    <section className="flex h-full w-full flex-col bg-zinc-950">
      <MapHeader />

      <div className="min-h-0 flex-1">
        <AtlasWorkspace />
      </div>
    </section>
  );
}