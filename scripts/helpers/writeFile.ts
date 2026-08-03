import { mkdirSync, writeFileSync } from "fs";
import { dirname } from "path";

export function writeFile(
  destination: string,
  content: string
) {
  mkdirSync(
    dirname(destination),
    {
      recursive: true,
    }
  );

  writeFileSync(
    destination,
    content,
    "utf8"
  );
}