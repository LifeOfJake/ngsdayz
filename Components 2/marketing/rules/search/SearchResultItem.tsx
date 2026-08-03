"use client";

import { forwardRef } from "react";

import type { SearchResult } from "@/types/search";

import HighlightText from "./HighlightText";

interface SearchResultItemProps {
  result: SearchResult;
  query: string;
  selected?: boolean;
  onMouseEnter?: () => void;
  onSelect: (result: SearchResult) => void;
}

export const SearchResultItem = forwardRef<
  HTMLButtonElement,
  SearchResultItemProps
>(
  (
    {
      result,
      query,
      selected = false,
      onMouseEnter,
      onSelect,
    },
    ref,
  ) => {
    const { document } = result;

    return (
      <button
        ref={ref}
        type="button"
        role="option"
        aria-selected={selected}
        onClick={() => onSelect(result)}
        onMouseEnter={onMouseEnter}
        className={`
          group
          flex
          w-full
          flex-col
          items-start
          gap-1
          border-b
          border-white/5
          px-5
          py-3.5
          text-left
          transition-all
          duration-150

          ${
            selected
              ? "bg-lime-400/10 ring-1 ring-inset ring-lime-400/20"
              : "hover:bg-white/5"
          }
        `}
      >
        <div className="flex w-full items-center justify-between gap-3">
          <span
            className={`
              font-semibold
              transition-colors

              ${
                selected
                  ? "text-lime-300"
                  : "text-white group-hover:text-lime-300"
              }
            `}
          >
            <HighlightText
              text={document.title}
              query={query}
            />
          </span>

          {document.type === "rule" && (
            <span
              className="
                shrink-0
                rounded-md
                border
                border-lime-400/20
                bg-lime-400/10
                px-2
                py-0.5
                text-xs
                font-bold
                text-lime-400
              "
            >
              {document.id}
            </span>
          )}
        </div>

        {document.categoryTitle && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">
            <HighlightText
              text={document.categoryTitle}
              query={query}
            />
          </span>
        )}

        {document.subtitle && (
          <p className="line-clamp-2 text-sm leading-6 text-gray-400">
            <HighlightText
              text={document.subtitle}
              query={query}
            />
          </p>
        )}
      </button>
    );
  },
);

SearchResultItem.displayName = "SearchResultItem";