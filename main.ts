// The One-Line Laugh — writes one original funny line to /output/entry.txt.
// Pure Node.js standard library only: no network, no external binaries,
// no child processes. Deterministic: the same line every run.
//
// Before writing, the line is validated against the competition's gate:
// it must be non-empty, a single sentence, and at most 200 characters.
// A line that fails any check is refused: the error goes to stderr and
// the program exits non-zero without writing anything, so an invalid
// entry can never be produced by accident.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I finally remembered my password on the first try, so the website made me change it and I forgot the new one.";

const MAX_LENGTH = 200;

function fail(reason: string): never {
  console.error(`error: entry line rejected: ${reason}`);
  process.exit(1);
}

if (line.trim().length === 0) {
  fail("line is empty or only whitespace");
}
if (line.trim().split(/[.!?]+/).filter((part) => part.trim().length > 0).length !== 1) {
  fail("line must be a single sentence");
}
if (line.length > MAX_LENGTH) {
  fail(`line is ${line.length} characters, over the 200-character limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
