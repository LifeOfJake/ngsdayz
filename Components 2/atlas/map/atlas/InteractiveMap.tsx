"use client";

import AtlasWorkspace from "./AtlasWorkspace";

import MapHeader from "../layout/MapHeader";
import AtlasProvider from "../providers/AtlasProvider";

import FieldNoteModal from "../field-notes/FieldNoteModal";

export default function InteractiveMap() {
  return (
    <AtlasProvider>

      <section className="relative flex h-full w-full flex-col bg-zinc-950">

        <MapHeader />

        <div className="min-h-0 flex-1">

          <AtlasWorkspace />

        </div>

        <FieldNoteModal />

      </section>

    </AtlasProvider>
  );
}