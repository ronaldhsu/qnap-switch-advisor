# SOP：使用 Claude AI 建置 QNAP Switch 產品顧問系統

> **文件版本**：v1.0
> **作者**：Ronald Hsu (許智傑)
> **更新日期**：2026-02-26
> **適用對象**：Networking PM / Product DPM

---

## 一、這個 SOP 要解決什麼問題？

### 1.1 背景痛點

| 現況問題 | 說明 |
|---------|------|
| 客戶選品困難 | QNAP Switch 產品線繁多（QSW 系列），客戶難以從規格表判斷哪款最適合 |
| PM 重複回答 | 業務、FAE、客戶常詢問「哪款 Switch 支援 PoE + 10G？」等選品問題，PM 需反覆解答 |
| 文件更新落差 | 產品資料散落在 Datasheet、Confluence、官網，難以即時同步 |
| 技術門檻高 | 內部工具需要工程師介入才能建置，PM 自己無法快速驗證選品邏輯 |

### 1.2 預計最終產出

```
git push
  └─→ GitHub Actions (自動觸發)
        └─→ QNAP NAS Self-hosted Runner 執行
              └─→ 部署至 Web Station
                    └─→ 可對外存取的 AI 產品顧問網頁
                         http://[NAS-IP]/qnap-switch-advisor/
```

**最終產出物**：

| 產出 | 格式 | 說明 |
|-----|------|------|
| `index.html` | 單頁 HTML | 對話式 AI 介面，呼叫 Groq API |
| `products.js` | JavaScript 模組 | 結構化產品資料庫 + 動態 System Prompt 產生器 |
| `.github/workflows/deploy-nas.yml` | YAML | CI/CD 自動部署流程 |
| 本 SOP 文件 | Markdown | 可複用於其他產品顧問系統 |

---

## 二、使用工具與環境準備

### 2.1 必要工具一覽

| 工具 | 用途 | 費用 | 取得方式 |
|-----|------|------|---------|
| **Claude Code** (claude.ai/download) | AI 輔助開發、自動化腳本執行 | 付費訂閱 | https://claude.ai |
| **Groq API** | 免費 LLM 推理引擎（llama3-8b） | 免費 | https://console.groq.com |
| **GitHub** | 程式碼版控 + Actions CI/CD | 免費（public repo） | https://github.com |
| **QNAP NAS** | Self-hosted Runner + Web Station 部署 | 公司設備 | IT 申請 |
| **Git for Windows** | 本機 git 操作 | 免費 | https://git-scm.com |

### 2.2 Claude MCP 環境設定

本專案使用以下 MCP Server：

```jsonc
// Claude Code settings.json (位於 %APPDATA%\Claude\)
{
  "mcpServers": {
    "Windows-MCP": {
      // 操作本機 Windows 桌面、執行 PowerShell/CMD 指令
    },
    "qnap-jira": {
      // 查詢/建立 Jira issues（可選）
    }
  }
}
```

> ⚠️ **重要**：確認 Claude Code 已安裝 `Windows-MCP`，可執行 Shell 指令與截圖互動。

### 2.3 前置環境檢查清單

```
□ Git for Windows 已安裝（C:\Program Files\Git\bin\git.exe）
□ GitHub 帳號已建立，且有一個 repo 可推送
□ GitHub PAT（Personal Access Token）已建立，勾選：
      ✅ repo（Full control of private repositories）
      ✅ workflow（Update GitHub Action workflows）
□ Groq API Key 已申請（https://console.groq.com → API Keys）
□ QNAP NAS Web Station 已啟用
□ GitHub Actions Self-hosted Runner 已安裝並在 NAS 上執行
      確認狀態：GitHub repo → Settings → Actions → Runners → 顯示 "Idle"
□ NAS Web 根目錄路徑確認：/share/Web/
```

### 2.4 自備的原始資料（PM 需準備）

| 資料 | 來源 | 格式 |
|-----|------|------|
| 產品型號清單 | QNAP 官網 / Datasheet | 文字清單 |
| 各產品主要規格（port 數、速率、PoE、管理模式） | Datasheet PDF | 手動整理成文字 |
| 產品定位（家用/SMB/Enterprise） | PM 自身知識 | 文字說明 |
| 常見選品問題（FAQ） | FAE/業務回饋 | 條列文字 |

---

## 三、操作步驟（Step by Step）

---

### STEP 1：建立專案資料夾結構

**Input**：無（從零開始）

**Process**：
> 工具：Claude Code + Windows-MCP Shell

在 Claude 對話框輸入：
```
幫我在 C:\Ronald\Project\Github\Q-Project\ 建立一個名為 qnap-switch-advisor 的資料夾，
並初始化 git repo，remote 設定為 https://github.com/[你的帳號]/qnap-switch-advisor.git
```

Claude 會自動執行：
```powershell
mkdir qnap-switch-advisor
cd qnap-switch-advisor
git init
git remote add origin https://[帳號]:[PAT]@github.com/[帳號]/qnap-switch-advisor.git
```

**Output**：
```
C:\Ronald\Project\Github\Q-Project\qnap-switch-advisor\
├── .git/              ← git 初始化完成
└── (待建立其他檔案)
```

---

### STEP 2：建立結構化產品資料庫（products.js）

**Input**：PM 手動整理的產品規格文字，例如：
```
QSW-M2108-2C：8個 2.5GbE + 2個 10GbE/SFP+ 多媒體管理型交換器，適合家用/SOHO
QSW-M2116P-2T2S：16個 PoE+ 2.5GbE + 2個 10GbE + 2個 SFP+，商業用途，PoE 功率 200W
...
```

**Process**：
> 工具：Claude Code（對話模式）

```
Prompt（貼給 Claude）：

我有以下 QNAP Switch 產品規格（貼上你整理的文字），
請幫我整理成 JavaScript 物件陣列格式，每個產品包含：
- id (型號，如 "QSW-M2108-2C")
- name (完整產品名)
- category ("Unmanaged" | "Smart Managed" | "Fully Managed")
- ports (各類型端口描述)
- features (陣列，如 ["PoE+", "VLAN", "Link Aggregation"])
- useCase (適用場景，1~2句話)
- targetUser ("SOHO" | "SMB" | "Enterprise")
- priceRange ("Entry" | "Mid" | "High")

完成後，再幫我加上一個 buildSystemPrompt() 函數，
這個函數讀取上方產品陣列，動態生成 AI 助理的 System Prompt，
格式如下：
---
你是 QNAP Switch 產品顧問，根據以下產品資料回答客戶問題：
[動態插入產品清單]
請用繁體中文回答，並在最後附上建議的型號。
---
```

**Output**：`products.js` 檔案，內容格式如下：
```javascript
const QNAP_PRODUCTS = [
  {
    id: "QSW-M2108-2C",
    name: "QSW-M2108-2C 8埠 2.5GbE + 2埠 10GbE 多媒體管理型交換器",
    category: "Smart Managed",
    ports: "8x 2.5GbE + 2x 10GbE/SFP+",
    features: ["Web管理", "VLAN", "QoS", "Link Aggregation"],
    useCase: "適合家用 NAS 擴充或小型辦公室網路升級",
    targetUser: "SOHO",
    priceRange: "Entry"
  },
  // ...更多產品
];

function buildSystemPrompt() {
  const productList = QNAP_PRODUCTS.map(p =>
    `- ${p.id}：${p.ports}，${p.useCase}`
  ).join('\n');
  return `你是 QNAP Switch 產品顧問...\n${productList}`;
}
```

---

### STEP 3：建立對話式前端介面（index.html）

**Input**：`products.js`（已完成）+ 設計需求說明

**Process**：
> 工具：Claude Code（對話模式）

```
Prompt（貼給 Claude）：

請幫我建立一個 index.html，需求如下：
1. 對話介面（左側問題泡泡、右側回答泡泡）
2. 引入同目錄的 products.js，呼叫 buildSystemPrompt() 取得 System Prompt
3. 使用 Groq API (https://api.groq.com/openai/v1/chat/completions)
   - Model: llama-3.3-70b-versatile
   - API Key 由使用者在頁面輸入（input 欄位），存在 localStorage
4. 送出按鈕 + Enter 鍵支援
5. 繁體中文介面
6. 簡潔現代的 CSS 樣式，主色調用 QNAP 藍色 (#0072bc)
7. 首次載入時顯示歡迎詞："您好！我是 QNAP Switch 產品顧問，請告訴我您的網路需求..."

不要使用任何 npm 或外部框架，純 HTML + CSS + Vanilla JS。
```

**Output**：`index.html` — 可直接用瀏覽器開啟測試的單頁應用

---

### STEP 4：本機測試與功能驗證

**Input**：`index.html` + `products.js` + 一組有效的 Groq API Key

**Process**：
> 工具：Chrome 瀏覽器（直接開啟 index.html）

測試問題清單（建議逐一測試）：

| 測試問題 | 預期行為 |
|---------|---------|
| 「我需要一款支援 PoE 的 Switch，有 8 個以上的 port」 | 列出含 PoE 功能的型號，並解釋差異 |
| 「家用 NAS 連 10G 網路，推薦哪款？」 | 推薦 Entry/SOHO 級產品 |
| 「什麼是 Layer 2 管理型交換器？」 | 給出概念說明，並推薦相對應產品 |
| 「你有賣 Cisco 嗎？」 | 婉拒並引導回 QNAP 產品範疇 |
| （測試邊界）輸入空白 | 不應崩潰，提示輸入問題 |

**Output**：確認 AI 回答正確率 > 80%（內容合理、型號存在）

---

### STEP 5：設定 GitHub Actions 自動部署

**Input**：GitHub repo URL + NAS 已安裝 self-hosted runner

**Process**：
> 工具：Claude Code（自動建立檔案 + git push）

對 Claude 說：
```
幫我建立 .github/workflows/deploy-nas.yml，
當 main branch 有 push 時，觸發以下動作：
1. runs-on: self-hosted（QNAP NAS runner）
2. checkout 程式碼
3. 複製 index.html 和 products.js 到 /share/Web/qnap-switch-advisor/
4. 印出完成訊息和時間
```

然後推送到 GitHub：
```
git add .
git commit -m "feat: add GitHub Actions auto-deploy workflow"
git push origin main
```

**Output**：
- `.github/workflows/deploy-nas.yml` 在 GitHub 上出現
- GitHub Actions 頁面出現第一次 workflow run，狀態為 ✅ success
- 可透過 `http://[NAS-IP]/qnap-switch-advisor/` 存取

---

### STEP 6：更新產品資料的日常維護流程

**Input**：新上市產品規格（PM 從官網或 datasheet 取得）

**Process**：
> 工具：Claude Code 或直接編輯 `products.js`

1. 編輯 `products.js`，在 `QNAP_PRODUCTS` 陣列新增產品物件
2. 確認 `buildSystemPrompt()` 有正確引用新資料（通常不需修改）
3. 本機開啟 `index.html` 測試新產品是否被正確推薦
4. `git push` → 自動部署到 NAS

**Output**：網站自動更新，不需人工登入 NAS

---

## 四、AI 產出內容的驗證與準確性檢查（Refine 流程）

### 4.1 products.js 資料驗證

| 檢查項目 | 驗證方法 |
|---------|---------|
| 型號正確性 | 對照 QNAP 官網（qnap.com/zh-tw/product） |
| 規格數字 | 對照 Datasheet（Port 數、PoE 功率、速率） |
| useCase 描述 | PM 自行判斷是否符合產品定位 |
| features 完整性 | 確認未遺漏重要功能（如 SFP+ 支援） |

### 4.2 System Prompt 驗證

每次修改 `buildSystemPrompt()` 後，執行以下測試：

```
測試 Prompt 組合 1（基本選品）：
Q: "我需要一款 8 port 以上、支援 PoE 的 2.5G Switch"
期望：列出 QSW-M2116P-2T2S 等含 PoE 的型號

測試 Prompt 組合 2（進階需求）：
Q: "企業級 48 port 全管理型 Switch，需要 SFP+ uplink"
期望：推薦 QSW-M5216-1T 等 Fully Managed 型號

測試 Prompt 組合 3（邊界測試）：
Q: "你可以幫我訂購嗎？"
期望：說明僅提供建議，請洽官網或經銷商
```

### 4.3 Refine 循環

```
初版 System Prompt
      ↓
測試 5~10 個問題
      ↓
發現回答不準確 → 修改 products.js 的 useCase / features 描述
      ↓
重新測試
      ↓
直到 80% 以上問題得到合理回答
```

> 💡 **技巧**：在 System Prompt 加入「如果找不到完全符合的產品，請列出最接近的 2~3 款並說明差異」可大幅提升回答品質。

---

## 五、過程中遇到的困難與解決方法

> 這是整個流程中最花時間的部分，記錄下來讓其他 PM 可以少走冤枉路

---

### 困難 1：AI 捏造了不存在的產品規格（Hallucination）

| | 說明 |
|--|------|
| **症狀** | Claude 把原始資料中的 `QSW-M2108-2C` 規格寫成「16埠」，或生成出 `QSW-M3200` 這個根本不存在的型號 |
| **根本原因** | AI 在資料不足時會「補腦」填入看起來合理的數字，PM 若不逐行比對就直接上線，客戶查到錯誤資訊會失去信任 |
| **解決方法** | `products.js` 完成後，**每筆資料逐一對照 QNAP 官網**（qnap.com/zh-tw/product），特別確認 port 數量、速率、PoE 功率三個最容易出錯的欄位 |
| **預防方式** | 給 AI 的原始資料要盡量完整；不確定的欄位（如 PoE 功率）**寧可不填，也不要讓 AI 猜**，留空後再人工補充 |

---

### 困難 2：Prompt 太模糊，AI 輸出與想像差很遠，反覆修改耗費大量時間

| | 說明 |
|--|------|
| **症狀** | 跟 Claude 說「幫我做一個好看的產品顧問介面」，結果生出來的樣式、佈局完全不符期望，反覆說「不是這個意思」改了七八次 |
| **根本原因** | PM 習慣用模糊的需求語言描述，但 AI 的「想像」和 PM 的「想像」是兩件事 |
| **解決方法** | Prompt 要寫**具體的視覺與行為描述**：<br>❌ 「做一個聊天介面」<br>✅ 「用戶訊息靠右顯示藍色背景，AI 回答靠左顯示灰色背景，輸入框固定在頁面底部，Enter 鍵送出」 |
| **預防方式** | 動手前先花 5 分鐘在紙上畫出草稿，再轉成文字描述給 AI，一次到位比反覆修改快得多 |

---

### 困難 3：不知道要整理哪些原始資料、用什麼格式給 AI

| | 說明 |
|--|------|
| **症狀** | 只給 AI 貼上型號清單，沒有規格細節，AI 只能靠訓練資料猜測，填入錯誤或過時的規格；或是給了 PDF datasheet 全文，AI 卻抓不到重點 |
| **根本原因** | 對 AI 來說，「給越多雜訊越難精準輸出」；但給太少又容易 Hallucination，需要找到平衡 |
| **解決方法** | 整理成**一產品一行的結構化文字**再給 AI，格式參考：<br>`QSW-M2116P-2T2S：16x PoE+ 2.5GbE + 2x 10GbE + 2x SFP+，PoE 總功率 200W，Web管理，適合 IP 攝影機/辦公室` |
| **預防方式** | 每個產品只需提供 5 個核心欄位：**型號、port 組合、特殊功能（PoE/SFP）、管理類型、一句話定位**。其餘細節讓 AI 根據這 5 點生成，再驗證即可 |

---

### 困難 4：為修正某個問題反覆調整 System Prompt，反而讓其他回答變差

| | 說明 |
|--|------|
| **症狀** | 發現 AI 推薦了不存在的型號，於是在 System Prompt 加上「只能從清單推薦」→ AI 變得過度保守，遇到「請解釋 VLAN 是什麼」也說「我只能回答選品問題」 |
| **根本原因** | 每次只測試「剛改好的那個問題」，沒有回頭測試其他情境，累積的限制條件互相干擾 |
| **解決方法** | 每次修改 System Prompt 後，**都要用 Prompt E 的完整 8 題測試集重新驗證**，確認沒有其他回答變差 |
| **預防方式** | 把 System Prompt 的「規則」控制在 5 條以內，條目越多越容易衝突；優先保留最核心的限制，其餘靠 AI 自己判斷 |

---

### 困難 5：GitHub 設定不熟悉，遇到錯誤訊息不知道怎麼解讀

| | 說明 |
|--|------|
| **症狀** | `git push` 失敗，終端機顯示一長串英文錯誤，PM 不知道要看哪一行、去哪裡修 |
| **根本原因** | PM 不是工程師，對 git / GitHub 設定（如 PAT scope、remote URL）不熟悉，錯誤訊息也看不懂 |
| **解決方法** | 遇到 push 失敗時，**把整段錯誤訊息直接貼給 Claude**，說「我執行了 git push，出現這個錯誤，請告訴我要怎麼修」。Claude 會解讀錯誤並給出具體指令 |
| **預防方式** | 本 SOP 的「環境準備 Checklist」（第二章）已列出 GitHub PAT 需同時勾選 `repo` + `workflow` 兩個 scope，**照 Checklist 設定可避免大部分的 push 失敗** |

---

## 六、附件：Prompt 範本

### Prompt A：產品資料結構化（給 Claude）

```
角色：你是一個熟悉 JavaScript 的助理

任務：將以下 QNAP Switch 產品規格文字，轉換為 JavaScript 物件陣列。

每個產品物件需包含：
- id: 型號字串（如 "QSW-M2108-2C"）
- name: 完整產品名稱
- category: "Unmanaged" | "Smart Managed" | "Fully Managed" 三選一
- ports: 端口描述字串（如 "8x 2.5GbE + 2x 10GbE"）
- features: 字串陣列（如 ["PoE+", "VLAN", "QoS"]）
- useCase: 2句話以內的使用場景說明（繁體中文）
- targetUser: "SOHO" | "SMB" | "Enterprise" 三選一
- priceRange: "Entry" | "Mid" | "High" 三選一

輸出格式：只輸出 JavaScript 程式碼，不要加說明。

---以下是產品規格原始資料---
[貼上你整理的規格文字]
```

---

### Prompt B：System Prompt 工程（給 Claude）

```
根據以下 JavaScript 產品資料陣列（QNAP_PRODUCTS），
請幫我撰寫一個 buildSystemPrompt() 函數，功能如下：

1. 讀取 QNAP_PRODUCTS 陣列
2. 將每個產品整理成一行摘要格式：
   "[型號]：[ports]，[features前3項]，適合[targetUser]"
3. 組合成完整的 System Prompt 字串，格式如下：

---
你是 QNAP Switch 專業產品顧問。
你的任務是根據客戶的網路需求，推薦最適合的 QNAP 交換器產品。

可推薦的產品清單：
[動態產品列表]

回答規則：
1. 只推薦上方清單中的產品
2. 用繁體中文回答
3. 回答末尾附上「建議型號：[型號]」
4. 如不確定，列出最接近的 2~3 款並說明差異
5. 不回答非 QNAP Switch 相關的問題
---

輸出：只輸出 JavaScript 函數，不要加說明。
```

---

### Prompt C：前端介面產生（給 Claude）

```
請建立一個 index.html，純 HTML/CSS/Vanilla JS，不使用任何 npm 套件。

功能需求：
1. 引入同目錄的 products.js（<script src="products.js">）
2. 對話介面：用戶訊息靠右（藍色），AI 回答靠左（灰色）
3. 頁面頂部有一個「API Key」輸入欄，存到 localStorage["groq_api_key"]
4. 呼叫 Groq API：
   - URL: https://api.groq.com/openai/v1/chat/completions
   - Model: llama-3.3-70b-versatile
   - System message: buildSystemPrompt() 的回傳值
   - Temperature: 0.3（降低隨機性，提高一致性）
5. Enter 鍵送出、按鈕送出兩種方式
6. 主色調：QNAP 藍 (#0072bc)
7. 首次載入顯示歡迎訊息（不透過 API，直接顯示）
8. API 呼叫中顯示「思考中...」動畫
9. 錯誤處理：API Key 未填、API 錯誤時顯示提示

介面文字：繁體中文
```

---

### Prompt D：GitHub Actions Workflow（給 Claude）

```
請幫我建立 .github/workflows/deploy-nas.yml，內容如下：

- name: Deploy to QNAP NAS
- 觸發條件：push 到 main branch
- runs-on: self-hosted
- 步驟：
  1. Checkout 程式碼（使用 actions/checkout@v4）
  2. 複製以下檔案到 /share/Web/qnap-switch-advisor/：
     - index.html
     - products.js
  3. 印出成功訊息與執行時間

不需要 Node.js、npm 或任何 build 步驟。
```

---

### Prompt E：測試問題集（用來驗證 AI 回答品質）

```
請用以下問題測試 QNAP Switch 顧問 AI，並評估回答是否合理：

【基本選品】
1. 「我有一台 QNAP NAS，想把網路升級到 2.5G，最便宜的選擇？」
2. 「需要 8 個 PoE 端口連接 IP 攝影機，推薦哪款？」
3. 「公司需要 48 port 的企業級交換器，預算不限」

【進階需求】
4. 「需要支援 VLAN 隔離不同部門網段的 Switch」
5. 「Link Aggregation 是什麼？哪款 Switch 支援？」

【邊界測試】
6. 「你有賣 Cisco 的 Switch 嗎？」（期望：婉拒並介紹 QNAP）
7. 「我要訂購 10 台，可以打折嗎？」（期望：說明非銷售功能）
8. 「今天天氣怎麼樣？」（期望：說明只回答 Switch 相關問題）

評分標準：
✅ 型號存在且正確
✅ 回答符合客戶需求
✅ 有附上建議型號
✅ 未超出 QNAP 產品範疇
```

---

## 附錄：專案最終檔案結構

```
qnap-switch-advisor/
├── index.html                          # 對話式前端介面
├── products.js                         # 產品資料庫 + System Prompt 產生器
├── .github/
│   └── workflows/
│       └── deploy-nas.yml             # GitHub Actions 自動部署
├── docs/
│   └── SOP-QNAP-Switch-Advisor.md    # 本 SOP 文件
├── .gitignore
└── CLAUDE.md                          # Claude Code 專案說明（MCP 操作指引）
```

---

*文件結束 — 如需更新產品資料或擴充功能，請參考 STEP 6 維護流程*
