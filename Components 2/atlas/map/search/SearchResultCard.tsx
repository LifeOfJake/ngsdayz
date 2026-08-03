"use client";

import {
  Heart,
  MapPin,
  NotebookPen,
  Radiation,
  Search,
  Star,
  Trees,
} from "lucide-react";

import type {
  SearchResult,
} from "./sources/types";

interface SearchResultCardProps {
  result: SearchResult;
}

function getIcon(
  type: SearchResult["type"]
) {
  switch (type) {
    case "coordinate":
      return (
        <MapPin
          size={16}
          className="text-emerald-400"
        />
      );

    case "field-note":
      return (
        <NotebookPen
          size={16}
          className="text-amber-400"
        />
      );

    case "settlement":
      return (
        <Trees
          size={16}
          className="text-sky-400"
        />
      );

    case "heartland":
      return (
        <Heart
          size={16}
          className="text-rose-400"
        />
      );

    case "gas-zone":
      return (
        <Radiation
          size={16}
          className="text-lime-400"
        />
      );

    case "ngs":
      return (
        <Star
          size={16}
          className="text-purple-400"
        />
      );

    default:
      return (
        <Search
          size={16}
          className="text-zinc-400"
        />
      );
  }
}

export default function SearchResultCard({
  result,
}: SearchResultCardProps) {
  return (
    <button
      onClick={result.action}
      className="flex w-full items-start gap-3 border-b border-zinc-800 p-3 text-left transition-colors duration-200 hover:bg-zinc-800 last:border-b-0"
    >
      <div className="mt-0.5 shrink-0">
        {getIcon(result.type)}
      </div>

      <div className="min-w-0 flex-1">

        <p className="truncate text-sm font-medium text-white">
          {result.title}
        </p>

        {result.subtitle && (
          <p className="mt-1 truncate text-xs text-zinc-500">
            {result.subtitle}
          </p>
        )}

      </div>

    </button>
  );
}