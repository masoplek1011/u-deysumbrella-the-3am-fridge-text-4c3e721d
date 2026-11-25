// The 3AM Fridge Text — a deterministic one-line text from a smart fridge.
// Writes exactly one line to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "2:47am. You opened me, stared into the light for eleven seconds, took nothing, and left. I keep the receipts.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
