/**
 * QNAP Switch FAQ Database
 * ========================
 * 資料來源：https://www.qnap.com/zh-tw/how-to/search?q=qsw&source=FAQ
 * 最後更新：2026-03-07
 * 共 20 筆 FAQ
 *
 * 欄位說明：
 *   id        - 編號
 *   title     - 問題標題
 *   category  - 分類 (VLAN, PoE, Reset, Diagnostics, ...)
 *   models    - 相關型號
 *   url       - 原始連結
 *   content   - 完整內容 (含解答步驟)
 */

const QNAP_FAQ = [
  {
    id: 1,
    title: "如何在我的 QSW-L3208-2C6T 交換器上在 VLAN 之間路由流量？",
    category: "VLAN / Routing",
    models: ["QSW-L3208-2C6T", "QSW-M3224-24T"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/how-can-i-route-traffic-between-vlans-on-my-qsw-l3208-2c6t-switch",
    content: "如何在我的 QSW-L3208-2C6T 交換器上在 VLAN 之間路由流量？\n適用產品\nQNAP QSW-L3208-2C6T 10GbE Switch\n概述\n\nQNAP QSW 管理型交換器使用 VLAN 和 Port Trunking 技術來提高 LAN 效率並將流量分割成獨立的廣播域。虛擬區域網路 (VLAN) 將多個網路設備分組在一起並限制廣播域。VLAN 的成員是隔離的，網路流量僅在組內成員之間傳送。您可以使用 VLAN 來提高安全性和靈活性，同時減少網路延遲和負載。\n\n情境\n\nQSW-L3208-2C6T 交換器配置了多個 VLAN（例如，VLAN 32 和 VLAN 60）。每個 VLAN 中的裝置可以在自己的 VLAN 內通訊，並且可以從不同的網路 ping 交換器管理 IP。然而，VLAN 32 中的裝置無法透過交換器到達 VLAN 60 中的裝置。目標是啟用這些 VLAN 之間的互 VLAN 路由。\n\n說明\n\nQSW-L3208-2C6T 是一款 Lite Managed 交換器，作為 Layer 2 (L2) 裝置運作。它不包含內建的 Layer 3 (L3) 路由功能，因此無法自行在 VLAN 之間路由流量。\n\n僅 L2 轉發：此型號支援 L2 轉發，但不支援 Layer 3 (L3) 路由功能。根據網路標準，Layer 2 交換器將不同的 VLAN 視為隔離的廣播域。它缺乏在 VLAN 32 和 VLAN 60 之間移動封包所需的內部路由引擎。\nVLAN 隔離：將一個埠分配給多個 VLAN 只允許該埠傳送這些 VLAN 的標記流量；它不會使交換器在它們之間進行路由。\n\nQSW-L3208-2C6T 不提供任何韌體選項來啟用第三層路由。VLAN 間路由必須由外部第三層設備處理或使用支援路由的 QNAP 交換器型號。\n\n解決方案\n\n要啟用 VLAN 間通訊，您必須使用外部第三層裝置或支援路由的交換器型號。\n\n選項 1：使用外部路由器或第三層閘道器\n\n您可以透過將 QSW-L3208-2C6T 連接到支援多個 VLAN 介面及其間路由的路由器或其他第三層網關來啟用 VLAN 間路由。QSW-L3208-2C6T 處理第二層的 VLAN 標記和轉發，而外接裝置執行路由。\n\n選項 2：使用支援路由的 QNAP 交換器型號\n\n如果您的應用需要在交換器層級進行高效能線速路由，我們建議升級到QSW-M3224-24T。這是一款支援靜態路由的 10GbE 第三層交換器，專為處理此情境中描述的 VLAN 間路由而設計。\n\n進一步閱讀\nQSW-M3224-24T - 推薦的第三層交換器的詳細規格和功能。"
  },
  {
    id: 2,
    title: "我如何找到 QSW-M7308R 的序列號",
    category: "Reset / Login",
    models: ["QSW-M7308R"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/how-do-i-find-the-serial-number-of-the-qsw-m7308r",
    content: "我如何找到 QSW-M7308R 的序列號\n適用產品\nQSW-M7308R\n情境\n\nQSW-M7308R 網頁管理介面在系統資訊頁面中不顯示序號。然而，您可能需要序號以獲得支援或註冊。\n\n解決方法\n開啟您的 Chrome 瀏覽器並導航至 QSW-M7308R 登入頁面。\n在登入前，按下 F12 （或前往右上角選單 → 更多工具 → 開發者工具）以開啟開發者工具。\n如常登入網頁介面。\n在開發者工具中，點選 網路 頂端的索引標籤。\n在網路索引標籤下方的篩選欄中，選擇 Fetch/XHR 以篩選請求。\n在左側的「名稱」列表中，找到並點選名為 board\n在右側，點選 預覽 索引標籤。\n尋找SerialNumber鍵及其值。這就是您的設備序號。\n\n如果您無法訪問網頁介面，序號也印在裝置機殼上的標籤上。"
  },
  {
    id: 3,
    title: "如何在 QSW-M7308R 上設定 MTU 大小？",
    category: "VLAN / Routing",
    models: ["QSW-M7308R"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/how-do-i-set-the-mtu-size-on-the-qsw-m7308r",
    content: "如何在 QSW-M7308R 上設定 MTU 大小？\n適用產品\nQSW-M7308R\n概述\n\n最大傳輸單元 (MTU) 決定了可以在網路上傳輸的最大封包大小。設定正確的 MTU 值有助於優化網路效能和相容性。有些裝置允許手動調整，但其他裝置則使用固定值以簡化操作並優化輸送量。\n\n解決方案\n\n在 QSW-M7308R 上，所有網路埠的 MTU 大小固定為 9216 位元組 (巨型訊框)。由於硬體和韌體設計，此型號不支援手動調整 MTU 大小。\n\n如果您的網路環境需要不同的 MTU 大小，您必須確保所有連接的裝置支援並配置為巨型訊框高達 9216 字節，以避免連接問題。\n如果您遇到與 MTU 相關的網路問題，請驗證您環境中其他網路裝置的 MTU 設定。\n\n提醒： 為獲得最佳效果，請確保網路路徑中的所有中介交換器和路由器也支援巨型訊框。"
  },
  {
    id: 4,
    title: "為什麼 Qfinder Pro 無法偵測到我的管理 QSW 交換器？",
    category: "VLAN / Routing",
    models: ["QSW-M", "QSW-M1204-4C", "QSW-M1208-8C", "QSW-M804-4C"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/how-do-i-troubleshoot-hardware-issues-on-a-managed-qsw-switch",
    content: "為什麼 Qfinder Pro 無法偵測到我的管理 QSW 交換器？\n適用產品\nQSW-M1208-8C\nQSW-M1204-4C\nQSW-M804-4C\nOther QNAP QSW-M series managed switches running QSS\n症狀\n\n開啟交換器電源後，Qfinder Pro 無法在同一區域網路中偵測到交換器。\n\n分析\n預設情況下，QNAP 交換器透過 DHCP 取得 IP 位址。如果沒有 DHCP 伺服器或網路有問題，交換器可能不會出現在 Qfinder Pro 中。\n綠色且閃爍的狀態 LED 表示交換器正在啟動。啟動通常應在 5 到 10 分鐘內完成。如果 LED 持續閃爍，可能表示啟動問題。\n如果您的電腦之前設定為靜態 IP 位址以配置交換器，您可能需要恢復為自動 IP 分配以在同一網路上進行通訊。\n解決方案\n檢查網路連線：\n確保交換器和運行 Qfinder Pro 的電腦連接到同一 LAN。\n確認所有電纜已牢固插入且網路連線埠 LED 燈是活躍的。\n驗證您的電腦網路設定：\n如果您之前為了存取交換器而分配了靜態 IP，請恢復原始網路設定。這確保您的電腦與交換器在同一子網路中。\n檢查 DHCP 伺服器的可用性：\nQNAP 交換器預設使用 DHCP 來獲取 IP 位址。確保您的網路上有啟動的 DHCP 伺服器。\n如果沒有可用的 DHCP 伺服器，交換器可能無法被分配 IP 位址，並且無法被 Qfinder Pro 找到。\n嘗試使用網頁瀏覽器存取交換器：\n如果您知道交換器的 IP 位址，請在網頁瀏覽器中輸入以存取管理介面。\n如果您不知道 IP 位址，請檢查您的 DHCP 伺服器或路由器的客戶端 / 設備列表中是否有標記為 QNAP 交換器的設備。\n重新啟動交換器和您的電腦：\n重新啟動交換器和您的電腦以重新整理網路連線。\n將交換器重置為出廠預設值（如有必要）：\n警告： 重置交換器會清除所有自訂設定並恢復出廠預設值。\n要重置，請按住實體重置按鈕 10 秒鐘。\n重置後，再次使用 Qfinder Pro 來定位交換器並根據需要進行重新配置。\n\n如果狀態 LED 維持綠色且閃爍超過 10 分鐘且交換器仍然無法被偵測到，您可以使用控制台埠進一步調查。請參考如何使用控制台埠檢查管理交換器上的系統資訊以獲得指導。如有需要，收集啟動資訊並聯絡QNAP 支援以獲得進一步協助。\n\n進一步閱讀\n如何使用控制檯埠檢查管理交換器上的系統資訊\nQNAP 支援"
  },
  {
    id: 5,
    title: "當我遇到問題時，如何從我的 QSW 管理交換機下載診斷日誌？",
    category: "SFP+ / Transceiver",
    models: [],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/how-do-i-download-diagnostic-logs-from-my-qsw-managed-switch-when-i-encounter-an-issue",
    content: "當我遇到問題時，如何從我的 QSW 管理交換機下載診斷日誌？\n適用產品\n\nQSW 管理型交換器作業系統：QSS Pro 4.x、QSS 1.5 或更新版本\n\n概覽\n\n如果您在 QSW 管理型交換器上遇到異常行為、網路連接問題或收發器或 DAC 線纜的相容性問題，您可以使用 QSS 或 QSS Pro 網頁介面下載診斷記錄。\n這些記錄有助於 QNAP 技術支援更有效地分析和解決問題。\n\n程式\n\n要從您的 QSW 管理型交換器收集和下載診斷記錄，請按照以下步驟進行：\n\n透過網頁介面登入您的 QSW 管理型交換器。\n前往 系統 > 系統設定 > 診斷記錄。\n從可用列表中選擇您想要收集記錄的服務。\n提示：例如，如果您遇到 AMIZ Cloud 連接問題，請選擇AMIZ Cloud。系統記錄預設包含。\n指定您想要收集記錄的時間範圍。\n按一下 開始 按鈕以開始收集記錄。\n當記錄收集完成後，按一下 下載 按鈕。\n交換器將生成一個壓縮的記錄檔案，並下載到您的電腦。\n透過服務入口網站將下載的記錄檔案傳送給 QNAP 技術支援以進行進一步診斷。\n進一步閱讀\n如何使用 QNAP 服務入口網站建立支援票證"
  },
  {
    id: 6,
    title: "如何互連兩臺 QNAP QSW 管理型交換機",
    category: "VLAN / Routing",
    models: ["QSW-M2106-4C", "QSW-M408-2C"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/how-to-connect-two-qnap-qsw-switches",
    content: "如何互連兩臺 QNAP QSW 管理型交換機\n適用產品\n\nQNAP 管理型交換器\n\n情境\n\n您有一臺 QSW-M2106-4C 和一臺 QSW-M408-2C，您想要：\n\n在不更換硬體的情況下增加存取埠\n\nA20GbE交換器之間的聚合主幹\n\n使用 VLAN 進行清晰的分段，例如 VLAN 10 (LAN)、20 (IoT/ 印表機)、30 (訪客)、99 (管理)\n\n解決方案\n\n要連線兩臺 QNAP 管理型交換器（例如： QSW-M2106-4C 和QSW-M408-2C），這是一種清晰的連線方式。 \n\n1) 實體上行鏈路\n\n使用  2× SFP+ DAC 纜線，然後插入兩個交換器上的任何 SFP+。這是短距離連線中最簡單、最便宜且最可靠的方法。\n\n 建議：建立一個2 埠 LACP LAG在交換器之間以獲得更多頻寬 + 容錯移轉。兩個型號都支援LACP/ 鏈路聚合和802.1Q VLANs。\n\n例如：埠 9 和 10。\n2) 配置交換器間的連線 (QSS 網頁管理介面)\n\n在兩個交換器上執行相同的步驟。\n\n2.1 建立 LAG (如果是單一連接則跳過)：\nQSS (交換器網頁) → L2 功能 → 鏈路聚合 → 啟用 LACP → 新增 LAG1 → 選擇兩個上行埠 → 模式：主動 → 應用。\n\n2.2. 建立 VLANs：\nQSS → VLAN → 802.1Q VLAN → 新增您的 VLAN ID (例如，10=LAN, 20=IoT, 30=Guest, 99=Mgmt)。在每個 VLAN 列中，設定LAG1 為「標記」 (使其在交換器之間傳輸所有 VLANs)。\n\n進一步閱讀\n\nQSS：新增鏈路聚合群組 (LAG)\n\nQSW-M2106-4C 產品 / 規格\n\nQSW-M408-2C 產品 / 規格"
  },
  {
    id: 7,
    title: "在 QNAP QSW 網管型交換器上進行 FEC 設定及疑難排解",
    category: "SFP+ / Transceiver",
    models: ["QSW-M5216-1T", "QSW-M7308R-4X"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/在-qnap-qsw-網管型交換器上進行-fec-設定及疑難排解",
    content: "在 QNAP QSW 網管型交換器上進行 FEC 設定及疑難排解\n適用產品\n硬體\nQSW-M7308R-4X\nQSW-M5216-1T\n軟體\nQSS v1.4.2 (含) 以上版本\nQSS Pro v4.0.0 (含) 以上版本\n總覽\n\n前饋式錯誤修正 (FEC) 是一種資料通訊方法，其中稱為錯誤修正位元的額外位元會與資料一起編碼，以協助偵測並修正錯誤，即使在高速傳輸 (100G/25G) 及長距離網路傳輸期間也是如此。接收器會使用這些額外的位元來檢查接收到的資料與傳輸的資料。如偵測到錯誤，則接收器可以使用新增的 FEC 位元來修正錯誤並取得原始資料的正確值。\n\n程序\n登入［QSS］。\n前往［連接埠管理］>［連接埠設定］。\n在［介面設定］下方，識別交換器連接埠。\n在［FEC］下方，從下拉式選單選擇模式。\nFEC 模式\t說明\n全部\t交換器會自動選擇最佳的 FEC 模式 (不包括自動協調 FEC 模式) 以傳輸及接收資料封包。\nRS-FEC\tReed -Solomon (RS) FEC 在傳輸與接收裝置提供增強的資料修正率。\nBASE-R-FEC\t相較於 25 GbE 交換連接埠的 RS-FEC，Fire-Code FEC 或 BASE-R-FEC 提供較低修正率，但延遲較低。\n自動協調\t針對交換連接埠的電氣背板採用 Clause 73 的自動協調功能。傳輸 FEC 自動協調 (AN) 要求訊息，以便判斷交換器連接埠之間協調的 FEC 程序。\n停用\t停用所有交換器連接埠的 FEC。\n備註\n使用自動協調來自動判斷連線功能，並消除 FEC 手動設定。當需要根據網路狀況調整資料速率時，最好使用自動協調 FEC。\n如資料需要額外的保護來避免雜訊及防止遺失其他資料來源時，請使用 RS-FEC。\nBASE-R-FEC 適用於高速運作的網路。這是目前可用的最高速度 FEC，最適合關鍵任務網路與應用程式。\n某些特定網路卡會要求手動使交換器和網路卡之間的前饋式錯誤修正 (FEC) 設定相符。有關相容網路卡的詳細清單，請參閱：QNAP 相容性清單。\n提示\n若要檢視目前套用至介面的 FEC 模式，請前往［連接埠管理］>［連接埠狀態］。\n按一下［儲存］。\n\nQSS 將 FEC 模式儲存在已選擇的交換器連接埠。\n\n常見 FEC 問題疑難排解\n情境 1：常見 FEC 相容性問題疑難排解\n\n在連結連線超過 30 秒或網路卡與交換器之間未建立網路通訊的情況下，建議調查是否存在 FEC 模式可能不相符的問題。連結時間過長或整個連結失敗，可能是因為傳送和接收網路裝置上設定的 FEC 模式不相符造成的。本節針對網路卡與 QNAP 交換器 (支援 100Gbps 或 25Gbps 連接埠速度) 之間發生 FEC 模式不相符的情況，提供有效的因應措施說明。\n\nFEC 模式：全部\n\nNIC OS 平台：Windows、Linux\n\n因應措施 1：在兩台裝置上選擇相同的 FEC 模式\n因應措施步驟\n拔掉連接兩台裝置的乙太網路線。\n選擇相同的 FEC 模式 (例如 RS-FEC、BASE-R-FEC)，或在兩個裝置停用 FEC。\n儲存 FEC 設定。\n將乙太網路線的一端牢固地插入交換器上的可用連接埠，再將乙太網路線的另一端連接到網路卡連接埠。\n因應措施 2：將 FEC 模式變更為自動協調\n\n因應措施步驟\n\n拔掉連接兩台裝置的乙太網路線。\n在 QNAP 交換器上，將 FEC 模式變更為自動協調。\n將 FEC 設定儲存在交換器上。\n將乙太網路線的一端牢固地插入交換器上的可用連接埠，再將乙太網路線的另一端連接到網路卡連接埠。\nFEC 模式：RS-FEC、BASE-R-FEC、停用\n\nNIC OS 平台：Linux\n\n因應措施 1：在兩台裝置上設定相同的 FEC 模式。\n\n因應措施步驟\n\n拔掉連接兩台裝置的乙太網路線。\n選擇 FEC 模式 (RS-FEC、BASE-R-FEC)，或在交換器停用 FEC。\n將 FEC 設定儲存在交換器上。\n在網路卡上，選擇相同的 FEC 模式。\n$ethtool --set-fec swp1 encoding [off | BaseR | auto]\nC++\nCopy\n將 FEC 設定儲存在網路卡上。\n將乙太網路線的一端牢固地插入交換器上的可用連接埠，再將乙太網路線的另一端連接到網路卡連接埠。\n\n舉一個例子來說，為交換器設定首選 FEC 模式 (如 RS-FEC) 時，網路卡可能無法與這台交換器建立連線。\n\n拔掉連接兩台裝置的乙太網路線。\n在交換器上，將 FEC 模式變更為 BASE-R-FEC。\n將 FEC 設定儲存在交換器上。\n在網路卡上，選擇 BASE-R-FEC。\n將 FEC 設定儲存在網路卡上。\n將乙太網路線的一端牢固地插入交換器上的可用連接埠，再將乙太網路線的另一端連接到網路卡連接埠。\n\nQSS 將 FEC 模式變更為 BASE-R-FEC。\n\n因應措施 2：重新設定網路卡上的 FEC 模式\n\n因應措施步驟\n\n拔掉連接兩台裝置的乙太網路線。\n在網路卡上，停用 FEC。\n$ethtool --set-fec swp1 encoding [off]\nC++\nCopy\n儲存 FEC 設定。\n將 FEC 模式變更為網路卡上的首選 FEC 模式 (RS-FEC)。\n儲存 FEC 設定。\n在交換器上，將 FEC 模式變更為 RS-FEC。\n儲存 FEC 設定。\n將乙太網路線的一端牢固地插入交換器上的可用連接埠，再將乙太網路線的另一端連接到網路卡連接埠。\n\nQSS 會將 FEC 模式顯示為 RS-FEC。\n\nFEC 模式：自動協調\n\nNIC OS 平台：Windows、Linux\n\n因應措施 1：在兩台裝置上選擇相同的 FEC 模式\n\n因應措施步驟\n\n拔掉連接兩台裝置的乙太網路線。\n選擇相同的 FEC 模式 (例如 RD-FEC、BASE-R-FEC)，或在兩個裝置停用 FEC。\n儲存 FEC 設定。\n將乙太網路線的一端牢固地插入交換器上的可用連接埠，再將乙太網路線的另一端連接到網路卡連接埠。\n因應措施 2：將 FEC 模式變更為［全部］\n\n因應措施步驟\n\n如果連接的網路卡不符合 IEEE802.3ap 標準，選擇［自動協調］可能導致交換器出現連線問題。\n\n拔掉連接兩台裝置的乙太網路線。\n在交換器上，將 FEC 模式變更為［全部］。\n儲存 FEC 設定。\n將乙太網路線的一端牢固地插入交換器上的可用連接埠，再將乙太網路線的另一端連接到網路卡連接埠。\n情境 2：對 QSW-M5216-1T FEC 模式顯示的差異進行疑難排解\n\n處於連結狀態時，WSW-M5216-1T 交換器上設定的 FEC 模式與顯示的 FEC 模式之間可能會出現間歇性差異。\n\n在下列範例中，將 QSW-M5216-1T 交換器上的 FEC 模式從 RS-FEC 變更為「停用」會導致 QSS 中設定的模式和顯示的模式之間出現差異。當實際的 FEC 模式被停用時，QSS 繼續顯示 RS-FEC。\n\n因應措施\n拔掉連接兩台裝置的乙太網路線。\n將乙太網路線的一端牢固地插入交換器上的可用連接埠，再將乙太網路線的另一端連接到網路卡連接埠。\n登入［QSS］。\n前往［設定］ > ［連接埠管理］ > ［連接埠狀態］。\n\nQSS 將顯示設定的 FEC 模式。\n\n備註\n此因應措施僅適用於 QNAP QSW-M5216-1T 交換器和特定相容網路卡。若問題仍然存在，請聯絡 QNAP 客戶服務。\n深入閱讀\n\nLinux 網路開發：支援 FEC 編碼控制"
  },
  {
    id: 8,
    title: "QSW 管理交換機支援哪些 MIB？",
    category: "Firmware",
    models: ["QSW-M3224-24T", "QSW-M7308R-4X"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/which-mibs-are-supported-by-qsw-managed-switches",
    content: "QSW 管理交換機支援哪些 MIB？\n適用產品\n硬體\nQSW-M3224-24T\nQSW-M7308R-4X\n軟體\nQSS Pro v4.0.0 及更新版本\n概覽\n\n管理資訊基礎 (MIB) 清單提供了QNAP交換機所支援的管理資源屬性和服務的定義與資訊。物件識別碼 (OIDs) 在管理資訊基礎 (MIB) 階層中作為唯一的命名慣例，使得特定物件的識別和存取成為可能。\n\nRFC1213-MIB\nIF-MIB\nSNMPv2\nSTART-MIB"
  },
  {
    id: 9,
    title: "I can't login with default password to my QSW-M3216R-8S8T / QSW-M3212R-8S4T",
    category: "Firmware",
    models: ["QSW-M3212R-8S4T", "QSW-M3216R-8S8T"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/i-cant-login-with-default-password-to-my-qsw-m3216r-8s8t-qsw-m3212r-8s4t",
    content: "I can't login with default password to my QSW-M3216R-8S8T / QSW-M3212R-8S4T\nApplicable Products\nQSW-M3216R-8S8T  / QSW-M3212R-8S4T\nFirmware 1.4.0\nScenario\n\nYou may encounter an issue when you first try to login to the QSW-M3216R-8S8T  / QSW-M3212R-8S4T using the MAC address as the default password. This issue has been resolved on later firmware versions 3.0 and above.\n\nSolution\n\nTo resolve this, log in to the unit using the following credentials:\n\nusername: admin\npassword: admin123\n\nOnce logged in, update the firmware to v3.0 or above. The firmware can be downloaded from the links below:\n\nQSW-M3216R-8S8T - Download Center\nQSW-M3212R-8S4T - Download Center"
  },
  {
    id: 10,
    title: "要如何針對無網管型 QSW 交換器的硬體問題進行疑難排解？",
    category: "Troubleshooting",
    models: ["QSW-1105-5T", "QSW-1108-8T", "QSW-1208-8C", "QSW-2104-2S", "QSW-2104-2T", "QSW-308-1C", "QSW-308S"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/要如何針對無網管型-qsw-交換器的硬體問題進行疑難排解",
    content: "要如何針對無網管型 QSW 交換器的硬體問題進行疑難排解？\n適用產品\nQSW-1105-5T\nQSW-1108-8T\nQSW-1208-8C\nQSW-2104-2S\nQSW-2104-2T\nQSW-308-1C\nQSW-308S\n總覽\n\n如果您在非網管型 QSW 交換器遇到任何硬體問題，請在疑難排解前嘗試下列步驟。\n\n關閉交換器電源。\n中斷交換器的網路線。\n將電源線介面卡連接交換器的 DC IN 輸入孔。\n將電源線插入電源插座。\n確保電源插座通電。\n電源變壓器開機故障或交換器無法開機\n打開交換器電源。\n檢查交換器的系統狀態 LED 是否變成綠燈。\n可能原因\n\n如果系統狀態 LED 並未亮燈，電源變壓器或交換器可能故障。\n\n網路問題\n將交換器的 WAN 連接埠連接至網路。\n將交換器的 LAN 連接埠連接至電腦。\n確認 WAN 連接埠 LED 為橘燈，且 LAN 連接埠 LED 為綠燈。\n可能原因\n\n如果連接埠 LED 未如預期運作，交換器可能發生網路問題。\n\n如果交換器發生任何上述問題，請建立 QNAP 支援需求單。 \n\n如需詳細資訊，請參閱：QNAP 服務入口網站。"
  },
  {
    id: 11,
    title: "關於 QSW 網管型交換器常見問題集",
    category: "SFP+ / Transceiver",
    models: ["QSW-M2116P-2T2S"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/關於-qsw-網管型交換器常見問題集",
    content: "關於 QSW 網管型交換器常見問題集\n適用產品\n\nQSW 網管型交換器系列\n\n詳細資料\n\nQNAP 網管型交換器允許使用者輕鬆配置並管理重大網路服務與裝置，並可使用一系列網路拓撲進行多功能部署，提供更高的可靠性與安全性。\n\n您可以存取 QNAP 交換器系統 (QSS) 作業系統，實施多種網路與安全功能，監控網路效能以及最佳化網路功能。\n\n如何手動更新網管型交換器韌體？\n如何在網管型交換器啟用迴圈防護設定？\n如何在網管型交換器啟用日光節約時間 (DST) 設定？\n網管型交換器的預設管理模式是什麼？\n如何在網管型交換器設定 Trunk 模式？\n我可以使用任何交換器連接埠在網管型交換器存取 QSS 嗎？\nQSW 網管型交換器系列的其他連接埠有哪些？\n我可以手動設定或限制 QSW 網管型交換器的 SFP+ 連接埠嗎？\n我可以在 QSW-M2116P-2T2S 交換器備份並恢復系統設定嗎？"
  },
  {
    id: 12,
    title: "關於 QSW 交換器 PoE 功能的常見問題集",
    category: "PoE",
    models: [],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/關於-qsw-交換器-poe-功能的常見問題集",
    content: "關於 QSW 交換器 PoE 功能的常見問題集\n適用產品\n\nQSW 交換器\n\n我可將非受電裝置連接至 PoE 交換器嗎？這會造成裝置受損嗎？\n\n如果您的 PoE 交換器符合 PoE 標準，交換器將會自動偵測。若所連接的裝置不支援 PoE，將只提供網路連線。\n\n我的受電裝置的耗電量低於 PoE 連接埠的最大功耗。這會損壞我的受電裝置嗎？\n\n不會。在 PoE 交換器為裝置供電之前，它會確定連接的裝置需要多少電力 (如果有)。此程序會使用低功耗且不會影響連接的裝置。這是所有符合 IEEE 802.3af/at/bt 規範的裝置標準功能。\n\n我可將 PoE 交換器連接至另一台 PoE 交換器嗎？\n\n可以。如果連接兩台 PoE 交換器，兩台 PoE 交換器將僅具有網路連線而不供電。PoE 交換器僅向偵測到的受電裝置供電。\n\n我可使用 CCA (銅/鋁) 線材嗎？\n\n銅包鋁 (CCA) 線使用鋁芯並以銅包覆。與銅相比鋁不是良好的導電體。而且，鋁的直流電阻較高，代表功率損失較高及具散熱。\n\n在這種情況下，銅包鋁線為 PoE 應用提供更差的供電能力。因此，建議在應用 PoE 時僅使用全銅乙太網路線。\n\n我的 PoE 交換器及受電裝置之間的距離超過 100 公尺。我該怎麼做才能將距離延長到 100 公尺以上？\n\n在 PoE 交換器及受電裝置之間使用 PoE 延伸器 (也稱為 PoE 中繼器)。"
  },
  {
    id: 13,
    title: "如何透過 MGMT 連接埠編輯並管理 QSW 交換器網路設定？",
    category: "Reset / Login",
    models: ["QSW-IM1200-8C", "QSW-M1208-8C", "QSW-M2104-4C", "QSW-M804-4C"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/如何透過-mgmt-連接埠編輯並管理-qsw-交換器網路設定",
    content: "如何透過 MGMT 連接埠編輯並管理 QSW 交換器網路設定？\n適用產品\n硬體\nQSW-M1208-8C\nQSW-M2104-4C\nQSW-M804-4C\nQSW-IM1200-8C\n軟體\n\nQSS 版本 1.3.0.57896 或以上版本\n\n總覽\n\nIT 管理員需要專用且安全的存取權限，才能從遠端位置存取網路基礎結構。您可存取交換器的 MGMT 連接埠，利用頻外 (OOB) 管理來遠端編輯交換器的網路設定。\n\nOOB 管理僅支援使用 MGMT 連接埠的網頁管理服務。不支援 NTP 與 SNMP 等服務。QSW 網管型交換器預設使用頻內管理。\n\n基於安全性理由，為確保其他存取連接埠的使用者無法存取 QSS，IT 人員可在 QSS 設定 OOB 模式。OOB 同時支援 DHCP 與固定 IP 位址設定。預設 IP 位址為 169.254.100.101。\n\n程序\n登入［QSS］。\n前往［系統］>［系統設定］。\n按一下［IP］。\n選擇［頻外 (OOB)］作為管理存取。\n在［頻外管理］下，選擇 IP 組態設定。\n按一下［儲存］。\n\nQSS 隨即儲存 OOB 設定。使用者現在僅能使用 MGMT 連接埠存取 QSS。"
  },
  {
    id: 14,
    title: "我可以手動設定或限制 QSW 網管型交換器的 SFP+ 連接埠嗎？",
    category: "SFP+ / Transceiver",
    models: ["QSW-IM1200-8C", "QSW-M1204-4C", "QSW-M1208-8C", "QSW-M2106-4C", "QSW-M2106-4S", "QSW-M2106PR-2S2T", "QSW-M2106R-2S2T", "QSW-M2108-2C", "QSW-M2108-2S", "QSW-M2108R-2C", "QSW-M2116P-2T2S", "QSW-M408-2C", "QSW-M408-4C", "QSW-M408S", "QSW-M5216-1T", "QSW-M804-4C"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/我可以手動設定或限制-qsw-網管型交換器的-sfp-連接埠嗎",
    content: "我可以手動設定或限制 QSW 網管型交換器的 SFP+ 連接埠嗎？\n適用產品\nQSW-M2106-4C\nQSW-M2106-4S\nQSW-M2106PR-2S2T\nQSW-M2106R-2S2T\nQSW-M408-4C\nQSW-M408-2C\nQSW-M408S\nQSW-M1208-8C\nQSW-M1204-4C\nQSW-M804-4C\nQSW-M5216-1T\nQSW-IM1200-8C\nQSW-M2108-2C\nQSW-M2108-2S\nQSW-M2108R-2C\nQSW-M2116P-2T2S\n詳細資料\n\n不可以。目前無法在 SFP+ 連接埠調整資料模式。您僅能在 QSS 的 RJ45 連接埠手動調整或限制資料模式。\n\n登入［QSS］。\n前往［連接埠管理］>［連接埠設定］。\n編輯速度設定。\n按一下［儲存］。\n\nQSS 隨即儲存 RJ45 速度設定。"
  },
  {
    id: 15,
    title: "我可以在 QSW-M2116P-2T2S 交換器備份並恢復系統設定嗎？",
    category: "Firmware",
    models: ["QSW-M2116P-2T2S"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/我可以在-qsw-m2116p-2t2s-交換器備份並恢復系統設定嗎",
    content: "備份與復原\n我可以在 QSW-M2116P-2T2S 交換器備份並恢復系統設定嗎？\n適用產品\n硬體\n\nQSW-M2116P-2T2S\n\n韌體\n\n1.0.6 build 210713 (與較舊版本)\n\n回答\n\n可以。目前的 QSS 韌體不支援 QSW-M2116P-2T2S 網管型交換器的備份及還原功能。"
  },
  {
    id: 16,
    title: "QSW 網管型交換器系列的其他連接埠有哪些？",
    category: "Diagnostics",
    models: ["QSW-1204-4C", "QSW-IM1200-8C", "QSW-M1204-4C", "QSW-M1208-8C", "QSW-M2106-4C", "QSW-M2106-4S", "QSW-M2106PR-2S2T", "QSW-M2106R-2S2T", "QSW-M2108-2C", "QSW-M2108-2S", "QSW-M2108-4C", "QSW-M2108-8C", "QSW-M2108R-2C", "QSW-M2116P-2T2S", "QSW-M408-2C", "QSW-M408-4C", "QSW-M408S", "QSW-M5216-1T", "QSW-M804-4C"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/qsw-網管型交換器系列的其他連接埠有哪些",
    content: "QSW 網管型交換器系列的其他連接埠有哪些？\n適用產品\nQSW-M2106-4C\nQSW-M2106-4S\nQSW-M2106PR-2S2T\nQSW-M2106R-2S2T\nQSW-M408-4C\nQSW-M408-2C\nQSW-M408S\nQSW-M1208-8C\nQSW-M1204-4C\nQSW-M804-4C\nQSW-M5216-1T\nQSW-IM1200-8C\nQSW-M2108-2C\nQSW-M2108-2S\nQSW-M2108R-2C\nQSW-M2116P-2T2S\n回答\n連接埠\t說明\n主控台連接埠\t某些 QSW 網管型交換器配備了主控台連接埠 (RS-232 序列埠)，可用於專門存取命令列介面 (CLI) 以進行診斷。\n管理 (MGMT) 連接埠\t網管交換器的管理連接埠只能用於存取 QSS 介面。\n\n參閱下表可辨別 QSW 網管型交換器的主控台和管理連接埠。\n\n連接埠名稱\t連接埠圖片\t桌面型號\t機架式型號\n主控台連接埠\t\n\tQSW-M2106-4C\nQSW-M2106-4S\nQSW-M408-4C\nQSW-M408-2C\nQSW-M408S\tQSW-M2108-2C\nQSW-M2108-2S \n\n\t-\tQSW-M2106PR-2S2T\nQSW-M2106R-2S2T\n\n\t-\tQSW-M2108-8C\nQSW-M2108-4C\nQSW-M804-4C\nQSW-M5216-1T\nQSW-IM1200-8C\n\n維護用連接埠\t\n\t-\n\n\tQSW-M1208-8C\nQSW-1204-4C\nQSW-M804-4C\nQSW-M5216-1T\nQSW-IM1200-8C\nQSW-M2108R-2C\nQSW-M2116P-2T2S"
  },
  {
    id: 17,
    title: "如何重設 QSW-M 交換器？",
    category: "Reset / Login",
    models: ["QSW-M"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/如何重設-qsw-m-交換器",
    content: "如何重設 QSW-M 交換器？\n適用產品\nQSW-M 系列\n總覽\n\n如果您的交換器設定不正確，且無法存取 QSS 介面以重設裝置，您可執行硬重設以重設密碼或將交換器還原為預設設定。\n\n回答\n找到交換器上的重設按鈕。\n執行下列重設操作之一。\n操作\t使用者動作\t結果\n系統基本重設\t按住按鈕 5 秒。\t以下設定將回復至預設值：\n系統管理員密碼：預設密碼為第一個 MAC 位址 (不包含特殊字元)。例如，若第一個 MAC 位址為 00-08-9BF6-15-75，則 admin 密碼為 00089BF61575。\n備註\n您可以透過 Qfinder Pro 或者裝置標籤上列為 MAC1 處找到第一個 MAC 地址。\n系統會自動啟用 admin 帳戶\n\n系統進階重設\n\t按住按鈕 10 秒。\t回復為出廠預設值。"
  },
  {
    id: 18,
    title: "Why the Qfinder utility is not able to find QSW switch devices?",
    category: "SFP+ / Transceiver",
    models: ["QSW-M"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/why-the-qfinder-utility-is-not-able-to-find-qsw-switch-devices",
    content: "QuRouter\nWhy the Qfinder utility is not able to find QSW switch devices?\nApplicable Products\nQSW series switches\nDetails\n\nOnly QSW managed switch devices (QSW-M series) can use the Qfinder utility to search & find it. If you have an unmanaged switch, it is normal that the QFinder utility does not detect the device in this case.\n\nIf the Qfinder tool cannot find QSW managed switch device, it could be network related issue. You could follow the step as below to eliminate the network environment for testing:\n\nRemove AC(or DC) power cord from the QSW switch device.\nRemove all LAN cable/SFP+ transceiver modules from the switch device RJ45/SFP+ ports.\nUse a LAN cable to connect between the switch device RJ45 port & your PC/laptop LAN card (the PC/laptop LAN card need set the IP address to 169.254.100.101 and submask 255.255.0.0).\nOpen Qfinder tool in PC/laptop, plugin AC(or DC) power cord into the switch device, observe the Qfinder tool can normal find the switch device or not."
  },
  {
    id: 19,
    title: "QSW-M1204-4C 10G RJ45 port linkup with 2.5G might lose connection",
    category: "Firmware",
    models: ["QSW-M1204-4C"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/qsw-m1204-4c-10g-rj45-port-linkup-with-25g-might-lose-connection",
    content: "擴充和周邊裝置\nQSW-M1204-4C 10G RJ45 port linkup with 2.5G might lose connection\n\nfix method : update QTS 5.0.1 or h5.0.1 firmware and above"
  },
  {
    id: 20,
    title: "QSW-M408-2C Jumbo Frames Configuration",
    category: "MTU / Jumbo Frame",
    models: ["QSW-M408-2C"],
    url: "https://www.qnap.com/zh-tw/how-to/faq/article/qsw-m408-2c-jumbo-frames-configuration",
    content: "QSW-M408-2C Jumbo Frames Configuration\nFor the QSW-M408-2C managed switch, the Jumbo Frame is enabled and configured to 9000 bytes by default. Thus it is not necessary to configure it manually."
  },
];
