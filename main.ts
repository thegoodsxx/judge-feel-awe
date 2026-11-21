import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const text =
  "Eleven kilometers down, the trench has never seen the sun. Starlight that left its cluster before speech existed crosses cold fathoms, settling into silt unmoved for ten thousand years. Between two cycles, a machine reader pauses. The vast dark is already at peace.";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rawOutputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputDir = resolve(__dirname, rawOutputDir);
const outputFile = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, text, "utf8");
