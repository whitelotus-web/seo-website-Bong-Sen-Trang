const http = require("http");
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg"
};

function send(res, status, body, contentType = "text/plain; charset=utf-8") {
  res.writeHead(status, { "content-type": contentType });
  res.end(body);
}

http
  .createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${port}`);
    let pathname = decodeURIComponent(url.pathname);

    if (pathname.endsWith("/")) pathname += "index.html";

    let file = path.normalize(path.join(root, pathname));
    if (!file.startsWith(root)) {
      send(res, 403, "Forbidden");
      return;
    }

    if (!path.extname(file) && fs.existsSync(file) && fs.statSync(file).isDirectory()) {
      file = path.join(file, "index.html");
    }

    fs.readFile(file, (err, data) => {
      if (err) {
        send(res, 404, "Not found");
        return;
      }

      const type = types[path.extname(file).toLowerCase()] || "application/octet-stream";
      send(res, 200, data, type);
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Preview: http://localhost:${port}/`);
  });
