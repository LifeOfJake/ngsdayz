"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

interface SearchContextType {
  query: string;

  setQuery: (
    value: string
  ) => void;

  hasQuery: boolean;

  clearQuery: () => void;
}

const SearchContext =
  createContext<SearchContextType | null>(
    null
  );

interface SearchProviderProps {
  children: ReactNode;
}

export default function SearchProvider({
  children,
}: SearchProviderProps) {
  const [query, setQuery] =
    useState("");

  const value = useMemo(
    () => ({
      query,

      setQuery,

      hasQuery:
        query.trim().length > 0,

      clearQuery() {
        setQuery("");
      },
    }),
    [query]
  );

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context =
    useContext(SearchContext);

  if (!context) {
    throw new Error(
      "useSearch must be used inside SearchProvider."
    );
  }

  return context;
}