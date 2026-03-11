# QNAP Switch Advisor

> AI 驅動的 QNAP 交換器產品顧問 | AI-powered QNAP Switch Product Advisor

## 簡介 | Overview

以 Google Gemini 2.5 Flash 為推理引擎，搭配結構化產品資料庫、FAQ 知識庫與競品資料，提供 QNAP Switch 規格查詢、比較、選購建議與故障排除的即時對話服務。

A web-based AI chatbot powered by Google Gemini 2.5 Flash, designed to answer questions about QNAP Switch product specs, comparisons, purchase recommendations, and troubleshooting.

---

## 功能特色 | Features

- **中英雙語介面** — 一鍵切換繁體中文 / English，AI 回覆語言自動跟隨
- **多輪對話記憶** — 上下文連貫，可追問細節
- **快速問答按鈕** — 側邊欄內建 12 個常見問題，一鍵發問
- **結構化回答** — 產品資訊以 Markdown 表格呈現，自動計算總埠數
- **FAQ 知識庫** — 整合 QNAP 官方常見問題，回答含來源連結
- **競品比較** — 支援 QNAP 與 Cisco、Netgear、TP-Link、Ubiquiti 等品牌比較
- **軟體規格查詢** — 各型號 Port Management / QoS / VLAN / L2 / L3 / Security 功能詳列
- **Off-topic 過濾** — 非 QNAP 交換器相關問題自動提示引導
- **亮色 / 深色主題** — 預設亮色，可手動切換並記憶設定
- **響應式設計** — 適配桌面與行動裝置
- **版本徽章** — Header 顯示目前版本號，pre-commit hook 自動遞增

---

## 技術架構 | Tech Stack

| 項目 | 說明 |
|------|------|
| 前端 | 純 HTML / CSS / Vanilla JS（無框架依賴） |
| AI 引擎 | [Google Gemini API](https://ai.google.dev) — `gemini-2.5-flash` |
| 字型 | Google Fonts — Syne + DM Sans |
| 部署 | GitHub Pages（靜態直接部署） / QNAP NAS Web Station |

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
  apiKey: '你的_Gemini_API_Key'
};
```

> Gemini API Key 免費申請：https://aistudio.google.com/apikey

### 3. 開啟瀏覽器

直接用瀏覽器開啟 `index.html` 即可使用，無需 npm 或任何後端伺服器。

---

## 專案結構 | Project Structure

```
qnap-switch-advisor/
├── index.html       # 主程式（單頁 HTML/CSS/JS）
├── products.js      # 結構化產品資料庫 + System Prompt 產生器
├── faq-data.js      # FAQ 知識庫（QNAP 官方常見問題）
├── competitors.js   # 競品資料（Cisco / Netgear / TP-Link / Ubiquiti 等）
├── config.js        # 本機 API Key 設定（已 gitignore）
├── .nojekyll        # 告知 GitHub Pages 略過 Jekyll 處理
├── .htaccess        # Apache rewrite 規則
├── .gitignore
├── CLAUDE.md        # Claude Code 專案指引
├── README.md
└── .github/
    └── workflows/
        └── deploy-nas.yml   # QNAP NAS 自動部署（self-hosted runner）
```

---

## 產品資料庫 | Product Database

產品資料獨立於 `products.js`，依 QNAP 官網分為以下 Series：

| Series | 說明 | 代表型號 |
|--------|------|---------|
| QSW 1000 | 全 2.5GbE 即插即用 | QSW-1108-8T-R2 |
| QSW 2000 | 1G/2.5GbE 接取層 + 10GbE 上行 | QSW-2104-2T-R2、QSW-M2108-2C |
| QSW 3000 | 10GbE 為主的聚合 / 核心層 | QSW-M3216R-8S8T、QSW-L3208-2C6T |
| QSW 5000 | 25GbE 高效能 | QSW-M5216-1T |
| QSW 7000 | 100GbE 資料中心級 | QSW-M7308R-4X |
| QGD | Smart Edge（QuTS hero OS） | QGD-1602P |

新增或修改產品只需編輯 `products.js`，無需動 `index.html`。

---

## 部署 | Deployment

### GitHub Pages

```
https://ronaldhsu.github.io/qnap-switch-advisor/
```

靜態直接部署（Deploy from branch: `main` / `/`），`.nojekyll` 確保 HTML/JS/CSS 直接送出。

### QNAP NAS

透過 GitHub Actions Self-hosted Runner 自動部署至 NAS Web Station：

```
git push origin main
  └─→ .github/workflows/deploy-nas.yml 觸發
        └─→ 複製至 /share/Web/qnap-switch-advisor/
```

---

## API Key 安全 | Security

- `config.js` 已加入 `.gitignore`，不會上傳 GitHub
- 前端直接呼叫 Gemini API，僅適合內部使用或本機測試
- 正式對外部署建議透過後端代理保護 API Key（Cloudflare Workers / Vercel Edge Functions）

---

## 授權 | License

MIT License — 歡迎自由使用與修改。

---

*Powered by [Google Gemini](https://ai.google.dev) — gemini-2.5-flash*
