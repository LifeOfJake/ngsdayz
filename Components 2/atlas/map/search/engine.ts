import type { FieldNote } from "../../../../lib/atlas/types";

import type { SearchResult } from "./sources/types";

import { searchCoordinates } from "./sources/coordinates";
import { searchFieldNotes } from "./sources/fieldNotes";
import { searchSettlements } from "./sources/settlements";

interface SearchAtlasOptions {
  query: string;

  fieldNotes: FieldNote[];

  onCoordinateSelect(
    x: number,
    y: number
  ): void;

  onFieldNoteSelect(
    note: FieldNote
  ): void;

  onSettlementSelect(
    settlementId: string
  ): void;
}

export function searchAtlas({
  query,
  fieldNotes,
  onCoordinateSelect,
  onFieldNoteSelect,
  onSettlementSelect,
}: SearchAtlasOptions): SearchResult[] {
  return [
    ...searchCoordinates(
      query,
      onCoordinateSelect
    ),

    ...searchFieldNotes(
      fieldNotes,
      query,
      onFieldNoteSelect
    ),

    ...searchSettlements(
      query,
      onSettlementSelect
    ),
  ];
}