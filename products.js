/**
 * QNAP Switch Product Data
 * ========================
 * 新增或修改產品請直接編輯此檔案，無需動 index.html。
 *
 * 欄位說明：
 *   model       - 型號名稱
 *   ports       - 埠數與速率描述
 *   uplink      - 上行埠（選填）
 *   poe         - PoE 規格（選填，e.g. "PoE+", "PoE++"）
 *   management  - 管理類型（"Unmanaged" | "Web Managed L2" | "Smart Edge"）
 *   features    - 特色標籤陣列
 *   notes       - 補充說明（選填）
 */

const QNAP_PRODUCTS = {

  series: [
    // ── QSW：非管理型 ──────────────────────────────────────
    {
      id: "QSW",
      name: "QSW Series",
      management: "Unmanaged",
      description: "即插即用，無需設定，適合家用或小型辦公室",
      models: [
        {
          model: "QSW-1105-5T",
          ports: "5x 2.5GbE",
          features: ["2.5GbE"]
        },
        {
          model: "QSW-2104-2T",
          ports: "4x 2.5GbE",
          uplink: "2x 10GbE",
          features: ["2.5GbE", "10GbE uplink"]
        },
        {
          model: "QSW-308-1C",
          ports: "8x GbE",
          uplink: "1x 10GbE Combo (RJ45+SFP+)",
          features: ["10GbE uplink"]
        },
        {
          model: "QSW-308S",
          ports: "8x GbE",
          uplink: "1x 10GbE SFP+",
          features: ["10GbE uplink", "SFP+"]
        }
      ]
    },

    // ── QSW-M：網頁管理型 L2 ──────────────────────────────
    {
      id: "QSW-M",
      name: "QSW-M Series",
      management: "Web Managed L2",
      description: "支援 VLAN、QoS、Link Aggregation、RSTP，適合中小企業",
      models: [
        {
          model: "QSW-M408-4C",
          ports: "8x 10GbE Base-T",
          uplink: "4x 10GbE SFP+",
          features: ["10GbE", "SFP+", "Combo port"]
        },
        {
          model: "QSW-M408S",
          ports: "8x 10GbE Base-T",
          uplink: "4x 10GbE SFP+",
          features: ["10GbE", "SFP+"]
        },
        {
          model: "QSW-M1208-8C",
          ports: "12x 10GbE",
          features: ["10GbE"]
        },
        {
          model: "QSW-M3216R-8S8T",
          ports: "16x 10GbE SFP+ + 8x 10GbE Base-T",
          features: ["10GbE", "SFP+", "Rack mount"]
        },
        {
          model: "QSW-M7308R-4X",
          ports: "8x 10/25GbE SFP28",
          uplink: "4x 100GbE QSFP28",
          features: ["25GbE", "100GbE uplink", "Rack mount"]
        },
        {
          model: "QSW-M2116P-2T2S",
          ports: "16x GbE PoE+",
          uplink: "2x 10GbE Base-T + 2x 10GbE SFP+",
          poe: "PoE+",
          features: ["PoE+", "Industrial grade", "10GbE uplink"]
        }
      ]
    },

    // ── QGD：Smart Edge（搭載 QuTS hero OS）────────────────
    {
      id: "QGD",
      name: "QGD Series",
      management: "Smart Edge",
      description: "搭載 QuTS hero OS，可執行 NAS 應用、VM、Container，適合邊緣運算",
      models: [
        {
          model: "QGD-1600",
          ports: "16x GbE",
          features: ["Smart Edge", "QuTS hero"]
        },
        {
          model: "QGD-1600P",
          ports: "16x GbE PoE",
          poe: "PoE",
          features: ["PoE", "Smart Edge", "QuTS hero"]
        },
        {
          model: "QGD-1602",
          ports: "16x GbE",
          uplink: "2x 10GbE SFP+",
          features: ["10GbE uplink", "Smart Edge", "QuTS hero"]
        },
        {
          model: "QGD-1602P",
          ports: "16x GbE PoE",
          uplink: "2x 10GbE SFP+",
          poe: "PoE",
          features: ["PoE", "10GbE uplink", "Smart Edge", "QuTS hero"]
        },
        {
          model: "QGD-3014-16PT",
          ports: "16x GbE PoE+",
          uplink: "2x 10GbE SFP+",
          poe: "PoE+",
          features: ["PoE+", "10GbE uplink", "Smart Edge", "QuTS hero"]
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
