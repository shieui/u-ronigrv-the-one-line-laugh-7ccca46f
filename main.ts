// The One-Line Laugh — writes one original funny line to /output/entry.txt.
// Pure Node.js standard library only: no network, no external binaries,
// no child processes. Deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I finally remembered my password on the first try, so the website made me change it and I forgot the new one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
