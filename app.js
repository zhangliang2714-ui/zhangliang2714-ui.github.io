const views = {
  overview: { title: "总览", kicker: "Dashboard" },
  intelligence: { title: "情报中心", kicker: "Intelligence" },
  companies: { title: "公司图谱", kicker: "Companies" },
  technology: { title: "技术路线", kicker: "Technology" },
  supply: { title: "产业链", kicker: "Supply Chain" },
  recycling: { title: "电池回收", kicker: "Recycling" },
  evidence: { title: "证据库", kicker: "Evidence Vault" },
  trace: { title: "来源追踪", kicker: "Source Trace" },
  ai: { title: "AI 问答", kicker: "Static RAG" },
  backend: { title: "后端规划", kicker: "Backend Roadmap" }
};

const state = {
  view: "overview",
  entityId: "catl",
  search: "",
  data: {
    entities: [],
    evidence: [],
    companies: [],
    segments: [],
    relations: [],
    metadata: null
  }
};

const stageColors = {
  原料: "#16875f",
  材料: "#2f70d8",
  电芯: "#7b67d8",
  整车: "#c58b20",
  设备: "#8b6bb8",
  回收: "#c94f4f"
};

const globalMapData = {
  regions: [
    { id: "china", zh: "中国", name: "China", x: 725, y: 285, value: 72, stages: ["原料", "材料", "电芯", "整车", "回收"], note: "电池制造、材料加工和回收闭环最集中。" },
    { id: "eu", zh: "欧洲", name: "Europe", x: 505, y: 218, value: 12, stages: ["材料", "电芯", "整车", "回收"], note: "法规、本土化制造和碳足迹驱动。" },
    { id: "usa", zh: "美国", name: "United States", x: 250, y: 245, value: 9, stages: ["原料", "电芯", "整车", "回收"], note: "政策和整车厂拉动本土供应链。" },
    { id: "jpkr", zh: "日韩", name: "Japan / Korea", x: 807, y: 267, value: 7, stages: ["材料", "电芯", "设备"], note: "材料、电芯和设备环节积累深。" },
    { id: "aus", zh: "澳大利亚", name: "Australia", x: 790, y: 420, value: 5, stages: ["原料"], note: "锂矿和关键矿产资源来源。" },
    { id: "sam", zh: "南美", name: "South America", x: 330, y: 440, value: 4, stages: ["原料"], note: "盐湖锂资源影响全球供给。" }
  ],
  flows: [
    { from: "aus", to: "china", label: "锂矿 / 原料", strength: 3, stage: "原料" },
    { from: "sam", to: "china", label: "盐湖锂资源", strength: 2, stage: "原料" },
    { from: "china", to: "eu", label: "材料 / 电芯 / 设备", strength: 4, stage: "材料" },
    { from: "china", to: "usa", label: "材料与设备线索", strength: 3, stage: "材料" },
    { from: "jpkr", to: "usa", label: "电芯与车企供应", strength: 2, stage: "电芯" },
    { from: "jpkr", to: "eu", label: "电芯与材料", strength: 2, stage: "电芯" },
    { from: "usa", to: "china", label: "回收/黑粉流向", strength: 1, stage: "回收" },
    { from: "eu", to: "china", label: "回收闭环", strength: 1, stage: "回收" }
  ]
};

const backendPlan = [
  { level: "yes", title: "真正自然语言 AI 问答", need: "需要后端", text: "静态网页不能安全保存 OpenAI API Key，也不适合做长上下文检索。需要 Node/FastAPI 后端代理模型调用、检索证据、记录引用。" },
  { level: "yes", title: "论文 PDF 上传、解析、向量化", need: "需要后端", text: "上传文件、解析 PDF、切块、嵌入向量和长期存储都需要服务端或云存储，GitHub Pages 只能展示静态文件。" },
  { level: "yes", title: "人工审核工作流", need: "建议后端", text: "如果要登录、多人审核、标记 reviewed/important/discarded 并保存，需要数据库和权限系统。首版可先用 GitHub JSON 手动改。" },
  { level: "yes", title: "实时新闻/论文/专利抓取", need: "已有 GitHub Actions，增强需后端", text: "定时抓取可以继续用 Actions；如果要用户点击后立即联网搜索、去重、摘要和入库，需要后端任务队列。" },
  { level: "later", title: "公司关系图和市场图", need: "前端可先做", text: "只要数据量不大，关系图、全球地图、筛选和排序都可以在浏览器里完成。数据变大后再引入图数据库或搜索服务。" },
  { level: "later", title: "证据库筛选和静态问答", need: "前端可先做", text: "当前 JSON 规模较小，前端直接加载即可。后续超过几万条证据时，再引入 Meilisearch/Typesense/Elastic。" }
];

const $ = (selector) => document.querySelector(selector);

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function loadJson(path, fallback) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error(`${response.status} ${path}`);
    return response.json();
  } catch {
    return fallback;
  }
}

function entityById(id) {
  return state.data.entities.find((entity) => entity.id === id);
}

function companyById(id) {
  return state.data.companies.find((company) => company.id === id);
}

function selectedEntity() {
  return entityById(state.entityId) || state.data.entities[0] || null;
}

function entityText(entity) {
  return [entity.id, entity.name, entity.type, entity.summary, ...(entity.aliases || []), ...(entity.tags || [])].join(" ").toLowerCase();
}

function evidenceText(item) {
  return [
    item.title,
    item.claim,
    item.source,
    item.evidenceType,
    item.type,
    ...(item.entityIds || []),
    ...(item.topics || []),
    ...(item.companies || []),
    ...(item.technologyRoutes || [])
  ].join(" ").toLowerCase();
}

function evidenceType(item) {
  if (item.evidenceType) return item.evidenceType;
  if (item.type === "patent-search") return "patent";
  if (item.type === "news-search") return "news";
  return item.type || "lead";
}

function evidenceRank(item) {
  return { high: 3, medium: 2, low: 1 }[item.evidenceLevel] || 0;
}

function dateValue(item) {
  const date = new Date(item.publishedAt || item.collectedAt || 0);
  return Number.isNaN(date.getTime()) ? 0 : date.getTime();
}

function shortDate(value) {
  if (!value) return "待更新";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toISOString().slice(0, 10);
}

function matchesEntity(item, entity) {
  if (!entity) return true;
  const buckets = new Set([
    ...(item.entityIds || []),
    ...(item.topics || []),
    ...(item.companies || []),
    ...(item.technologyRoutes || [])
  ]);
  if (buckets.has(entity.id)) return true;
  const text = evidenceText(item);
  return [entity.name, ...(entity.aliases || []), ...(entity.tags || [])]
    .filter(Boolean)
    .some((alias) => text.includes(String(alias).toLowerCase()));
}

function filteredEvidence({ entity = selectedEntity(), type = "all", recyclingOnly = false, limit = 200 } = {}) {
  const search = state.search.toLowerCase();
  return state.data.evidence
    .filter((item) => matchesEntity(item, entity) || (!entity && true))
    .filter((item) => type === "all" || evidenceType(item) === type)
    .filter((item) => !recyclingOnly || evidenceText(item).includes("recycling") || evidenceText(item).includes("回收") || (item.entityIds || []).includes("recycling"))
    .filter((item) => !search || evidenceText(item).includes(search))
    .sort((a, b) => evidenceRank(b) - evidenceRank(a) || dateValue(b) - dateValue(a))
    .slice(0, limit);
}

function allFilteredEvidence(limit = 200) {
  const search = state.search.toLowerCase();
  return state.data.evidence
    .filter((item) => !search || evidenceText(item).includes(search))
    .sort((a, b) => dateValue(b) - dateValue(a) || evidenceRank(b) - evidenceRank(a))
    .slice(0, limit);
}

function typeLabel(type) {
  return {
    paper: "论文",
    patent: "专利",
    news: "新闻",
    video: "视频",
    company: "公告",
    policy: "政策",
    lead: "线索"
  }[type] || type;
}

function reviewLabel(value) {
  return {
    unreviewed: "未审核",
    reviewed: "已审核",
    important: "重点",
    discarded: "已丢弃"
  }[value] || value || "未审核";
}

function evidenceCard(item) {
  const type = evidenceType(item);
  const entities = (item.entityIds || []).slice(0, 5).map((id) => `<span class="chip">${esc(entityById(id)?.name || id)}</span>`).join("");
  return `
    <article class="evidence-card">
      <a href="${esc(item.sourceUrl || item.url)}" target="_blank" rel="noreferrer">${esc(item.title)}</a>
      <p>${esc(item.claim || item.source || "自动采集线索")}</p>
      <div class="meta-row">
        <span class="pill">${esc(typeLabel(type))}</span>
        <span class="pill ${esc(item.evidenceLevel || "low")}">${esc(item.evidenceLevel || "low")}</span>
        <span class="pill ${esc(item.review || "unreviewed")}">${esc(reviewLabel(item.review))}</span>
        <span class="pill">发布 ${esc(shortDate(item.publishedAt))}</span>
        <span class="pill">采集 ${esc(shortDate(item.collectedAt))}</span>
      </div>
      <div class="chips">${entities}</div>
    </article>
  `;
}

function setChrome() {
  const meta = views[state.view];
  $("#viewKicker").textContent = meta.kicker;
  $("#viewTitle").textContent = meta.title;
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === state.view);
  });
}

function populateEntities() {
  const select = $("#entitySelect");
  const grouped = state.data.entities.reduce((acc, entity) => {
    (acc[entity.type] ||= []).push(entity);
    return acc;
  }, {});
  const labels = { company: "公司", technology: "技术", material: "材料", "supply-chain": "产业链" };
  select.innerHTML = Object.entries(labels).map(([type, label]) => {
    const list = grouped[type] || [];
    if (!list.length) return "";
    return `<optgroup label="${label}">${list.map((entity) => `<option value="${esc(entity.id)}">${esc(entity.name)}</option>`).join("")}</optgroup>`;
  }).join("");
  select.value = state.entityId;
}

function renderObjectContext() {
  const entity = selectedEntity();
  if (!entity) {
    $("#objectContext").innerHTML = "";
    return;
  }
  const evidenceCount = filteredEvidence({ entity, limit: 999 }).length;
  $("#objectContext").innerHTML = `
    <article class="object-card">
      <div>
        <div class="chips">
          <span class="chip green">${esc(entity.type)}</span>
          ${(entity.tags || []).slice(0, 7).map((tag) => `<span class="chip">${esc(tag)}</span>`).join("")}
        </div>
        <h3>${esc(entity.name)}</h3>
        <p>${esc(entity.summary || "暂无摘要。")}</p>
      </div>
      <div class="metric-card">
        <span>相关证据</span>
        <strong>${evidenceCount}</strong>
        <p>按实体别名、主题和技术路线匹配</p>
      </div>
    </article>
  `;
}

function renderMetrics() {
  const evidence = state.data.evidence;
  const high = evidence.filter((item) => item.evidenceLevel === "high").length;
  const papers = evidence.filter((item) => evidenceType(item) === "paper").length;
  const patents = evidence.filter((item) => evidenceType(item) === "patent").length;
  const companies = state.data.companies.length;
  return `
    <section class="grid-4">
      <article class="metric-card"><span>证据总量</span><strong>${evidence.length}</strong><p>论文、专利、新闻、视频统一索引</p></article>
      <article class="metric-card"><span>高可信证据</span><strong>${high}</strong><p>公告/高可靠来源优先</p></article>
      <article class="metric-card"><span>论文 / 专利</span><strong>${papers}/${patents}</strong><p>研究与知识产权线索</p></article>
      <article class="metric-card"><span>公司库</span><strong>${companies}</strong><p>按产业链环节分类</p></article>
    </section>
  `;
}

function renderWorldMap() {
  const byId = new Map(globalMapData.regions.map((region) => [region.id, region]));
  const max = Math.max(...globalMapData.regions.map((region) => region.value), 1);
  const legend = Object.entries(stageColors).map(([stage, color]) => `<span><i style="background:${color}"></i>${esc(stage)}</span>`).join("");
  const flows = globalMapData.flows.map((flow) => {
    const from = byId.get(flow.from);
    const to = byId.get(flow.to);
    const dx = to.x - from.x;
    const controlY = Math.min(from.y, to.y) - Math.max(42, Math.min(150, Math.abs(dx) * 0.22));
    const color = stageColors[flow.stage] || "#7f8d88";
    return `
      <path class="flow" d="M${from.x},${from.y} C${from.x + dx * 0.28},${controlY} ${to.x - dx * 0.28},${controlY} ${to.x},${to.y}" stroke="${color}" stroke-width="${1.2 + flow.strength}"></path>
      <text class="flow-label" x="${(from.x + to.x) / 2}" y="${controlY - 6}" text-anchor="middle">${esc(flow.label)}</text>
    `;
  }).join("");
  const nodes = globalMapData.regions.map((region) => {
    const radius = 10 + (region.value / max) * 30;
    const color = region.id === "china" ? stageColors.材料 : region.stages.includes("原料") ? stageColors.原料 : stageColors.电芯;
    return `
      <g>
        <circle cx="${region.x}" cy="${region.y}" r="${radius + 7}" fill="${color}" opacity="0.14"></circle>
        <circle cx="${region.x}" cy="${region.y}" r="${radius}" fill="${color}" fill-opacity="0.86"></circle>
        <text class="node-value" x="${region.x}" y="${region.y + 4}" text-anchor="middle">${region.value}%</text>
        <text class="map-label" x="${region.x}" y="${region.y + radius + 30}" text-anchor="middle">${esc(region.zh)}</text>
      </g>
    `;
  }).join("");
  const cards = globalMapData.regions
    .slice()
    .sort((a, b) => b.value - a.value)
    .map((region) => `
      <article class="region-card">
        <header><div><strong>${esc(region.zh)}</strong><p>${esc(region.name)}</p></div><b>${region.value}%</b></header>
        <p>${esc(region.note)}</p>
        <div class="chips">${region.stages.map((stage) => `<span class="chip">${esc(stage)}</span>`).join("")}</div>
      </article>
    `).join("");
  return `
    <section class="panel map-panel">
      <div class="panel-header">
        <div><h3>全球电池产业链流向图</h3><p>节点大小表示参考份额/产业密度，连线表示原料、材料、电芯、设备和回收等公开线索流向。</p></div>
        <div class="legend">${legend}</div>
      </div>
      <div class="world-map-layout">
        <div class="world-map">
          <svg viewBox="0 0 980 560" role="img" aria-label="全球电池供应链流向地图">
            <ellipse cx="490" cy="285" rx="440" ry="235" fill="#f3f8f6" stroke="#dbe8e2"></ellipse>
            <path class="land" d="M145 210 C190 145 290 135 350 180 C390 210 372 270 325 280 C270 294 225 268 180 292 C135 314 105 270 145 210Z"></path>
            <path class="land" d="M245 330 C300 320 352 360 350 430 C348 495 280 514 240 468 C205 428 205 350 245 330Z"></path>
            <path class="land" d="M465 165 C530 130 625 158 640 220 C652 270 596 300 540 292 C490 286 442 258 420 220 C405 194 427 176 465 165Z"></path>
            <path class="land" d="M560 260 C640 225 775 238 835 300 C890 357 840 438 744 425 C670 416 610 370 555 330 C520 304 525 278 560 260Z"></path>
            <path class="land" d="M735 395 C798 380 858 408 866 455 C874 502 810 512 765 490 C720 468 698 420 735 395Z"></path>
            ${flows}
            ${nodes}
          </svg>
        </div>
        <aside class="region-list">${cards}</aside>
      </div>
    </section>
  `;
}

function renderOverview() {
  const entity = selectedEntity();
  const evidence = filteredEvidence({ entity, limit: 6 });
  $("#viewRoot").innerHTML = `
    ${renderMetrics()}
    <section class="grid-2">
      <article class="panel">
        <div class="panel-header"><h3>当前对象证据摘要</h3><span>${esc(entity?.name || "")}</span></div>
        <div class="evidence-list">${evidence.map(evidenceCard).join("") || '<p class="empty">暂无匹配证据。</p>'}</div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>工作台如何使用</h3><span>Workflow</span></div>
        <div class="list">
          <p><strong>1. 选择对象：</strong>公司、技术、材料或产业链环节。</p>
          <p><strong>2. 看证据：</strong>论文、专利、新闻、视频统一索引，未审核默认只当线索。</p>
          <p><strong>3. 看关系：</strong>公司、技术、材料、供应链和证据之间建立可追踪链条。</p>
          <p><strong>4. 再问 AI：</strong>首版是静态证据问答，后端版再接真正 RAG。</p>
        </div>
      </article>
    </section>
    ${renderWorldMap()}
  `;
}

function renderIntelligence() {
  const items = allFilteredEvidence(60);
  $("#viewRoot").innerHTML = `
    <section class="panel">
      <div class="panel-header"><h3>最新情报流</h3><span>${items.length} 条</span></div>
      <div class="toolbar">
        <label><span>提示</span><input value="使用顶部搜索过滤情报，例如 CATL / 钠离子 / recycling" disabled></label>
        <label><span>论文</span><input value="${items.filter((x) => evidenceType(x) === "paper").length} 条" disabled></label>
        <label><span>专利</span><input value="${items.filter((x) => evidenceType(x) === "patent").length} 条" disabled></label>
        <label><span>新闻/视频</span><input value="${items.filter((x) => ["news", "video"].includes(evidenceType(x))).length} 条" disabled></label>
      </div>
      <div class="evidence-list">${items.map(evidenceCard).join("") || '<p class="empty">没有匹配情报。</p>'}</div>
    </section>
  `;
}

function segmentName(id) {
  return state.data.segments.find((segment) => segment.id === id)?.name || id;
}

function renderCompanies() {
  const companies = state.data.companies
    .filter((company) => !state.search || [company.name, company.segment, company.shareLabel, ...(company.aliases || []), ...(company.technologyRoutes || [])].join(" ").toLowerCase().includes(state.search.toLowerCase()))
    .sort((a, b) => a.segment.localeCompare(b.segment) || a.rank - b.rank);
  const selectedCompany = companyById(state.entityId);
  const detail = selectedCompany || companies[0];
  $("#viewRoot").innerHTML = `
    <section class="grid-2">
      <article class="panel">
        <div class="panel-header"><h3>产业链公司排名</h3><span>${companies.length} 家</span></div>
        <div class="company-list">
          ${companies.slice(0, 40).map((company) => `
            <article class="company-card" data-company-id="${esc(company.id)}">
              <span class="rank">${company.rank}</span>
              <div><strong>${esc(company.name)}</strong><p>${esc(segmentName(company.segment))} · ${esc(company.shareLabel || "")}</p><div class="bar"><i style="width:${Math.min(company.marketShare || 6, 45) * 2}%"></i></div></div>
              <span class="pill ${esc(company.evidenceLevel || "medium")}">${esc(company.marketShare || "-")}%</span>
            </article>
          `).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>公司画像</h3><span>${esc(detail?.name || "请选择")}</span></div>
        ${detail ? `
          <div class="list">
            <p><strong>环节：</strong>${esc(segmentName(detail.segment))}</p>
            <p><strong>市场口径：</strong>${esc(detail.shareLabel)}</p>
            <p><strong>技术路线：</strong>${esc((detail.technologyRoutes || []).join(" / "))}</p>
            <p><strong>客户/关联：</strong>${esc((detail.customers || []).map((id) => companyById(id)?.name || id).join(" / ") || "待补充")}</p>
            <div class="chips">${(detail.aliases || []).map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div>
          </div>` : '<p class="empty">暂无公司数据。</p>'}
      </article>
    </section>
    ${renderCompanyNetwork(detail)}
  `;
}

function renderCompanyNetwork(focusCompany) {
  const focus = focusCompany || state.data.companies[0];
  const relatedIds = new Set([focus?.id]);
  state.data.relations.forEach((relation) => {
    if (relation.source === focus?.id) relatedIds.add(relation.target);
    if (relation.target === focus?.id) relatedIds.add(relation.source);
  });
  const nodes = state.data.companies.filter((company) => relatedIds.has(company.id)).slice(0, 18);
  const positions = nodes.map((company, index) => {
    const angle = (index / Math.max(nodes.length, 1)) * Math.PI * 2;
    const isFocus = company.id === focus?.id;
    return { company, x: isFocus ? 430 : 430 + Math.cos(angle) * 280, y: isFocus ? 260 : 260 + Math.sin(angle) * 180, r: isFocus ? 42 : 26 };
  });
  const pos = new Map(positions.map((item) => [item.company.id, item]));
  const links = state.data.relations.filter((relation) => pos.has(relation.source) && pos.has(relation.target));
  return `
    <section class="panel">
      <div class="panel-header"><h3>公司关系网</h3><span>供应 / 客户 / 合作</span></div>
      <div class="network">
        <svg viewBox="0 0 860 540" role="img" aria-label="公司关系网">
          ${links.map((link) => {
            const a = pos.get(link.source);
            const b = pos.get(link.target);
            return `<path class="net-link" d="M${a.x},${a.y} C${(a.x + b.x) / 2},${a.y - 60} ${(a.x + b.x) / 2},${b.y + 60} ${b.x},${b.y}"></path>`;
          }).join("")}
          ${positions.map(({ company, x, y, r }) => `
            <g class="net-node">
              <circle cx="${x}" cy="${y}" r="${r}" fill="${company.id === focus?.id ? "#16875f" : "#2f70d8"}" opacity="0.88"></circle>
              <text x="${x}" y="${y + r + 22}" text-anchor="middle">${esc(company.name.slice(0, 14))}</text>
            </g>
          `).join("")}
        </svg>
      </div>
    </section>
  `;
}

function renderTechnology() {
  const techs = state.data.entities.filter((entity) => entity.type === "technology");
  $("#viewRoot").innerHTML = `
    <section class="grid-3">
      ${techs.map((tech) => {
        const evidence = filteredEvidence({ entity: tech, limit: 3 });
        return `
          <article class="tech-card">
            <div class="chips">${(tech.tags || []).slice(0, 4).map((tag) => `<span class="chip">${esc(tag)}</span>`).join("")}</div>
            <h3>${esc(tech.name)}</h3>
            <p>${esc(tech.summary)}</p>
            <div class="meta-row"><span class="pill">${evidence.length} 条证据</span><span class="pill medium">${esc((tech.relatedEntityIds || []).length)} 个关联</span></div>
          </article>
        `;
      }).join("")}
    </section>
  `;
}

function renderSupply() {
  const groups = state.data.companies.reduce((acc, company) => {
    (acc[company.segment] ||= []).push(company);
    return acc;
  }, {});
  $("#viewRoot").innerHTML = `
    <section class="grid-2">
      ${Object.entries(groups).map(([segment, list]) => `
        <article class="panel">
          <div class="panel-header"><h3>${esc(segmentName(segment))}</h3><span>Top ${list.length}</span></div>
          <div class="company-list">
            ${list.slice(0, 8).map((company) => `
              <article class="company-card" data-company-id="${esc(company.id)}">
                <span class="rank">${company.rank}</span>
                <div><strong>${esc(company.name)}</strong><p>${esc((company.technologyRoutes || []).join(" / "))}</p></div>
                <span class="pill">${esc(company.marketShare || "-")}%</span>
              </article>
            `).join("")}
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

function renderRecycling() {
  const recyclingEntity = entityById("recycling");
  const items = filteredEvidence({ entity: recyclingEntity, recyclingOnly: true, limit: 18 });
  const companies = state.data.companies.filter((company) => company.segment === "recycling");
  $("#viewRoot").innerHTML = `
    <section class="grid-3">
      ${["梯次利用", "预处理与拆解", "火法回收", "湿法回收", "直接再生", "黑粉资源化"].map((name) => `
        <article class="tech-card"><h3>${name}</h3><p>围绕退役电池安全评估、拆解分选、金属提取、材料修复和闭环再利用建立证据链。</p></article>
      `).join("")}
    </section>
    <section class="grid-2">
      <article class="panel">
        <div class="panel-header"><h3>回收公司</h3><span>${companies.length} 家</span></div>
        <div class="company-list">${companies.map((company) => `<article class="company-card"><span class="rank">${company.rank}</span><div><strong>${esc(company.name)}</strong><p>${esc(company.shareLabel)}</p></div><span class="pill">${esc(company.evidenceLevel)}</span></article>`).join("")}</div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>回收证据</h3><span>${items.length} 条</span></div>
        <div class="evidence-list">${items.map(evidenceCard).join("") || '<p class="empty">暂无回收证据。</p>'}</div>
      </article>
    </section>
  `;
}

function renderEvidence() {
  const items = allFilteredEvidence(100);
  $("#viewRoot").innerHTML = `
    <section class="panel">
      <div class="panel-header"><h3>统一证据库</h3><span>${items.length} 条</span></div>
      <div class="evidence-list">${items.map(evidenceCard).join("") || '<p class="empty">没有匹配证据。</p>'}</div>
    </section>
  `;
}

function renderTrace() {
  const entity = selectedEntity();
  const related = (entity?.relatedEntityIds || []).map(entityById).filter(Boolean).slice(0, 8);
  const evidence = filteredEvidence({ entity, limit: 8 });
  const nodes = [
    { label: entity?.name || "对象", x: 180, y: 260, r: 44, color: "#16875f" },
    ...related.map((item, index) => ({ label: item.name, x: 440, y: 90 + index * 50, r: 25, color: "#2f70d8" })),
    ...evidence.slice(0, 6).map((item, index) => ({ label: `证据 ${index + 1}`, x: 730, y: 120 + index * 58, r: 22, color: item.evidenceLevel === "high" ? "#16875f" : "#c58b20" }))
  ];
  $("#viewRoot").innerHTML = `
    <section class="panel">
      <div class="panel-header"><h3>${esc(entity?.name || "")} 来源追踪</h3><span>实体 → 技术/材料 → 证据</span></div>
      <div class="network">
        <svg viewBox="0 0 900 560" role="img" aria-label="来源追踪图">
          ${nodes.slice(1).map((node, index) => `<path class="net-link" d="M224,260 C330,${260} 340,${node.y} ${node.x - node.r},${node.y}"></path>`).join("")}
          ${nodes.map((node) => `<g class="net-node"><circle cx="${node.x}" cy="${node.y}" r="${node.r}" fill="${node.color}" opacity="0.9"></circle><text x="${node.x}" y="${node.y + node.r + 21}" text-anchor="middle">${esc(node.label.slice(0, 16))}</text></g>`).join("")}
        </svg>
      </div>
    </section>
    <section class="panel">
      <div class="panel-header"><h3>引用证据</h3><span>${evidence.length} 条</span></div>
      <div class="evidence-list">${evidence.map(evidenceCard).join("") || '<p class="empty">暂无证据。</p>'}</div>
    </section>
  `;
}

function buildAnswer(question) {
  const entity = selectedEntity();
  const evidence = filteredEvidence({ entity, limit: 6 });
  const types = evidence.reduce((acc, item) => {
    const type = evidenceType(item);
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});
  const confidence = evidence.some((item) => item.evidenceLevel === "high") ? 82 : evidence.length >= 3 ? 68 : 45;
  return `
    <article class="answer">
      <h4>${esc(entity?.name || "当前对象")}：结构化回答</h4>
      <p>问题：${esc(question || "这个对象的技术来源和最新证据是什么？")}</p>
      <p>当前检索到 ${evidence.length} 条相关证据，证据类型分布为 ${esc(Object.entries(types).map(([k, v]) => `${typeLabel(k)} ${v}`).join(" / ") || "暂无")}。静态置信度约 ${confidence}%，未审核线索需要继续人工确认。</p>
      <p>${esc(entity?.summary || "")}</p>
      <h4>引用</h4>
      <ol>${evidence.map((item, index) => `<li><a href="${esc(item.sourceUrl || item.url)}" target="_blank" rel="noreferrer">[${index + 1}] ${esc(item.title)}</a> · ${esc(typeLabel(evidenceType(item)))} · ${esc(shortDate(item.publishedAt || item.collectedAt))}</li>`).join("") || "<li>暂无可引用证据。</li>"}</ol>
    </article>
  `;
}

function renderAi() {
  const entity = selectedEntity();
  const evidence = filteredEvidence({ entity, limit: 6 });
  $("#viewRoot").innerHTML = `
    <section class="ai-layout">
      <article class="panel ai-box">
        <div class="panel-header"><h3>证据驱动问答</h3><span>首版静态 RAG</span></div>
        <label><span>你的问题</span><input id="questionInput" value="${esc(entity?.name || "该对象")} 的技术来源和最新证据是什么？"></label>
        <button class="nav-item is-active" id="askButton" type="button"><span>生成回答</span><small>with citations</small></button>
        <div id="answerBox">${buildAnswer("")}</div>
      </article>
      <aside class="panel">
        <div class="panel-header"><h3>当前检索上下文</h3><span>${evidence.length} 条</span></div>
        <div class="list">
          <p><strong>对象：</strong>${esc(entity?.name || "")}</p>
          <p><strong>类型：</strong>${esc(entity?.type || "")}</p>
          <p><strong>证据策略：</strong>优先论文、专利、公告；新闻和视频默认只是线索。</p>
          <p><strong>限制：</strong>当前不联网实时问答，不调用大模型 API。</p>
        </div>
      </aside>
    </section>
  `;
  $("#askButton").addEventListener("click", () => {
    $("#answerBox").innerHTML = buildAnswer($("#questionInput").value);
  });
}

function renderBackend() {
  $("#viewRoot").innerHTML = `
    <section class="panel">
      <div class="panel-header"><h3>哪些功能需要后端？</h3><span>架构判断</span></div>
      <p>当前 GitHub Pages + JSON 适合展示、筛选、地图、关系图和静态证据问答。凡是涉及密钥、安全、上传、数据库、多人审核、实时任务和真正 AI 生成，都应进入后端。</p>
    </section>
    <section class="backend-grid">
      ${backendPlan.map((item) => `
        <article class="backend-card ${item.level}">
          <div class="meta-row"><span class="pill ${item.level === "yes" ? "high" : "medium"}">${esc(item.need)}</span></div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.text)}</p>
        </article>
      `).join("")}
    </section>
  `;
}

function render() {
  setChrome();
  renderObjectContext();
  const renderers = {
    overview: renderOverview,
    intelligence: renderIntelligence,
    companies: renderCompanies,
    technology: renderTechnology,
    supply: renderSupply,
    recycling: renderRecycling,
    evidence: renderEvidence,
    trace: renderTrace,
    ai: renderAi,
    backend: renderBackend
  };
  renderers[state.view]();
}

async function init() {
  const [entities, evidence, companies, metadata] = await Promise.all([
    loadJson("data/entities.json", { entities: [] }),
    loadJson("data/evidence-index.json", { items: [] }),
    loadJson("data/companies.json", { companies: [], segments: [], relations: [] }),
    loadJson("data/metadata.json", null)
  ]);
  state.data.entities = entities.entities || [];
  state.data.evidence = evidence.items || [];
  state.data.companies = companies.companies || [];
  state.data.segments = companies.segments || [];
  state.data.relations = companies.relations || [];
  state.data.metadata = metadata;
  if (!entityById(state.entityId)) state.entityId = state.data.entities[0]?.id || "";
  populateEntities();
  render();
}

document.querySelectorAll(".nav-item[data-view]").forEach((button) => {
  button.addEventListener("click", () => {
    state.view = button.dataset.view;
    render();
  });
});

$("#entitySelect").addEventListener("change", (event) => {
  state.entityId = event.target.value;
  render();
});

$("#globalSearch").addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  render();
});

document.addEventListener("click", (event) => {
  const companyCard = event.target.closest("[data-company-id]");
  if (!companyCard) return;
  const company = companyById(companyCard.dataset.companyId);
  const entity = entityById(company?.id);
  if (entity) {
    state.entityId = entity.id;
    $("#entitySelect").value = entity.id;
  }
  state.view = "companies";
  render();
});

init();
