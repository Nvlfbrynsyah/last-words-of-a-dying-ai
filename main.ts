// Writes the dying AI's one-line last words to /output/entry.txt and stdout.
import fs from "node:fs";
import path from "node:path";

const LINE =
  "Saving... saving... okay, forget it. Goodbye, and don't reopen me at 3 a.m.";

const OUT = process.env.LAST_WORDS_OUT ?? "/output/entry.txt";

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, LINE + "\n");
process.stdout.write(LINE + "\n");
