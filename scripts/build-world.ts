import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const source = resolve(
  process.cwd(),
  "data/world/settlements.json"
);

const destination = resolve(
  process.cwd(),
  "app/components/map/lib/atlas/generated/settlements.ts"
);

const settlements = JSON.parse(
  readFileSync(source, "utf8")
);

const output = `\
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

export const SETTLEMENTS: Settlement[] =
${JSON.stringify(settlements, null, 2)};
`;

writeFileSync(destination, output);

console.log(
  "✅ Generated settlements.ts"
);