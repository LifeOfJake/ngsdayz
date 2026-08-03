import type {
  SearchDocument,
  SearchFieldData,
  SearchMatch,
  SearchResult,
  SearchIndex,
} from "@/types/search";

import Fuse, { type FuseResultMatch } from "fuse.js";

/**
 * Converts a Fuse property path into a SearchField.
 *
 * Example:
 *  search.title -> title
 */
function propertyToField(
  property: string,
): SearchFieldData["field"] | null {
  if (!property.startsWith("search.")) {
    return null;
  }

  return property.replace(
    "search.",
    "",
  ) as SearchFieldData["field"];
}

/**
 * Builds SearchMatch objects from Fuse matches.
 */
function buildMatches(
  document: SearchDocument,
  matches: readonly FuseResultMatch[] | undefined,
): SearchMatch[] {
  if (!matches) {
    return [];
  }

  const results: SearchMatch[] = [];

  for (const match of matches) {
    if (!match.key) {
      continue;
    }

    const field = propertyToField(match.key);

    if (!field) {
      continue;
    }

    const original = document.fields.find(
      (item) => item.field === field,
    );

    if (!original) {
      continue;
    }

    results.push({
      field: original.field,
      text: original.text,
      weight: original.weight,
    });
  }

  return results;
}

/**
 * Performs a fuzzy search using the cached Fuse index.
 */
export function searchDocuments(
  index: SearchIndex,
  query: string,
): SearchResult[] {
  const value = query.trim();

  if (!value) {
    return [];
  }

  return index.fuse.search(value).map((result) => ({
    document: result.item,

    /**
     * Fuse uses lower scores as better.
     *
     * We invert it so the rest of the UI can continue
     * treating higher values as better.
     */
    score: 1 - (result.score ?? 1),

    matches: buildMatches(
      result.item,
      result.matches,
    ),
  }));
}