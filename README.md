# 锂/钠电池技术学习图谱

这是一个面向行业小白和高校实验室学生的电池技术学习网站。页面采用类似 NotebookLM 思维导图的交互方式：从左侧知识节点进入，右侧展示机理图、学习要点、研究问题、指标判断、资料链接和视频入口。

## 当前功能

- 机理板块：覆盖锂电池组成、正极、负极、隔膜、电解液/电解质、集流体、粘结剂、封装、BMS、热管理、快充、钠离子、干法电极等主题。
- 前沿板块：按 CATL、BYD、Tesla 等公司路线理解行业技术状态。
- 新闻板块：整理官方发布、论文/专利入口、视频入口和新闻跟踪方法。
- 专业词汇：正文中的 SOC、SOH、SEI、C-rate、N/P ratio 等术语可点击跳转到词汇解释。
- 图解模块：每个主要机理和现状主题都有对应的示意图或动态图解区。
- 自动更新情报：通过 GitHub Actions 定期生成 `data/*.json`，网页在 GitHub Pages 上自动读取最新论文、新闻、视频入口和专利检索线索。
- 情报中心：自动采集内容会被统一成数据卡片，支持按主题、类型、审核状态和关键词筛选，并和当前知识图谱词条联动。

## 本地预览

直接双击 `index.html` 可以查看静态内容，但浏览器通常会阻止 `file://` 页面读取 `data/*.json`。要预览自动更新区，请运行：

```bash
npm run serve
```

如果本机没有配置 `npm`，也可以直接运行：

```bash
node server.js
```

然后打开：

```text
http://localhost:4173
```

## 第一阶段工作流：GitHub Pages + GitHub Actions

1. 把本项目推送到 GitHub 仓库。
2. 在 GitHub 仓库页面进入 `Settings -> Pages`。
3. `Build and deployment` 选择 `Deploy from a branch`。
4. 分支选择 `main`，目录选择 `/root`，保存。
5. 进入 `Actions`，手动运行 `Update battery research data`。
6. 运行成功后，GitHub Actions 会更新并提交 `data/*.json`。
7. GitHub Pages 页面会读取这些 JSON，在网页底部“自动更新情报”区显示最新条目。

自动更新配置在：

- `.github/workflows/update-data.yml`
- `scripts/update-data.mjs`
- `data/papers.json`
- `data/news.json`
- `data/videos.json`
- `data/patents.json`
- `data/metadata.json`

## 数据来源

- 论文：OpenAlex API，按电池关键主题检索 2025 年以来论文。
- 新闻：Google News RSS，按 CATL、BYD、Tesla、钠离子、固态电池等关键词检索。
- 视频：生成 YouTube 检索入口，方便人工筛选高质量视频。
- 专利：生成 Google Patents 检索入口，方便持续跟踪企业技术布局。

注意：自动抓取结果是“线索”，不是结论。重要内容仍需要人工复核原文、发布日期、测试条件和证据等级。

## 第二阶段数据字段

`data/*.json` 中的每条线索会尽量包含：

- `topics`：快充、钠离子、固态电池、干法电极、隔膜、电解液、BMS、热管理等主题。
- `companies`：CATL、BYD、Tesla 等企业标签。
- `technologyRoutes`：LFP、NCM/NCA、LMFP、CTP/CTB、4680、钠电硬碳等路线。
- `evidenceLevel`：`high`、`medium`、`low`，用于提醒证据强弱。
- `review`：`unreviewed`、`reviewed`、`important`、`discarded`，默认是未审核线索。

## 后续升级方向

- 把 `app.js` 中的静态知识节点迁移到结构化 JSON，方便长期维护。
- 增加人工审核字段，例如 `可信度`、`证据等级`、`是否已读原文`、`适合板块`。
- 增加 DOI 摘要、引用数、期刊分区、机构/企业标签。
- 增加更细的公司跟踪：CATL、BYD、Tesla、LG Energy Solution、Panasonic、Samsung SDI、Northvolt、Toyota 等。
- 增加可视化机制动画：离子迁移、SEI 生成、析锂、热失控链式反应、钠离子硬碳储钠。
