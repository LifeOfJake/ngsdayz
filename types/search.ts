import type { RuleIcon } from "@/data/rules/rules";
import type Fuse from "fuse.js";

export type SearchDocumentType =
  | "rule"
  | "category"
  | "atlas-location"
  | "server"
  | "news"
  | "event"
  | "staff";

export type SearchField =
  | "id"
  | "title"
  | "subtitle"
  | "summary"
  | "description"
  | "introduction"
  | "rationale"
  | "permitted"
  | "prohibited"
  | "notes"
  | "examples"
  | "penalties"
  | "related"
  | "history"
  | "keywords";

export interface SearchFieldData {
  /**
   * Which field this searchable text came from.
   */
  field: SearchField;

  /**
   * Original text.
   */
  text: string;

  /**
   * Lowercase version used for highlighting and exact matching.
   */
  normalized: string;

  /**
   * Relative importance.
   */
  weight: number;
}

/**
 * Flattened searchable object used exclusively by Fuse.
 *
 * This avoids Fuse having to inspect the SearchFieldData[]
 * collection while still allowing us to keep the richer field
 * information for highlighting.
 */
export interface SearchIndexData {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  introduction: string;
  rationale: string;
  permitted: string;
  prohibited: string;
  notes: string;
  examples: string;
  penalties: string;
  related: string;
  history: string;
  keywords: string;
}

export interface SearchDocument {
  /**
   * Unique identifier.
   */
  id: string;

  /**
   * Type of document.
   */
  type: SearchDocumentType;

  /**
   * Primary display title.
   */
  title: string;

  /**
   * Optional subtitle.
   */
  subtitle?: string;

  /**
   * Optional icon.
   */
  icon?: RuleIcon;

  /**
   * DOM anchor used for navigation.
   */
  anchorId: string;

  /**
   * Parent category.
   */
  categoryId?: string;
  categoryTitle?: string;

  /**
   * Original searchable fields.
   *
   * Used for highlighting and determining which fields matched.
   */
  fields: SearchFieldData[];

  /**
   * Flattened searchable values used by Fuse.
   */
  search: SearchIndexData;
}

/**
 * Search index returned by buildSearchIndex().
 */
export interface SearchIndex {
  documents: SearchDocument[];
  fuse: Fuse<SearchDocument>;
}

export interface SearchMatch {
  /**
   * Which field matched.
   */
  field: SearchField;

  /**
   * Original text.
   */
  text: string;

  /**
   * Relative importance.
   */
  weight: number;
}

export interface GroupedSearchResults {
  rules: SearchResult[];
  categories: SearchResult[];
}

export interface SearchResult {
  /**
   * Matching indexed document.
   */
  document: SearchDocument;

  /**
   * Overall ranking score.
   *
   * Higher = better.
   */
  score: number;

  /**
   * Fields responsible for the result.
   */
  matches: SearchMatch[];
}