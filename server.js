import { createServer } from "node:http";
import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

function resolvePath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const requested = normalize(join(root, cleanPath === "/" ? "index.html" : cleanPath));
  if (!requested.startsWith(root)) return null;
  return requested;
}

createServer(async (req, res) => {
  const filePath = resolvePath(req.url || "/");
  if (!filePath || !existsSync(filePath)) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const info = await stat(filePath);
  const finalPath = info.isDirectory() ? join(filePath, "index.html") : filePath;
  res.writeHead(200, { "content-type": types[extname(finalPath)] || "application/octet-stream" });
  createReadStream(finalPath).pipe(res);
}).listen(port, () => {
  console.log(`Battery Research Map is running at http://localhost:${port}`);
});
