import { useEffect, useRef } from "react";

import type { SearchResult } from "@/types/search";
import { SearchResultItem } from "./SearchResultItem";

interface SearchDropdownProps {
  query: string;
  results: SearchResult[];
  selectedIndex?: number;
  onHover?: (index: number) => void;
  onSelect: (result: SearchResult) => void;
}

export default function SearchDropdown({
  query,
  results,
  selectedIndex = -1,
  onHover,
  onSelect,
}: SearchDropdownProps) {
  const selectedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    selectedRef.current?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  }, [selectedIndex]);

  const rules = results.filter(
    (result) => result.document.type === "rule",
  );

  const categories = results.filter(
    (result) => result.document.type === "category",
  );

  if (rules.length === 0 && categories.length === 0) {
    return (
      <div className="flex items-center justify-center px-8 py-16">
        <div className="text-center">
          <p className="text-lg font-semibold text-white">
            No matching results
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Try a rule ID, category or keyword.
          </p>
        </div>
      </div>
    );
  }

  let currentIndex = 0;

  return (
    <div
      role="listbox"
      className="divide-y divide-white/10"
    >
      {rules.length > 0 && (
        <section>
          <div className="sticky top-0 z-10 border-b border-white/10 bg-zinc-950/95 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-lime-400 backdrop-blur">
            Rules
          </div>

          {rules.map((result) => {
            const index = currentIndex++;
            const selected = index === selectedIndex;

            return (
              <div
                key={result.document.id}
                ref={selected ? selectedRef : null}
              >
                <SearchResultItem
                  result={result}
                  query={query}
                  selected={selected}
                  onMouseEnter={() => onHover?.(index)}
                  onSelect={onSelect}
                />
              </div>
            );
          })}
        </section>
      )}

      {categories.length > 0 && (
        <section>
          <div className="sticky top-0 z-10 border-y border-white/10 bg-zinc-950/95 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-lime-400 backdrop-blur">
            Categories
          </div>

          {categories.map((result) => {
            const index = currentIndex++;
            const selected = index === selectedIndex;

            return (
              <div
                key={result.document.id}
                ref={selected ? selectedRef : null}
              >
                <SearchResultItem
                  result={result}
                  query={query}
                  selected={selected}
                  onMouseEnter={() => onHover?.(index)}
                  onSelect={onSelect}
                />
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}