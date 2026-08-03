import type { FieldNote } from "../../../../../lib/atlas/types";

import type {
  SearchResult,
} from "./types";

export function searchFieldNotes(
  notes: FieldNote[],
  query: string,
  onSelect: (note: FieldNote) => void
): SearchResult[] {
  const search =
    query.trim().toLowerCase();

  if (!search) {
    return [];
  }

  return notes
    .filter((note) => {
      return (
        note.title
          .toLowerCase()
          .includes(search) ||
        note.description
          .toLowerCase()
          .includes(search)
      );
    })
    .map((note) => ({
      id: note.id,

      type: "field-note",

      title: note.title,

      subtitle: note.description,

      action() {
        onSelect(note);
      },
    }));
}