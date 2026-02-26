# QNAP Switch Advisor 🔌

> AI 驅動的 QNAP 交換器產品問答機器人 | AI-powered QNAP Switch product chatbot

![Preview](docs/preview.png)

## 簡介 | Overview

一個以 Claude AI 為核心的網頁問答機器人，專門回答 QNAP Switch 產品規格、比較與選購建議。

An AI chatbot powered by Claude, designed to answer questions about QNAP Switch product specs, comparisons, and purchase recommendations.

**Live Demo:** [GitHub Pages 部署後填入]

---

## 功能特色 | Features

- 🌐 **中英雙語介面** — 一鍵切換繁體中文 / English
- 💬 **多輪對話記憶** — 上下文連貫，可追問細節
- ⚡ **快速問答按鈕** — 內建常見問題，一鍵發問
- 📊 **結構化回答** — 支援表格比較、條列規格
- 🎨 **簡潔科技風設計** — 深色介面，無需後端伺服器
- 📱 **響應式設計** — 適配桌面與行動裝置

---

## 技術架構 | Tech Stack

| 項目 | 說明 |
|------|------|
| 前端 | 純 HTML / CSS / Vanilla JS（無框架依賴） |
| AI 引擎 | [Anthropic Claude API](https://docs.anthropic.com) (`claude-sonnet-4-20250514`) |
| 字型 | Google Fonts — Syne + DM Sans |
| 部署 | GitHub Pages（靜態網頁，無需後端） |

---

## 快速開始 | Quick Start

### 1. Clone 專案

```bash
git clone https://github.com/YOUR_USERNAME/qnap-switch-advisor.git
cd qnap-switch-advisor
```

### 2. 設定 API Key

開啟 `index.html`，找到以下程式碼區段：

```javascript
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_ANTHROPIC_API_KEY',   // ← 在這裡填入你的 API Key
    'anthropic-version': '2023-06-01',
    'anthropic-dangerous-direct-browser-access': 'true'
  },
```

> ⚠️ **安全警告**：直接在前端使用 API Key 僅適合本機測試或內部使用。正式對外部署請參考[後端代理方案](#後端代理-production)。

### 3. 開啟瀏覽器

直接用瀏覽器開啟 `index.html` 即可使用。

---

## 部署到 GitHub Pages

1. 將專案 push 到你的 GitHub repository
2. 前往 **Settings → Pages**
3. Source 選擇 `main` branch，資料夾選 `/ (root)`
4. 儲存後等待幾分鐘，即可透過 `https://YOUR_USERNAME.github.io/qnap-switch-advisor` 訪問

---

## 後端代理 (Production)

正式對外部署時，建議透過後端代理保護 API Key：

```
用戶瀏覽器 → 你的後端 API → Anthropic Claude API
```

可使用以下平台快速建立代理服務：
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Vercel Edge Functions](https://vercel.com/docs/functions/edge-functions)
- Express.js / FastAPI

---

## 產品知識庫 | Product Knowledge

機器人內建以下 QNAP Switch 產品知識：

| 系列 | 類型 | 代表型號 |
|------|------|---------|
| QSW | Unmanaged | QSW-1105-5T, QSW-2104-2T, QSW-308-1C |
| QSW-M | Web Managed (L2) | QSW-M408-4C, QSW-M408S, QSW-M3216R-8S8T |
| QGD | Smart Edge / NDR | QGD-1600P, QGD-1602P, QGD-3014-16PT |
| QSW-M (Industrial) | 工業等級 | QSW-M2116P-2T2S |

---

## 自訂擴充 | Customization

### 新增產品資訊

編輯 `index.html` 中的 `SYSTEM_PROMPT` 常數，加入最新產品規格：

```javascript
const SYSTEM_PROMPT = `You are an expert QNAP Switch product advisor...
// 在這裡加入新產品資訊
`;
```

### 更換 AI 模型

```javascript
model: 'claude-opus-4-20250514',  // 更換為其他模型
```

---

## 授權 | License

MIT License — 歡迎自由使用與修改。

---

## 貢獻 | Contributing

歡迎提交 Issue 或 Pull Request！
如有新的 QNAP Switch 產品規格需要更新，請直接開 PR。

---

*由 Claude AI 技術驅動 | Powered by Anthropic Claude*
