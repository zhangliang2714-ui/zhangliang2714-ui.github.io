const sections = {
  overview: {
    label: "总览首页",
    roots: [
      {
        id: "overview-root",
        title: "电池行业知识库总览",
        tag: "入口",
        difficulty: "学习路径",
        summary: "从总览进入学习、技术、公司、市场和情报五条路径：先理解机理，再判断技术路线，最后用公司与数据验证行业格局。",
        beginnerGuide: [
          { title: "小白入口", text: "先看机理学习，建立材料、界面、制造和系统四层框架。" },
          { title: "行业入口", text: "再看公司与产业链，理解电池厂、材料厂、设备厂和回收公司的位置。" },
          { title: "跟踪入口", text: "最后看情报中心，把新闻、论文、视频和专利当作待审核线索。" }
        ],
        keyPoints: [
          "机理学习回答：为什么电池会有能量密度、快充、安全和寿命差异。",
          "前沿技术回答：哪些路线正在推进，难点在哪里，哪些公司在布局。",
          "公司与可视化回答：谁处在产业链哪个环节，份额、客户和供应关系如何。"
        ],
        researchQuestions: [
          "某家公司声称的技术领先，是否有论文、专利、量产客户或出货量证据支撑？",
          "某个市场份额排名的统计口径，是全球、中国、动力、储能，还是某一材料细分品类？"
        ],
        progress: [
          {
            title: "网站结构已按学习路径重排",
            date: "整理：2026-05-10",
            evidence: "站内结构",
            level: "high",
            text: "总览负责导航，机理负责学习，前沿负责技术路线，公司负责产业链，可视化负责市场格局，情报负责动态跟踪。"
          }
        ],
        sources: [
          { label: "SNE Research", url: "https://www.sneresearch.com/en/", date: "入口：2026-05-10" },
          { label: "Google Scholar battery research", url: "https://scholar.google.com/scholar?q=lithium+sodium+battery+research", date: "检索：2026-05-10" },
          { label: "Google Patents battery search", url: "https://patents.google.com/?q=battery", date: "检索：2026-05-10" }
        ],
        videos: [
          { label: "YouTube: battery industry explained", url: "https://www.youtube.com/results?search_query=battery+industry+explained+CATL+BYD+Tesla", date: "检索：2026-05-10" }
        ]
      }
    ]
  },
  mechanism: {
    label: "机理板块",
    roots: [
      {
        id: "mechanism-root",
        title: "电池机理学习路径",
        tag: "总览",
        difficulty: "入门",
        summary: "从材料、电极、电解液、界面和失效机制理解锂/钠电池，而不是只记住企业宣传参数。",
        keyPoints: [
          "电池性能由正极、负极、电解液、隔膜、集流体和结构件共同决定。",
          "快充不是单一指标，要同时看析锂、温升、极化、电解液稳定性和循环寿命。",
          "钠离子和锂离子共享摇椅式电池框架，但离子半径、溶剂化、硬碳储钠和水分敏感性会带来不同瓶颈。"
        ],
        researchQuestions: [
          "如何把企业发布的快充时间转化为倍率、温度、SOC窗口和寿命问题？",
          "哪些测试条件会让同一个电芯表现出完全不同的循环寿命？"
        ],
        progress: [
          {
            title: "建议先建立材料-结构-制造-系统四层模型",
            date: "学习方法",
            evidence: "框架",
            level: "high",
            text: "用四层模型读论文和公司发布会：材料决定上限，结构释放空间，制造决定一致性，系统集成决定安全和成本。"
          }
        ],
        sources: [
          { label: "Nature Energy - battery research", url: "https://www.nature.com/nenergy/" },
          { label: "Google Scholar: lithium ion fast charging", url: "https://scholar.google.com/scholar?q=lithium+ion+battery+fast+charging+mechanism" }
        ],
        videos: [
          { label: "YouTube: lithium ion battery mechanism", url: "https://www.youtube.com/results?search_query=lithium+ion+battery+mechanism" }
        ],
        children: [
          {
            id: "glossary",
            title: "专业词汇 Glossary",
            tag: "词汇",
            difficulty: "入门",
            summary: "电池论文、企业发布和测试报告里常见的中英文术语表。点击正文中的术语链接，会跳到这里查看解释。",
            beginnerGuide: [
              { title: "怎么用", text: "先记住 SOC、SOH、C-rate、SEI、ICE、N/P、面容量、热失控这些高频词。它们是读论文和看产业新闻的入口。" },
              { title: "学习顺序", text: "先学状态量和测试条件，再学界面与传输，最后学材料体系和系统集成缩写。" },
              { title: "读新闻提醒", text: "看到快充、寿命、安全、能量密度等说法时，先找对应术语和测试条件，避免只看宣传结论。" }
            ],
            keyPoints: [
              "状态量：SOC、SOH、SOP、DoD、OCV、CC-CV 是理解测试和整车使用的基础。",
              "电化学：SEI、CEI、ICE、C-rate、极化、过电位、析锂、枝晶是理解机理的高频词。",
              "工程量：N/P 比、面容量、载量、孔隙率、压实密度、水分、良率决定实验室结果能否走向产业。"
            ],
            researchQuestions: [
              "论文中的容量和循环寿命，是在多高载量、多大面容量、什么温度和什么 C-rate 下测出来的？",
              "企业宣传中的快充时间，对应的 SOC 窗口、温度、寿命和安全边界是什么？"
            ],
            metrics: [
              { title: "优先掌握", text: "SOC、SOH、C-rate、SEI、ICE、N/P ratio、Areal capacity、Thermal runaway。" },
              { title: "论文阅读", text: "重点核查测试条件：温度、倍率、面容量、截止电压、循环制度、是否全电池。" },
              { title: "产业判断", text: "只给单一指标通常不够。需要把性能、成本、安全、良率和规模化证据放在一起看。" }
            ],
            glossary: [
              { id: "soc", term: "SOC", en: "State of Charge", zh: "荷电状态", text: "表示电池当前剩余电量占可用容量的比例，常用百分比表示。10%-80% 快充就是一个 SOC 窗口。" },
              { id: "soh", term: "SOH", en: "State of Health", zh: "健康状态", text: "表示电池相对新电池的衰减程度，通常与容量保持率、内阻增长和功率能力有关。" },
              { id: "sop", term: "SOP", en: "State of Power", zh: "功率状态", text: "表示电池在当前温度、SOC 和老化状态下还能安全输出或接受多少功率。" },
              { id: "dod", term: "DoD", en: "Depth of Discharge", zh: "放电深度", text: "表示一次放电消耗了多少容量。100% DoD 比浅循环更严苛，寿命通常更短。" },
              { id: "ocv", term: "OCV", en: "Open Circuit Voltage", zh: "开路电压", text: "电池静置无电流时的电压，可用于估算 SOC 和理解平台电压。" },
              { id: "cc-cv", term: "CC-CV", en: "Constant Current - Constant Voltage", zh: "恒流恒压充电", text: "锂电常用充电制度：先恒流充电，达到截止电压后恒压，电流逐渐下降。" },
              { id: "c-rate", term: "C-rate", en: "Charge/discharge rate", zh: "倍率", text: "电流相对电池容量的倍率。1C 理论上 1 小时充满或放完，5C 理论上约 12 分钟。" },
              { id: "capacity-retention", term: "Capacity retention", en: "Capacity retention", zh: "容量保持率", text: "循环后剩余容量占初始容量的比例，是寿命评价的常用指标。" },
              { id: "coulombic-efficiency", term: "Coulombic efficiency", en: "Coulombic efficiency", zh: "库仑效率", text: "一次循环中放电容量与充电容量的比值，反映副反应和不可逆损失。" },
              { id: "ice", term: "ICE", en: "Initial Coulombic Efficiency", zh: "首次库仑效率", text: "首圈放电容量/充电容量。硅碳、硬碳等体系首效较低会消耗活性锂/钠。" },
              { id: "sei", term: "SEI", en: "Solid Electrolyte Interphase", zh: "固态电解质界面膜", text: "负极表面由电解液分解形成的钝化膜。好的 SEI 允许离子通过、阻止电子继续还原电解液。" },
              { id: "cei", term: "CEI", en: "Cathode Electrolyte Interphase", zh: "正极电解质界面膜", text: "正极表面的界面膜，高电压正极中尤其重要，影响金属溶出、气体和高温寿命。" },
              { id: "li-plating", term: "Lithium plating", en: "Lithium plating", zh: "析锂", text: "充电时 Li+ 没有嵌入负极，而以金属锂沉积在表面。低温、高 SOC、高倍率下风险升高。" },
              { id: "dendrite", term: "Dendrite", en: "Dendrite", zh: "枝晶", text: "金属锂或金属钠不均匀沉积形成的针状/树枝状结构，可能刺穿隔膜导致短路。" },
              { id: "polarization", term: "Polarization", en: "Polarization", zh: "极化", text: "电池在电流下电压偏离平衡电压的现象，来自欧姆阻抗、传荷阻抗和浓差极化。" },
              { id: "overpotential", term: "Overpotential", en: "Overpotential", zh: "过电位", text: "驱动电极反应所需的额外电势。过电位过大会增加析锂、副反应和发热风险。" },
              { id: "eis", term: "EIS", en: "Electrochemical Impedance Spectroscopy", zh: "电化学阻抗谱", text: "用小扰动交流信号分析电池欧姆阻抗、界面阻抗、扩散等过程的表征方法。" },
              { id: "diffusion", term: "Diffusion coefficient", en: "Diffusion coefficient", zh: "扩散系数", text: "描述离子在材料或电解液中扩散快慢的参数，影响倍率性能和浓差极化。" },
              { id: "ionic-conductivity", term: "Ionic conductivity", en: "Ionic conductivity", zh: "离子电导率", text: "离子在电解液、固态电解质或隔膜孔道中传输能力的指标。" },
              { id: "electronic-conductivity", term: "Electronic conductivity", en: "Electronic conductivity", zh: "电子电导率", text: "电子在活性材料、导电剂网络和集流体中传输能力的指标。" },
              { id: "n-p-ratio", term: "N/P ratio", en: "Negative/Positive capacity ratio", zh: "负正极容量比", text: "负极容量与正极容量的设计比值。过低易析锂，过高会牺牲能量密度。" },
              { id: "areal-capacity", term: "Areal capacity", en: "Areal capacity", zh: "面容量", text: "单位面积极片容量，常用 mAh/cm²。产业条件通常比实验室低载量扣电更严苛。" },
              { id: "mass-loading", term: "Mass loading", en: "Mass loading", zh: "载量", text: "单位面积活性材料质量，常用 mg/cm²。载量高更接近产业，但传输和极化更难。" },
              { id: "porosity", term: "Porosity", en: "Porosity", zh: "孔隙率", text: "极片或隔膜中孔隙体积分数，影响电解液浸润、离子传输和压实密度。" },
              { id: "tortuosity", term: "Tortuosity", en: "Tortuosity", zh: "曲折度", text: "离子在多孔电极中实际路径相对直线距离的复杂程度，越高传输越困难。" },
              { id: "electrolyte-wetting", term: "Electrolyte wetting", en: "Electrolyte wetting", zh: "电解液浸润", text: "电解液进入极片和隔膜孔道的过程，影响化成、内阻、倍率和寿命。" },
              { id: "thermal-runaway", term: "Thermal runaway", en: "Thermal runaway", zh: "热失控", text: "电池内部放热反应自加速，导致温度快速上升、产气、起火甚至爆炸的安全事故链条。" },
              { id: "bms", term: "BMS", en: "Battery Management System", zh: "电池管理系统", text: "监测电压、电流、温度，估算 SOC/SOH/SOP，并执行保护和均衡策略。" },
              { id: "ctp", term: "CTP", en: "Cell to Pack", zh: "无模组电池包", text: "电芯直接集成到电池包，减少模组结构，提高空间利用率和成组效率。" },
              { id: "ctb", term: "CTB", en: "Cell to Body", zh: "电池车身一体化", text: "电池包进一步作为车身结构的一部分，提高结构效率，但维修和安全设计更复杂。" },
              { id: "lfp", term: "LFP", en: "Lithium Iron Phosphate", zh: "磷酸铁锂", text: "低成本、高安全、长寿命的正极体系，能量密度低于高镍三元，但非常适合规模化。" },
              { id: "ncm", term: "NCM", en: "Nickel Cobalt Manganese cathode", zh: "镍钴锰三元", text: "高能量密度正极体系，镍含量越高容量潜力越高，但稳定性和安全管理更难。" },
              { id: "nca", term: "NCA", en: "Nickel Cobalt Aluminum cathode", zh: "镍钴铝三元", text: "高能量密度正极体系之一，常用于高续航场景，对热管理和安全要求高。" },
              { id: "lmfp", term: "LMFP", en: "Lithium Manganese Iron Phosphate", zh: "磷酸锰铁锂", text: "在 LFP 基础上引入 Mn 提高电压平台，目标是在成本、安全和能量密度之间折中。" },
              { id: "hard-carbon", term: "Hard carbon", en: "Hard carbon", zh: "硬碳", text: "钠离子电池主流负极，储钠机制包括缺陷吸附、层间嵌入和纳米孔填充。" },
              { id: "prussian-blue", term: "Prussian blue", en: "Prussian blue analogues", zh: "普鲁士蓝类材料", text: "钠离子电池正极候选材料之一，结构开放、成本潜力好，但水分、缺陷和循环稳定性需控制。" },
              { id: "lib", term: "LIB", en: "Lithium-ion Battery", zh: "锂离子电池", text: "以 Li+ 在正负极之间嵌入/脱出为核心的可充电电池，是当前动力电池主流。" },
              { id: "sib", term: "SIB", en: "Sodium-ion Battery", zh: "钠离子电池", text: "以 Na+ 作为载流离子的电池体系，资源成本和低温潜力好，能量密度通常低于锂电。" },
              { id: "assb", term: "ASSB", en: "All-Solid-State Battery", zh: "全固态电池", text: "用固态电解质替代液态电解液的电池路线，潜在安全和能量密度高，但界面和制造挑战大。" }
            ],
            progress: [
              {
                title: "词汇表已按学习优先级整理",
                date: "整理时间：2026-05-09",
                evidence: "学习工具",
                level: "high",
                text: "后续新增论文、新闻或公司技术节点时，正文中的高频术语会自动链接到这里。"
              }
            ],
            sources: [
              { label: "Google Scholar: lithium ion battery glossary terms", url: "https://scholar.google.com/scholar?q=lithium+ion+battery+glossary+SOC+SOH+SEI+C-rate", date: "检索：2026-05-09" },
              { label: "Battery University: battery definitions", url: "https://batteryuniversity.com/", date: "访问入口：2026-05-09" }
            ],
            videos: [
              { label: "YouTube: battery SOC SOH SEI explained", url: "https://www.youtube.com/results?search_query=battery+SOC+SOH+SEI+C-rate+explained", date: "检索：2026-05-09" }
            ]
          },
          {
            id: "cell-components",
            title: "锂电池组成全图",
            tag: "组成",
            difficulty: "入门",
            summary: "锂离子电池不是只有正负极材料，还包括隔膜、电解液/电解质、集流体、粘结剂、导电剂、壳体、极耳、安全阀和热管理相关结构。",
            keyPoints: [
              "从单体电芯看，核心组成是正极、负极、隔膜、电解液、集流体、粘结剂、导电剂、极耳和封装壳体。",
              "从电池包看，还要加入模组/无模组结构、汇流排、冷却板、导热材料、BMS、熔断保护和热失控防护。",
              "不同形态的电池有不同封装：圆柱多用钢壳，方形多用铝壳，软包多用铝塑膜。"
            ],
            researchQuestions: [
              "同一种正负极材料，为什么换隔膜、电解液或封装后安全性和寿命会明显变化？",
              "高校实验室做扣电或软包时，哪些组成件最容易被忽略但会强烈影响结果？"
            ],
            progress: [
              {
                title: "组成件学习建议：先按电芯剖面建立空间关系",
                date: "学习路径，整理时间：2026-05-09",
                evidence: "学习框架",
                level: "high",
                text: "建议把电芯拆成活性材料层、孔隙电解液、隔膜、集流体、极耳和封装层，再理解离子、电子、热量和气体分别怎样运动。"
              }
            ],
            sources: [
              { label: "Google Scholar: lithium ion battery components review", url: "https://scholar.google.com/scholar?q=lithium+ion+battery+components+separator+electrolyte+current+collector+review", date: "检索：2026-05-09" },
              { label: "ScienceDirect search: lithium-ion battery components", url: "https://www.sciencedirect.com/search?qs=lithium-ion%20battery%20components%20separator%20electrolyte", date: "检索：2026-05-09" }
            ],
            videos: [
              { label: "YouTube: lithium ion battery cell components", url: "https://www.youtube.com/results?search_query=lithium+ion+battery+cell+components", date: "检索：2026-05-09" },
              { label: "YouTube: lithium ion battery manufacturing process", url: "https://www.youtube.com/results?search_query=lithium+ion+battery+manufacturing+process", date: "检索：2026-05-09" }
            ],
            children: [
              {
                id: "cathode-materials",
                title: "正极材料：LFP / NCM / LMFP",
                tag: "正极",
                difficulty: "入门",
                summary: "正极材料决定电池电压平台、容量上限、成本、安全和资源约束，是动力电池技术路线差异最大的部分之一。",
                beginnerGuide: [
                  { title: "它是什么", text: "正极是放电时接受电子、释放锂离子的电极；常见体系包括磷酸铁锂 LFP、三元 NCM/NCA、锰铁锂 LMFP。" },
                  { title: "为什么重要", text: "正极通常决定电池的能量密度上限和成本结构，也是热稳定性和资源供应风险的核心来源。" },
                  { title: "小白怎么判断", text: "看车型说 LFP 多半偏安全和成本；说高镍三元多半偏高能量密度；说 LMFP 多半是在 LFP 基础上提升电压和能量。" }
                ],
                keyPoints: [
                  "LFP：成本低、热稳定好、寿命长，但电压和能量密度低于高镍三元，是中国动力电池规模化主线。",
                  "NCM/NCA：能量密度高，适合长续航和高端车型，但热稳定、镍钴资源、成本和安全管理要求更高。",
                  "LMFP：在 LFP 中引入 Mn 提高电压平台，理论上提升能量密度，但电子/离子导电性和 Mn 溶出需要解决。"
                ],
                researchQuestions: [
                  "为什么 LFP 安全性好，但快充时仍然可能受负极析锂限制？",
                  "高镍三元如何通过包覆、掺杂和电解液 CEI 稳定来降低副反应？"
                ],
                metrics: [
                  { title: "看什么指标", text: "比容量、压实密度、电压平台、热稳定性、倍率、循环寿命、金属溶出和成本/吨。" },
                  { title: "行业现状", text: "截至 2026-05-09，LFP 在中国电动车和储能中极强势；高镍三元仍用于高能量密度场景；LMFP 处于加速导入和验证阶段。" },
                  { title: "产业判断", text: "正极路线不是谁取代谁，而是按成本、安全、续航、快充和供应链约束分场景共存。" }
                ],
                progress: [
                  {
                    title: "LFP 超充和 LMFP 升级是正极侧重要产业方向",
                    date: "现状整理：2026-05-09",
                    evidence: "行业趋势",
                    level: "medium",
                    text: "LFP 正在通过颗粒、导电网络、电解液和系统热管理提升快充；LMFP 试图在保持低成本和安全性的同时提高电压平台。"
                  }
                ],
                sources: [
                  { label: "Google Scholar: LFP cathode fast charging review", url: "https://scholar.google.com/scholar?q=LFP+cathode+fast+charging+review", date: "检索：2026-05-09" },
                  { label: "Google Scholar: LMFP cathode lithium ion battery review", url: "https://scholar.google.com/scholar?q=LMFP+cathode+lithium+ion+battery+review", date: "检索：2026-05-09" },
                  { label: "Google Scholar: high nickel NCM cathode degradation review", url: "https://scholar.google.com/scholar?q=high+nickel+NCM+cathode+degradation+review", date: "检索：2026-05-09" }
                ],
                videos: [
                  { label: "YouTube: LFP vs NCM battery explained", url: "https://www.youtube.com/results?search_query=LFP+vs+NCM+battery+explained", date: "检索：2026-05-09" }
                ]
              },
              {
                id: "anode-materials",
                title: "负极材料：石墨 / 硅碳 / 硬碳",
                tag: "负极",
                difficulty: "入门",
                summary: "负极材料决定快充析锂风险、首效、膨胀、低温和寿命；锂电以石墨为主，硅碳提升容量，钠电以硬碳为主。",
                beginnerGuide: [
                  { title: "它是什么", text: "负极是充电时接收锂离子或钠离子的电极。锂电主流是石墨，想提高容量会加入硅；钠离子多用硬碳。" },
                  { title: "为什么重要", text: "快充是否析锂、循环是否掉得快、首圈损失多少，很多都卡在负极和 SEI。" },
                  { title: "小白怎么判断", text: "看到快充宣传，要马上想到负极析锂；看到高能量密度，要问硅含量、膨胀和循环寿命。" }
                ],
                keyPoints: [
                  "石墨负极成熟、成本低、首效高，但低温和高倍率下容易因极化导致析锂。",
                  "硅碳负极容量高，但体积膨胀、粉化、SEI 反复破裂和产气是关键问题。",
                  "硬碳是钠离子电池主流负极，关键难点是首效、平台容量、孔结构、水分和一致性。"
                ],
                researchQuestions: [
                  "快充时负极电位为什么可能降到 0 V 以下并触发析锂？",
                  "硅碳负极如何通过粘结剂、电解液添加剂和预锂化改善寿命？"
                ],
                metrics: [
                  { title: "看什么指标", text: "克容量、首效、膨胀率、倍率、析锂窗口、SEI 阻抗、低温性能和循环保持率。" },
                  { title: "行业现状", text: "石墨仍是锂电主流；硅碳逐步提高掺量；硬碳随钠离子产业化进入更强工程验证。" },
                  { title: "产业判断", text: "负极不是只看容量，快充、安全、产气和寿命往往比理论容量更决定能否上车。" }
                ],
                progress: [
                  {
                    title: "快充和高能量密度同时推动负极升级",
                    date: "现状整理：2026-05-09",
                    evidence: "研究趋势",
                    level: "medium",
                    text: "石墨快充需要孔结构和界面优化；硅碳需要解决膨胀与 SEI；硬碳则随钠电验证首效和成本。"
                  }
                ],
                sources: [
                  { label: "Google Scholar: graphite anode fast charging lithium plating review", url: "https://scholar.google.com/scholar?q=graphite+anode+fast+charging+lithium+plating+review", date: "检索：2026-05-09" },
                  { label: "Google Scholar: silicon carbon anode lithium ion battery review", url: "https://scholar.google.com/scholar?q=silicon+carbon+anode+lithium+ion+battery+review", date: "检索：2026-05-09" },
                  { label: "Google Scholar: hard carbon sodium ion battery review", url: "https://scholar.google.com/scholar?q=hard+carbon+sodium+ion+battery+review", date: "检索：2026-05-09" }
                ],
                videos: [
                  { label: "YouTube: graphite silicon anode explained", url: "https://www.youtube.com/results?search_query=graphite+silicon+anode+lithium+ion+battery+explained", date: "检索：2026-05-09" }
                ]
              },
              {
                id: "separator",
                title: "隔膜 Separator",
                tag: "安全",
                difficulty: "进阶",
                summary: "隔膜在正负极之间提供物理隔离，同时允许锂离子通过，是影响安全、倍率、寿命和一致性的关键薄膜材料。",
                keyPoints: [
                  "主流隔膜基材是 PE、PP 或 PP/PE/PP 多层聚烯烃，关键指标包括厚度、孔径、孔隙率、透气度、热收缩和穿刺强度。",
                  "陶瓷涂覆隔膜用 Al2O3、勃姆石等提高热稳定性和润湿性，但会增加成本和界面阻抗。",
                  "隔膜闭孔温度、破膜温度和热收缩决定热滥用时正负极是否会直接短路。"
                ],
                researchQuestions: [
                  "隔膜孔径和孔隙率如何同时影响倍率性能和枝晶穿刺风险？",
                  "陶瓷涂覆提高安全性时，为什么可能牺牲一部分能量密度或倍率性能？"
                ],
                progress: [
                  {
                    title: "湿法隔膜与陶瓷涂覆仍是动力电池主流安全路线之一",
                    date: "行业常识，更新：2026-05-09",
                    evidence: "工程共识",
                    level: "medium",
                    text: "高镍、快充和高能量密度体系通常更重视隔膜的热稳定性、润湿性和机械强度。"
                  }
                ],
                sources: [
                  { label: "Google Scholar: lithium ion battery separator review", url: "https://scholar.google.com/scholar?q=lithium+ion+battery+separator+review+thermal+shutdown+ceramic+coating", date: "检索：2026-05-09" },
                  { label: "ScienceDirect search: battery separator thermal shutdown", url: "https://www.sciencedirect.com/search?qs=battery%20separator%20thermal%20shutdown", date: "检索：2026-05-09" }
                ],
                videos: [
                  { label: "YouTube: lithium battery separator explained", url: "https://www.youtube.com/results?search_query=lithium+battery+separator+explained", date: "检索：2026-05-09" }
                ]
              },
              {
                id: "electrolyte",
                title: "电解液与电解质",
                tag: "界面",
                difficulty: "进阶",
                summary: "电解液负责离子传导，并参与 SEI/CEI 界面形成；它决定低温、高压、快充、安全和寿命的很多边界条件。",
                keyPoints: [
                  "常见锂盐包括 LiPF6、LiFSI、LiTFSI 等，常见溶剂包括 EC、EMC、DMC、DEC 等碳酸酯体系。",
                  "添加剂如 VC、FEC、LiDFOB、硫酸酯/磺酸酯类会影响 SEI、CEI、产气、高压稳定和循环寿命。",
                  "固态电解质可分为硫化物、氧化物、聚合物和卤化物，核心难点是界面接触、枝晶、空气稳定性和制造成本。"
                ],
                researchQuestions: [
                  "为什么 FEC 常用于硅碳和部分钠离子体系，但也可能带来产气或阻抗问题？",
                  "液态电解液的电导率高，为什么高倍率下仍会出现浓差极化？"
                ],
                progress: [
                  {
                    title: "快充和高压体系继续推动电解液添加剂与锂盐体系迭代",
                    date: "趋势判断，更新：2026-05-09",
                    evidence: "研究趋势",
                    level: "medium",
                    text: "高电压正极、硅碳负极、低温快充和钠离子体系都对电解液提出更强的界面成膜与副反应控制要求。"
                  }
                ],
                sources: [
                  { label: "Google Scholar: electrolyte additives lithium ion battery SEI CEI review", url: "https://scholar.google.com/scholar?q=electrolyte+additives+lithium+ion+battery+SEI+CEI+review", date: "检索：2026-05-09" },
                  { label: "Google Scholar: solid state electrolyte sulfide oxide polymer review", url: "https://scholar.google.com/scholar?q=solid+state+electrolyte+sulfide+oxide+polymer+review+lithium+battery", date: "检索：2026-05-09" }
                ],
                videos: [
                  { label: "YouTube: battery electrolyte explained", url: "https://www.youtube.com/results?search_query=battery+electrolyte+explained+lithium+ion", date: "检索：2026-05-09" }
                ]
              },
              {
                id: "current-collector",
                title: "集流体：铝箔与铜箔",
                tag: "导电",
                difficulty: "入门",
                summary: "集流体把活性材料产生的电子导出或导入电芯，正极通常用铝箔，负极通常用铜箔；钠离子负极也可能使用铝箔以降本。",
                keyPoints: [
                  "正极铝箔在高电位下相对稳定，负极铜箔在低电位下更稳定。",
                  "集流体厚度、表面粗糙度、涂炭层、抗拉强度和延展性会影响涂布、辊压、内阻和良率。",
                  "复合集流体用高分子基膜加金属层降低质量并提升安全性，但连接、电阻、可靠性和成本仍需验证。"
                ],
                researchQuestions: [
                  "钠离子电池为什么可以在负极侧考虑铝集流体？",
                  "复合集流体的减重收益会不会被极耳焊接和倍率性能问题抵消？"
                ],
                progress: [
                  {
                    title: "复合集流体被持续关注，但产业验证依赖良率、焊接和滥用测试",
                    date: "趋势判断，更新：2026-05-09",
                    evidence: "产业观察",
                    level: "medium",
                    text: "复合集流体在安全和轻量化上有吸引力，但需要结合实际电芯尺寸、制造节拍和安全测试判断价值。"
                  }
                ],
                sources: [
                  { label: "Google Scholar: current collector lithium ion battery review", url: "https://scholar.google.com/scholar?q=current+collector+lithium+ion+battery+review+aluminum+copper+foil", date: "检索：2026-05-09" },
                  { label: "Google Scholar: composite current collector battery safety", url: "https://scholar.google.com/scholar?q=composite+current+collector+lithium+battery+safety", date: "检索：2026-05-09" }
                ],
                videos: [
                  { label: "YouTube: battery current collector aluminum copper foil", url: "https://www.youtube.com/results?search_query=battery+current+collector+aluminum+copper+foil", date: "检索：2026-05-09" }
                ]
              },
              {
                id: "binder-conductive",
                title: "粘结剂与导电剂",
                tag: "极片",
                difficulty: "进阶",
                summary: "粘结剂保证极片机械完整性，导电剂构建电子通路；二者用量很少，却会显著影响内阻、循环、快充和制造良率。",
                keyPoints: [
                  "常见正极粘结剂是 PVDF/NMP 体系，常见负极粘结剂包括 CMC/SBR、PAA、海藻酸盐等水系体系。",
                  "导电剂包括炭黑、乙炔黑、CNT、石墨烯等，目标是用尽量少的非活性物质建立稳定电子网络。",
                  "硅碳负极体积变化大，需要更强的粘结网络和更稳定的 SEI。"
                ],
                researchQuestions: [
                  "为什么同样的活性材料，换粘结剂后循环寿命可能差很多？",
                  "CNT 导电网络如何降低导电剂用量，但又可能带来分散和浆料流变问题？"
                ],
                progress: [
                  {
                    title: "水系粘结剂和高效导电网络是降本、环保与高容量负极的重要方向",
                    date: "趋势判断，更新：2026-05-09",
                    evidence: "研究趋势",
                    level: "medium",
                    text: "厚电极、硅碳负极和干法电极都会放大粘结剂与导电剂的结构设计重要性。"
                  }
                ],
                sources: [
                  { label: "Google Scholar: binder conductive additive lithium ion battery review", url: "https://scholar.google.com/scholar?q=binder+conductive+additive+lithium+ion+battery+review", date: "检索：2026-05-09" },
                  { label: "Google Scholar: silicon anode binder lithium ion battery", url: "https://scholar.google.com/scholar?q=silicon+anode+binder+lithium+ion+battery+review", date: "检索：2026-05-09" }
                ],
                videos: [
                  { label: "YouTube: battery electrode binder conductive additive", url: "https://www.youtube.com/results?search_query=battery+electrode+binder+conductive+additive", date: "检索：2026-05-09" }
                ]
              },
              {
                id: "pouch-prismatic-cylindrical",
                title: "壳体与铝塑膜封装",
                tag: "封装",
                difficulty: "进阶",
                summary: "封装决定电芯机械保护、气密性、热扩散路径和安全件布置；软包依赖铝塑膜，方形多用铝壳，圆柱多用钢壳或镀镍钢壳。",
                keyPoints: [
                  "铝塑膜一般包含外层尼龙、中间铝箔阻隔层和内层 CPP 热封层，核心指标是冲深、阻隔性、热封强度和耐电解液腐蚀。",
                  "方形铝壳刚性强、成组方便，但需要泄压阀和防爆设计；圆柱电芯一致性和制造效率高，但热管理和空间利用率要系统设计。",
                  "软包能量密度潜力高、形状灵活，但胀气、封边可靠性、机械保护和成组约束更关键。"
                ],
                researchQuestions: [
                  "铝塑膜的冲深性能为什么会限制软包电芯尺寸和极片堆叠设计？",
                  "钢壳、铝壳、软包在热失控泄压路径上有什么本质差异？"
                ],
                progress: [
                  {
                    title: "动力电池封装形态与整车平台强绑定",
                    date: "趋势判断，更新：2026-05-09",
                    evidence: "工程观察",
                    level: "medium",
                    text: "刀片、4680、方形短刀、软包等路线不只是电芯选择，也会改变电池包结构、热管理和制造设备。"
                  }
                ],
                sources: [
                  { label: "Google Scholar: pouch cell aluminum laminated film lithium battery", url: "https://scholar.google.com/scholar?q=pouch+cell+aluminum+laminated+film+lithium+battery", date: "检索：2026-05-09" },
                  { label: "Google Scholar: cylindrical prismatic pouch lithium ion battery comparison", url: "https://scholar.google.com/scholar?q=cylindrical+prismatic+pouch+lithium+ion+battery+comparison", date: "检索：2026-05-09" }
                ],
                videos: [
                  { label: "YouTube: pouch cell aluminum laminate film", url: "https://www.youtube.com/results?search_query=pouch+cell+aluminum+laminate+film", date: "检索：2026-05-09" },
                  { label: "YouTube: prismatic cylindrical pouch battery explained", url: "https://www.youtube.com/results?search_query=prismatic+cylindrical+pouch+battery+explained", date: "检索：2026-05-09" }
                ]
              },
              {
                id: "tabs-safety-parts",
                title: "极耳、安全阀与保护件",
                tag: "安全件",
                difficulty: "入门",
                summary: "极耳和安全件负责电流引出、泄压、过流保护和异常断开，是电芯从材料体系走向产品时必须理解的工程部件。",
                keyPoints: [
                  "极耳材料通常正极用铝、负极用镍/铜镀镍等，需要关注焊接强度、内阻和热影响区。",
                  "圆柱和方形电芯常设置 CID、PTC、安全阀、防爆片或泄压通道，目标是在异常升压时可控释放。",
                  "电池包层面还会加入熔断器、继电器、绝缘监测、BMS 采样线和热失控隔热材料。"
                ],
                researchQuestions: [
                  "极耳焊接电阻如何影响大倍率充放电时的局部发热？",
                  "泄压阀开启压力如何在防爆、密封和热失控传播之间折中？"
                ],
                progress: [
                  {
                    title: "快充与大电流平台让极耳、汇流排和焊接质量更重要",
                    date: "趋势判断，更新：2026-05-09",
                    evidence: "工程观察",
                    level: "medium",
                    text: "当电流提高时，材料体系之外的欧姆热和连接可靠性会成为限制整包性能的重要因素。"
                  }
                ],
                sources: [
                  { label: "Google Scholar: battery tab welding internal resistance safety", url: "https://scholar.google.com/scholar?q=battery+tab+welding+internal+resistance+safety", date: "检索：2026-05-09" },
                  { label: "Google Scholar: lithium ion battery safety vent CID PTC", url: "https://scholar.google.com/scholar?q=lithium+ion+battery+safety+vent+CID+PTC", date: "检索：2026-05-09" }
                ],
                videos: [
                  { label: "YouTube: battery tab welding safety vent", url: "https://www.youtube.com/results?search_query=battery+tab+welding+safety+vent", date: "检索：2026-05-09" }
                ]
              },
              {
                id: "manufacturing-process",
                title: "制造流程：浆料到化成",
                tag: "制造",
                difficulty: "进阶",
                summary: "电池制造把材料变成稳定产品，关键流程包括配料、匀浆、涂布、烘干、辊压、分切、卷绕/叠片、注液、化成、分容和老化。",
                beginnerGuide: [
                  { title: "它是什么", text: "制造流程决定材料能不能稳定、大规模、低成本地变成电芯。实验室性能好，不代表量产良率高。" },
                  { title: "为什么重要", text: "电池行业很多壁垒不在论文配方，而在涂布均匀性、水分控制、极片缺陷、化成制度和一致性。" },
                  { title: "小白怎么判断", text: "看到新材料新闻，要问它能否高载量涂布、是否兼容现有设备、是否影响化成时间和良率。" }
                ],
                keyPoints: [
                  "匀浆决定颗粒、粘结剂和导电剂分散，影响极片均匀性和内阻。",
                  "涂布/烘干/辊压决定面密度、孔隙率、压实密度和电解液浸润。",
                  "化成阶段形成 SEI/CEI，是首效、产气、寿命和安全的重要起点。"
                ],
                researchQuestions: [
                  "为什么实验室扣电结果很漂亮，放到高面容量软包就失效？",
                  "化成电流、温度和压力如何影响 SEI 成膜和产气？"
                ],
                metrics: [
                  { title: "看什么指标", text: "面密度、压实密度、孔隙率、涂布缺陷、水含量、化成时间、良率和一致性。" },
                  { title: "行业现状", text: "规模化企业的优势很大一部分来自制造 know-how、设备节拍、质量控制和供应链协同。" },
                  { title: "产业判断", text: "新技术若显著增加干燥、化成、检测或良率成本，商业化会非常困难。" }
                ],
                progress: [
                  {
                    title: "制造端降本与干法电极、智能质检、高速叠片/卷绕强相关",
                    date: "现状整理：2026-05-09",
                    evidence: "产业趋势",
                    level: "medium",
                    text: "快充、高能量密度和低成本都要求更高的极片一致性与缺陷控制，制造工艺本身正在成为核心技术。"
                  }
                ],
                sources: [
                  { label: "Google Scholar: lithium ion battery manufacturing process review", url: "https://scholar.google.com/scholar?q=lithium+ion+battery+manufacturing+process+review", date: "检索：2026-05-09" },
                  { label: "Google Scholar: battery formation SEI manufacturing review", url: "https://scholar.google.com/scholar?q=battery+formation+SEI+manufacturing+review", date: "检索：2026-05-09" }
                ],
                videos: [
                  { label: "YouTube: lithium battery manufacturing process", url: "https://www.youtube.com/results?search_query=lithium+battery+manufacturing+process+coating+calendering+formation", date: "检索：2026-05-09" }
                ]
              },
              {
                id: "pack-bms-thermal",
                title: "电池包：BMS 与热管理",
                tag: "系统",
                difficulty: "入门",
                summary: "电池包把电芯变成可上车的能源系统，BMS 负责监测与控制，热管理负责让电芯在合适温度范围内工作。",
                beginnerGuide: [
                  { title: "它是什么", text: "电池包包含电芯、结构件、汇流排、冷却系统、传感器、BMS、高压连接和安全保护。" },
                  { title: "为什么重要", text: "同一电芯放进不同电池包，快充速度、安全表现、低温能力和寿命可能完全不同。" },
                  { title: "小白怎么判断", text: "看到电池技术发布，不只问电芯是什么，也要问包结构、冷却方式、热失控防护和 BMS 策略。" }
                ],
                keyPoints: [
                  "BMS 估算 SOC、SOH、SOP，监测电压、温度、电流和绝缘状态。",
                  "热管理包括液冷、直冷、加热膜、导热垫、隔热材料和热失控排气通道。",
                  "CTP/CTB/结构电池包提高空间利用率，但也改变维修、安全和热扩散设计。"
                ],
                researchQuestions: [
                  "为什么高倍率快充必须依赖电芯、电池包热管理和充电策略协同？",
                  "CTB 提高结构效率时，会给维修和热失控隔离带来哪些新问题？"
                ],
                metrics: [
                  { title: "看什么指标", text: "成组效率、体积利用率、温差、热失控传播、快充温升、BMS 估算误差和安全冗余。" },
                  { title: "行业现状", text: "头部企业越来越把竞争从单体电芯扩展到电池包、整车平台和补能网络。" },
                  { title: "产业判断", text: "很多“电池黑科技”实际是系统集成进步，判断时要区分电芯突破和电池包突破。" }
                ],
                progress: [
                  {
                    title: "系统集成已成为头部企业差异化重点",
                    date: "现状整理：2026-05-09",
                    evidence: "产业趋势",
                    level: "medium",
                    text: "CATL 麒麟、BYD CTB/刀片、Tesla 结构电池包都说明系统结构对续航、安全、成本和制造效率影响巨大。"
                  }
                ],
                sources: [
                  { label: "Google Scholar: battery thermal management system review electric vehicle", url: "https://scholar.google.com/scholar?q=battery+thermal+management+system+review+electric+vehicle", date: "检索：2026-05-09" },
                  { label: "Google Scholar: battery management system SOC SOH review", url: "https://scholar.google.com/scholar?q=battery+management+system+SOC+SOH+review", date: "检索：2026-05-09" },
                  { label: "Google Scholar: cell to pack battery review", url: "https://scholar.google.com/scholar?q=cell+to+pack+battery+review", date: "检索：2026-05-09" }
                ],
                videos: [
                  { label: "YouTube: EV battery pack thermal management BMS explained", url: "https://www.youtube.com/results?search_query=EV+battery+pack+thermal+management+BMS+explained", date: "检索：2026-05-09" }
                ]
              }
            ]
          },
          {
            id: "lfp-fast-charge",
            title: "LFP 快充机理",
            tag: "锂电",
            difficulty: "进阶",
            summary: "磷酸铁锂快充的核心是降低极化并避免负极析锂，同时控制热积累和电解液副反应。",
            keyPoints: [
              "低温、高 SOC 和高电流会显著提高析锂风险。",
              "颗粒尺寸、导电网络、孔结构、电解液传输和极片厚度共同影响倍率性能。",
              "企业常通过正负极材料改性、电解液添加剂、热管理和充电曲线协同实现快充。"
            ],
            researchQuestions: [
              "LFP 体系要实现 5C 以上快充，负极孔结构和 SEI 稳定性需要怎样设计？",
              "快充宣传中的 10%-80% 与 10%-97% 是否对应不同的工程难度？"
            ],
            progress: [
              {
                title: "比亚迪 Blade Battery 2.0 强调正负极与电解液协同",
                date: "2026-01",
                evidence: "官方发布",
                level: "high",
                text: "BYD 将超充能力归因于离子传输、正极颗粒、电解液和 SEI 相关优化，适合作为 LFP 快充机理案例。"
              },
              {
                title: "宁德时代神行路线持续把 LFP 推向高倍率场景",
                date: "2026-04",
                evidence: "官方发布",
                level: "high",
                text: "CATL 第三代神行超充继续强化 LFP 快充、低温和续航组合，说明 LFP 仍是规模化快充主战场。"
              }
            ],
            sources: [
              { label: "BYD Blade Battery 2.0 / FLASH Charging", url: "https://media.byd.com/?p=37376" },
              { label: "CATL 2026 Super Technology Day", url: "https://www.catl.com/en/news/6811.html" },
              { label: "Google Scholar: LFP fast charging lithium plating", url: "https://scholar.google.com/scholar?q=LFP+fast+charging+lithium+plating" }
            ],
            videos: [
              { label: "YouTube: LFP fast charging battery", url: "https://www.youtube.com/results?search_query=LFP+fast+charging+battery" },
              { label: "BYD official YouTube search", url: "https://www.youtube.com/@BYDCompany/search?query=blade%20battery" }
            ]
          },
          {
            id: "sodium-ion",
            title: "钠离子电池机理",
            tag: "钠电",
            difficulty: "进阶",
            summary: "钠离子电池的关键在硬碳负极、层状氧化物或普鲁士蓝正极、电解液稳定性和低温/成本优势之间的平衡。",
            keyPoints: [
              "钠离子半径更大，石墨嵌钠困难，硬碳成为主流负极。",
              "硬碳首效、产气、孔结构和平台容量是学术与产业共同关注点。",
              "钠电优势常出现在资源安全、低温性能和低成本场景，但能量密度通常低于高镍锂电。"
            ],
            researchQuestions: [
              "硬碳储钠的斜坡容量与平台容量分别来自哪些结构位点？",
              "水分控制和气体副反应如何影响钠离子电芯的工程良率？"
            ],
            progress: [
              {
                title: "CATL Naxtra 钠离子电池进入 GWh 级产业化叙事",
                date: "2026-04",
                evidence: "官方发布",
                level: "high",
                text: "CATL 公开称 Naxtra 钠离子将推进规模化应用，并与整车项目绑定，是钠电从实验室走向产品的重要信号。"
              },
              {
                title: "BYD 第三代钠离子平台被公开报道",
                date: "2026-02",
                evidence: "媒体报道",
                level: "medium",
                text: "报道提到循环寿命提升和工程化进展，但仍需要等待官方车型、公告或拆解数据验证。"
              }
            ],
            sources: [
              { label: "CATL Naxtra sodium-ion battery", url: "https://www.catl.com/en/news/6720.html" },
              { label: "CnEVPost: BYD sodium-ion cycle life report", url: "https://cnevpost.com/2026/02/09/byd-has-developed-sodium-batteries-cycle-life-10000/" },
              { label: "Google Scholar: hard carbon sodium ion battery", url: "https://scholar.google.com/scholar?q=hard+carbon+sodium+ion+battery" }
            ],
            videos: [
              { label: "YouTube: sodium ion battery hard carbon", url: "https://www.youtube.com/results?search_query=sodium+ion+battery+hard+carbon" },
              { label: "CATL official YouTube search", url: "https://www.youtube.com/@CATLofficial/search?query=sodium%20ion" }
            ]
          },
          {
            id: "dry-electrode",
            title: "干法电极",
            tag: "制造",
            difficulty: "高阶",
            summary: "干法电极用少溶剂或无溶剂方式形成电极膜，目标是降低能耗、缩短工艺并支持厚电极，但粘结网络和孔结构控制很难。",
            keyPoints: [
              "传统湿法涂布依赖溶剂、烘干和回收，干法路线希望减少这些步骤。",
              "厚电极能提高能量密度，但离子传输距离、孔结构和电子通路会变成瓶颈。",
              "干法电极的核心不是省掉溶剂这么简单，而是重新设计粘结剂纤维化、混料、成膜和压实。"
            ],
            researchQuestions: [
              "PTFE 等粘结剂纤维化如何影响电极机械强度和电化学阻抗？",
              "干法厚电极在快充中如何避免浓差极化和局部析锂？"
            ],
            progress: [
              {
                title: "Tesla 4680 公开推进正负极干电极生产",
                date: "2026-01",
                evidence: "财报文件",
                level: "high",
                text: "Tesla 在 Q4 2025 更新中称 Austin 已能生产正负极均采用干电极工艺的 4680 电芯。"
              },
              {
                title: "技术来源可追溯到 Maxwell 干电极路线",
                date: "2019-05",
                evidence: "并购公告",
                level: "high",
                text: "Tesla 完成 Maxwell Technologies 收购后，干电极成为 4680 路线的重要技术来源。"
              }
            ],
            sources: [
              { label: "Tesla Q4 2025 Update PDF", url: "https://ir.tesla.com/_flysystem/s3/sec/000162828026003837/tsla-20260128-gen.pdf" },
              { label: "Tesla completes Maxwell acquisition", url: "https://www.globenewswire.com/en/news-release/2019/05/16/1826202/0/en/Tesla-Completes-Acquisition-of-Maxwell-Technologies.html" },
              { label: "Google Scholar: dry electrode lithium ion battery", url: "https://scholar.google.com/scholar?q=dry+electrode+lithium+ion+battery" }
            ],
            videos: [
              { label: "YouTube: Tesla dry electrode 4680", url: "https://www.youtube.com/results?search_query=Tesla+dry+electrode+4680" },
              { label: "YouTube: dry battery electrode manufacturing", url: "https://www.youtube.com/results?search_query=dry+battery+electrode+manufacturing" }
            ]
          }
        ]
      }
    ]
  },
  frontier: {
    label: "前沿板块",
    roots: [
      {
        id: "frontier-root",
        title: "公司技术路线图",
        tag: "公司",
        difficulty: "入门",
        summary: "把企业技术拆成材料体系、结构集成、制造工艺、热安全和商业化证据五条线。",
        keyPoints: [
          "宁德时代更像多体系平台公司，强项是材料谱系、CTP/麒麟、超充和补能网络。",
          "比亚迪强项是 LFP 刀片电池、整车垂直集成、CTB 和超充基础设施。",
          "特斯拉强项是 4680、干法电极、结构电池包和制造自动化。"
        ],
        researchQuestions: [
          "企业宣传中的核心技术究竟属于材料创新、结构创新、制造创新还是系统工程？",
          "哪些技术是真正的电芯突破，哪些主要是电池包和整车集成突破？"
        ],
        progress: [
          {
            title: "2026 年公开热点集中在超充、钠电、干电极和系统集成",
            date: "2026-05",
            evidence: "综合公开资料",
            level: "medium",
            text: "这些方向适合做长期跟踪，因为它们同时关联论文、专利、工艺和量产车型。"
          }
        ],
        sources: [
          { label: "CATL news", url: "https://www.catl.com/en/news/" },
          { label: "BYD media center", url: "https://media.byd.com/" },
          { label: "Tesla investor relations", url: "https://ir.tesla.com/" }
        ],
        videos: [
          { label: "CATL official YouTube", url: "https://www.youtube.com/@CATLofficial" },
          { label: "Tesla official YouTube", url: "https://www.youtube.com/@Tesla" }
        ],
        children: [
          {
            id: "industry-status",
            title: "行业研究现状总览",
            tag: "现状",
            difficulty: "入门",
            summary: "把动力电池行业看成材料体系、关键部件、制造工艺、系统集成和商业化证据五条线，就能快速判断一项技术处在实验室、工程化还是量产阶段。",
            keyPoints: [
              "已规模化：LFP、NCM/NCA、石墨负极、液态电解液、湿法/干法隔膜、方形/圆柱/软包封装、CTP/CTB。",
              "快速工程化：LFP 超充、钠离子、硅碳负极、复合集流体、干法电极、高安全热管理、快充补能网络。",
              "仍在攻关：全固态、锂金属、高硅负极长寿命、极端快充不析锂、高能量密度与高安全同时满足。"
            ],
            researchQuestions: [
              "一项新技术是提高电芯能量密度，还是提高电池包空间利用率？",
              "它是否已经出现官方发布、车型公告、量产线、第三方测试四类证据？"
            ],
            progress: [
              {
                title: "2026 年行业主线：快充、降本、安全和供应链本土化并行",
                date: "现状整理：2026-05-09",
                evidence: "综合判断",
                level: "medium",
                text: "LFP 仍在超充和低成本场景扩张；钠离子从示范进入产业化验证；固态电池仍需解决界面、制造和成本；干法电极继续被视为降本制造方向。"
              }
            ],
            sources: [
              { label: "Google Scholar: lithium ion battery technology roadmap review", url: "https://scholar.google.com/scholar?q=lithium+ion+battery+technology+roadmap+review+2025", date: "检索：2026-05-09" },
              { label: "Google Scholar: sodium ion battery commercialization review", url: "https://scholar.google.com/scholar?q=sodium+ion+battery+commercialization+review+2025", date: "检索：2026-05-09" },
              { label: "Google Scholar: solid state battery challenges review", url: "https://scholar.google.com/scholar?q=solid+state+battery+challenges+review+2025", date: "检索：2026-05-09" }
            ],
            videos: [
              { label: "YouTube: battery technology roadmap 2026", url: "https://www.youtube.com/results?search_query=battery+technology+roadmap+2026+LFP+sodium+solid+state", date: "检索：2026-05-09" },
              { label: "YouTube: EV battery industry overview", url: "https://www.youtube.com/results?search_query=EV+battery+industry+overview+CATL+BYD+Tesla", date: "检索：2026-05-09" }
            ]
          },
          {
            id: "catl",
            title: "宁德时代 CATL",
            tag: "龙头",
            difficulty: "进阶",
            summary: "CATL 的核心技术来源是长期材料研发、电芯工程、CTP 系统集成和制造规模化能力。",
            keyPoints: [
              "重点跟踪：神行超充、麒麟电池、凝聚态电池、Freevoy、Naxtra 钠离子。",
              "判断技术含金量时要看是否绑定量产车型、是否出现 GWh 级产线和是否有第三方测试。",
              "钠电、LFP 快充和高安全系统集成是适合学生切入的方向。"
            ],
            researchQuestions: [
              "CATL 如何在 LFP 体系中同时追求快充、低温和长寿命？",
              "Naxtra 钠电若量产，最可能先替代哪些应用场景？"
            ],
            progress: [
              {
                title: "2026 Super Technology Day 发布多项新技术",
                date: "2026-04",
                evidence: "官方发布",
                level: "high",
                text: "CATL 发布第三代神行超充、麒麟、凝聚态和补能网络相关信息，显示其路线从电芯扩展到系统和能源服务。"
              },
              {
                title: "Naxtra 钠离子与整车项目绑定",
                date: "2026-01",
                evidence: "官方发布",
                level: "high",
                text: "CATL 称其钠离子电池将用于乘用车项目，适合作为钠电商业化跟踪样本。"
              }
            ],
            sources: [
              { label: "CATL 2026 Super Technology Day", url: "https://www.catl.com/en/news/6811.html" },
              { label: "CATL sodium-ion / Naxtra", url: "https://www.catl.com/en/news/6720.html" },
              { label: "Google Patents: Contemporary Amperex sodium ion", url: "https://patents.google.com/?q=(sodium+ion)&assignee=Contemporary+Amperex" }
            ],
            videos: [
              { label: "CATL official YouTube search: Shenxing", url: "https://www.youtube.com/@CATLofficial/search?query=Shenxing" },
              { label: "YouTube search: CATL Naxtra", url: "https://www.youtube.com/results?search_query=CATL+Naxtra+sodium+ion+battery" }
            ]
          },
          {
            id: "byd",
            title: "比亚迪 BYD",
            tag: "整车",
            difficulty: "进阶",
            summary: "BYD 的核心技术来源是 LFP 刀片电池、整车平台、CTB 结构和垂直供应链。",
            keyPoints: [
              "刀片电池的价值不仅在材料，而在长电芯结构、包集成、安全测试和整车空间利用率。",
              "BYD 近年的重点是把 LFP 推向高倍率超充，同时建设对应补能网络。",
              "钠离子方向值得关注，但需要等待更多官方量产证据。"
            ],
            researchQuestions: [
              "长刀片电芯如何改变热扩散路径和包结构设计？",
              "LFP 超充要实现高 SOC 快速充电，负极和电解液需要哪些配套改进？"
            ],
            progress: [
              {
                title: "Blade Battery 2.0 与 FLASH Charging 发布",
                date: "2026-01",
                evidence: "官方发布",
                level: "high",
                text: "BYD 公开 1500 kW 级充电、低温快充和电极/电解液改进思路，是 LFP 超充的重要案例。"
              },
              {
                title: "第三代钠离子平台被媒体报道",
                date: "2026-02",
                evidence: "媒体报道",
                level: "medium",
                text: "媒体称 BYD 钠电循环寿命提升，但学术跟踪时应继续等待官方数据、车型目录和拆解验证。"
              }
            ],
            sources: [
              { label: "BYD Blade Battery 2.0 / FLASH Charging", url: "https://media.byd.com/?p=37376" },
              { label: "BYD media center", url: "https://media.byd.com/" },
              { label: "Google Patents: BYD blade battery", url: "https://patents.google.com/?q=(blade+battery)&assignee=BYD" }
            ],
            videos: [
              { label: "BYD official YouTube search: Blade Battery", url: "https://www.youtube.com/@BYDCompany/search?query=Blade%20Battery" },
              { label: "YouTube search: BYD flash charging", url: "https://www.youtube.com/results?search_query=BYD+flash+charging+battery" }
            ]
          },
          {
            id: "tesla",
            title: "特斯拉 Tesla",
            tag: "制造",
            difficulty: "进阶",
            summary: "Tesla 的电池路线更强调制造范式：4680 大圆柱、干法电极、结构电池包和整车工厂协同。",
            keyPoints: [
              "4680 的意义不只是尺寸变大，还涉及极耳设计、热管理、结构包和制造节拍。",
              "干法电极来自 Maxwell 技术脉络，是 Tesla 降本和规模化的重要押注。",
              "Tesla 的公开信息常在财报、投资者文件和工厂视频里出现，需要和第三方拆解互相校验。"
            ],
            researchQuestions: [
              "大圆柱电芯如何平衡散热、机械强度和极片制造良率？",
              "干法电极如果用于正负极，最难解决的是粘结、成膜、孔结构还是界面稳定性？"
            ],
            progress: [
              {
                title: "Austin 4680 正负极干电极生产进入公开披露",
                date: "2026-01",
                evidence: "财报文件",
                level: "high",
                text: "Tesla Q4 2025 更新称已能生产正负极均采用干电极工艺的 4680 电芯，并用于部分电池包。"
              },
              {
                title: "Maxwell 并购提供干电极技术来源线索",
                date: "2019-05",
                evidence: "并购公告",
                level: "high",
                text: "Maxwell 干电极技术是理解 Tesla 4680 制造路线的关键历史节点。"
              }
            ],
            sources: [
              { label: "Tesla Q4 2025 Update PDF", url: "https://ir.tesla.com/_flysystem/s3/sec/000162828026003837/tsla-20260128-gen.pdf" },
              { label: "Tesla completes Maxwell acquisition", url: "https://www.globenewswire.com/en/news-release/2019/05/16/1826202/0/en/Tesla-Completes-Acquisition-of-Maxwell-Technologies.html" },
              { label: "Google Patents: Tesla dry electrode", url: "https://patents.google.com/?q=(dry+electrode)&assignee=Tesla" }
            ],
            videos: [
              { label: "Tesla official YouTube search: 4680", url: "https://www.youtube.com/@Tesla/search?query=4680" },
              { label: "YouTube search: Maxwell dry electrode Tesla", url: "https://www.youtube.com/results?search_query=Maxwell+dry+electrode+Tesla" }
            ]
          }
        ]
      }
    ]
  },
  news: {
    label: "情报板块",
    roots: [
      {
        id: "news-root",
        title: "最新新闻追踪",
        tag: "动态",
        difficulty: "入门",
        summary: "新闻板块把文字报道、官方公告、视频和可验证证据放在一起，便于每周更新。",
        keyPoints: [
          "优先看官方公告、财报和监管目录，再看媒体报道。",
          "新闻要记录日期、来源、证据等级和你自己的技术判断。",
          "视频适合看发布会措辞、工厂画面和第三方拆解，但不能替代数据表。"
        ],
        researchQuestions: [
          "这条新闻背后是否有可检验的电芯指标或车型公告？",
          "它是材料突破、工艺突破、系统集成，还是商业模式变化？"
        ],
        progress: [
          {
            title: "可以按周维护新闻卡片",
            date: "工作流",
            evidence: "方法",
            level: "high",
            text: "每周固定抓取 CATL、BYD、Tesla 官方页面、Google Patents 和 YouTube 关键词结果，更新本文件的数据。"
          }
        ],
        sources: [
          { label: "Google News: lithium battery CATL BYD Tesla", url: "https://news.google.com/search?q=lithium%20battery%20CATL%20BYD%20Tesla" },
          { label: "Google News: sodium-ion battery", url: "https://news.google.com/search?q=sodium-ion%20battery%20CATL%20BYD" },
          { label: "InsideEVs battery news", url: "https://insideevs.com/news/category/battery-tech/" }
        ],
        videos: [
          { label: "YouTube: battery technology latest", url: "https://www.youtube.com/results?search_query=battery+technology+latest+CATL+BYD+Tesla" },
          { label: "YouTube: battery teardown 4680 blade battery", url: "https://www.youtube.com/results?search_query=battery+teardown+4680+blade+battery" }
        ],
        children: [
          {
            id: "news-official",
            title: "官方公告",
            tag: "高可信",
            difficulty: "入门",
            intelType: "news",
            summary: "官方公告适合确认公司战略、产品名称、量产时间和指标口径。",
            keyPoints: [
              "看标题之外，还要找应用场景、客户车型、量产时间和工厂规模。",
              "官方数据通常是最佳工况，要留意温度、SOC 窗口和测试标准。",
              "适合与专利和论文交叉验证。"
            ],
            researchQuestions: [
              "公告里有没有明确化学体系？",
              "有没有给出循环寿命、能量密度和安全测试条件？"
            ],
            progress: [
              {
                title: "CATL 与 BYD 在 2026 年均发布超充相关信息",
                date: "2026",
                evidence: "官方发布",
                level: "high",
                text: "两家公司都在把电芯、电池包和补能网络放在同一套叙事里，应同时分析技术和基础设施。"
              }
            ],
            sources: [
              { label: "CATL official news", url: "https://www.catl.com/en/news/" },
              { label: "BYD official media", url: "https://media.byd.com/" },
              { label: "Tesla investor relations", url: "https://ir.tesla.com/" }
            ],
            videos: [
              { label: "CATL videos", url: "https://www.youtube.com/@CATLofficial/videos" },
              { label: "BYD videos", url: "https://www.youtube.com/@BYDCompany/videos" },
              { label: "Tesla videos", url: "https://www.youtube.com/@Tesla/videos" }
            ]
          },
          {
            id: "news-paper",
            title: "论文库",
            tag: "论文",
            difficulty: "进阶",
            intelType: "paper",
            summary: "论文库只聚合论文线索，用来追踪材料、界面、工艺和系统机理的研究进展。",
            keyPoints: [
              "论文看材料体系、测试条件、载量、N/P 比、温度和循环圈数。",
              "优先看综述、顶刊、产业条件接近的全电池测试，而不是只看半电池漂亮曲线。",
              "论文结论不能直接等同量产，需要继续找专利、客户、产线或公司公告验证。"
            ],
            researchQuestions: [
              "论文中的面容量和电极厚度是否接近产业条件？",
              "它使用扣电、软包全电池，还是接近真实产品的电芯？"
            ],
            progress: [
              {
                title: "建议建立论文关键词库",
                date: "长期",
                evidence: "方法",
                level: "high",
                text: "关键词可包括 hard carbon、Prussian blue、dry electrode、LFP fast charging、solid electrolyte、silicon anode、SEI。"
              }
            ],
            sources: [
              { label: "Google Scholar battery search", url: "https://scholar.google.com/scholar?q=lithium+sodium+battery+fast+charging+dry+electrode" },
              { label: "Nature Energy battery research", url: "https://www.nature.com/nenergy/" },
              { label: "ScienceDirect battery research", url: "https://www.sciencedirect.com/search?qs=lithium%20sodium%20battery" }
            ],
            videos: []
          },
          {
            id: "news-patent",
            title: "专利库",
            tag: "专利",
            difficulty: "进阶",
            intelType: "patent-search",
            summary: "专利库只聚合专利检索线索，用来观察公司真实布局、保护范围和可能的产品方向。",
            keyPoints: [
              "专利看申请人、发明人、优先权时间、权利要求和实施例。",
              "重点看权利要求是否覆盖核心技术，还是只是外围结构或配方保护。",
              "专利代表布局，不等于已经量产，需要与公告、招聘、产线和客户信息交叉验证。"
            ],
            researchQuestions: [
              "某项专利的权利要求是否真的覆盖核心技术，还是只是外围保护？",
              "同一公司是否围绕同一方向连续申请专利族？"
            ],
            progress: [
              {
                title: "建议按公司和技术路线建立专利监控",
                date: "长期",
                evidence: "方法",
                level: "high",
                text: "关键词可包括 CATL sodium-ion、BYD blade battery、Tesla dry electrode、solid electrolyte、composite current collector。"
              }
            ],
            sources: [
              { label: "Google Patents", url: "https://patents.google.com/" },
              { label: "Lens.org patents", url: "https://www.lens.org/" },
              { label: "CNIPA 中国专利检索入口", url: "https://pss-system.cponline.cnipa.gov.cn/" }
            ],
            videos: []
          },
          {
            id: "news-video",
            title: "视频与拆解",
            tag: "视频",
            difficulty: "入门",
            intelType: "video",
            summary: "视频可以帮助理解结构件、工艺现场和整包设计，但需要把视觉信息转化为可验证问题。",
            keyPoints: [
              "官方视频看发布措辞和工厂画面，第三方拆解看结构、电连接、热管理和维修性。",
              "遇到夸张结论时，回到电芯型号、化学体系、质量、体积和测试条件。",
              "把视频里的观察写成问题，再去找论文、专利或测试数据。"
            ],
            researchQuestions: [
              "拆解中的结构设计是否解释了热安全或空间利用率提升？",
              "视频展示的是概念样件、试生产，还是量产线？"
            ],
            progress: [
              {
                title: "视频链接先聚合到搜索入口",
                date: "2026-05",
                evidence: "可更新入口",
                level: "medium",
                text: "由于视频更新很快，本网站把官方频道和关键词搜索放在一起，便于每周打开核查。"
              }
            ],
            sources: [
              { label: "Munro Live battery teardown search", url: "https://www.youtube.com/@MunroLive/search?query=battery" },
              { label: "The Limiting Factor battery analysis", url: "https://www.youtube.com/@thelimitingfactor/search?query=battery" }
            ],
            videos: [
              { label: "YouTube: CATL battery technology 2026", url: "https://www.youtube.com/results?search_query=CATL+battery+technology+2026" },
              { label: "YouTube: BYD blade battery teardown", url: "https://www.youtube.com/results?search_query=BYD+blade+battery+teardown" },
              { label: "YouTube: Tesla 4680 teardown", url: "https://www.youtube.com/results?search_query=Tesla+4680+battery+teardown" }
            ]
          }
        ]
      }
    ]
  },
  visualization: {
    label: "可视化板块",
    roots: [
      {
        id: "market-dashboard",
        title: "市场与技术现状可视化",
        tag: "Dashboard",
        difficulty: "一眼看懂",
        summary: "用 KPI、企业排名、技术雷达、应用占比、趋势线和地区热力，把电池行业市场与技术现状放在一屏内比较。",
        keyPoints: [],
        researchQuestions: [],
        progress: [],
        sources: [],
        videos: []
      }
    ]
  },
  companies: {
    label: "公司板块",
    roots: [
      {
        id: "company-map",
        title: "电池产业链公司图谱",
        tag: "Company",
        difficulty: "行业地图",
        summary: "按电芯、正极、负极、隔膜、电解液、集流体、粘结剂/导电剂、设备、回收等环节查看 Top 10 公司、技术路线和供应关系。",
        keyPoints: [],
        researchQuestions: [],
        progress: [],
        sources: [],
        videos: []
      }
    ]
  }
};

let activeSection = "overview";
let selectedId = "overview-root";
const openNodes = new Set(["overview-root", "mechanism-root", "frontier-root", "news-root"]);

const treeEl = document.querySelector("#tree");
const searchInput = document.querySelector("#searchInput");
const tabButtons = document.querySelectorAll(".tab");
const intelControls = {
  search: document.querySelector("#intelSearch"),
  topic: document.querySelector("#intelTopic"),
  type: document.querySelector("#intelType"),
  review: document.querySelector("#intelReview"),
  sort: document.querySelector("#intelSort")
};

const intelligenceState = {
  metadata: null,
  items: []
};

const companyState = {
  data: null,
  selectedId: null
};

const topicLabels = {
  "fast-charge": "快充",
  "sodium-ion": "钠离子",
  "solid-state": "固态电池",
  "dry-electrode": "干法电极",
  separator: "隔膜",
  electrolyte: "电解液/电解质",
  bms: "BMS",
  "thermal-management": "热管理",
  catl: "CATL",
  byd: "BYD",
  tesla: "Tesla"
};

const typeLabels = {
  paper: "论文",
  news: "新闻",
  "news-search": "新闻检索",
  video: "视频",
  "patent-search": "专利"
};

const reviewLabels = {
  unreviewed: "未审核线索",
  reviewed: "已审核",
  important: "重点",
  discarded: "已丢弃"
};

const evidenceLabels = {
  high: "高证据",
  medium: "中证据",
  low: "线索"
};

const marketVisualData = {
  updatedAt: "整理：2026-05-09",
  sources: [
    "企业份额与装机口径：SNE Research、EV Volumes、公司公告等公开信息综合，需以后续年度报告复核。",
    "趋势与价格口径：IEA、BNEF、行业公开报告综合，用于可视化学习，不作为投资或采购决策。",
    "钠离子数据仍处早期，当前更多体现工程化进度和示范项目，不等同成熟商业份额。"
  ],
  companies: [
    { name: "CATL", share: 37, technology: 92, growth: 18, color: "#1f8f6a", battery: ["lithium", "sodium"], apps: ["ev", "ess"], metrics: [92, 88, 94, 82, 96] },
    { name: "BYD", share: 17, technology: 86, growth: 24, color: "#2878b5", battery: ["lithium", "sodium"], apps: ["ev", "ess"], metrics: [82, 92, 88, 90, 90] },
    { name: "LG Energy", share: 12, technology: 84, growth: 8, color: "#7b6fd0", battery: ["lithium"], apps: ["ev", "ess", "consumer"], metrics: [88, 82, 76, 74, 88] },
    { name: "Panasonic", share: 7, technology: 80, growth: 5, color: "#c28b2c", battery: ["lithium"], apps: ["ev", "consumer"], metrics: [86, 78, 76, 70, 84] },
    { name: "Samsung SDI", share: 5, technology: 81, growth: 6, color: "#d45c5c", battery: ["lithium"], apps: ["ev", "ess", "consumer"], metrics: [84, 80, 74, 72, 82] },
    { name: "Others", share: 22, technology: 68, growth: 14, color: "#95a0aa", battery: ["lithium", "sodium"], apps: ["ev", "ess", "consumer"], metrics: [68, 70, 64, 70, 66] }
  ],
  applications: [
    { id: "ev", label: "动力电池", value: 70, color: "#1f8f6a" },
    { id: "ess", label: "储能", value: 18, color: "#2878b5" },
    { id: "consumer", label: "消费电子", value: 12, color: "#c28b2c" }
  ],
  trends: [
    { year: 2021, shipments: 310, price: 141, density: 250 },
    { year: 2022, shipments: 520, price: 151, density: 255 },
    { year: 2023, shipments: 705, price: 139, density: 265 },
    { year: 2024, shipments: 890, price: 115, density: 275 },
    { year: 2025, shipments: 1120, price: 103, density: 285 },
    { year: 2026, shipments: 1330, price: 96, density: 295 }
  ],
  regions: [
    { name: "中国", value: 72, note: "产能与供应链最集中" },
    { name: "欧洲", value: 12, note: "本土化与法规驱动" },
    { name: "美国", value: 9, note: "IRA 与本土制造拉动" },
    { name: "日韩", value: 7, note: "材料、电芯和整车绑定" }
  ],
  radarAxes: ["能量密度", "循环寿命", "快充", "成本", "量产"]
};

function flatten(nodes) {
  return nodes.flatMap((node) => [node, ...flatten(node.children || [])]);
}

function findNode(id) {
  return Object.values(sections)
    .flatMap((section) => flatten(section.roots))
    .find((node) => node.id === id);
}

function glossaryEntries() {
  return findNode("glossary")?.glossary || [];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function linkifyTerms(text) {
  let html = escapeHtml(text || "");
  const terms = glossaryEntries()
    .flatMap((entry) => [
      { label: entry.term, id: entry.id },
      { label: entry.zh, id: entry.id }
    ])
    .filter((item) => item.label && item.label.length >= 2)
    .sort((a, b) => b.label.length - a.label.length);

  terms.forEach(({ label, id }) => {
    const escaped = escapeRegExp(escapeHtml(label));
    const hasAscii = /[A-Za-z0-9]/.test(label);
    const pattern = hasAscii
      ? new RegExp(`(^|[^A-Za-z0-9_>])(${escaped})(?![A-Za-z0-9_])`, "g")
      : new RegExp(`(${escaped})`, "g");
    html = html.replace(pattern, (match, prefixOrTerm, maybeTerm) => {
      const prefix = hasAscii ? prefixOrTerm : "";
      const term = hasAscii ? maybeTerm : prefixOrTerm;
      if (match.includes('class="term-link"')) return match;
      return `${prefix}<a href="#" class="term-link" data-term="${id}">${term}</a>`;
    });
  });

  return html;
}

function matchesSearch(node, term) {
  if (!term) return true;
  const haystack = [
    node.title,
    node.tag,
    node.summary,
    ...(node.keyPoints || []),
    ...(node.researchQuestions || [])
  ].join(" ");
  return haystack.toLowerCase().includes(term.toLowerCase());
}

function nodeOrDescendantMatches(node, term) {
  return matchesSearch(node, term) || (node.children || []).some((child) => nodeOrDescendantMatches(child, term));
}

function renderTree() {
  const term = searchInput.value.trim();
  treeEl.innerHTML = "";
  sections[activeSection].roots.forEach((node) => {
    const rendered = renderNode(node, term);
    if (rendered) treeEl.appendChild(rendered);
  });
}

function renderNode(node, term) {
  if (!nodeOrDescendantMatches(node, term)) return null;

  const hasChildren = Boolean(node.children && node.children.length);
  const wrapper = document.createElement("div");
  wrapper.className = "tree-node";
  if (openNodes.has(node.id) || term) wrapper.classList.add("is-open");

  const row = document.createElement("button");
  row.type = "button";
  row.className = "node-row";
  if (selectedId === node.id) row.classList.add("is-selected");
  row.dataset.id = node.id;
  row.innerHTML = `
    <span class="toggle">${hasChildren ? (openNodes.has(node.id) || term ? "−" : "+") : "·"}</span>
    <span class="node-title">${node.title}</span>
    <span class="node-tag">${node.tag}</span>
  `;
  row.addEventListener("click", () => {
    selectedId = node.id;
    if (hasChildren) {
      if (openNodes.has(node.id)) openNodes.delete(node.id);
      else openNodes.add(node.id);
    }
    renderTree();
    renderDetail(node);
  });

  wrapper.appendChild(row);

  if (hasChildren) {
    const children = document.createElement("div");
    children.className = "children";
    node.children.forEach((child) => {
      const renderedChild = renderNode(child, term);
      if (renderedChild) children.appendChild(renderedChild);
    });
    wrapper.appendChild(children);
  }

  return wrapper;
}

function renderList(targetId, items) {
  const el = document.querySelector(targetId);
  el.innerHTML = "";
  if (!items || !items.length) {
    el.innerHTML = '<p class="empty">这个词条还没有内容，后续可以继续补充。</p>';
    return;
  }
  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = linkifyTerms(item);
    el.appendChild(li);
  });
}

function renderLinks(targetId, links) {
  const el = document.querySelector(targetId);
  el.innerHTML = "";
  if (!links || !links.length) {
    el.innerHTML = '<p class="empty">暂无链接。</p>';
    return;
  }
  links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noreferrer";
    const date = link.date || "检索：2026-05-09";
    a.innerHTML = `<span class="link-title">${link.label}</span><span class="link-date">${date}</span>`;
    el.appendChild(a);
  });
}

function renderProgress(items) {
  const el = document.querySelector("#progressList");
  el.innerHTML = "";
  if (!items || !items.length) {
    el.innerHTML = '<p class="empty">暂无进展。</p>';
    return;
  }
  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "progress-item";
    const datedLabel = /\d{4}/.test(item.date) ? item.date : `${item.date}，整理：2026-05-09`;
    article.innerHTML = `
      <div class="progress-meta">
        <span class="pill ${item.level || "medium"}">${escapeHtml(item.evidence)}</span>
        <span class="pill">${escapeHtml(datedLabel)}</span>
      </div>
      <h4>${linkifyTerms(item.title)}</h4>
      <p>${linkifyTerms(item.text)}</p>
    `;
    el.appendChild(article);
  });
}

function defaultBeginnerGuide(node) {
  return [
    {
      title: "它是什么",
      text: node.summary || "这是电池技术图谱中的一个学习主题。先理解它在电芯、电池包或产业链中的位置，再看指标。"
    },
    {
      title: "为什么重要",
      text: "它会影响能量密度、成本、安全、寿命、快充、低温或制造良率中的一个或多个核心目标。"
    },
    {
      title: "怎么入门",
      text: "先看图解理解结构，再读学习要点；最后用研究问题反推论文、专利和企业发布中的关键信息。"
    }
  ];
}

function defaultMetrics(node) {
  const common = [
    { title: "证据等级", text: "优先级：第三方测试/车型公告 > 官方发布 > 专利 > 论文 > 媒体传闻。" },
    { title: "工程判断", text: "判断一项技术是否成熟，要同时看性能、成本、良率、安全测试和量产规模。" }
  ];
  if (activeSection === "mechanism") {
    return [
      { title: "核心指标", text: "容量、倍率、循环寿命、首效、阻抗、温升、气体、副反应和热稳定性。" },
      ...common
    ];
  }
  if (activeSection === "frontier") {
    return [
      { title: "商业化指标", text: "车型搭载、GWh 产能、供应链配套、快充网络、成本/kWh 和安全口碑。" },
      ...common
    ];
  }
  return [
    { title: "新闻判断", text: "记录发布时间、信息来源、是否有原始数据、是否有车型或客户验证。" },
    ...common
  ];
}

function renderCards(targetId, items, fallback) {
  const el = document.querySelector(targetId);
  const cards = items && items.length ? items : fallback;
  el.innerHTML = "";
  cards.forEach((item) => {
    const card = document.createElement("div");
    card.className = targetId === "#metricList" ? "metric-item" : "explainer-card";
    card.innerHTML = `<strong>${linkifyTerms(item.title)}</strong><p>${linkifyTerms(item.text)}</p>`;
    el.appendChild(card);
  });
}

function renderGlossary(node, highlightId) {
  const panel = document.querySelector("#glossaryPanel");
  const list = document.querySelector("#glossaryList");
  if (!node.glossary) {
    panel.classList.add("is-hidden");
    list.innerHTML = "";
    return;
  }

  panel.classList.remove("is-hidden");
  list.innerHTML = "";
  node.glossary.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "glossary-card";
    card.id = `glossary-${entry.id}`;
    if (entry.id === highlightId) card.classList.add("is-highlighted");
    card.innerHTML = `
      <h4>${escapeHtml(entry.term)}</h4>
      <div class="glossary-meta">
        <span>${escapeHtml(entry.en)}</span>
        <span>${escapeHtml(entry.zh)}</span>
      </div>
      <p>${escapeHtml(entry.text)}</p>
    `;
    list.appendChild(card);
  });

  if (highlightId) {
    window.requestAnimationFrame(() => {
      document.querySelector(`#glossary-${highlightId}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
}

function visualKindFor(node) {
  const map = {
    "mechanism-root": "cell",
    glossary: "glossaryVisual",
    "cell-components": "cell",
    "cathode-materials": "cathodeMaterials",
    "anode-materials": "anodeMaterials",
    separator: "separator",
    electrolyte: "electrolyte",
    "current-collector": "collector",
    "binder-conductive": "electrode",
    "pouch-prismatic-cylindrical": "packaging",
    "tabs-safety-parts": "safety",
    "manufacturing-process": "manufacturing",
    "pack-bms-thermal": "packThermal",
    "lfp-fast-charge": "fastCharge",
    "sodium-ion": "sodium",
    "dry-electrode": "dryElectrode",
    "frontier-root": "industry",
    "news-root": "evidence",
    "news-official": "evidence",
    "news-paper": "evidence",
    "news-patent": "evidence",
    "news-video": "evidence",
    catl: "catl",
    byd: "byd",
    tesla: "tesla"
  };
  return map[node.id] || (activeSection === "frontier" ? "industry" : "cell");
}

function renderVisual(node) {
  const stage = document.querySelector("#visualStage");
  const visualType = document.querySelector("#visualType");
  const kind = visualKindFor(node);
  const labels = {
    cell: "机理图",
    separator: "结构图",
    electrolyte: "界面图",
    collector: "组成图",
    electrode: "极片图",
    packaging: "封装图",
    safety: "安全件图",
    manufacturing: "制造图",
    packThermal: "系统图",
    cathodeMaterials: "材料图",
    anodeMaterials: "材料图",
    glossaryVisual: "词汇图",
    fastCharge: "风险图",
    sodium: "储钠图",
    dryElectrode: "工艺图",
    industry: "现状图",
    evidence: "证据图",
    catl: "公司路线",
    byd: "公司路线",
    tesla: "公司路线"
  };
  visualType.textContent = labels[kind] || "图解";
  const image = imageForVisual(node, kind);
  const fallback = visuals[kind] || visuals.cell;
  stage.innerHTML = image
    ? `<figure class="generated-figure"><img src="${image.src}" alt="${image.alt}" onerror="this.closest('figure').remove()" /><figcaption>${image.caption}</figcaption></figure>${fallback}`
    : fallback;
}

function imageForVisual(node, kind) {
  const byNode = {
    "mechanism-root": {
      src: "assets/images/cell-components.png",
      alt: "锂离子电池组成与离子电子传输示意图",
      caption: "image2 生成图：电芯组成、集流体、隔膜、电解液、极耳与 Li+ / 电子路径。"
    },
    "cell-components": {
      src: "assets/images/cell-components.png",
      alt: "锂离子电池组成与离子电子传输示意图",
      caption: "image2 生成图：从电芯剖面理解正极、负极、隔膜、电解液、集流体和封装。"
    },
    "cathode-materials": {
      src: "assets/images/cathode-materials.png",
      alt: "LFP NCM NCA LMFP 正极材料路线对比图",
      caption: "image2 生成图：LFP、NCM/NCA、LMFP 正极体系的安全、成本、能量密度和成熟度对比。"
    },
    "anode-materials": {
      src: "assets/images/anode-materials.png",
      alt: "石墨 硅碳 硬碳负极机理对比图",
      caption: "image2 生成图：石墨嵌锂、硅碳膨胀、硬碳储钠和快充析锂风险。"
    },
    separator: {
      src: "assets/images/separator.png",
      alt: "锂离子电池隔膜孔结构与安全功能示意图",
      caption: "image2 生成图：隔膜孔道、陶瓷涂覆、热关闭和枝晶穿刺风险。"
    },
    electrolyte: {
      src: "assets/images/electrolyte-interface.png",
      alt: "电解液 SEI CEI 与副反应机理示意图",
      caption: "image2 生成图：电解液、SEI/CEI、产气、副反应和快充析锂风险。"
    },
    "lfp-fast-charge": {
      src: "assets/images/electrolyte-interface.png",
      alt: "快充析锂与界面副反应示意图",
      caption: "image2 生成图：快充时负极界面、SEI 和析锂风险的核心关系。"
    },
    "sodium-ion": {
      src: "assets/images/sodium-hard-carbon.png",
      alt: "钠离子硬碳储钠机理示意图",
      caption: "image2 生成图：硬碳缺陷吸附、层间嵌入、纳米孔填充和 SEI。"
    },
    "dry-electrode": {
      src: "assets/images/dry-electrode-process.png",
      alt: "湿法电极与干法电极制造流程对比图",
      caption: "image2 生成图：湿法与干法电极制造路线对比。"
    },
    "manufacturing-process": {
      src: "assets/images/dry-electrode-process.png",
      alt: "电极制造流程示意图",
      caption: "image2 生成图：电极制造流程与干法工艺对比。"
    },
    "pouch-prismatic-cylindrical": {
      src: "assets/images/cell-packaging.png",
      alt: "圆柱 方形 软包电芯封装对比图",
      caption: "image2 生成图：圆柱、方形铝壳、软包铝塑膜封装及安全结构对比。"
    },
    "pack-bms-thermal": {
      src: "assets/images/pack-bms-thermal.png",
      alt: "电池包 BMS 热管理和安全结构示意图",
      caption: "image2 生成图：电芯、汇流排、BMS、液冷、热屏障、泄压、熔断和接触器。"
    },
    "frontier-root": {
      src: "assets/images/industry-status.png",
      alt: "2026 电池行业研究现状分层图",
      caption: "image2 生成图：已规模化、工程化放大、研究前沿三层行业现状。"
    },
    "industry-status": {
      src: "assets/images/industry-status.png",
      alt: "2026 电池行业研究现状分层图",
      caption: "image2 生成图：帮助小白区分量产技术、工程化技术和研究前沿。"
    }
  };
  const byKind = {
    industry: byNode["industry-status"],
    evidence: byNode["industry-status"],
    cell: byNode["cell-components"],
    electrolyte: byNode.electrolyte,
    fastCharge: byNode["lfp-fast-charge"],
    sodium: byNode["sodium-ion"],
    dryElectrode: byNode["dry-electrode"]
  };
  return byNode[node.id] || byKind[kind] || null;
}

const visuals = {
  glossaryVisual: `
    <div class="schematic">
      <p class="visual-title">读电池论文和产业新闻时，先把术语分成状态量、界面机理、传输参数、工程指标和系统缩写。</p>
      <div class="status-grid">
        <div class="status-card-mini"><strong>状态量</strong><span>SOC / SOH / SOP / DoD / OCV</span></div>
        <div class="status-card-mini"><strong>界面机理</strong><span>SEI / CEI / ICE / 析锂 / 枝晶</span></div>
        <div class="status-card-mini warn"><strong>传输参数</strong><span>C-rate / 极化 / 过电位 / 扩散 / 电导率</span></div>
        <div class="status-card-mini"><strong>工程指标</strong><span>N/P / 面容量 / 载量 / 孔隙率 / 热失控</span></div>
      </div>
    </div>
  `,
  cell: `
    <div class="schematic">
      <p class="visual-title">锂离子在电解液中穿过隔膜，电子通过外电路流动；隔膜隔开正负极，集流体负责导电。</p>
      <div class="cell-stack">
        <div class="cell-layer cathode"><strong>正极</strong><span>LFP / NCM<br>铝箔集流体</span></div>
        <div class="ion-arrow">Li+</div>
        <div class="cell-layer separator-layer"><strong>隔膜</strong><span>孔道允许离子通过<br>阻隔电子短路</span></div>
        <div class="ion-arrow">Li+</div>
        <div class="cell-layer anode"><strong>负极</strong><span>石墨 / 硅碳 / 硬碳<br>铜箔集流体</span></div>
      </div>
      <div class="legend-row">
        <div class="legend-item"><strong>离子通道</strong><span>电解液 + 隔膜孔结构决定浓差极化。</span></div>
        <div class="legend-item"><strong>电子通道</strong><span>活性颗粒、导电剂、集流体和极耳决定欧姆热。</span></div>
        <div class="legend-item"><strong>安全边界</strong><span>热、气体、机械短路和界面副反应共同决定。</span></div>
      </div>
    </div>
  `,
  separator: `
    <div class="schematic">
      <p class="visual-title">隔膜的任务是“挡住电子短路，放行离子迁移”。孔结构、闭孔温度和热收缩是关键。</p>
      <div class="particle-field">
        <span class="particle"></span><span class="particle"></span><span class="particle"></span><span class="particle"></span>
      </div>
      <div class="legend-row">
        <div class="legend-item"><strong>PE/PP 基膜</strong><span>厚度、孔径、孔隙率影响倍率和安全。</span></div>
        <div class="legend-item"><strong>陶瓷涂覆</strong><span>提升热稳定和润湿，可能增加成本与阻抗。</span></div>
        <div class="legend-item"><strong>热关闭</strong><span>高温下孔道闭合，降低继续反应风险。</span></div>
      </div>
    </div>
  `,
  cathodeMaterials: `
    <div class="schematic">
      <p class="visual-title">正极路线决定能量密度、安全、成本和资源约束。行业不是单一路线，而是按车型和场景分化。</p>
      <div class="status-grid">
        <div class="status-card-mini"><strong>LFP</strong><span>低成本、高安全、长寿命；能量密度相对较低，正在向超充升级。</span></div>
        <div class="status-card-mini warn"><strong>NCM/NCA</strong><span>高能量密度，适合长续航；热稳定、成本和资源压力更高。</span></div>
        <div class="status-card-mini"><strong>LMFP</strong><span>在 LFP 基础上提升电压平台；导电性和 Mn 溶出仍需优化。</span></div>
      </div>
    </div>
  `,
  anodeMaterials: `
    <div class="schematic">
      <p class="visual-title">负极是快充和寿命的关键瓶颈：石墨成熟，硅碳提高容量，硬碳支撑钠离子。</p>
      <div class="risk-map">
        <div class="risk-panel"><strong>石墨快充</strong><div class="risk-meter"></div><span>低温、高 SOC、大电流时负极电位降低，析锂风险上升。</span></div>
        <div class="risk-panel"><strong>硅碳膨胀</strong><div class="risk-meter"></div><span>高容量伴随体积变化，SEI 反复破裂会损失锂和电解液。</span></div>
      </div>
      <div class="legend-row">
        <div class="legend-item"><strong>硬碳</strong><span>钠离子主流负极，关注首效、平台容量和产气。</span></div>
      </div>
    </div>
  `,
  electrolyte: `
    <div class="schematic">
      <p class="visual-title">电解液不仅传导 Li+，还会在正负极表面生成 SEI/CEI，决定界面阻抗和副反应。</p>
      <div class="cell-stack">
        <div class="cell-layer anode"><strong>负极</strong><span>石墨/硅碳</span></div>
        <div class="ion-arrow">SEI</div>
        <div class="cell-layer electrolyte-layer"><strong>电解液</strong><span>锂盐 + 溶剂 + 添加剂</span></div>
        <div class="ion-arrow">CEI</div>
        <div class="cell-layer cathode"><strong>正极</strong><span>高压稳定性</span></div>
      </div>
      <div class="legend-row">
        <div class="legend-item"><strong>锂盐</strong><span>LiPF6、LiFSI 等影响电导率和稳定性。</span></div>
        <div class="legend-item"><strong>添加剂</strong><span>VC、FEC 等调控成膜、产气和寿命。</span></div>
        <div class="legend-item"><strong>固态电解质</strong><span>硫化物、氧化物、聚合物路线各有界面难题。</span></div>
      </div>
    </div>
  `,
  collector: `
    <div class="schematic">
      <p class="visual-title">集流体把极片中的电子汇集到极耳。正极常用铝箔，负极常用铜箔。</p>
      <div class="flow-steps">
        <div class="flow-step"><b>铝箔</b>正极高电位更稳定</div>
        <div class="flow-step"><b>铜箔</b>负极低电位更稳定</div>
        <div class="flow-step"><b>涂炭层</b>降低接触电阻</div>
        <div class="flow-step"><b>复合集流体</b>减重与安全潜力</div>
      </div>
    </div>
  `,
  electrode: `
    <div class="schematic">
      <p class="visual-title">极片是活性材料、导电剂、粘结剂和孔隙电解液组成的多孔复合结构。</p>
      <div class="flow-steps">
        <div class="flow-step"><b>活性颗粒</b>储锂/储钠容量来源</div>
        <div class="flow-step"><b>导电网络</b>炭黑、CNT 连接电子通道</div>
        <div class="flow-step"><b>粘结网络</b>PVDF、SBR/CMC、PAA 维持结构</div>
        <div class="flow-step"><b>孔结构</b>控制电解液浸润和离子传输</div>
      </div>
    </div>
  `,
  packaging: `
    <div class="schematic">
      <p class="visual-title">电芯封装形态决定机械保护、泄压路径、空间利用率和热扩散方式。</p>
      <div class="status-grid">
        <div class="status-card-mini"><strong>圆柱</strong><span>制造成熟、一致性好，代表路线：4680。</span></div>
        <div class="status-card-mini"><strong>方形铝壳</strong><span>成组效率高，适合 CTP/CTB 和刀片等结构。</span></div>
        <div class="status-card-mini warn"><strong>软包铝塑膜</strong><span>轻量灵活，但封边、胀气和机械保护更关键。</span></div>
      </div>
    </div>
  `,
  safety: `
    <div class="schematic">
      <p class="visual-title">极耳、泄压阀、熔断件和 BMS 共同把材料体系变成可用产品。</p>
      <div class="evidence-ladder">
        <div class="evidence-step"><strong>极耳</strong><span>导出电流</span></div>
        <div class="evidence-step"><strong>焊接</strong><span>控制内阻和发热</span></div>
        <div class="evidence-step"><strong>安全阀</strong><span>异常升压泄放</span></div>
        <div class="evidence-step"><strong>熔断保护</strong><span>过流断开</span></div>
        <div class="evidence-step"><strong>BMS</strong><span>监测电压温度</span></div>
      </div>
    </div>
  `,
  manufacturing: `
    <div class="schematic">
      <p class="visual-title">制造流程决定材料能否稳定量产。电池企业的壁垒往往藏在良率、一致性和过程控制里。</p>
      <div class="flow-steps">
        <div class="flow-step"><b>匀浆</b>颗粒/导电剂/粘结剂分散</div>
        <div class="flow-step"><b>涂布烘干</b>面密度与缺陷控制</div>
        <div class="flow-step"><b>辊压分切</b>压实密度与孔结构</div>
        <div class="flow-step"><b>卷绕/叠片</b>结构一致性</div>
        <div class="flow-step"><b>注液化成</b>SEI/CEI 成膜</div>
        <div class="flow-step"><b>分容老化</b>筛选一致性与安全</div>
      </div>
    </div>
  `,
  packThermal: `
    <div class="schematic">
      <p class="visual-title">电池包是电芯、结构、热管理、BMS 和高压安全的系统工程。</p>
      <div class="company-roadmap">
        <div class="roadmap-step"><strong>电芯层</strong><span>化学体系、容量、倍率、热释放。</span></div>
        <div class="roadmap-step"><strong>热管理</strong><span>液冷、加热、导热垫、隔热层。</span></div>
        <div class="roadmap-step"><strong>BMS</strong><span>SOC/SOH/SOP 估算与安全控制。</span></div>
        <div class="roadmap-step"><strong>结构包</strong><span>CTP/CTB、汇流排、排气通道。</span></div>
      </div>
    </div>
  `,
  fastCharge: `
    <div class="schematic">
      <p class="visual-title">快充风险由倍率、温度、SOC 和负极界面共同决定。低温 + 高 SOC + 大电流最容易触发析锂。</p>
      <div class="risk-map">
        <div class="risk-panel"><strong>低风险区</strong><div class="risk-meter"></div><span>中低 SOC、适中温度、较小极化，Li+ 能进入石墨层间。</span></div>
        <div class="risk-panel"><strong>高风险区</strong><div class="risk-meter"></div><span>低温/高 SOC/大电流导致负极电位过低，金属锂可能沉积。</span></div>
      </div>
    </div>
  `,
  sodium: `
    <div class="schematic">
      <p class="visual-title">硬碳储钠通常被理解为缺陷/层间吸附、微孔填充等多机制叠加。</p>
      <div class="particle-field">
        <span class="particle"></span><span class="particle"></span><span class="particle"></span><span class="particle"></span>
      </div>
      <div class="legend-row">
        <div class="legend-item"><strong>斜坡区</strong><span>缺陷、边缘、层间位点贡献。</span></div>
        <div class="legend-item"><strong>平台区</strong><span>微孔填充和低电位储钠相关。</span></div>
        <div class="legend-item"><strong>产业瓶颈</strong><span>首效、产气、水分和材料一致性。</span></div>
      </div>
    </div>
  `,
  dryElectrode: `
    <div class="schematic">
      <p class="visual-title">干法电极的核心是少溶剂/无溶剂成膜，目标是降低烘干能耗并支持厚电极。</p>
      <div class="flow-steps">
        <div class="flow-step"><b>干混</b>活性材料 + 导电剂 + 粘结剂</div>
        <div class="flow-step"><b>纤维化</b>形成粘结网络</div>
        <div class="flow-step"><b>成膜</b>压延形成自支撑膜</div>
        <div class="flow-step"><b>复合</b>贴合到集流体</div>
      </div>
    </div>
  `,
  industry: `
    <div class="schematic">
      <p class="visual-title">截至 2026-05-09，行业研究现状可以按“已规模化、快速工程化、仍在攻关”三层理解。</p>
      <div class="status-grid">
        <div class="status-card-mini"><strong>已规模化</strong><span>LFP、NCM/NCA、CTP/CTB、液态电解液、湿法隔膜。</span></div>
        <div class="status-card-mini warn"><strong>快速工程化</strong><span>LFP 超充、钠离子、硅碳、复合集流体、干法电极。</span></div>
        <div class="status-card-mini hot"><strong>仍在攻关</strong><span>全固态、高负载厚电极、锂金属、极端快充寿命。</span></div>
      </div>
    </div>
  `,
  evidence: `
    <div class="schematic">
      <p class="visual-title">新闻不能直接等同技术落地。按证据等级从弱到强追踪，可以避免被发布会参数带跑。</p>
      <div class="evidence-ladder">
        <div class="evidence-step"><strong>论文</strong><span>可能方向</span></div>
        <div class="evidence-step"><strong>专利</strong><span>保护布局</span></div>
        <div class="evidence-step"><strong>官方发布</strong><span>战略确认</span></div>
        <div class="evidence-step"><strong>车型公告</strong><span>接近量产</span></div>
        <div class="evidence-step"><strong>拆解测试</strong><span>落地验证</span></div>
      </div>
    </div>
  `,
  catl: `
    <div class="schematic">
      <p class="visual-title">CATL 现状图：多化学体系 + 系统集成 + 超充/补能网络。</p>
      <div class="company-roadmap">
        <div class="roadmap-step"><strong>材料体系</strong><span>LFP、NCM、钠离子、凝聚态。</span></div>
        <div class="roadmap-step"><strong>系统结构</strong><span>麒麟、CTP、热管理。</span></div>
        <div class="roadmap-step"><strong>应用证据</strong><span>官方发布、整车项目、量产规划。</span></div>
      </div>
    </div>
  `,
  byd: `
    <div class="schematic">
      <p class="visual-title">BYD 现状图：LFP 刀片 + CTB/整车平台 + 超充网络。</p>
      <div class="company-roadmap">
        <div class="roadmap-step"><strong>刀片电池</strong><span>长电芯、结构安全、体积利用率。</span></div>
        <div class="roadmap-step"><strong>快充</strong><span>电极、电解液、热管理协同。</span></div>
        <div class="roadmap-step"><strong>垂直整合</strong><span>电芯、整车、补能基础设施。</span></div>
      </div>
    </div>
  `,
  tesla: `
    <div class="schematic">
      <p class="visual-title">Tesla 现状图：4680 + 干法电极 + 结构电池包 + 制造自动化。</p>
      <div class="company-roadmap">
        <div class="roadmap-step"><strong>4680</strong><span>大圆柱、热路径、结构件。</span></div>
        <div class="roadmap-step"><strong>干电极</strong><span>Maxwell 技术脉络，降本与厚电极。</span></div>
        <div class="roadmap-step"><strong>工厂集成</strong><span>电芯到整车制造节拍协同。</span></div>
      </div>
    </div>
  `
};

function marketFilters() {
  return {
    battery: document.querySelector("#marketBatteryType")?.value || "all",
    application: document.querySelector("#marketApplication")?.value || "all",
    year: Number(document.querySelector("#marketYear")?.value || 2026),
    sort: document.querySelector("#marketSort")?.value || "share"
  };
}

function filteredMarketCompanies() {
  const filters = marketFilters();
  return marketVisualData.companies
    .filter((company) => filters.battery === "all" || company.battery.includes(filters.battery))
    .filter((company) => filters.application === "all" || company.apps.includes(filters.application))
    .sort((a, b) => (b[filters.sort] || 0) - (a[filters.sort] || 0));
}

function renderMarketKpis(companies) {
  const topShare = companies[0] || marketVisualData.companies[0];
  const topTech = companies.slice().sort((a, b) => b.technology - a.technology)[0] || topShare;
  const trend = marketVisualData.trends.find((item) => item.year === marketFilters().year) || marketVisualData.trends.at(-1);
  const sodiumSignal = marketFilters().battery === "sodium" ? "示范转量产早期" : "锂电规模化主导";
  document.querySelector("#marketKpis").innerHTML = [
    { label: "份额领先", value: topShare.name, note: `${topShare.share}% 参考份额` },
    { label: "技术评分领先", value: topTech.name, note: `${topTech.technology}/100 综合评分` },
    { label: "年度出货趋势", value: `${trend.shipments} GWh`, note: `${trend.year} 年估算/统计口径` },
    { label: "路线判断", value: sodiumSignal, note: marketVisualData.updatedAt }
  ].map((item) => `
    <div class="market-kpi">
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.value)}</strong>
      <small>${escapeHtml(item.note)}</small>
    </div>
  `).join("");
}

function renderCompanyShare(companies) {
  const max = Math.max(...companies.map((company) => company.share), 1);
  document.querySelector("#companyShareChart").innerHTML = companies.map((company) => `
    <div class="bar-row" title="${escapeHtml(company.name)}：份额 ${company.share}% / 技术 ${company.technology} / 增长 ${company.growth}%">
      <strong>${escapeHtml(company.name)}</strong>
      <div class="bar-track"><div class="bar-fill" style="width:${(company.share / max) * 100}%; background:${company.color}"></div></div>
      <span>${company.share}%</span>
    </div>
  `).join("");
}

function radarPoint(value, index, total, radius, center) {
  const angle = -Math.PI / 2 + (index / total) * Math.PI * 2;
  const scaled = (value / 100) * radius;
  return {
    x: center + Math.cos(angle) * scaled,
    y: center + Math.sin(angle) * scaled
  };
}

function renderTechRadar(companies) {
  const top = companies.slice(0, 3);
  const center = 145;
  const radius = 105;
  const axes = marketVisualData.radarAxes;
  const rings = [25, 50, 75, 100].map((value) => {
    const points = axes.map((_, index) => radarPoint(value, index, axes.length, radius, center));
    return `<polygon points="${points.map((point) => `${point.x},${point.y}`).join(" ")}" fill="none" stroke="#d9e2dd" />`;
  }).join("");
  const axisLines = axes.map((axis, index) => {
    const end = radarPoint(100, index, axes.length, radius, center);
    const label = radarPoint(115, index, axes.length, radius, center);
    return `<line x1="${center}" y1="${center}" x2="${end.x}" y2="${end.y}" stroke="#d9e2dd" /><text x="${label.x}" y="${label.y}" text-anchor="middle" font-size="11" fill="#596760">${axis}</text>`;
  }).join("");
  const shapes = top.map((company) => {
    const points = company.metrics.map((value, index) => radarPoint(value, index, axes.length, radius, center));
    return `<polygon points="${points.map((point) => `${point.x},${point.y}`).join(" ")}" fill="${company.color}22" stroke="${company.color}" stroke-width="2" />`;
  }).join("");
  const legend = top.map((company, index) => `<text x="16" y="${24 + index * 18}" font-size="12" fill="${company.color}">● ${company.name}</text>`).join("");
  document.querySelector("#techRadarChart").innerHTML = `<svg viewBox="0 0 320 310" role="img" aria-label="技术雷达图">${rings}${axisLines}${shapes}${legend}</svg>`;
}

function donutSlice(start, end, radius, center) {
  const startAngle = (start - 25) / 100 * Math.PI * 2;
  const endAngle = (end - 25) / 100 * Math.PI * 2;
  const large = end - start > 50 ? 1 : 0;
  const x1 = center + Math.cos(startAngle) * radius;
  const y1 = center + Math.sin(startAngle) * radius;
  const x2 = center + Math.cos(endAngle) * radius;
  const y2 = center + Math.sin(endAngle) * radius;
  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2}`;
}

function renderApplicationDonut() {
  let cursor = 0;
  const center = 140;
  const radius = 88;
  const slices = marketVisualData.applications.map((item) => {
    const start = cursor;
    cursor += item.value;
    return `<path d="${donutSlice(start, cursor, radius, center)}" fill="none" stroke="${item.color}" stroke-width="34" />`;
  }).join("");
  const legend = marketVisualData.applications.map((item, index) => `<text x="22" y="${246 + index * 18}" font-size="12" fill="${item.color}">● ${item.label} ${item.value}%</text>`).join("");
  document.querySelector("#applicationDonutChart").innerHTML = `
    <svg viewBox="0 0 320 310" role="img" aria-label="应用市场占比环形图">
      ${slices}
      <circle cx="${center}" cy="${center}" r="52" fill="#fff" />
      <text x="${center}" y="${center - 4}" text-anchor="middle" font-size="22" font-weight="800" fill="#1c2924">应用</text>
      <text x="${center}" y="${center + 18}" text-anchor="middle" font-size="12" fill="#596760">市场占比</text>
      ${legend}
    </svg>
  `;
}

function linePoints(values, key, width, height, pad) {
  const min = Math.min(...values.map((item) => item[key]));
  const max = Math.max(...values.map((item) => item[key]));
  return values.map((item, index) => {
    const x = pad + index * ((width - pad * 2) / (values.length - 1));
    const y = height - pad - ((item[key] - min) / (max - min || 1)) * (height - pad * 2);
    return { x, y };
  });
}

function renderTrendLine() {
  const data = marketVisualData.trends;
  const width = 520;
  const height = 250;
  const pad = 42;
  const shipments = linePoints(data, "shipments", width, height, pad);
  const price = linePoints(data, "price", width, height, pad);
  const toPath = (points) => points.map((point, index) => `${index ? "L" : "M"}${point.x},${point.y}`).join(" ");
  const yearLabels = data.map((item, index) => `<text x="${shipments[index].x}" y="${height - 12}" text-anchor="middle" font-size="11" fill="#596760">${item.year}</text>`).join("");
  document.querySelector("#trendLineChart").innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="出货量与价格趋势线">
      <line x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}" stroke="#d9e2dd" />
      <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${height - pad}" stroke="#d9e2dd" />
      <path d="${toPath(shipments)}" fill="none" stroke="#1f8f6a" stroke-width="3" />
      <path d="${toPath(price)}" fill="none" stroke="#c28b2c" stroke-width="3" />
      ${shipments.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="4" fill="#1f8f6a" />`).join("")}
      ${price.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="4" fill="#c28b2c" />`).join("")}
      ${yearLabels}
      <text x="${pad}" y="18" font-size="12" fill="#1f8f6a">● 出货量 GWh</text>
      <text x="150" y="18" font-size="12" fill="#c28b2c">● 电芯价格 $/kWh</text>
    </svg>
  `;
}

function renderRegionHeat() {
  const max = Math.max(...marketVisualData.regions.map((region) => region.value), 1);
  document.querySelector("#regionHeatChart").innerHTML = `
    <div class="heat-grid">
      ${marketVisualData.regions.map((region) => {
        const alpha = 0.16 + (region.value / max) * 0.55;
        return `<div class="heat-cell" style="background:rgba(31,143,106,${alpha})" title="${escapeHtml(region.note)}">
          <strong>${escapeHtml(region.name)}</strong>
          <span>${region.value}%</span>
          <small>${escapeHtml(region.note)}</small>
        </div>`;
      }).join("")}
    </div>
  `;
}

function renderMarketDashboard() {
  const companies = filteredMarketCompanies();
  document.querySelector("#marketDataDate").textContent = marketVisualData.updatedAt;
  renderMarketKpis(companies);
  renderCompanyShare(companies);
  renderTechRadar(companies);
  renderApplicationDonut();
  renderTrendLine();
  renderRegionHeat();
  document.querySelector("#marketSources").innerHTML = marketVisualData.sources.map((source) => `<p>${escapeHtml(source)}</p>`).join("");
}

function companyFilters() {
  return {
    segment: document.querySelector("#companySegment")?.value || "cell-pack",
    search: (document.querySelector("#companySearch")?.value || "").trim().toLowerCase(),
    sort: document.querySelector("#companySort")?.value || "rank"
  };
}

function segmentById(id) {
  return companyState.data?.segments.find((segment) => segment.id === id);
}

function companyById(id) {
  return companyState.data?.companies.find((company) => company.id === id);
}

function companySearchText(company) {
  return [
    company.name,
    company.segment,
    company.shareLabel,
    ...(company.technologyRoutes || []),
    ...(company.customers || []),
    ...(company.aliases || [])
  ].join(" ").toLowerCase();
}

function evidenceCompanyRank(company) {
  return { high: 3, medium: 2, low: 1 }[company.evidenceLevel] || 0;
}

function filteredCompanies() {
  if (!companyState.data) return [];
  const filters = companyFilters();
  return companyState.data.companies
    .filter((company) => company.segment === filters.segment)
    .filter((company) => !filters.search || companySearchText(company).includes(filters.search))
    .sort((a, b) => {
      if (filters.sort === "share") return (b.marketShare || 0) - (a.marketShare || 0) || a.rank - b.rank;
      if (filters.sort === "evidence") return evidenceCompanyRank(b) - evidenceCompanyRank(a) || a.rank - b.rank;
      return a.rank - b.rank;
    });
}

function relatedCompanyIntel(company) {
  if (!company) return [];
  const names = [company.name, ...(company.aliases || [])].map((item) => item.toLowerCase());
  return intelligenceState.items
    .filter((item) => names.some((name) => itemSearchText(item).includes(name)))
    .sort((a, b) => evidenceRank(b) - evidenceRank(a) || itemDateValue(b) - itemDateValue(a))
    .slice(0, 8);
}

function renderCompanySegments() {
  const select = document.querySelector("#companySegment");
  if (!select || !companyState.data) return;
  select.innerHTML = companyState.data.segments
    .map((segment) => `<option value="${escapeHtml(segment.id)}">${escapeHtml(segment.name)}</option>`)
    .join("");
}

function renderCompanyRankList() {
  const list = document.querySelector("#companyRankList");
  const companies = filteredCompanies();
  const maxShare = Math.max(...companies.map((company) => company.marketShare || 0), 1);
  if (!companies.length) {
    list.innerHTML = '<p class="empty">没有匹配的公司。</p>';
    return;
  }
  if (!companyState.selectedId || !companies.some((company) => company.id === companyState.selectedId)) {
    companyState.selectedId = companies[0].id;
  }
  list.innerHTML = companies.map((company) => `
    <article class="company-row ${company.id === companyState.selectedId ? "is-selected" : ""}" data-company-id="${escapeHtml(company.id)}" title="${escapeHtml(company.shareLabel)}">
      <span class="company-rank">${company.rank}</span>
      <span class="company-main">
        <strong>${escapeHtml(company.name)}</strong>
        <span>${escapeHtml(company.technologyRoutes.join(" / "))}</span>
      </span>
      <small>${company.marketShare ? `${company.marketShare}%` : "待核验"}</small>
      <div class="share-bar"><div style="width:${company.marketShare ? (company.marketShare / maxShare) * 100 : Math.max(8, 100 - company.rank * 7)}%"></div></div>
    </article>
  `).join("");
}

function renderCompanyDetail() {
  const company = companyById(companyState.selectedId);
  const segment = company && segmentById(company.segment);
  const detail = document.querySelector("#companyDetail");
  const badge = document.querySelector("#selectedCompanyBadge");
  if (!company) {
    detail.innerHTML = '<p class="empty">点击左侧公司查看详情。</p>';
    if (badge) badge.textContent = "点击公司查看";
    renderIntelCards("#companyIntelList", [], "选择公司后显示相关新闻、技术和专利线索。", 8);
    return;
  }
  if (badge) badge.textContent = segment?.name || "公司详情";
  detail.innerHTML = `
    <article class="company-detail-card">
      <h4>${escapeHtml(company.name)}</h4>
      <p><strong>所属环节：</strong>${escapeHtml(segment?.name || company.segment)}；<strong>排名：</strong>Top ${company.rank}</p>
      <p>${escapeHtml(company.shareLabel)}</p>
      <div class="company-tags">
        ${(company.technologyRoutes || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        ${(company.customers || []).map((id) => `<span>客户/关联：${escapeHtml(companyById(id)?.name || id)}</span>`).join("")}
        <span>${escapeHtml(evidenceLabels[company.evidenceLevel] || company.evidenceLevel)}</span>
      </div>
    </article>
  `;
  const items = relatedCompanyIntel(company);
  document.querySelector("#companyIntelStatus").textContent = items.length ? `${items.length} 条相关线索` : "暂无自动匹配";
  renderIntelCards("#companyIntelList", items, "暂未从自动新闻/论文/专利中匹配到该公司；后续抓取会继续补充。", 8);
}

function renderCompanyNetwork() {
  const stage = document.querySelector("#companyNetwork");
  if (!stage || !companyState.data) return;
  const segment = companyFilters().segment;
  const focusCompanies = filteredCompanies().slice(0, 10);
  const focusIds = new Set(focusCompanies.map((company) => company.id));
  if (companyState.selectedId) focusIds.add(companyState.selectedId);
  const visibleIds = new Set(focusIds);
  const active = companyState.selectedId;

  companyState.data.relations.forEach((relation) => {
    if (focusIds.has(relation.source) || focusIds.has(relation.target) || relation.source === active || relation.target === active) {
      visibleIds.add(relation.source);
      visibleIds.add(relation.target);
    }
  });

  const nodes = companyState.data.companies
    .filter((company) => visibleIds.has(company.id))
    .sort((a, b) => {
      const aFocus = a.segment === segment ? 0 : 1;
      const bFocus = b.segment === segment ? 0 : 1;
      return aFocus - bFocus || a.rank - b.rank;
    })
    .slice(0, 26);
  const nodeIds = new Set(nodes.map((company) => company.id));
  const links = companyState.data.relations.filter((relation) => nodeIds.has(relation.source) && nodeIds.has(relation.target));
  const linkedToActive = new Set();
  links.forEach((relation) => {
    if (relation.source === active) linkedToActive.add(relation.target);
    if (relation.target === active) linkedToActive.add(relation.source);
  });

  const laneFor = (company) => {
    if (company.segment === segment) return "focus";
    if (company.segment === "cell-pack") return segment === "cell-pack" ? "focus" : "customer";
    if ((company.customers || []).some((id) => focusIds.has(id))) return "partner";
    return "partner";
  };
  const lanes = {
    partner: nodes.filter((company) => laneFor(company) === "partner"),
    focus: nodes.filter((company) => laneFor(company) === "focus"),
    customer: nodes.filter((company) => laneFor(company) === "customer")
  };
  const width = 1100;
  const maxRows = Math.max(lanes.partner.length, lanes.focus.length, lanes.customer.length, 5);
  const height = Math.max(520, 130 + maxRows * 72);
  const xByLane = { partner: 190, focus: 550, customer: 910 };
  const laneTitle = {
    partner: segment === "cell-pack" ? "材料 / 设备 / 回收伙伴" : "上游与关联公司",
    focus: segmentById(segment)?.name || "当前环节",
    customer: "电芯 / 整包客户"
  };
  const positions = new Map();
  Object.entries(lanes).forEach(([lane, laneNodes]) => {
    const gap = laneNodes.length > 1 ? Math.min(76, (height - 165) / (laneNodes.length - 1)) : 0;
    const startY = laneNodes.length > 1 ? 108 : height / 2;
    laneNodes.forEach((company, index) => {
      positions.set(company.id, { x: xByLane[lane], y: startY + index * gap, lane });
    });
  });
  const shortName = (name) => name.split(" ")[0].replace("股份", "").replace("科技", "").slice(0, 8);
  const relationColor = (type, hot) => {
    if (hot) return "#157f5c";
    return { supplier: "#83aaa0", equipment: "#9b8ad8", affiliate: "#d4a247", recycling: "#5aa7a5" }[type] || "#bdcbc6";
  };
  stage.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="公司供应链分层关系图">
      <defs>
        <marker id="companyArrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L8,3 z" fill="#83aaa0"></path>
        </marker>
        <marker id="companyArrowHot" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,7 L9,3.5 z" fill="#157f5c"></path>
        </marker>
      </defs>
      ${Object.entries(xByLane).map(([lane, x]) => `
        <g class="network-lane-title">
          <line x1="${x}" y1="52" x2="${x}" y2="${height - 32}"></line>
          <rect x="${x - 88}" y="22" width="176" height="32" rx="16"></rect>
          <text x="${x}" y="43" text-anchor="middle">${escapeHtml(laneTitle[lane])}</text>
        </g>
      `).join("")}
      ${links.map((relation) => {
        const s = positions.get(relation.source);
        const t = positions.get(relation.target);
        const hot = relation.source === active || relation.target === active;
        const midX = (s.x + t.x) / 2;
        const midY = (s.y + t.y) / 2;
        const curve = s.y === t.y ? 0 : Math.max(-70, Math.min(70, (t.y - s.y) / 5));
        return `<g class="network-link ${hot ? "is-hot" : ""}">
          <path d="M${s.x},${s.y} C${s.x + 115},${s.y + curve} ${t.x - 115},${t.y - curve} ${t.x},${t.y}" fill="none" stroke="${relationColor(relation.type, hot)}" stroke-width="${hot ? 3.2 : 1.6}" marker-end="url(#${hot ? "companyArrowHot" : "companyArrow"})">
            <title>${escapeHtml(companyById(relation.source)?.name || relation.source)} → ${escapeHtml(companyById(relation.target)?.name || relation.target)}：${escapeHtml(relation.label)}</title>
          </path>
          ${hot ? `<text class="network-relation-label" x="${midX}" y="${midY - 8}" text-anchor="middle">${escapeHtml(relation.label.slice(0, 12))}</text>` : ""}
        </g>`;
      }).join("")}
      ${nodes.map((company) => {
        const p = positions.get(company.id);
        const isActive = company.id === active;
        const isRelated = linkedToActive.has(company.id);
        const isSegment = company.segment === segment;
        const radius = (company.marketShare ? Math.min(26, 11 + company.marketShare / 3) : 13) + (isActive ? 5 : 0);
        const fill = isSegment ? "#1f8f6a" : company.segment === "cell-pack" ? "#2878b5" : "#c28b2c";
        const label = shortName(company.name);
        const labelWidth = Math.max(62, Math.min(112, label.length * 14 + 20));
        return `<g class="network-node ${isActive ? "is-active" : ""}" data-company-id="${escapeHtml(company.id)}">
          <circle class="network-node-halo" cx="${p.x}" cy="${p.y}" r="${radius + 7}" fill="${fill}" opacity="${isRelated || isActive ? 0.14 : 0}"></circle>
          <circle cx="${p.x}" cy="${p.y}" r="${radius}" fill="${fill}" fill-opacity="${isActive ? 0.98 : 0.82}" stroke="${isActive ? "#0d5f46" : "#fff"}" stroke-width="${isActive ? 3 : 2}">
            <title>${escapeHtml(company.name)}｜${escapeHtml(company.shareLabel)}</title>
          </circle>
          <rect class="network-label-bg" x="${p.x - labelWidth / 2}" y="${p.y + radius + 9}" width="${labelWidth}" height="24" rx="12"></rect>
          <text class="network-label" x="${p.x}" y="${p.y + radius + 26}" text-anchor="middle">${escapeHtml(label)}</text>
        </g>`;
      }).join("")}
    </svg>
  `;
}

function renderCompanySources() {
  const el = document.querySelector("#companySources");
  if (!el || !companyState.data) return;
  el.innerHTML = [
    `<p>${escapeHtml(companyState.data.note)}</p>`,
    ...companyState.data.sources.map((source) => `<p><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a></p>`)
  ].join("");
}

function renderCompanyDashboard() {
  if (!companyState.data) {
    document.querySelector("#companyDataDate").textContent = "等待数据";
    document.querySelector("#companyRankList").innerHTML = '<p class="empty">正在加载公司数据库。</p>';
    return;
  }
  document.querySelector("#companyDataDate").textContent = companyState.data.updatedAt;
  const segment = segmentById(companyFilters().segment);
  document.querySelector("#companySegmentNote").textContent = segment?.description || "按公开口径整理";
  renderCompanyRankList();
  renderCompanyDetail();
  renderCompanyNetwork();
  renderCompanySources();
}

const pageSourceNotes = {
  overview: {
    status: "总览口径",
    text: "信息来源：站内结构化知识、公开论文数据库、公司公告/年报、行业研究机构、专利检索入口和新闻媒体公开报道。数据整理时间：2026-05-10。自动抓取内容仅作为线索，未审核内容不代表最终结论。"
  },
  mechanism: {
    status: "学习资料",
    text: "信息来源：教材型电化学知识、公开综述论文、Google Scholar 检索入口、Battery University 等公开学习资料；机理内容用于学习框架，具体参数需回到原文测试条件。"
  },
  frontier: {
    status: "技术线索",
    text: "信息来源：论文、专利、公司发布会、年报/公告、行业新闻和视频入口。前沿技术以“证据等级 + 发布时间 + 审核状态”判断可靠性，未审核线索不直接作为结论。"
  },
  news: {
    status: "自动抓取",
    text: "信息来源：GitHub Actions 定期采集的论文、新闻、视频和专利检索入口。发布时间、采集时间、来源、证据等级和审核状态会显示在卡片中；建议点击原文复核。"
  },
  visualization: {
    status: "数据图表",
    text: "信息来源：SNE Research、公司年报/公告、行业公开报告、新闻报道和站内 data/*.json。市场份额受统计口径影响，需区分全球/中国、动力/储能、出货量/装机量。"
  },
  companies: {
    status: "公司口径",
    text: "信息来源：公司年报/公告、SNE、EVTank、GGII、SMM、公开新闻和专利/论文入口。公司份额与排名按公开口径整理，缺少一致公开份额的条目会标注为待核验。"
  }
};

function renderPageSourceNote() {
  const note = pageSourceNotes[activeSection] || pageSourceNotes.overview;
  const status = document.querySelector("#sourceAuditStatus");
  const text = document.querySelector("#pageSourceNote");
  if (status) status.textContent = note.status;
  if (text) text.textContent = note.text;
}

async function loadCompanyData() {
  try {
    companyState.data = await loadJson("data/companies.json");
    renderCompanySegments();
    companyState.selectedId = filteredCompanies()[0]?.id || null;
    renderCompanyDashboard();
  } catch (error) {
    document.querySelector("#companyDataDate").textContent = "加载失败";
    document.querySelector("#companyRankList").innerHTML = '<p class="empty">公司数据库暂时不可用，请检查 data/companies.json。</p>';
  }
}

function renderDetail(node) {
  document.body.classList.toggle("is-overview", activeSection === "overview");
  document.body.classList.toggle("is-news", activeSection === "news");
  document.body.classList.toggle("is-visualization", activeSection === "visualization");
  document.body.classList.toggle("is-companies", activeSection === "companies");
  document.querySelector("#sectionLabel").textContent = sections[activeSection].label;
  document.querySelector("#nodeTitle").textContent = node.title;
  document.querySelector("#nodeSummary").innerHTML = linkifyTerms(node.summary);
  document.querySelector("#difficultyBadge").textContent = node.difficulty;
  document.querySelector("#updatedAt").textContent = "2026-05-09";
  if (activeSection === "visualization") renderMarketDashboard();
  if (activeSection === "companies") renderCompanyDashboard();
  renderVisual(node);
  renderCards("#beginnerGuide", node.beginnerGuide, defaultBeginnerGuide(node));
  renderList("#keyPoints", node.keyPoints);
  renderList("#researchQuestions", node.researchQuestions);
  renderCards("#metricList", node.metrics, defaultMetrics(node));
  renderGlossary(node);
  renderProgress(node.progress);
  renderLinks("#sourceLinks", node.sources);
  renderLinks("#videoLinks", node.videos);
  renderRelatedIntel(node);
  renderIntelligenceCenter();
  renderPageSourceNote();
}

function openGlossary(termId) {
  activeSection = "mechanism";
  selectedId = "glossary";
  openNodes.add("mechanism-root");
  openNodes.add("glossary");
  tabButtons.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.section === "mechanism"));
  renderTree();
  renderDetail(findNode("glossary"));
  renderGlossary(findNode("glossary"), termId);
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeSection = button.dataset.section;
    selectedId = sections[activeSection].roots[0].id;
    tabButtons.forEach((tab) => tab.classList.toggle("is-active", tab === button));
    openNodes.add(selectedId);
    renderTree();
    renderDetail(findNode(selectedId));
  });
});

searchInput.addEventListener("input", renderTree);

document.addEventListener("click", (event) => {
  const link = event.target.closest(".term-link");
  if (!link) return;
  event.preventDefault();
  openGlossary(link.dataset.term);
});

document.addEventListener("click", (event) => {
  const card = event.target.closest("[data-overview-target]");
  if (!card) return;
  const nextSection = card.dataset.overviewTarget;
  if (!sections[nextSection]) return;
  activeSection = nextSection;
  selectedId = sections[nextSection].roots[0].id;
  tabButtons.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.section === nextSection));
  openNodes.add(selectedId);
  renderTree();
  renderDetail(findNode(selectedId));
});

document.querySelector("#expandAll").addEventListener("click", () => {
  flatten(sections[activeSection].roots).forEach((node) => openNodes.add(node.id));
  renderTree();
});

document.querySelector("#collapseAll").addEventListener("click", () => {
  flatten(sections[activeSection].roots).forEach((node) => openNodes.delete(node.id));
  renderTree();
});

function formatFeedDate(value) {
  if (!value) return "采集时间待更新";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toISOString().slice(0, 10);
}

function ensureArray(value) {
  return Array.isArray(value) ? value : [];
}

function itemSearchText(item) {
  return [
    item.title,
    item.source,
    item.query,
    item.type,
    ...ensureArray(item.topics),
    ...ensureArray(item.companies),
    ...ensureArray(item.technologyRoutes)
  ].filter(Boolean).join(" ").toLowerCase();
}

function itemDateValue(item) {
  const date = new Date(item.publishedAt || item.collectedAt || 0);
  return Number.isNaN(date.getTime()) ? 0 : date.getTime();
}

function evidenceRank(item) {
  return { high: 3, medium: 2, low: 1 }[item.evidenceLevel] || 0;
}

function normalizeClientItem(item, fallbackType) {
  return {
    ...item,
    type: item.type || fallbackType,
    topics: ensureArray(item.topics),
    companies: ensureArray(item.companies),
    technologyRoutes: ensureArray(item.technologyRoutes),
    evidenceLevel: item.evidenceLevel || (fallbackType === "video" ? "low" : "medium"),
    review: item.review || item.status || "unreviewed"
  };
}

function tagsForItem(item) {
  return [
    ...ensureArray(item.topics).map((topic) => topicLabels[topic] || topic),
    ...ensureArray(item.companies).map((company) => topicLabels[company] || company.toUpperCase()),
    ...ensureArray(item.technologyRoutes)
  ].slice(0, 6);
}

function renderIntelCards(targetId, items, emptyText, limit = 12) {
  const el = document.querySelector(targetId);
  if (!el) return;
  el.innerHTML = "";
  if (!items || !items.length) {
    el.innerHTML = `<p class="empty">${escapeHtml(emptyText)}</p>`;
    return;
  }
  items.slice(0, limit).forEach((item) => {
    const card = document.createElement("article");
    card.className = `intel-card ${item.review === "discarded" ? "is-discarded" : ""}`;
    const tags = tagsForItem(item);
    card.innerHTML = `
      <a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.title)}</a>
      <p>${escapeHtml(item.query ? `匹配来源：${item.query}` : item.source || "自动采集线索")}</p>
      <div class="intel-meta">
        <span>${escapeHtml(typeLabels[item.type] || item.type || "线索")}</span>
        <span>${escapeHtml(item.source || "Unknown source")}</span>
        <span class="evidence-${escapeHtml(item.evidenceLevel || "low")}">${escapeHtml(evidenceLabels[item.evidenceLevel] || "线索")}</span>
        <span class="review-${escapeHtml(item.review || "unreviewed")}">${escapeHtml(reviewLabels[item.review] || item.review || "未审核线索")}</span>
        <span>发布：${escapeHtml(formatFeedDate(item.publishedAt))}</span>
        <span>采集：${escapeHtml(formatFeedDate(item.collectedAt))}</span>
      </div>
      <div class="intel-tags">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    `;
    el.appendChild(card);
  });
}

function renderFeed(targetId, items, emptyText) {
  const el = document.querySelector(targetId);
  if (!el) return;
  el.innerHTML = "";
  if (!items || !items.length) {
    el.innerHTML = `<p class="empty">${emptyText}</p>`;
    return;
  }
  items.slice(0, 6).forEach((item) => {
    const card = document.createElement("article");
    card.className = "feed-card";
    card.innerHTML = `
      <a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.title)}</a>
      <div class="feed-meta">
        <span>${escapeHtml(item.source || "Unknown source")}</span>
        <span>发布：${escapeHtml(formatFeedDate(item.publishedAt))}</span>
        <span>采集：${escapeHtml(formatFeedDate(item.collectedAt))}</span>
      </div>
    `;
    el.appendChild(card);
  });
}

function intelligenceFilters() {
  const node = findNode(selectedId);
  const newsType = activeSection === "news" ? (node?.intelType || (selectedId === "news-root" ? "all" : null)) : null;
  return {
    search: (intelControls.search?.value || "").trim().toLowerCase(),
    topic: intelControls.topic?.value || "all",
    type: newsType || intelControls.type?.value || "all",
    review: intelControls.review?.value || "all",
    sort: intelControls.sort?.value || "newest"
  };
}

function filteredIntelligenceItems() {
  const filters = intelligenceFilters();
  const items = intelligenceState.items.filter((item) => {
    if (filters.type !== "all") {
      const typeMatches = filters.type === "news" ? ["news", "news-search"].includes(item.type) : item.type === filters.type;
      if (!typeMatches) return false;
    }
    if (filters.review !== "all" && item.review !== filters.review) return false;
    if (filters.topic !== "all") {
      const buckets = [...item.topics, ...item.companies, ...item.technologyRoutes];
      if (!buckets.includes(filters.topic)) return false;
    }
    if (filters.search && !itemSearchText(item).includes(filters.search)) return false;
    return true;
  });
  return items.sort((a, b) => {
    if (filters.sort === "evidence") return evidenceRank(b) - evidenceRank(a) || itemDateValue(b) - itemDateValue(a);
    return itemDateValue(b) - itemDateValue(a) || evidenceRank(b) - evidenceRank(a);
  });
}

function inferNodeTopics(node) {
  const text = [node.id, node.title, node.tag, node.summary, ...(node.keyPoints || [])].join(" ").toLowerCase();
  const matches = [];
  const rules = [
    ["fast-charge", ["快充", "超充", "fast", "lfp-fast-charge"]],
    ["sodium-ion", ["钠", "sodium", "hard carbon"]],
    ["solid-state", ["固态", "solid"]],
    ["dry-electrode", ["干法", "干电极", "dry"]],
    ["separator", ["隔膜", "separator"]],
    ["electrolyte", ["电解", "sei", "cei", "electrolyte"]],
    ["bms", ["bms", "管理系统"]],
    ["thermal-management", ["热", "thermal", "安全"]],
    ["catl", ["catl", "宁德"]],
    ["byd", ["byd", "比亚迪", "刀片"]],
    ["tesla", ["tesla", "特斯拉", "4680", "maxwell"]]
  ];
  rules.forEach(([topic, keywords]) => {
    if (keywords.some((keyword) => text.includes(keyword))) matches.push(topic);
  });
  return matches;
}

function relatedItemsForNode(node) {
  const forcedType = activeSection === "news" ? node?.intelType : null;
  const topics = inferNodeTopics(node);
  const baseItems = forcedType ? intelligenceState.items.filter((item) => {
    if (forcedType === "news") return ["news", "news-search"].includes(item.type);
    return item.type === forcedType;
  }) : intelligenceState.items;
  if (!topics.length) return baseItems.slice().sort((a, b) => itemDateValue(b) - itemDateValue(a)).slice(0, 6);
  return baseItems
    .filter((item) => {
      const buckets = [...item.topics, ...item.companies, ...item.technologyRoutes];
      return topics.some((topic) => buckets.includes(topic));
    })
    .sort((a, b) => evidenceRank(b) - evidenceRank(a) || itemDateValue(b) - itemDateValue(a))
    .slice(0, 8);
}

function renderRelatedIntel(node) {
  const status = document.querySelector("#relatedIntelStatus");
  const items = relatedItemsForNode(node);
  if (status) {
    const topics = inferNodeTopics(node).map((topic) => topicLabels[topic] || topic);
    const forcedType = activeSection === "news" ? node?.intelType : null;
    status.textContent = forcedType ? `${typeLabels[forcedType] || forcedType}线索` : topics.length ? topics.join(" / ") : "综合线索";
  }
  renderIntelCards("#relatedIntelList", items, "等待自动更新数据；数据加载后会按当前词条匹配相关论文、新闻、视频和专利。", 8);
}

function syncFeedSections(forcedType) {
  document.querySelectorAll("[data-feed-type]").forEach((section) => {
    section.hidden = Boolean(forcedType) && section.dataset.feedType !== forcedType;
  });
}

function renderIntelligenceCenter() {
  const items = filteredIntelligenceItems();
  const count = document.querySelector("#intelligenceCount");
  const meta = document.querySelector("#intelligenceMeta");
  const node = findNode(selectedId);
  const forcedType = activeSection === "news" ? node?.intelType : null;
  if (intelControls.type && forcedType) intelControls.type.value = forcedType;
  if (intelControls.type && activeSection === "news" && selectedId === "news-root") intelControls.type.value = "all";
  if (count) count.textContent = forcedType ? `${typeLabels[forcedType] || "情报"}：${items.length} 条` : `${items.length} 条线索`;
  if (meta) {
    const collectedAt = intelligenceState.metadata?.collectedAt;
    const prefix = forcedType ? `当前入口：${typeLabels[forcedType] || forcedType}；` : "";
    meta.textContent = collectedAt ? `${prefix}最近采集：${formatFeedDate(collectedAt)}` : `${prefix}等待自动更新数据`;
  }
  syncFeedSections(forcedType);
  renderIntelCards("#intelligenceList", items, "没有匹配的情报线索。可以换一个主题、类型或搜索词。", 24);
}

async function loadJson(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`${response.status} ${path}`);
  return response.json();
}

async function loadDynamicFeeds() {
  const status = document.querySelector("#autoUpdateStatus");
  if (!status) return;
  const localFile = window.location.protocol === "file:";
  if (localFile) {
    status.textContent = "本地预览需启动服务";
    renderFeed("#latestPapers", [], "双击 index.html 时浏览器通常不能读取 JSON。运行 npm run serve 后可预览自动更新区。");
    renderFeed("#latestNews", [], "部署到 GitHub Pages 后，这里会自动读取 data/news.json。");
    renderFeed("#latestVideos", [], "部署后这里会显示视频检索入口。");
    renderFeed("#latestPatents", [], "部署后这里会显示专利检索入口。");
    return;
  }

  try {
    const [metadata, papers, news, videos, patents] = await Promise.all([
      loadJson("data/metadata.json"),
      loadJson("data/papers.json"),
      loadJson("data/news.json"),
      loadJson("data/videos.json"),
      loadJson("data/patents.json")
    ]);
    intelligenceState.metadata = metadata;
    intelligenceState.items = [
      ...papers.map((item) => normalizeClientItem(item, "paper")),
      ...news.map((item) => normalizeClientItem(item, item.type || "news")),
      ...videos.map((item) => normalizeClientItem(item, "video")),
      ...patents.map((item) => normalizeClientItem(item, "patent-search"))
    ];
    status.textContent = metadata.collectedAt ? `更新：${formatFeedDate(metadata.collectedAt)}` : "等待首次更新";
    renderFeed("#latestPapers", papers, "等待 GitHub Actions 首次采集论文。");
    renderFeed("#latestNews", news, "等待 GitHub Actions 首次采集新闻。");
    renderFeed("#latestVideos", videos, "等待 GitHub Actions 生成视频入口。");
    renderFeed("#latestPatents", patents, "等待 GitHub Actions 生成专利线索。");
    renderIntelligenceCenter();
    renderRelatedIntel(findNode(selectedId));
  } catch (error) {
    status.textContent = "加载失败";
    intelligenceState.items = [];
    renderFeed("#latestPapers", [], "自动更新数据暂时不可用，请检查 data/*.json 是否存在。");
    renderFeed("#latestNews", [], "自动更新数据暂时不可用，请检查 GitHub Pages 部署路径。");
    renderFeed("#latestVideos", [], "自动更新数据暂时不可用。");
    renderFeed("#latestPatents", [], "自动更新数据暂时不可用。");
    renderIntelligenceCenter();
    renderRelatedIntel(findNode(selectedId));
  }
}

Object.values(intelControls).forEach((control) => {
  control?.addEventListener("input", renderIntelligenceCenter);
  control?.addEventListener("change", renderIntelligenceCenter);
});

["#marketBatteryType", "#marketApplication", "#marketYear", "#marketSort"].forEach((selector) => {
  document.querySelector(selector)?.addEventListener("change", renderMarketDashboard);
});

["#companySegment", "#companySearch", "#companySort"].forEach((selector) => {
  const control = document.querySelector(selector);
  control?.addEventListener("input", () => {
    companyState.selectedId = filteredCompanies()[0]?.id || null;
    renderCompanyDashboard();
  });
  control?.addEventListener("change", () => {
    companyState.selectedId = filteredCompanies()[0]?.id || null;
    renderCompanyDashboard();
  });
});

document.addEventListener("click", (event) => {
  const companyNode = event.target.closest("[data-company-id]");
  if (!companyNode) return;
  companyState.selectedId = companyNode.dataset.companyId;
  renderCompanyDashboard();
});

renderTree();
renderDetail(findNode(selectedId));
loadDynamicFeeds();
loadCompanyData();
