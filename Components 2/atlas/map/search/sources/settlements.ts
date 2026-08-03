import { SETTLEMENTS } from "../../../../../lib/atlas/locations";

import type { SearchResult } from "./types";

export function searchSettlements(
  query: string,
  onSelect: (
    settlementId: string
  ) => void
): SearchResult[] {
  const search = query
    .trim()
    .toLowerCase();

  if (!search) {
    return [];
  }

  return SETTLEMENTS
    .filter((settlement) => {
      return (
        settlement.name
          .toLowerCase()
          .includes(search) ||
        settlement.keywords.some(
          (keyword) =>
            keyword
              .toLowerCase()
              .includes(search)
        )
      );
    })
    .sort((a, b) =>
      a.name.localeCompare(b.name)
    )
    .map((settlement) => ({
      id: settlement.id,

      type: "settlement",

      title: settlement.name,

      subtitle:
        settlement.category
          .charAt(0)
          .toUpperCase() +
        settlement.category.slice(1),

      action() {
        onSelect(
          settlement.id
        );
      },
    }));
}