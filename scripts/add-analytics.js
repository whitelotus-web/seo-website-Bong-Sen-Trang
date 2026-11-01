const fs = require("fs");
const path = require("path");

const root = process.cwd();
const GA4_ID = "G-60J96QF4YV";
const MARKER = GA4_ID;

function headBlock() {
  return `    <link rel="preconnect" href="https://www.googletagmanager.com">
    <script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA4_ID}', { anonymize_ip: true });
    </script>
`;
}

function bodyBlock(prefix) {
  return `    <script src="${prefix}assets/js/analytics.js" defer></script>\n`;
}

function inject(html, prefix) {
  if (html.includes(MARKER)) return null;
  let output = html;
  if (output.includes("</head>")) {
    output = output.replace("</head>", `${headBlock()}  </head>`);
  }
  if (output.includes("</body>")) {
    output = output.replace("</body>", `${bodyBlock(prefix)}  </body>`);
  }
  return output;
}

function collectTargets() {
  const targets = [];
  const rootIndex = path.join(root, "index.html");
  if (fs.existsSync(rootIndex)) targets.push({ file: rootIndex, prefix: "" });
  const notFound = path.join(root, "404.html");
  if (fs.existsSync(notFound)) targets.push({ file: notFound, prefix: "" });

  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith(".")) continue;
    const page = path.join(root, entry.name, "index.html");
    if (fs.existsSync(page)) targets.push({ file: page, prefix: "../" });
  }
  return targets;
}

let updated = 0;
let skipped = 0;

for (const { file, prefix } of collectTargets()) {
  const html = fs.readFileSync(file, "utf8");
  const result = inject(html, prefix);
  if (result === null) {
    skipped += 1;
    continue;
  }
  fs.writeFileSync(file, result, "utf8");
  updated += 1;
}

console.log(`Analytics: added GA4 tag to ${updated} pages, skipped ${skipped} already tagged`);
