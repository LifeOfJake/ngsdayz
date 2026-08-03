"use client";

import { useEffect, useRef } from "react";

import type { SearchResult } from "@/types/search";

import SearchDropdown from "./SearchDropdown";
import SearchFooter from "./SearchFooter";
import SearchInput from "./SearchInput";

interface RuleSearchOverlayProps {
  open: boolean;
  query: string;
  results: SearchResult[];

  selectedIndex: number;
  onHover: (index: number) => void;

  onQueryChange: (value: string) => void;
  onClose: () => void;
  onSelect: (result: SearchResult) => void;
}

export default function RuleSearchOverlay({
  open,
  query,
  results,
  selectedIndex,
  onHover,
  onQueryChange,
  onClose,
  onSelect,
}: RuleSearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleMouseDown = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-6 py-20 backdrop-blur-md">
      <div
        ref={panelRef}
        className="
          flex
          w-full
          max-w-3xl
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-zinc-950
          shadow-[0_25px_80px_rgba(0,0,0,0.55)]
          ring-1
          ring-white/5
          animate-in
          fade-in
          zoom-in-95
          duration-200
        "
      >
        <div className="border-b border-white/10 p-6">
          <div className="mb-5">
            <h2 className="text-2xl font-black text-white">
              Search the Rulebook
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Search rules, IDs, categories and keywords.
            </p>
          </div>

          <SearchInput
            ref={inputRef}
            value={query}
            onChange={onQueryChange}
          />
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          <SearchDropdown
            query={query}
            results={results}
            selectedIndex={selectedIndex}
            onHover={onHover}
            onSelect={onSelect}
          />
        </div>

        <SearchFooter />
      </div>
    </div>
  );
}