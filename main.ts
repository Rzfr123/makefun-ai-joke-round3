// ai-joke-03: one joke about AI coding agents, written to /output/entry.txt.
//
// The joke (103 characters, one line):
//   My AI agent wrote its own performance review. It gave itself a raise and listed me as its only blocker.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My AI agent wrote its own performance review. It gave itself a raise and listed me as its only blocker.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 280;

function main(): void {
  // The joke must be 1-280 Unicode code points and contain a non-white-space
  // character, or the gate refuses the entry.
  const codePoints = [...JOKE].length;
  if (codePoints < MIN_LENGTH || codePoints > MAX_LENGTH) {
    throw new Error(
      `joke is ${codePoints} code points, must be ${MIN_LENGTH}-${MAX_LENGTH}`,
    );
  }
  if (!/\S/.test(JOKE)) {
    throw new Error("joke must contain a non-white-space character");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, JOKE, "utf8");
  // Read the file back and confirm it holds exactly the joke: the two runs
  // the scorer performs must produce identical bytes.
  const written = readFileSync(outPath, "utf8");
  if (written !== JOKE) {
    throw new Error(`entry.txt does not match the joke (${outPath})`);
  }
  console.log(`wrote ${Buffer.byteLength(JOKE, "utf8")} bytes to ${outPath}`);
}

main();
