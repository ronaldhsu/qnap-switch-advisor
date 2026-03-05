# QNAP Switch Advisor

> AI 驅動的 QNAP 交換器產品問答機器人 | AI-powered QNAP Switch product chatbot

## 簡介 | Overview

以 Groq API（llama-3.3-70b-versatile）為推理引擎，搭配結構化產品資料庫，提供 QNAP Switch 產品規格、比較與選購建議的即時問答服務。

A web-based AI chatbot powered by Groq API, designed to answer questions about QNAP Switch product specs, comparisons, and purchase recommendations.

---

## 功能特色 | Features

- **中英雙語介面** — 一鍵切換繁體中文 / English
- **多輪對話記憶** — 上下文連貫，可追問細節
- **快速問答按鈕** — 內建常見問題，一鍵發問（含「顯示所有產品」）
- **結構化回答** — 支援表格比較、條列規格、總埠數自動計算
- **深色科技風介面** — 簡潔設計，AI 回覆過長時自動顯示 scroll bar
- **響應式設計** — 適配桌面與行動裝置
- **版本徽章** — Header 顯示目前版本號，pre-commit hook 自動遞增

---

## 技術架構 | Tech Stack

| 項目 | 說明 |
|------|------|
| 前端 | 純 HTML / CSS / Vanilla JS（無框架依賴） |
| AI 引擎 | [Groq API](https://console.groq.com) — `llama-3.3-70b-versatile` |
| 字型 | Google Fonts — Syne + DM Sans |
| 部署 | GitHub Pages / QNAP NAS Web Station |

---

## 快速開始 | Quick Start

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

> Groq API Key 免費申請：https://console.groq.com → API Keys

### 3. 開啟瀏覽器

直接用瀏覽器開啟 `index.html` 即可使用，無需 npm 或任何後端伺服器。

---

## 專案結構 | Project Structure

```
qnap-switch-advisor/
├── index.html                     # 主程式（單頁 HTML/CSS/JS）
├── products.js                    # 結構化產品資料庫 + System Prompt 產生器
├── config.js                      # 本機 API Key 設定（已 gitignore）
├── .htaccess                      # Apache rewrite 規則
├── .gitignore                     # 排除 config.js、.env 等機密檔
├── CLAUDE.md                      # Claude Code 專案指引
├── README.md                      # 本文件
├── .github/
│   └── workflows/
│       ├── deploy.yml             # GitHub Pages 自動部署
│       └── deploy-nas.yml         # QNAP NAS 自動部署（self-hosted runner）
└── docs/
    └── SOP-QNAP-Switch-Advisor.md # 使用 SOP
```

---

## 部署 | Deployment

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

## 產品資料庫 | Product Database

產品資料獨立於 `products.js`，依 QNAP 官網分為以下 Series：

| Series | 說明 | 代表型號 |
|--------|------|---------|
| QSW 1000 | 全 2.5GbE 即插即用 | QSW-1108-8T-R2 |
| QSW 2000 | 1G/2.5GbE 接取層 + 10GbE 上行 | QSW-2104-2T-R2, QSW-M2108-2C |
| QSW 3000 | 10GbE 為主的聚合/核心層 | QSW-M3216R-8S8T |
| QSW 5000 | 25GbE 高效能 | QSW-M5216-1T |
| QSW 7000 | 100GbE 資料中心級 | QSW-M7308R-4X |
| QGD | Smart Edge（QuTS hero OS） | QGD-1600P, QGD-1602P |

新增或修改產品只需編輯 `products.js`，無需動 `index.html`。

詳細維護流程請參考 [SOP](docs/SOP-QNAP-Switch-Advisor.md)。

---

## API Key 安全 | Security

- `config.js` 已加入 `.gitignore`，不會上傳 GitHub
- 前端直接呼叫 Groq API，僅適合內部使用或本機測試
- 正式對外部署建議透過後端代理保護 API Key（Cloudflare Workers / Vercel Edge Functions）

---

## 文件 | Documentation

- **使用 SOP**：[docs/SOP-QNAP-Switch-Advisor.md](docs/SOP-QNAP-Switch-Advisor.md)

---

## 授權 | License

MIT License — 歡迎自由使用與修改。

---

*Powered by [Groq](https://groq.com) — llama-3.3-70b-versatile*
