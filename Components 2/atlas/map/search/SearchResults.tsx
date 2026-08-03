"use client";

import SearchResultCard from "./SearchResultCard";

import { useAtlasSearch } from "../hooks/useAtlasSearch";
import { useSearch } from "./SearchProvider";

export default function SearchResults() {
  const { query } = useSearch();

  const { results } =
    useAtlasSearch();

  if (!query.trim()) {
    return null;
  }

  if (results.length === 0) {
    return (
      <div className="mt-3 rounded-lg border border-zinc-800 bg-zinc-900 p-4">

        <p className="text-sm text-zinc-400">
          No results found.
        </p>

      </div>
    );
  }

  return (
    <div className="mt-3 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">

      {results.map((result) => (

        <SearchResultCard
          key={result.id}
          result={result}
        />

      ))}

    </div>
  );
}