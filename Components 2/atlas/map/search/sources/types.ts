export type SearchResultType =
  | "coordinate"
  | "field-note"
  | "settlement"
  | "heartland"
  | "gas-zone"
  | "ngs";

export interface SearchResult {
  id: string;

  type: SearchResultType;

  title: string;

  subtitle?: string;

  action(): void;
}