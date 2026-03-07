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
          features: ["PoE++", "2.5GbE", "10GbE uplink", "Half Rack Mount"],
          notes: "Half Rack Mount 機型，可搭配 SP-EAR-QSW2FOR1-01 配件將任兩台組裝為 1U"
        },
        {
          model: "QSW-M2106R-2S2T",
          management: "Web Managed L2",
          ports: "6x 2.5GbE",
          uplink: "2x 10GbE RJ45 + 2x 10GbE SFP+",
          features: ["2.5GbE", "10GbE uplink", "Half Rack Mount"],
          notes: "Half Rack Mount 機型，可搭配 SP-EAR-QSW2FOR1-01 配件將任兩台組裝為 1U"
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
          features: ["2.5GbE", "10GbE uplink", "Combo port", "Half Rack Mount"],
          notes: "Half Rack Mount 機型，可搭配 SP-EAR-QSW2FOR1-01 配件將任兩台組裝為 1U"
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
          features: ["10GbE", "SFP+", "Half Rack Mount"],
          notes: "Half Rack Mount 機型，可搭配 SP-EAR-QSW2FOR1-01 配件將任兩台組裝為 1U"
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
          features: ["10GbE", "SFP+", "Half Rack Mount"],
          notes: "Half Rack Mount 機型，可搭配 SP-EAR-QSW2FOR1-01 配件將任兩台組裝為 1U"
        },
        {
          model: "QSW-M3216R-8S8T",
          management: "Web Managed L2",
          ports: "8x 10GbE RJ45 + 8x 10GbE SFP+",
          features: ["10GbE", "SFP+", "Half Rack Mount"],
          notes: "Half Rack Mount 機型，可搭配 SP-EAR-QSW2FOR1-01 配件將任兩台組裝為 1U"
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
          features: ["25GbE", "100GbE uplink", "Half Rack Mount", "L3 routing"],
          notes: "Half Rack Mount 機型，可搭配 SP-EAR-QSW2FOR1-01 配件將任兩台組裝為 1U；適合中小企業部署 100GbE 高速骨幹網路"
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

// ── 後處理：自動計算 totalPorts（埠數 + 上行埠）──────────────────────────
// totalPorts 欄位為唯讀衍生值，不需在上方資料中手動填寫；
// 僅需維護 ports 與 uplink，此處會自動合併。
QNAP_PRODUCTS.series.forEach(series => {
  series.models.forEach(m => {
    m.totalPorts = m.uplink ? `${m.ports} + ${m.uplink}` : m.ports;
  });
});

// ── Software Specifications (auto-generated from QNAP official website) ──────
// Source: https://www.qnap.com/zh-tw/product/{model}/specs/software
// Last updated: 2026-03-07
QNAP_PRODUCTS.softwareSpecs = {
  "QSW-L3208-2C6T": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support Auto-negotiation of speed and duplex modes Port Isolation",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS Rate Limits",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "Link Aggregation / LACP IGMP Snooping v2 IGMP Snooping Querier Multicast flood blocking",
    "Security": "Loop protection to avoid broadcast loops",
    "Other Features": "Interface: Web UI (HTTPS) SNTP, DNS, DHCP client entry System log IEEE 802.3az EEE Port Mirroring Ping Qfinder Pro",
  },
  "QSW-L3205-1C4T": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support Auto-negotiation of speed and duplex modes Port Isolation",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS Rate Limits",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "Link Aggregation / LACP IGMP Snooping v2 IGMP Snooping Querier Multicast flood blocking",
    "Security": "Loop protection to avoid broadcast loops",
    "Other Features": "Interface: Web UI (HTTPS) SNTP, DNS, DHCP client entry System log IEEE 802.3az EEE Port Mirroring Ping Qfinder Pro",
  },
  "QSW-M2106-4C": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support IEEE 802.3x flow control Auto-negotiation of speed and duplex modes",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "LACP IGMP snooping v2 IEEE802.1w Rapid Spanning Tree",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client entry",
  },
  "QSW-M2106-4S": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support IEEE 802.3x flow control Auto-negotiation of speed and duplex modes",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "LACP IGMP snooping v2 IEEE802.1w Rapid Spanning Tree",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client entry",
  },
  "QSW-M2106PR-2S2T": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support IEEE 802.3x flow control Auto-negotiation of speed and duplex modes",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "LACP IGMP snooping v2 IEEE802.1w Rapid Spanning Tree",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client",
  },
  "QSW-M2106R-2S2T": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support IEEE 802.3x flow control Auto-negotiation of speed and duplex modes",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "LACP IGMP snooping v2 IEEE802.1w Rapid Spanning Tree",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client",
  },
  "QSW-M2108-2C": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support IEEE 802.3x flow control Auto-negotiation of speed and duplex modes",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "LACP IGMP snooping v2 IEEE802.1w Rapid Spanning Tree",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client entry",
  },
  "QSW-M2108-2S": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support IEEE 802.3x flow control Auto-negotiation of speed and duplex modes",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "LACP IGMP snooping v2 IEEE802.1w Rapid Spanning Tree",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client entry",
  },
  "QSW-M2108R-2C": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support IEEE 802.3x flow control Auto-negotiation of speed and duplex modes",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "LACP IGMP snooping v2 IEEE802.1w Rapid Spanning Tree",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client",
  },
  "QSW-M2116P-2T2S": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support IEEE 802.3x flow control Auto-negotiation of speed and duplex modes",
    "QoS": "Port-based QoS VLAN-based QoS",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "LACP IGMP snooping v2",
    "Security": "Access Control Lists (ACL): ACL by IP address",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client entry Loop protection Port mirror",
  },
  "QSW-M408-4C": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support IEEE 802.3x flow control Auto-negotiation of speed and duplex modes",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "Port trunking LACP groups IGMP snooping v1, v2 IEEE802.1w Rapid Spanning Tree",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client entry",
  },
  "QSW-M408-2C": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support IEEE 802.3x flow control Auto-negotiation of speed and duplex modes",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "Port trunking LACP groups IGMP snooping v1, v2 IEEE802.1w Rapid Spanning Tree",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client entry",
  },
  "QSW-M408S": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support IEEE 802.3x flow control Auto-negotiation of speed and duplex modes",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "Port trunking LACP groups IGMP snooping v1, v2 IEEE802.1w Rapid Spanning Tree",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client entry",
  },
  "QSW-M3212R-8S4T": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support IEEE 802.3x flow control Auto-negotiation of speed and duplex modes",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "LACP IGMP snooping v2 IEEE802.1w Rapid Spanning Tree",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client",
  },
  "QSW-M3216R-8S8T": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support IEEE 802.3x flow control Auto-negotiation of speed and duplex modes",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "LACP IGMP snooping v2 IEEE802.1w Rapid Spanning Tree",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client",
  },
  "QSW-M1208-8C": {
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "LACP IGMP snooping v2 IEEE802.1w Rapid Spanning Tree",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client entry",
  },
  "QSW-M804-4C": {
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "LACP IGMP snooping v2 IEEE802.1w Rapid Spanning Tree",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client entry",
  },
  "QSW-M5216-1T": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support IEEE 802.3x flow control Auto-negotiation of speed and duplex modes",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "LACP groups IGMP snooping v2 IEEE802.1w Rapid Spanning Tree",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client",
  },
  "QSW-M3224-24T": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support Auto-negotiation of speed and duplex modes",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS Rate Limits",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "LACP IGMP snooping v2 IGMP snooping querier Multicast Flood Blocking AV-over-IP RSTP IEEE802.1w Rapid Spanning Tree",
    "Layer 3 Features": "DHCP Server IPv4 / IPv6 interface Static Routing",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC Loop protection to avoid broadcast loops",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client entry System log Qfinder Pro support",
    "HA (High Availability)": "MC-LAG (Multichassis Link Aggregation)",
  },
  "QSW-M7308R-4X": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame support Auto-negotiation of speed and duplex modes",
    "Port Features": "100G QSFP28 port break-out to 4×25G SFP28 Break-out supported ports: Port 1–4 (100 GbE QSFP28) Maximum break-out sub-ports: 16×25 GbE Supported cable types: QSFP28 to 4×SFP28 Break-out DAC / AOC",
    "QoS": "Port-based QoS IEEE 802.1p CoS IPv4 DSCP-based QoS IPv4 ToS-based QoS Rate Limits",
    "VLAN": "VLAN configuration IEEE 802.1Q-based VLAN",
    "Layer 2 Features": "LACP IGMP snooping v2 IGMP snooping querier Multicast Flood Blocking AV-over-IP RSTP IEEE802.1w Rapid Spanning Tree",
    "Layer 3 Features": "DHCP Server IPv4 / IPv6 interface Static Routing",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MAC Loop protection to avoid broadcast loops",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interface: Web UI SNTP, DNS, DHCP client entry System log Qfinder Pro support",
    "HA (High Availability)": "MC-LAG (Multichassis Link Aggregation)",
  },
  "QGD-1600P": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame supportIEEE 802.3x flow control Auto-negotiation of speed and duplex modes",
    "QoS": "Bandwidth control Traffic classification Rate limiting",
    "VLAN": "VLAN configuration Port-based private VLANIEEE 802.1Q-based VLAN",
    "Layer 2 Features": "Port trunkingLACP groupsIGMP snooping v2 Loop protection to avoid broadcast loops",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MACNetwork access protection with auto-blocking (SSH, Telnet, HTTP(S), FTP, CIFS/SMB, and AFP)Host access control for shared folders (CIFS/SMB)AES 256-bit folder-based and volume-based encryptions, which are validated by FIPS 140-2 Cryptographic Algorithm Validation Program (CAVP )256-bit external drive encryption (AES)Import SSL certificates from Let’s Encrypt Instant alerts through email, SMS, push service, audio, and LCD panel2-step verification",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interfaces: Web UI, telnet, Command Line Interface (CLI)SNTP, DNS, DHCP client entry Port mirroring Wake-on-LANStatic MAC address",
  },
  "QGD-1602": {
    "Security": "Network access protection with auto-blocking (SSH, Telnet, HTTP(S), FTP, CIFS/SMB, and AFP)Host access control for shared folders (CIFS/SMB)AES 256-bit folder-based and volume-based encryptions, which are validated by FIPS 140-2 Cryptographic Algorithm Validation Program (CAVP )256-bit external drive encryption (AES)Import SSL certificates from Let’s Encrypt Instant alerts through email, SMS, push service, audio, and LCD panel2-step verification",
  },
  "QGD-1602P": {
    "Port Management": "Port status Port statistics Port configuration Jumbo frame supportIEEE 802.3x flow control Auto-negotiation of speed and duplex modes",
    "QoS": "Bandwidth control Traffic classification Rate limiting",
    "VLAN": "VLAN configuration Port-based private VLANIEEE 802.1Q-based VLAN",
    "Layer 2 Features": "Port trunkingLACP groupsIGMP snooping v2 Loop protection to avoid broadcast loops",
    "Security": "Access Control Lists (ACL): ACL by IP address, ACL by MACNetwork access protection with auto-blocking (SSH, Telnet, HTTP(S), FTP, CIFS/SMB, and AFP)Host access control for shared folders (CIFS/SMB)AES 256-bit folder-based and volume-based encryptions, which are validated by FIPS 140-2 Cryptographic Algorithm Validation Program (CAVP )256-bit external drive encryption (AES)Import SSL certificates from Let’s Encrypt Instant alerts through email, SMS, push service, audio, and LCD panel2-step verification",
    "Other Features": "Link Layer Discovery Protocol (LLDP): LLDP remote device Interfaces: Web UI, telnet, Command Line Interface (CLI)SNTP, DNS, DHCP client entry Port mirroring Wake-on-LANStatic MAC address",
  },
};
