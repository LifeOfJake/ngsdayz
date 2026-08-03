"use client";

import { useMemo } from "react";

import { useAtlas } from "../providers/AtlasProvider";
import { useSearch } from "../search/SearchProvider";

import { searchAtlas } from "../search/engine";

import { SETTLEMENTS } from "../../../../lib/atlas/locations";

export function useAtlasSearch() {
  const { query } = useSearch();

  const {
    fieldNotes,
    flyTo,
    selectFieldNote,
  } = useAtlas();

  const results = useMemo(() => {
    return searchAtlas({
      query,

      fieldNotes: fieldNotes.notes,

      onCoordinateSelect(x, y) {
        flyTo({
           x,
           y,
        });
      },

      onFieldNoteSelect(note) {
        selectFieldNote(note);
      },

      onSettlementSelect(settlementId) {
        const settlement =
          SETTLEMENTS.find(
            (settlement) =>
              settlement.id ===
              settlementId
          );

        if (!settlement) {
          return;
        }

        flyTo(
          settlement.position
        );
      },
    });
  }, [
    query,
    fieldNotes.notes,
    flyTo,
    selectFieldNote,
  ]);

  return {
    results,
  };
}