import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const label =
  "WARNING: This human skipped the manual, ignored the warnings, asked no questions, and will confidently press the one button labeled DO NOT PRESS.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if ([...label].length > 155) {
  throw new Error("entry exceeds the 155-character safety margin");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), label, "utf8");
