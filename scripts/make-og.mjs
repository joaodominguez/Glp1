import sharp from "sharp";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const svg = readFileSync(resolve(root, "public/og-image.svg"));

await sharp(svg)
  .resize(1200, 630)
  .png({ compressionLevel: 9, palette: true })
  .toFile(resolve(root, "public/og-image.png"));

console.log("Wrote public/og-image.png");
