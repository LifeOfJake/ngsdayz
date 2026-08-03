import { readFileSync } from "fs";

export function readJson<T>(
  filePath: string
): T {
  const content = readFileSync(
    filePath,
    "utf8"
  );

  return JSON.parse(content) as T;
}