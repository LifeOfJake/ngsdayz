"use client";

import { useState } from "react";
import type { LatLngLiteral } from "leaflet";

export function useFieldNotes() {
  const [isPlacing, setIsPlacing] = useState(false);

  const [pendingLocation, setPendingLocation] =
    useState<LatLngLiteral | null>(null);

  function beginPlacement() {
    setIsPlacing(true);
  }

  function cancelPlacement() {
    setIsPlacing(false);
    setPendingLocation(null);
  }

  function placeNote(location: LatLngLiteral) {
    setPendingLocation(location);
    setIsPlacing(false);
  }

  return {
    isPlacing,
    pendingLocation,
    beginPlacement,
    cancelPlacement,
    placeNote,
  };
}