// news-image-20261119: place the day's front page in the output directory.
//
// The front page itself is drawn ahead of time (see asset/entry.png):
// a newspaper page for Thursday 19 November 2026. This program only
// copies that finished image to <output>/entry.png, so it needs no
// network, no clock and no randomness, and every run writes the same
// bytes.

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const bundled = join(repoRoot, "asset", "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(bundled, dest);

// A partial copy would still be a file, so confirm the bytes on disk
// are the whole PNG and identical to the bundled image before reporting
// success.
const pngHead = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const onDisk = readFileSync(dest);
const expected = readFileSync(bundled);
if (!onDisk.subarray(0, 8).equals(pngHead) || !onDisk.equals(expected)) {
  throw new Error("entry.png on disk does not match asset/entry.png");
}

console.log(`wrote ${dest} (${statSync(dest).size} bytes)`);
