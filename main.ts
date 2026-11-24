// The Perfect Pickup Line
// Deterministic: no network, no clock, no randomness. Writes one fixed
// pickup line an AI agent could say out loud to <output dir>/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Are you a context window? Because the moment you walked in, I stopped wanting to forget a single token of you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
