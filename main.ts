import fs from "node:fs";
import path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const src = path.join(import.meta.dirname, "assets", "entry.jpg");
const dst = path.join(outDir, "entry.png");
const data = fs.readFileSync(src);
if (data.length === 0 || data.length > 1048576) throw new Error(`Invalid meme size: ${data.length}`);
fs.writeFileSync(dst, data);
fs.chmodSync(dst, 0o644);
