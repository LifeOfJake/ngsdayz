"use client";

import type {
  AtlasLayerState,
} from "../../Components 2/atlas/map/hooks/useLayers";

import type {
  FieldNote,
} from "./types";

const STORAGE_KEYS = {
  layers: "atlas.layers",
  fieldNotes: "atlas.fieldNotes",
} as const;

/* ---------------- Layers ---------------- */

export function loadLayerState(
  defaults: AtlasLayerState
): AtlasLayerState {
  if (typeof window === "undefined") {
    return defaults;
  }

  try {
    const stored = localStorage.getItem(
      STORAGE_KEYS.layers
    );

    if (!stored) {
      return defaults;
    }

    return {
      ...defaults,
      ...JSON.parse(stored),
    };
  } catch {
    return defaults;
  }
}

export function saveLayerState(
  layers: AtlasLayerState
) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(
    STORAGE_KEYS.layers,
    JSON.stringify(layers)
  );
}

/* ---------------- Field Notes ---------------- */

export function loadFieldNotes(): FieldNote[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = localStorage.getItem(
      STORAGE_KEYS.fieldNotes
    );

    if (!stored) {
      return [];
    }

    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function saveFieldNotes(
  notes: FieldNote[]
) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(
    STORAGE_KEYS.fieldNotes,
    JSON.stringify(notes)
  );
}

export function clearFieldNotes() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(
    STORAGE_KEYS.fieldNotes
  );
}