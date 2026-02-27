/**
 * QNAP Switch Product Data
 * ========================
 * 新增或修改產品請直接編輯此檔案，無需動 index.html。
 * 資料來源：https://www.qnap.com/zh-tw/product/compare-switches
 * 最後更新：2026-02-26
 *
 * 欄位說明：
 *   model       - 型號名稱
 *   ports       - 埠數與速率描述
 *   uplink      - 上行埠（選填）
 *   poe         - PoE 規格（選填，e.g. "PoE+", "PoE++"）
 *   management  - 管理類型（"Unmanaged" | "Web Managed L2" | "L3 Lite" | "Smart Edge"）
 *   features    - 特色標籤陣列
 *   notes       - 補充說明（選填）
 */

const QNAP_PRODUCTS = {

  series: [

    // ── QSW：非管理型 ──────────────────────────────────────────────────
    {
      id: "QSW",
      name: "QSW Series",
      management: "Unmanaged",
      description: "即插即用，無需設定，適合家用或小型辦公室",
      models: [

        // QSW 1000 Series
        {
          model: "QSW-1108-8T-R2",
          ports: "8x 2.5GbE",
          features: ["2.5GbE"]
        },

        // QSW 2000 Series
        {
          model: "QSW-2104-2T-R2",
          ports: "4x 2.5GbE",
          uplink: "2x 10GbE RJ45",
          features: ["2.5GbE", "10GbE uplink"]
        },
        {
          model: "QSW-2104-2S",
          ports: "4x 2.5GbE",
          uplink: "2x 10GbE SFP+",
          features: ["2.5GbE", "10GbE uplink", "SFP+"]
        },
        {
          model: "QSW-308S",
          ports: "8x 1GbE",
          uplink: "3x 10GbE SFP+",
          features: ["10GbE uplink", "SFP+"]
        },

        // QSW 3000 Series
        {
          model: "QSW-3205-5T",
          ports: "5x 10GbE RJ45",
          features: ["10GbE"]
        },
        {
          model: "QSW-3216R-8S8T",
          ports: "8x 10GbE RJ45 + 8x 10GbE SFP+",
          features: ["10GbE", "SFP+", "Rack mount"]
        },
        {
          model: "QSW-1208-8C",
          ports: "4x 10GbE SFP+ + 8x 10GbE SFP+/RJ45 Combo",
          features: ["10GbE", "SFP+", "Combo port"]
        }
      ]
    },

    // ── QSW-M：網頁管理型 L2 ──────────────────────────────────────────
    {
      id: "QSW-M",
      name: "QSW-M Series",
      management: "Web Managed L2",
      description: "支援 VLAN、QoS、Link Aggregation、RSTP，適合中小企業",
      models: [

        // QSW 2000 Series – 2.5GbE access
        {
          model: "QSW-M2106-4C",
          ports: "6x 2.5GbE",
          uplink: "4x 10GbE SFP+/RJ45 Combo",
          features: ["2.5GbE", "10GbE uplink", "Combo port"]
        },
        {
          model: "QSW-M2106-4S",
          ports: "6x 2.5GbE",
          uplink: "4x 10GbE SFP+",
          features: ["2.5GbE", "10GbE uplink", "SFP+"]
        },
        {
          model: "QSW-M2106PR-2S2T",
          ports: "6x 2.5GbE PoE++",
          uplink: "2x 10GbE PoE++ + 2x 10GbE SFP+",
          poe: "PoE++",
          features: ["PoE++", "2.5GbE", "10GbE uplink"]
        },
        {
          model: "QSW-M2106R-2S2T",
          ports: "6x 2.5GbE",
          uplink: "2x 10GbE RJ45 + 2x 10GbE SFP+",
          features: ["2.5GbE", "10GbE uplink", "Rack mount"]
        },
        {
          model: "QSW-M2108-2C",
          ports: "8x 2.5GbE",
          uplink: "2x 10GbE SFP+/RJ45 Combo",
          features: ["2.5GbE", "10GbE uplink", "Combo port"]
        },
        {
          model: "QSW-M2108-2S",
          ports: "8x 2.5GbE",
          uplink: "2x 10GbE SFP+",
          features: ["2.5GbE", "10GbE uplink", "SFP+"]
        },
        {
          model: "QSW-M2108R-2C",
          ports: "8x 2.5GbE",
          uplink: "2x 10GbE SFP+/RJ45 Combo",
          features: ["2.5GbE", "10GbE uplink", "Combo port", "Rack mount"]
        },
        {
          model: "QSW-M2116P-2T2S",
          ports: "16x 2.5GbE PoE+",
          uplink: "2x 10GbE PoE++ + 2x 10GbE SFP+",
          poe: "PoE+",
          features: ["PoE+", "2.5GbE", "10GbE uplink"]
        },

        // QSW 2000 Series – 1GbE access
        {
          model: "QSW-M408-4C",
          ports: "8x 1GbE",
          uplink: "4x 10GbE SFP+/RJ45 Combo",
          features: ["10GbE uplink", "Combo port"]
        },
        {
          model: "QSW-M408-2C",
          ports: "8x 1GbE",
          uplink: "2x 10GbE SFP+/RJ45 Combo + 2x 10GbE SFP+",
          features: ["10GbE uplink", "Combo port", "SFP+"]
        },
        {
          model: "QSW-M408S",
          ports: "8x 1GbE",
          uplink: "4x 10GbE SFP+",
          features: ["10GbE uplink", "SFP+"]
        },

        // QSW 3000 Series – 10GbE access
        {
          model: "QSW-M3212R-8S4T",
          ports: "4x 10GbE RJ45 + 8x 10GbE SFP+",
          features: ["10GbE", "SFP+", "Rack mount"]
        },
        {
          model: "QSW-M3216R-8S8T",
          ports: "8x 10GbE RJ45 + 8x 10GbE SFP+",
          features: ["10GbE", "SFP+", "Rack mount"]
        },
        {
          model: "QSW-M1208-8C",
          ports: "4x 10GbE SFP+ + 8x 10GbE SFP+/RJ45 Combo",
          features: ["10GbE", "SFP+", "Combo port"]
        },
        {
          model: "QSW-M804-4C",
          ports: "4x 10GbE SFP+ + 4x 10GbE SFP+/RJ45 Combo",
          features: ["10GbE", "SFP+", "Combo port"]
        },

        // QSW 5000 Series – 25GbE
        {
          model: "QSW-M5216-1T",
          ports: "16x 25GbE SFP28",
          uplink: "1x 10GbE RJ45",
          features: ["25GbE", "SFP28"]
        },

        // Industrial Managed
        {
          model: "QSW-IM3216-8S8T",
          ports: "8x 10GbE RJ45 + 8x 10GbE SFP+",
          features: ["10GbE", "SFP+", "Rack mount", "Industrial"],
          notes: "工業級設計，寬溫操作環境"
        }
      ]
    },

    // ── QSW-L3：Lite 管理型 ──────────────────────────────────────────
    {
      id: "QSW-L3",
      name: "QSW-L3 Series",
      management: "Lite Managed",
      description: "支援靜態路由與基本 L3 轉送，適合需要跨 VLAN 路由的中型企業網路",
      models: [
        {
          model: "QSW-L3208-2C6T",
          ports: "6x 10GbE RJ45 + 2x 10GbE SFP+/RJ45 Combo",
          features: ["10GbE", "Combo port", "L3 routing"]
        },
        {
          model: "QSW-L3205-1C4T",
          ports: "4x 10GbE RJ45 + 1x 10GbE SFP+/RJ45 Combo",
          features: ["10GbE", "Combo port", "L3 routing"]
        }
      ]
    },

    // ── QSW-M L3 Lite：L3 Lite 管理型 ────────────────────────────────
    {
      id: "QSW-M-L3",
      name: "QSW-M L3 Lite Series",
      management: "L3 Lite Managed",
      description: "具備 L3 Lite 路由功能 (Static Routing) 的網管型交換器",
      models: [
        {
          model: "QSW-M3224-24T",
          ports: "24x 10GbE RJ45",
          features: ["10GbE", "Rack mount", "L3 routing"]
        },
        {
          model: "QSW-M7308R-4X",
          ports: "8x 25GbE SFP28",
          uplink: "4x 100GbE QSFP28",
          features: ["25GbE", "100GbE uplink", "Rack mount", "L3 routing"],
          notes: "適合中小企業部署 100GbE 高速骨幹網路"
        }
      ]
    },

    // ── QGD：Smart Edge（搭載 QuTS hero OS）────────────────────────────
    {
      id: "QGD",
      name: "QGD Series",
      management: "Smart Edge",
      description: "搭載 QuTS hero OS，可執行 NAS 應用、VM、Container，適合邊緣運算",
      models: [
        {
          model: "QGD-1600P",
          ports: "4x 1GbE PoE++ + 10x 1GbE PoE+ + 2x 1GbE PoE+/SFP Combo",
          poe: "PoE++",
          features: ["PoE++", "Smart Edge", "QuTS hero"]
        },
        {
          model: "QGD-1602",
          ports: "8x 2.5GbE + 8x 1GbE",
          uplink: "2x 10GbE SFP+",
          features: ["2.5GbE", "10GbE uplink", "Smart Edge", "QuTS hero"]
        },
        {
          model: "QGD-1602P",
          ports: "4x 2.5GbE PoE++ + 4x 2.5GbE PoE+ + 8x 1GbE PoE+",
          uplink: "2x 10GbE SFP+",
          poe: "PoE++",
          features: ["PoE++", "2.5GbE", "10GbE uplink", "Smart Edge", "QuTS hero"]
        }
      ]
    }
  ],

  // 快速查詢索引（由 buildSystemPrompt() 自動產生，不需手動維護）
  // 若要手動指定，可在此新增 override
  featureIndex: {
    // 若為空，程式會自動從 models[].features 建立索引
  }
};
