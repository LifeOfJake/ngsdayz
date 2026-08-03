"use client";

import { Search, X } from "lucide-react";

import { useSearch } from "./SearchProvider";
import SearchResults from "./SearchResults";

export default function SearchBar() {
  const {
    query,
    setQuery,
    hasQuery,
    clearQuery,
  } = useSearch();

  return (
    <div className="space-y-3">

      <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 transition-colors focus-within:border-emerald-500">

        <Search
          size={16}
          className="text-zinc-500"
        />

        <input
          type="text"
          value={query}
          onChange={(event) =>
            setQuery(event.target.value)
          }
          placeholder="Search Atlas..."
          className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 outline-none"
        />

        {hasQuery && (

          <button
            onClick={clearQuery}
            className="text-zinc-500 transition hover:text-white"
          >
            <X size={16} />
          </button>

        )}

      </div>

      <SearchResults />

    </div>
  );
}