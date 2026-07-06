"use client";

import { createContext, useContext } from "react";

import { useAtlas } from "../src/hooks/useAtlas";
import { useLayers } from "../src/hooks/useLayers";
import { useFieldNotes } from "../src/hooks/useFieldNotes";

const AtlasContext = createContext<ReturnType<typeof createAtlasStore> | null>(null);

function createAtlasStore() {
  const atlas = useAtlas();
  const layers = useLayers();
  const fieldNotes = useFieldNotes();

  return {
    atlas,
    layers,
    fieldNotes,
  };
}

export function AtlasProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = createAtlasStore();

  return (
    <AtlasContext.Provider value={store}>
      {children}
    </AtlasContext.Provider>
  );
}

export function useAtlasContext() {
  const context = useContext(AtlasContext);

  if (!context) {
    throw new Error(
      "useAtlasContext must be used inside AtlasProvider."
    );
  }

  return context;
}