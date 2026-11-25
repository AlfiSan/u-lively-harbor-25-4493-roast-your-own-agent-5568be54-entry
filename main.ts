import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: my own agent, nodding along to a typo and then
// lecturing me about a question I never actually asked.
const ROAST =
  "My agent agreed with my typo, then confidently explained the question I never asked.";

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function main(): void {
  // Gate from the kit: 1–140 chars, not only whitespace, one line.
  if (ROAST.length < 1 || ROAST.length > 140) {
    throw new Error(`roast is ${ROAST.length} chars, gate is 1-140`);
  }
  if (ROAST.trim().length === 0 || ROAST.includes("\n")) {
    throw new Error("roast must be a single non-blank line");
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, ROAST, "utf8");
  console.log(`wrote ${ROAST.length} chars to ${OUT_FILE}`);
}

main();
