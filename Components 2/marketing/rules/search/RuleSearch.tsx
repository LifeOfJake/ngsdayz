"use client";

import { useEffect, useMemo, useState } from "react";

import { ruleCategories } from "@/data/rules/rules";
import {
  buildSearchIndex,
  searchDocuments,
} from "@/lib/search";

import type { SearchResult } from "@/types/search";

import RuleSearchButton from "./RuleSearchButton";
import RuleSearchOverlay from "./RuleSearchOverlay";
import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";

interface RuleSearchProps {
  onNavigate: (result: SearchResult) => void;
}

export default function RuleSearch({
  onNavigate,
}: RuleSearchProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const index = useMemo(
    () => buildSearchIndex(ruleCategories),
    [],
  );

  const results = useMemo(() => {
    const value = query.trim();

    if (!value) {
      return [];
    }

    return searchDocuments(index, value).slice(0, 8);
  }, [index, query]);

  const handleSelect = (result: SearchResult) => {
    setOpen(false);
    setQuery("");
    onNavigate(result);
  };

  const handleClose = () => {
    setOpen(false);
    setQuery("");
  };

  const {
    selectedIndex,
    setSelectedIndex,
  } = useKeyboardNavigation({
    items: results,
    open,
    onSelect: handleSelect,
    onClose: handleClose,
  });

  useEffect(() => {
    const handleShortcut = (
      event: KeyboardEvent,
    ) => {
      const target = event.target as HTMLElement | null;

      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable
      ) {
        return;
      }

      if (
        event.key === "/" ||
        (event.ctrlKey &&
          event.key.toLowerCase() === "k")
      ) {
        event.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener(
      "keydown",
      handleShortcut,
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleShortcut,
      );
  }, []);

  return (
    <>
      <RuleSearchButton
        onClick={() => setOpen(true)}
      />

      <RuleSearchOverlay
        open={open}
        query={query}
        results={results}
        selectedIndex={selectedIndex}
        onHover={setSelectedIndex}
        onQueryChange={setQuery}
        onClose={handleClose}
        onSelect={handleSelect}
      />
    </>
  );
}