"use client";

import { useState } from "react";

export type AtlasPanel =
  | "layers"
  | "notes"
  | "routes"
  | "measure"
  | "settings";

export function useAtlas() {
  const [activePanel, setActivePanel] =
    useState<AtlasPanel>("layers");

  return {
    activePanel,
    setActivePanel,
  };
}