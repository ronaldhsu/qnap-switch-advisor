/**
 * QNAP Switch Product Data
 * ========================
 * 新增或修改產品請直接編輯此檔案，無需動 index.html。
 * 資料來源：https://www.qnap.com/zh-tw/product/compare-switches
 * 最後更新：2026-03-03
 *
 * 欄位說明：
 *   model       - 型號名稱
 *   management  - 管理類型（"Unmanaged" | "Lite Managed" | "Web Managed L2" | "L3 Lite Managed" | "Smart Edge"）
 *   ports       - 埠數與速率描述
 *   uplink      - 上行埠（選填）
 *   poe         - PoE 規格（選填，e.g. "PoE+", "PoE++"）
 *   features    - 特色標籤陣列
 *   notes       - 補充說明（選填）
 *
 * ⚠️  Series 分類依 QNAP 官網（1000/2000/3000/5000/7000）。
 *     管理類型（management）為各型號的屬性，不再作為系列的主分類。
 */

const QNAP_PRODUCTS = {

  series: [

    // ── QSW 1000 Series ──────────────────────────────────────────────────
    {
      id: "QSW-1000",
      name: "QSW 1000 Series",
      description: "全 2.5GbE 即插即用交換器，無需設定，適合家用升速",
      models: [
        {
          model: "QSW-1108-8T-R2",
          management: "Unmanaged",
          ports: "8x 2.5GbE",
          features: ["2.5GbE"]
        }
      ]
    },

    // ── QSW 2000 Series ──────────────────────────────────────────────────
    {
      id: "QSW-2000",
      name: "QSW 2000 Series",
      description: "1GbE / 2.5GbE 接取層交換器，搭配 10GbE 上行埠；提供 Unmanaged 到 Web Managed L2 選項",
      models: [

        // Unmanaged
        {
          model: "QSW-2104-2T-R2",
          management: "Unmanaged",
          ports: "4x 2.5GbE",
          uplink: "2x 10GbE RJ45",
          features: ["2.5GbE", "10GbE uplink"]
        },
        {
          model: "QSW-2104-2S",
          management: "Unmanaged",
          ports: "4x 2.5GbE",
          uplink: "2x 10GbE SFP+",
          features: ["2.5GbE", "10GbE uplink", "SFP+"]
        },
        {
          model: "QSW-308S",
          management: "Unmanaged",
          ports: "8x 1GbE",
          uplink: "3x 10GbE SFP+",
          features: ["10GbE uplink", "SFP+"]
        },

        // Web Managed L2 – 2.5GbE access
        {
          model: "QSW-M2106-4C",
          management: "Web Managed L2",
          ports: "6x 2.5GbE",
          uplink: "4x 10GbE SFP+/RJ45 Combo",
          features: ["2.5GbE", "10GbE uplink", "Combo port"]
        },
        {
          model: "QSW-M2106-4S",
          management: "Web Managed L2",
          ports: "6x 2.5GbE",
          uplink: "4x 10GbE SFP+",
          features: ["2.5GbE", "10GbE uplink", "SFP+"]
        },
        {
          model: "QSW-M2106PR-2S2T",
          management: "Web Managed L2",
          ports: "6x 2.5GbE PoE++",
          uplink: "2x 10GbE PoE++ + 2x 10GbE SFP+",
          poe: "PoE++",
          features: ["PoE++", "2.5GbE", "10GbE uplink"]
        },
        {
          model: "QSW-M2106R-2S2T",
          management: "Web Managed L2",
          ports: "6x 2.5GbE",
          uplink: "2x 10GbE RJ45 + 2x 10GbE SFP+",
          features: ["2.5GbE", "10GbE uplink", "Rack mount"]
        },
        {
          model: "QSW-M2108-2C",
          management: "Web Managed L2",
          ports: "8x 2.5GbE",
          uplink: "2x 10GbE SFP+/RJ45 Combo",
          features: ["2.5GbE", "10GbE uplink", "Combo port"]
        },
        {
          model: "QSW-M2108-2S",
          management: "Web Managed L2",
          ports: "8x 2.5GbE",
          uplink: "2x 10GbE SFP+",
          features: ["2.5GbE", "10GbE uplink", "SFP+"]
        },
        {
          model: "QSW-M2108R-2C",
          management: "Web Managed L2",
          ports: "8x 2.5GbE",
          uplink: "2x 10GbE SFP+/RJ45 Combo",
          features: ["2.5GbE", "10GbE uplink", "Combo port", "Rack mount"]
        },
        {
          model: "QSW-M2116P-2T2S",
          management: "Web Managed L2",
          ports: "16x 2.5GbE PoE+",
          uplink: "2x 10GbE PoE++ + 2x 10GbE SFP+",
          poe: "PoE+",
          features: ["PoE+", "2.5GbE", "10GbE uplink"]
        },

        // Web Managed L2 – 1GbE access
        {
          model: "QSW-M408-4C",
          management: "Web Managed L2",
          ports: "8x 1GbE",
          uplink: "4x 10GbE SFP+/RJ45 Combo",
          features: ["10GbE uplink", "Combo port"]
        },
        {
          model: "QSW-M408-2C",
          management: "Web Managed L2",
          ports: "8x 1GbE",
          uplink: "2x 10GbE SFP+/RJ45 Combo + 2x 10GbE SFP+",
          features: ["10GbE uplink", "Combo port", "SFP+"]
        },
        {
          model: "QSW-M408S",
          management: "Web Managed L2",
          ports: "8x 1GbE",
          uplink: "4x 10GbE SFP+",
          features: ["10GbE uplink", "SFP+"]
        }
      ]
    },

    // ── QSW 3000 Series ──────────────────────────────────────────────────
    {
      id: "QSW-3000",
      name: "QSW 3000 Series",
      description: "全埠 10GbE 交換器；涵蓋 Unmanaged、Lite Managed、Web Managed L2 及 L3 Lite Managed",
      models: [

        // Unmanaged
        {
          model: "QSW-3205-5T",
          management: "Unmanaged",
          ports: "5x 10GbE RJ45",
          features: ["10GbE"]
        },
        {
          model: "QSW-3216R-8S8T",
          management: "Unmanaged",
          ports: "8x 10GbE RJ45 + 8x 10GbE SFP+",
          features: ["10GbE", "SFP+", "Rack mount"]
        },
        {
          model: "QSW-1208-8C",
          management: "Unmanaged",
          ports: "4x 10GbE SFP+ + 8x 10GbE SFP+/RJ45 Combo",
          features: ["10GbE", "SFP+", "Combo port"]
        },

        // Lite Managed
        {
          model: "QSW-L3208-2C6T",
          management: "Lite Managed",
          ports: "6x 10GbE RJ45 + 2x 10GbE SFP+/RJ45 Combo",
          features: ["10GbE", "Combo port"]
        },
        {
          model: "QSW-L3205-1C4T",
          management: "Lite Managed",
          ports: "4x 10GbE RJ45 + 1x 10GbE SFP+/RJ45 Combo",
          features: ["10GbE", "Combo port"]
        },

        // Web Managed L2
        {
          model: "QSW-M3212R-8S4T",
          management: "Web Managed L2",
          ports: "4x 10GbE RJ45 + 8x 10GbE SFP+",
          features: ["10GbE", "SFP+", "Rack mount"]
        },
        {
          model: "QSW-M3216R-8S8T",
          management: "Web Managed L2",
          ports: "8x 10GbE RJ45 + 8x 10GbE SFP+",
          features: ["10GbE", "SFP+", "Rack mount"]
        },
        {
          model: "QSW-M1208-8C",
          management: "Web Managed L2",
          ports: "4x 10GbE SFP+ + 8x 10GbE SFP+/RJ45 Combo",
          features: ["10GbE", "SFP+", "Combo port"]
        },
        {
          model: "QSW-M804-4C",
          management: "Web Managed L2",
          ports: "4x 10GbE SFP+ + 4x 10GbE SFP+/RJ45 Combo",
          features: ["10GbE", "SFP+", "Combo port"]
        },
        {
          model: "QSW-IM3216-8S8T",
          management: "Web Managed L2",
          ports: "8x 10GbE RJ45 + 8x 10GbE SFP+",
          features: ["10GbE", "SFP+", "Rack mount", "Industrial"],
          notes: "工業級設計，寬溫操作環境"
        },

        // L3 Lite Managed
        {
          model: "QSW-M3224-24T",
          management: "L3 Lite Managed",
          ports: "24x 10GbE RJ45",
          features: ["10GbE", "Rack mount", "L3 routing"]
        }
      ]
    },

    // ── QSW 5000 Series ──────────────────────────────────────────────────
    {
      id: "QSW-5000",
      name: "QSW 5000 Series",
      description: "25GbE 高速接取交換器，適合需要超越 10GbE 效能的高密度環境",
      models: [
        {
          model: "QSW-M5216-1T",
          management: "Web Managed L2",
          ports: "16x 25GbE SFP28",
          uplink: "1x 10GbE RJ45",
          features: ["25GbE", "SFP28"]
        }
      ]
    },

    // ── QSW 7000 Series ──────────────────────────────────────────────────
    {
      id: "QSW-7000",
      name: "QSW 7000 Series",
      description: "25GbE 接取 + 100GbE 骨幹，L3 Lite 路由，適合中大型企業核心網路",
      models: [
        {
          model: "QSW-M7308R-4X",
          management: "L3 Lite Managed",
          ports: "8x 25GbE SFP28",
          uplink: "4x 100GbE QSFP28",
          features: ["25GbE", "100GbE uplink", "Rack mount", "L3 routing"],
          notes: "適合中小企業部署 100GbE 高速骨幹網路"
        }
      ]
    },

    // ── QGD Series：Smart Edge（搭載 QuTS hero OS）──────────────────────
    {
      id: "QGD",
      name: "QGD Series",
      description: "搭載 QuTS hero OS 的 Smart Edge 交換器，可執行 NAS 應用、VM、Container，適合邊緣運算",
      models: [
        {
          model: "QGD-1600P",
          management: "Smart Edge",
          ports: "4x 1GbE PoE++ + 10x 1GbE PoE+ + 2x 1GbE PoE+/SFP Combo",
          poe: "PoE++",
          features: ["PoE++", "Smart Edge", "QuTS hero"]
        },
        {
          model: "QGD-1602",
          management: "Smart Edge",
          ports: "8x 2.5GbE + 8x 1GbE",
          uplink: "2x 10GbE SFP+",
          features: ["2.5GbE", "10GbE uplink", "Smart Edge", "QuTS hero"]
        },
        {
          model: "QGD-1602P",
          management: "Smart Edge",
          ports: "4x 2.5GbE PoE++ + 4x 2.5GbE PoE+ + 8x 1GbE PoE+",
          uplink: "2x 10GbE SFP+",
          poe: "PoE++",
          features: ["PoE++", "2.5GbE", "10GbE uplink", "Smart Edge", "QuTS hero"]
        }
      ]
    }
  ],

  // 快速查詢索引（由 buildSystemPrompt() 自動產生，不需手動維護）
  featureIndex: {}
};
