import type { AtlasPosition } from "../types";

export type SettlementCategory =
  | "city"
  | "town"
  | "village"
  | "military"
  | "landmark";

export interface Settlement {
  id: string;

  name: string;

  category: SettlementCategory;

  position: AtlasPosition;

  keywords: string[];

  description?: string;
}