# QNAP Switch Advisor — 使用 SOP

## 概述

QNAP Switch Advisor 是一個 AI 驅動的網頁問答機器人，專門回答 QNAP Switch 產品規格、比較與選購建議。

以 Groq API（llama-3.3-70b-versatile）為推理引擎，搭配結構化產品資料庫，提供即時的產品諮詢服務。

**GitHub Repo**：https://github.com/ronaldhsu/qnap-switch-advisor

---

## 功能特色

| 功能 | 說明 |
|------|------|
| 中英雙語介面 | 一鍵切換繁體中文 / English |
| 多輪對話記憶 | 上下文連貫，可追問細節 |
| 快速問答按鈕 | 內建常見問題，一鍵發問（含「顯示所有產品」） |
| 結構化回答 | 支援表格比較、條列規格、總埠數自動計算 |
| 深色科技風介面 | 簡潔設計，AI 回覆過長時自動顯示 scroll bar |
| 響應式設計 | 適配桌面與行動裝置 |
| 版本徽章 | Header 顯示目前版本號，pre-commit hook 自動遞增 |

---

## 系統需求

| 項目 | 說明 |
|------|------|
| 瀏覽器 | Chrome / Edge / Firefox（現代瀏覽器皆可） |
| Groq API Key | 免費申請：https://console.groq.com → API Keys |
| Git | 若需本機開發或更新產品資料 |

---

## 專案結構

```
qnap-switch-advisor/
├── index.html                     # 主程式（單頁 HTML/CSS/JS）
├── products.js                    # 結構化產品資料庫 + System Prompt 產生器
├── config.js                      # 本機 API Key 設定（已 gitignore）
├── .htaccess                      # Apache rewrite 規則
├── .gitignore                     # 排除 config.js、.env 等機密檔
├── CLAUDE.md                      # Claude Code 專案指引
├── README.md                      # 專案說明
├── SOP.md                         # 本文件
├── .github/
│   └── workflows/
│       ├── deploy.yml             # GitHub Pages 自動部署
│       └── deploy-nas.yml         # QNAP NAS 自動部署（self-hosted runner）
└── docs/
    ├── SOP-QNAP-Switch-Advisor.md # 完整建置教學 SOP
    └── SOP-QNAP-Switch-Advisor.pptx
```

---

## 快速開始

### 1. Clone 專案

```bash
git clone https://github.com/ronaldhsu/qnap-switch-advisor.git
cd qnap-switch-advisor
```

### 2. 設定 API Key

建立 `config.js`（此檔已在 `.gitignore` 中，不會上傳 GitHub）：

```javascript
window.GROQ_CONFIG = {
  apiKey: '你的_Groq_API_Key'
};
```

### 3. 開啟瀏覽器

直接用瀏覽器開啟 `index.html` 即可使用，無需 npm 或任何後端伺服器。

---

## 部署方式

### GitHub Pages（自動）

專案已設定 GitHub Actions，push 到 `main` 分支即自動部署：

```
git push origin main
  └─→ .github/workflows/deploy.yml 觸發
        └─→ 部署至 GitHub Pages
```

設定位置：GitHub Repo → Settings → Pages → Source: `GitHub Actions`

### QNAP NAS（自動）

若已在 NAS 上安裝 GitHub Actions Self-hosted Runner：

```
git push origin main
  └─→ .github/workflows/deploy-nas.yml 觸發
        └─→ Self-hosted Runner 執行
              └─→ 複製至 /share/Web/qnap-switch-advisor/
```

---

## 產品資料庫維護

### 資料結構（products.js）

產品依 QNAP 官網分為 5 個 Series：

| Series | 說明 | 代表型號 |
|--------|------|---------|
| QSW 1000 | 全 2.5GbE 即插即用 | QSW-1108-8T-R2 |
| QSW 2000 | 1G/2.5GbE 接取層 + 10GbE 上行 | QSW-2104-2T-R2, QSW-M2108-2C |
| QSW 3000 | 10GbE 為主的聚合/核心層 | QSW-M3216R-8S8T, QGD-3014-16PT |
| QSW 5000 | 25GbE 高效能 | QSW-M5216-1T |
| QSW 7000 | 100GbE 資料中心級 | QSW-M7308R-4X |

### 每筆產品欄位

| 欄位 | 類型 | 說明 |
|------|------|------|
| `model` | string | 型號名稱 |
| `management` | string | 管理類型（Unmanaged / Lite Managed / Web Managed L2 / L3 Lite Managed / Smart Edge） |
| `ports` | string | 埠數與速率描述 |
| `uplink` | string | 上行埠（選填） |
| `poe` | string | PoE 規格（選填） |
| `features` | array | 特色標籤 |
| `notes` | string | 補充說明（選填） |
| `totalPorts` | number | 自動計算，無需手動填寫 |

### 新增 / 修改產品

1. 編輯 `products.js`，在對應 Series 的 `models` 陣列中新增產品物件：

```javascript
{
  model: "QSW-XXXXX",
  management: "Web Managed L2",
  ports: "8x 2.5GbE",
  uplink: "2x 10GbE SFP+",
  features: ["2.5GbE", "10GbE uplink", "SFP+", "VLAN"]
}
```

2. 本機開啟 `index.html` 測試新產品是否正確顯示與推薦
3. Commit 並 push：

```bash
git add products.js
git commit -m "data: 新增 QSW-XXXXX 產品資料"
git push origin main
```

4. GitHub Actions 自動部署，網站即更新

### 資料來源

- QNAP 官網比較頁：https://www.qnap.com/zh-tw/product/compare-switches
- 各產品 Datasheet PDF

---

## Git 工作流程

### 日常操作

```bash
# 查看狀態
git status

# 新增並提交
git add <檔案>
git commit -m "<type>: <描述>"
git push origin main
```

### Commit Message 格式

```
<type>: <簡短描述>

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

| Type | 用途 |
|------|------|
| `feat` | 新功能 |
| `fix` | 修正錯誤 |
| `data` | 更新產品資料 |
| `refactor` | 重構程式碼 |
| `docs` | 文件更新 |

### 版本號

- 版本號顯示於頁面 Header 右側（如 `v0.00.003`）
- 已設定 pre-commit hook，每次 commit 自動遞增 patch 號
- `products.js` 載入時附帶版本參數防止瀏覽器快取（如 `products.js?v=20260303c`）

---

## 技術架構

| 項目 | 說明 |
|------|------|
| 前端 | 純 HTML / CSS / Vanilla JS（無框架依賴） |
| AI 引擎 | Groq API — `llama-3.3-70b-versatile` |
| 字型 | Google Fonts — Syne + DM Sans |
| 部署 | GitHub Pages（靜態）/ QNAP NAS Web Station |

### API Key 安全

- `config.js` 已加入 `.gitignore`，不會上傳 GitHub
- 前端直接呼叫 Groq API，僅適合內部使用或本機測試
- 正式對外部署建議透過後端代理保護 API Key（Cloudflare Workers / Vercel Edge Functions）

---

## 常見問題

### Q: AI 推薦了不存在的型號怎麼辦？
A: 這是 AI 幻覺（Hallucination）。解決方式是在 `products.js` 中確保所有產品資料正確，System Prompt 會限制 AI 只從清單中推薦。新增產品後請逐筆對照 QNAP 官網驗證。

### Q: 修改了 products.js 但網站沒更新？
A: 確認已 `git push`。若瀏覽器有快取，可更新 `index.html` 中 `products.js` 的版本參數（如 `?v=20260305a`）強制重新載入。

### Q: 如何切換 AI 模型？
A: 在 `index.html` 中搜尋 `model:`，將 `llama-3.3-70b-versatile` 替換為其他 Groq 支援的模型。

### Q: 可以不透過 GitHub 直接部署嗎？
A: 可以。將 `index.html`、`products.js`、`config.js` 三個檔案放到任意 Web Server 目錄即可運作。

### Q: 如何修改快速問答按鈕的內容？
A: 在 `index.html` 中搜尋快速選單相關的 HTML 區塊，修改按鈕文字與對應的預設問題。
