const fs = require("fs");
const path = require("path");

const root = process.cwd();
const dist = path.join(root, "dist");

const ignoredDirs = new Set([".git", ".wrangler", "assets", "dist", "node_modules", "scripts"]);

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFile(srcPath, destPath);
    }
  }
}

fs.rmSync(dist, { recursive: true, force: true });

copyDir(path.join(root, "assets"), path.join(dist, "assets"));
copyFile(path.join(root, "robots.txt"), path.join(dist, "robots.txt"));
copyFile(path.join(root, "sitemap.xml"), path.join(dist, "sitemap.xml"));
copyFile(path.join(root, "sitemap-priority.xml"), path.join(dist, "sitemap-priority.xml"));
copyFile(path.join(root, "sitemap-google.xml"), path.join(dist, "sitemap-google.xml"));
copyFile(path.join(root, "sitemap.txt"), path.join(dist, "sitemap.txt"));
copyFile(path.join(root, "image-sitemap.xml"), path.join(dist, "image-sitemap.xml"));
copyFile(path.join(root, "_headers"), path.join(dist, "_headers"));

for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (entry.isFile() && /^google[a-z0-9]+\.html$/i.test(entry.name)) {
    copyFile(path.join(root, entry.name), path.join(dist, entry.name));
  }

  if (entry.isFile() && /^[a-z0-9-]{8,128}\.txt$/i.test(entry.name) && !["robots.txt", "sitemap.txt"].includes(entry.name)) {
    copyFile(path.join(root, entry.name), path.join(dist, entry.name));
  }
}

for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (entry.isDirectory() && ignoredDirs.has(entry.name)) continue;
  if (entry.isDirectory()) {
    const src = path.join(root, entry.name, "index.html");
    if (fs.existsSync(src)) copyFile(src, path.join(dist, entry.name, "index.html"));
  }
}

copyFile(path.join(root, "index.html"), path.join(dist, "index.html"));

console.log(`Built deploy output: ${dist}`);
