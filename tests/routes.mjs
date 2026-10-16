import fs from "node:fs";
import assert from "node:assert/strict";
const base = "http://localhost:3102";
const groups = [
  ["services", "services"],
  ["portfolio", "portfolio"],
  ["blog", "blog-posts"],
];
const paths = [
  "/",
  "/services",
  "/about",
  "/products",
  "/portfolio",
  "/blog",
  "/careers",
  "/contact",
  "/privacy",
];
for (const [route, file] of groups)
  for (const row of JSON.parse(
    fs.readFileSync("src/data/" + file + ".json", "utf8"),
  ))
    paths.push("/" + route + "/" + row.slug);
const results = [];
const titles = new Set();
for (const path of paths) {
  const res = await fetch(base + path);
  assert.equal(res.status, 200, path);
  const html = await res.text();
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title, path + " title");
  assert.ok(!titles.has(title), path + " duplicate title");
  titles.add(title);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, path + " h1");
  assert.equal(
    new URL(html.match(/rel="canonical" href="([^"]+)/)?.[1]).pathname,
    path,
    path + " canonical",
  );
  assert.ok(html.includes('name="description"'), path + " description");
  assert.ok(html.includes("noindex"), path + " preview noindex");
  for (const match of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  ))
    JSON.parse(match[1]);
  results.push({ path, status: res.status, title });
}
for (const [from, to] of [
  ["/zoho", "/services/zoho-development"],
  ["/DigitalMarketing", "/services/digital-marketing-growth"],
  [
    "/services/software-maintenance-modernization",
    "/services/custom-software-development",
  ],
  [
    "/services/api-third-party-integrations",
    "/services/integrations-automation",
  ],
  ["/portfolio/mobile-banking", "/portfolio"],
]) {
  const res = await fetch(base + from, { redirect: "manual" });
  assert.equal(res.status, 308);
  assert.equal(new URL(res.headers.get("location"), base).pathname, to);
}
assert.equal((await fetch(base + "/missing-page-test")).status, 404);
assert.equal(
  (await fetch(base + "/opengraph-image")).headers.get("content-type"),
  "image/png",
);
const sitemap = await (await fetch(base + "/sitemap.xml")).text();
assert.equal((sitemap.match(/<loc>/g) || []).length, paths.length);
const robots = await (await fetch(base + "/robots.txt")).text();
assert.ok(robots.includes("Disallow: /"));
fs.writeFileSync(
  "docs/route-validation.json",
  JSON.stringify(
    {
      date: "2026-10-16",
      results,
      redirects: 5,
      sitemapUrls: paths.length,
      previewRobots: robots,
    },
    null,
    2,
  ),
);
console.log(
  "PASS: " +
    paths.length +
    " pages, unique titles, canonical URLs, descriptions, single H1, preview noindex, JSON-LD syntax; 5 redirects; 404; PNG social image; sitemap; robots.",
);
