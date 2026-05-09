import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const collectedAt = new Date().toISOString();
const dataDir = new URL("../data/", import.meta.url);

const paperQueries = [
  "lithium ion battery fast charging mechanism",
  "sodium ion battery hard carbon review",
  "dry electrode lithium ion battery manufacturing",
  "solid state battery electrolyte interface",
  "lithium battery separator electrolyte safety"
];

const newsQueries = [
  "CATL battery technology",
  "BYD blade battery sodium ion",
  "Tesla 4680 dry electrode battery",
  "solid state battery automotive",
  "sodium ion battery industry"
];

const videoQueries = [
  "lithium ion battery mechanism explained",
  "CATL BYD Tesla battery technology",
  "sodium ion battery explained",
  "solid state battery latest"
];

const patentQueries = [
  "CATL fast charging battery electrode electrolyte",
  "BYD blade battery pack thermal safety",
  "Tesla dry electrode 4680 battery",
  "sodium ion battery hard carbon electrolyte"
];

const errors = [];

const taxonomy = {
  topics: [
    { id: "fast-charge", labels: ["fast charging", "fast charge", "supercharge", "ultra-fast", "快充", "超充", "4c", "5c"] },
    { id: "sodium-ion", labels: ["sodium-ion", "sodium ion", "na-ion", "naxtra", "hard carbon", "钠离子", "钠电", "硬碳"] },
    { id: "solid-state", labels: ["solid-state", "solid state", "all-solid-state", "sulfide", "oxide electrolyte", "固态", "全固态"] },
    { id: "dry-electrode", labels: ["dry electrode", "dry coating", "solvent-free", "maxwell", "干法电极", "干电极"] },
    { id: "separator", labels: ["separator", "membrane", "polyolefin", "ceramic coating", "隔膜", "涂覆膜"] },
    { id: "electrolyte", labels: ["electrolyte", "sei", "cei", "lipf6", "lifsi", "additive", "电解液", "电解质", "添加剂"] },
    { id: "bms", labels: ["bms", "battery management", "soc", "soh", "sop", "电池管理"] },
    { id: "thermal-management", labels: ["thermal", "cooling", "heat", "thermal runaway", "热管理", "热失控", "液冷"] }
  ],
  companies: [
    { id: "catl", labels: ["catl", "contemporary amperex", "宁德时代"] },
    { id: "byd", labels: ["byd", "fin dreams", "blade battery", "比亚迪", "弗迪", "刀片电池"] },
    { id: "tesla", labels: ["tesla", "4680", "maxwell", "特斯拉"] }
  ],
  routes: [
    { id: "lfp", labels: ["lfp", "lithium iron phosphate", "磷酸铁锂"] },
    { id: "ncm-nca", labels: ["ncm", "nca", "nickel cobalt", "high nickel", "三元", "高镍"] },
    { id: "lmfp", labels: ["lmfp", "manganese iron phosphate", "磷酸锰铁锂"] },
    { id: "ctp-ctb", labels: ["ctp", "ctb", "cell to pack", "cell to body", "麒麟", "刀片"] },
    { id: "4680", labels: ["4680", "cylindrical", "圆柱"] },
    { id: "sodium-hard-carbon", labels: ["hard carbon", "sodium", "钠", "硬碳"] }
  ]
};

async function fetchJson(url) {
  const response = await fetch(url, { headers: { "user-agent": "battery-research-map/0.1" } });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.json();
}

async function fetchText(url) {
  const response = await fetch(url, { headers: { "user-agent": "battery-research-map/0.1" } });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.text();
}

function stripTags(value = "") {
  return value
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .trim();
}

function readTag(item, tag) {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return stripTags(match?.[1] || "");
}

function dedupe(items, keyFn) {
  const seen = new Set();
  return items.filter((item) => {
    const key = keyFn(item).toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function classifyByLabels(text, entries) {
  const lower = text.toLowerCase();
  return entries
    .filter((entry) => entry.labels.some((label) => lower.includes(label.toLowerCase())))
    .map((entry) => entry.id);
}

function evidenceFor(item) {
  if (item.type === "news" && /catl|byd|tesla|official|news release/i.test(`${item.source} ${item.url}`)) return "high";
  if (item.type === "paper") return "medium";
  if (item.type === "patent-search") return "medium";
  if (item.type === "video") return "low";
  return "low";
}

function normalizeItem(item) {
  const text = [item.title, item.source, item.query, item.url].filter(Boolean).join(" ");
  const topics = classifyByLabels(text, taxonomy.topics);
  const companies = classifyByLabels(text, taxonomy.companies);
  const technologyRoutes = classifyByLabels(text, taxonomy.routes);
  return {
    ...item,
    topics,
    companies,
    technologyRoutes,
    evidenceLevel: evidenceFor(item),
    review: item.review || "unreviewed"
  };
}

async function readExisting(name) {
  const file = new URL(name, dataDir);
  if (!existsSync(file)) return [];
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch {
    return [];
  }
}

async function writeJson(name, value) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(new URL(name, dataDir), `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

async function collectPapers() {
  const fromDate = "2025-01-01";
  const results = [];
  for (const query of paperQueries) {
    try {
      const url = new URL("https://api.openalex.org/works");
      url.searchParams.set("search", query);
      url.searchParams.set("filter", `from_publication_date:${fromDate}`);
      url.searchParams.set("sort", "publication_date:desc");
      url.searchParams.set("per-page", "6");
      const data = await fetchJson(url);
      for (const work of data.results || []) {
        results.push({
          title: work.title,
          url: work.doi ? `https://doi.org/${work.doi.replace(/^https?:\/\/doi.org\//, "")}` : work.id,
          source: work.primary_location?.source?.display_name || "OpenAlex",
          publishedAt: work.publication_date,
          collectedAt,
          query,
          type: "paper"
        });
      }
    } catch (error) {
      errors.push({ source: "OpenAlex", query, message: error.message });
    }
  }
  return dedupe(results, (item) => item.url || item.title).slice(0, 24);
}

async function collectNews() {
  const results = [];
  for (const query of newsQueries) {
    try {
      const url = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=en-US&gl=US&ceid=US:en`;
      const xml = await fetchText(url);
      const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map((match) => match[1]);
      for (const item of items.slice(0, 8)) {
        const published = readTag(item, "pubDate");
        results.push({
          title: readTag(item, "title"),
          url: readTag(item, "link"),
          source: readTag(item, "source") || "Google News",
          publishedAt: published ? new Date(published).toISOString() : null,
          collectedAt,
          query,
          type: "news"
        });
      }
    } catch (error) {
      errors.push({ source: "Google News RSS", query, message: error.message });
    }
  }
  const fresh = dedupe(results, (item) => item.url || item.title).slice(0, 24);
  if (fresh.length) return fresh;
  return newsQueries.map((query) => ({
    title: `Google News search: ${query}`,
    url: `https://news.google.com/search?q=${encodeURIComponent(query)}`,
    source: "Google News search",
    publishedAt: null,
    collectedAt,
    query,
    type: "news-search"
  }));
}

function collectVideos() {
  return videoQueries.map((query) => ({
    title: `YouTube search: ${query}`,
    url: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
    source: "YouTube search",
    publishedAt: null,
    collectedAt,
    query,
    type: "video"
  }));
}

function collectPatents() {
  return patentQueries.map((query) => ({
    title: `Google Patents search: ${query}`,
    url: `https://patents.google.com/?q=(${encodeURIComponent(query)})`,
    source: "Google Patents search",
    publishedAt: null,
    collectedAt,
    query,
    type: "patent-search"
  }));
}

function mergeReviewed(previous, fresh) {
  const reviewByUrl = new Map(previous.map((item) => [item.url, item.review || item.status]));
  return fresh.map((item) => normalizeItem({
    ...item,
    review: reviewByUrl.get(item.url) || "unreviewed"
  }));
}

async function main() {
  const [papers, news] = await Promise.all([collectPapers(), collectNews()]);
  const videos = collectVideos();
  const patents = collectPatents();

  await writeJson("papers.json", mergeReviewed(await readExisting("papers.json"), papers));
  await writeJson("news.json", mergeReviewed(await readExisting("news.json"), news));
  await writeJson("videos.json", mergeReviewed(await readExisting("videos.json"), videos));
  await writeJson("patents.json", mergeReviewed(await readExisting("patents.json"), patents));
  await writeJson("metadata.json", {
    collectedAt,
    sources: {
      papers: "OpenAlex API",
      news: "Google News RSS",
      videos: "YouTube search links",
      patents: "Google Patents search links"
    },
    errors,
    taxonomy: {
      topics: taxonomy.topics.map(({ id }) => id),
      companies: taxonomy.companies.map(({ id }) => id),
      technologyRoutes: taxonomy.routes.map(({ id }) => id)
    },
    note: "Automatically generated by GitHub Actions. Human review is still required before treating items as confirmed evidence."
  });

  if (papers.length === 0 && news.length === 0) {
    console.warn("No remote paper/news items were collected. Check network access or source availability.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
