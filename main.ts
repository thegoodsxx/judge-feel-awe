import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const text =
  "Six miles down, the trench has never seen the sun. Starlight that left before language began drifts into cold water, touching silt unmoved for twenty thousand years. Between two clock cycles, the dark does not hurry. Nothing in the deep is waiting to be solved.";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rawOutputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputDir = resolve(__dirname, rawOutputDir);
const outputFile = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, text, "utf8");
