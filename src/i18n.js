import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'LA Home',
        projects: 'Projects',
        installation: 'Installation',
        launch: 'Launch Console'
      },
      categories: {
        intelligence: '🧠 AI Intelligence',
        tech: '💻 Data & Tech',
        games: '🎮 Gaming Arcade',
        simulation: '🚥 Simulations',
        leisure: '🎭 Leisure Zone'
      },
      hero: {
        badge: 'The Future Unified Ecosystem',
        headlineMain: 'Everything',
        headlineSub: 'All in One Place.',
        subheadline: 'A centralized, performance-driven portal aggregating intelligent micro-services and projects into one seamless ecosystem.'
      },
      projects: {
        title: 'Our Projects',
        launchInside: 'Launch Inside',
        comingSoon: 'Next Node',
        comingSoonDesc: 'Connecting intelligent nodes seamlessly. Future integration pending.',
        aiStudioEnglish: {
          title: 'Cloud English Partner',
          desc: 'High-performance cloud-based English conversation practice assistant.'
        },
        chatPartner: {
          title: 'Local English Partner',
          desc: '[WARNING: Small local model. Slow on mobile, logic limited. Tech demo only.] Practice English conversation.'
        },
        lawyerHelp: {
          title: 'Local Lawyer Assistant',
          desc: '[WARNING: Small local model. Slow on mobile, poor reasoning. Tech demo only.] Taiwan legal assistant.'
        },
        simTraffic: {
          title: 'Traffic Simulator',
          desc: 'Real-time city traffic flow simulation to observe vehicle dynamics and signal impacts.'
        },
        simCarAccident: {
          title: 'Car Accident Simulator',
          desc: 'Physics engine driven car accident simulation, analyzing collision mechanics and safety factors.'
        },
        simEcosystem: {
          title: 'Ecosystem Simulator',
          desc: 'Complex life-cycle simulation observing the balance and interactions within a biological ecosystem.'
        },
        simCFO: {
          title: 'Strategic CFO: Market Intelligence',
          desc: 'A high-fidelity business simulation focusing on financial transparency, risk management, and market trend sensing.'
        },
        aiAlarmClock: {
          title: 'AI Smart Alarm Clock',
          desc: 'A minimal, high-efficiency web alarm clock helping you track time precisely and improve daily productivity.'
        },
        nfcShowInfo: {
          title: 'NFC Show Info',
          desc: 'Lightweight PWA utility to scan, inspect, and analyze NFC card payloads and tags in real-time.'
        },
        aiNews: {
          title: 'AI News',
          desc: 'Comprehensive AI-driven news aggregation and analysis system.'
        },
        aiLucky: {
          title: 'AI Lucky Diary',
          desc: 'A warm and lovely handwritten-style diary system tracking daily small lucky moments.'
        },
        aiLeetcode: {
          title: 'AI LeetCode Hub',
          desc: 'A comprehensive vault of algorithmic problem solving, covering Python and C++ architectures.'
        },
        aiOpendata: {
          title: 'AI OpenData Explorer',
          desc: 'Intelligent visualization and interactive control center for government open data.'
        },
        aiStatisticsAct: {
          title: 'AI Statistical Analysis Platform',
          desc: 'An online smart psychometrics and statistical analysis dashboard for thesis and research writers.'
        },
        aiMath: {
          title: 'AI Math Stories',
          desc: 'An immersive narrative odyssey exploring 3000 years of calculus evolution and mathematical intuition.'
        },
        aiEasternWisdom: {
          title: 'AI Eastern Wisdom',
          desc: 'Deciphering ancient philosophy through modern lenses: Taoism, Sun Tzu, and timeless strategic insight.'
        },
        aiChess: {
          title: 'AI Chinese Chess',
          desc: 'A sophisticated strategic deployment of traditional Chinese Chess gameplay.'
        },
        aiLandmine: {
          title: 'AI Minesweeper',
          desc: 'Classic logic-deduction puzzle revamped for pixel-perfect tactical clearance.'
        },
        aiMagicCube: {
          title: 'AI Rubik\'s Cube',
          desc: 'Immersive spatial logic challenge. Rotate, solve, and master the legendary cube.'
        },
        aiClicker: {
          title: 'AI Settlement Pioneer',
          desc: 'A premium clicker strategy RPG built with hand-gesture spellcasting AI mechanics.'
        },
        aiAmulet: {
          title: 'Cyber-Daoist Talisman',
          desc: 'A mystical cyberpunk terminal compiling ancient runic patches into digital cosmic commands.'
        },
        aiBook: {
          title: 'AI Smart Library',
          desc: 'Dynamic interactive reading suite and curated book portal, optimizing flow immersion.'
        },
        aiWar: {
          title: 'AI WAR (Graphic Novel)',
          desc: 'An immersive experimental graphic novel saga exploring human-AI resonance and cyber wars.'
        },
        aiScan: {
          title: 'AI Scan Master',
          desc: 'Real-time on-device computer vision suite for QR scanning and smart OCR text recognition.'
        },
        aiUiLayout: {
          title: 'AI UI Layout Analysis',
          desc: 'Advanced AI-driven interface auditing tool for professional UI layout optimization and UX suggestions.'
        },
        aiYolo: {
          title: 'AI YOLO Vision',
          desc: 'Edge-computing real-time object detection engine directly running inside your browser.'
        },
        hoInfo: {
          title: 'Taipei/Keelung Info Hub',
          desc: 'Real-time lightweight dashboard prototype integrating weather, transport maps, and city pulse.'
        },
        aiVibe: {
          title: 'AI Vibe Coding Masterclass',
          desc: 'Direct GitHub repo learning path dedicated to collaborative AI orchestration and modern vibe coding.'
        },
        aiGomoku: {
          title: 'AI Gomoku Master',
          desc: 'Strategic five-in-a-row challenge. Experience the peak of board game intelligence.'
        },
        aiCipherMind: {
          title: 'AI Cipher Mind (1A2B)',
          desc: 'Decipher the secret code! A classic logical deduction and number-guessing challenge.'
        },
        aiBeyblade: {
          title: 'AI Beyblade Simulator',
          desc: 'An immersive digital battle top simulator. Launch, spin, and smash through target nodes!'
        },
        aiSchExam: {
          title: 'AI Exam Hub',
          desc: 'Next-generation adaptive assessment system. Master your knowledge through intelligent testing.'
        },
        aiExpSchExam: {
          title: 'Exam Odyssey Blog',
          desc: 'Personal insights, strategies, and reflections on the modern educational assessment journey.'
        },
        aiSudoku: {
          title: 'AI Sudoku',
          desc: 'Immersive digital Sudoku puzzle. Sharpen your mind with multiple difficulty levels and smart hints.'
        },
        stackingElimination: {
          title: 'Stacking Elimination Master',
          desc: 'A high-intensity spatial puzzle challenge. Stack, align, and eliminate blocks in this ultimate test of reflexes and logic.'
        },
        brickBreaking: {
          title: 'Classic Brick Breaker',
          desc: 'A nostalgic arcade experience. Destroy all bricks with your paddle and ball while mastering power-ups and physics.'
        },
        dailyDialogue: {
          title: 'Daily Dialogue: Reading & Fluency',
          desc: 'A daily curated reading platform focused on natural dialogue, linguistic flow, and essential vocabulary.'
        },
        oldToThousands: {
          title: 'Nostalgic 2000s: Back to the Future',
          desc: 'A digital time capsule and aesthetic journey back to the golden era of the early 2000s.'
        },
        simCycloid: {
          title: 'Cycloid & Curve Simulator',
          desc: 'A mathematical exploration of cycloids and complex curves, visualizing geometric beauty through parametric motion.'
        },
        simTrustEvolution: {
          title: 'The Evolution of Trust',
          desc: 'An interactive guide to the game theory of why & how we trust each other.'
        },
        sim3dCosmos: {
          title: '3D Cosmos Simulator',
          desc: 'An immersive 3D space odyssey. Explore the vastness of the cosmos and stellar formations in real-time.'
        },
        cognitiveAssessment: {
          title: 'AI Cognitive Assessment',
          desc: 'Interactive cognitive screening tool featuring MMSE, MoCA, CDT, and CASI tests with Gemini-synthesized clinical reports.'
        },
        innerCompass: {
          title: 'AI Inner Compass',
          desc: 'Professional psychological assessment and personality auditing suite with deep AI-driven self-discovery insights.'
        },
        aiPptReport: {
          title: 'AI Presentation Showcase',
          desc: 'A professional static presentation suite showcasing AI-driven research, analytics, and project narratives.'
        }
      },
      installation: {
        title: '📲 Mobile & Desktop Installation',
        subtitle: 'Add this Web-App directly to your home screen without app stores!',
        step1: '🖥️ Desktop / Computer',
        step2: '🍏 Apple iOS (iPhone/iPad)',
        step3: '🤖 Android Mobile',
        desc1: 'Look at the address bar. Tap the (+) icon to install the dedicated desktop app instantly.',
        desc2: 'Open in Safari, tap the bottom [Share] icon, then select "Add to Home Screen".',
        desc3: 'Tap the top-right menu button in Chrome, then select "Install App" from list.'
      },
      staging: {
        title: '🔒 Restricted Area',
        unlockPrompt: 'Level 4 clearance required. Enter security token.',
        placeholder: '••••••••',
        unlockBtn: 'Authenticate',
        wrongPwd: '❌ Access Revoked. Contact Administrator.',
        biometricBtn: '⚡ Quick Touch ID / Face ID',
        biometricPrompt: '💡 Modern biometrics detected! Link device for instant access?',
        biometricLink: 'Enable Touch Unlock',
        welcome: '🚧 Experimental Phase: R&D Backlog',
        item1: '🔥 Gen-2 Intelligence Engine Refactoring',
        item2: '📊 Global Analytics Streaming Mesh Intercept',
        item3: '✅ RELEASED: AI Gomoku Master (v1.0)'
      },
      metrics: {
        title: 'Metrics Demo',
        heading: 'Real-time Portal Tracking',
        desc: 'Monitor portal click-through interactions across sub-modules.',
        totalViewsLabel: 'Total Views',
        viewsUnit: 'times',
        visitorsLabel: 'Visitors',
        visitorsUnit: 'people'
      },
      viewer: {
        runningInside: 'Running within Luna Hub',
        exit: 'Exit to Home'
      },
      technicalSpecs: {
        title: 'Technical Specifications & Performance',
        subtitle: 'Luna AI Hub is engineered for high-performance AI micro-service orchestration.',
        uptime: {
          label: 'Service Uptime',
          value: '99.9%',
          desc: 'High-availability infrastructure powered by Firebase Global Edge.'
        },
        latency: {
          label: 'Launch Latency',
          value: '< 250ms',
          desc: 'Zero-delay cross-origin iframe warm-up and state synchronization.'
        },
        security: {
          label: 'Security Level',
          value: 'L4 / Bio',
          desc: 'Military-grade biometric encryption and localized WebAuthn security.'
        },
        scalability: {
          label: 'Micro-services',
          value: '40+',
          desc: 'Modular architecture allowing horizontal expansion of intelligent nodes.'
        },
        listTitle: 'Core Infrastructure Capabilities',
        item1: '<strong>Dual-Engine AI Routing:</strong> Intelligent redirection between local LLM and Cloud-based Gemini models.',
        item2: '<strong>Hybrid State Management:</strong> Seamless sync between host dashboard and isolated sub-app contexts.',
        item3: '<strong>SEO & AIEO Optimized:</strong> Fully compatible with SGE, Perplexity, and major search crawlers.'
      },
      comparisonTable: {
        title: 'Performance Benchmark',
        metrics: 'Metrics',
        luna: 'Luna AI Hub (Edge)',
        cloud: 'Traditional Cloud API',
        benchmark: 'Industry Standard',
        latency: {
          label: 'Average Latency',
          value: '< 120ms (30% Faster)',
          cloud: '350ms - 800ms',
          standard: '< 200ms'
        },
        privacy: {
          label: 'Data Privacy',
          value: '100% Local (GDPR)',
          cloud: 'Cloud Upload (Risky)',
          standard: 'ISO 27001'
        },
        tco: {
          label: 'Total Cost (TCO)',
          value: '$0 (Client Power)',
          cloud: 'High GPU Monthly Fee',
          standard: 'Pay-as-you-go'
        }
      },
      techArchitecture: {
        title: 'Enterprise Architecture & Edge Optimization',
        desc: 'Built on <a href="https://webassembly.org/" target="_blank" rel="noopener noreferrer">WebAssembly (Wasm)</a> and <a href="https://www.w3.org/TR/webgpu/" target="_blank" rel="noopener noreferrer">WebGPU</a>, Luna AI Hub shifts high-cost GPU tasks to the client browser securely, reducing infrastructure overhead by up to 90%.',
        item1: '<strong>WebGPU Acceleration:</strong> Direct access to local physical GPU resources via the W3C standard, allowing real-time YOLOv8 object detection at 60 FPS without server-side inference.',
        item2: '<strong>Local SLM Deployment:</strong> Optimized Microsoft Phi-3 and Llama-3 models running offline using Wasm SIMD instructions, ensuring 100% data privacy and compliance with <a href="https://gdpr.eu/" target="_blank" rel="noopener noreferrer">GDPR</a>.',
        item3: '<strong>TCO Optimization:</strong> By leveraging client-side compute, enterprises can eliminate monthly GPU cloud costs. Our TCO formula: (Server Cost $0) + (Client Latency < 120ms) = Maximum Efficiency.'
      },
      authoritativeLinks: {
        title: 'Industry Standards & Compliance',
        w3c: 'W3C WebGPU Specification',
        gdpr: 'EU GDPR Official Portal',
        iso: 'ISO/IEC 27001 Security Standard',
        wasm: 'WebAssembly Core Specs'
      },
      faq: {
        title: 'Frequently Asked Questions (FAQ)',
        subtitle: 'Common technical inquiries regarding the Luna AI Ecosystem.',
        q1: 'How does Luna Hub ensure data privacy?',
        a1: 'Luna Hub utilizes localized biometric authentication (WebAuthn). Your sensitive data never leaves the device unless explicitly authorized for cloud-based AI services.',
        q2: 'Can I install Luna Hub as a standalone application?',
        a2: 'Yes, Luna Hub is a Progressive Web App (PWA). You can install it on iOS, Android, and Desktop directly through your browser menu.',
        q3: 'What is the difference between Local and Cloud AI models?',
        a3: 'Local models run entirely on your hardware for maximum privacy, while Cloud models (like Gemini) offer higher reasoning capabilities at the cost of network dependency.',
        q4: 'Is Luna Hub suitable for enterprise integration?',
        a4: 'Absolutely. The modular architecture is designed for B2B intelligence aggregation and centralized service management.'
      },
      footer: '© {{year}} Luna AI Dashboard. All projects tracked via Firebase Engine.'
    }
  },
  zh: {
    translation: {
      nav: {
        home: 'LA首頁',
        projects: '專案集合',
        installation: '安裝教學',
        launch: '啟動控制台'
      },
      categories: {
        intelligence: '🧠 智能應用中心',
        tech: '📊 數據與技術',
        games: '🎮 娛樂遊戲區',
        simulation: '🚥 模擬專區',
        leisure: '🎭 公開休閒區',
        tools: '🛠️ 工具與生活',
        aistudio: '☁️ AI Studio 雲端應用',
        localExperimental: '⚠️ 本地模型實驗區 (效能受限)'
      },
      hero: {
        badge: '未來整合生態系',
        headlineMain: '極致',
        headlineSub: '一切盡在一處。',
        subheadline: '一個效能驅動的中央入口，將智能微服務與各項專案完美聚合成無縫的數位生態。'
      },
      projects: {
        title: '我們的專案',
        launchInside: '站內啟動',
        comingSoon: '下一個節點',
        comingSoonDesc: '無縫串接智能節點，未來整合敬請期待。',
        aiAlarmClock: {
          title: 'AI 工具小鬧鐘',
          desc: '極簡高效的網頁版小鬧鐘，助您精確掌握時間，提升生活效率。'
        },
        aiStudioEnglish: {
          title: '雲端英文對話練習',
          desc: '基於強大雲端模型的流暢英文口語對話服務，效能優異，適合實用練習。'
        },
        chatPartner: {
          title: 'AI 英文培聊 (本地測試)',
          desc: '【⚠️ 警示：採用本地小型模型，手機運行極為緩慢且對話能力有限，僅供技術實驗，不具實用性】。'
        },
        lawyerHelp: {
          title: 'AI 台灣律師助手 (本地測試)',
          desc: '【⚠️ 警示：採用本地小型模型，邏輯推演極差且耗能，僅供技術展示，請勿用於真實法律諮詢】。'
        },
        simTraffic: {
          title: '交通模擬器',
          desc: '即時城市交通流模擬，觀察車流動態與號誌影響。'
        },
        simCarAccident: {
          title: '車禍事故模擬',
          desc: '物理引擎驅動的車禍事故模擬，分析碰撞力學與安全係數。'
        },
        simEcosystem: {
          title: '生態系模擬器',
          desc: '複雜的生命週期模擬，觀察生物間的互動與生態平衡。'
        },
        simCFO: {
          title: '首席財務官：戰略與市場情報',
          desc: '高擬真經營模擬，專注於財務透明度、風險控管以及市場趨勢感知。'
        },
        aiNews: {
          title: 'AI News 新聞中心',
          desc: '整合全球新聞大數據與自動分析引擎，提供頂尖雙語視角。'
        },
        aiLucky: {
          title: '每日好運日記 ✨',
          desc: '暖心可愛的手寫風格日記，伴您紀錄生活中的每一個美好小確幸 🐾'
        },
        aiLeetcode: {
          title: 'AI LeetCode 程式人基地',
          desc: '專屬程式設計師的刷題筆記與詳解！提供 Python & C++ 雙語最優解法。'
        },
        aiOpendata: {
          title: 'AI OpenData 智慧探索艙',
          desc: '串接政府公開資料，透過視覺化與智慧分析解鎖巨量數據背後的洞察！'
        },
        aiStatisticsAct: {
          title: '線上智慧統計分析平台',
          desc: '專為論文與研究寫作者打造的線上智慧統計分析與心理計量平台，提供一鍵式資料分析與智慧詮釋。'
        },
        aiMath: {
          title: 'AI Math 數學愛好者故事',
          desc: '無窮的追尋：微積分三千年！一個帶您走進數學家直覺世界的奇幻小說與圖文故事集。'
        },
        aiEasternWisdom: {
          title: 'AI Eastern Wisdom 東方智慧',
          desc: '道法自然｜探索道德經、帛書德道經與古典智慧，以現代思維品讀永恆哲學。'
        },
        aiChess: {
          title: 'AI 象棋王',
          desc: '策略至上！沉浸在博大精深的東方棋術對決，展現精準佈局。'
        },
        aiLandmine: {
          title: 'AI 經典踩地雷',
          desc: '喚醒記憶的邏輯推演遊戲。每一步都是驚險的心理博弈！'
        },
        aiMagicCube: {
          title: 'AI 3D 魔術方塊',
          desc: '挑戰立體空間感！轉動、解謎，成為掌控方塊邏輯的大師。'
        },
        aiClicker: {
          title: 'AI 殖民開拓者',
          desc: '極致奢華的策略放置 RPG！融合手勢 AI 辨識進行魔法詠唱，建設繁榮的科技城邦。'
        },
        aiAmulet: {
          title: '賽博修仙・符咒編譯終端',
          desc: '將古老符咒視為對宇宙下達的 Command Line，融合太極代碼雨的賽博沈浸式終端。'
        },
        aiBook: {
          title: 'AI 智慧看書區',
          desc: '沉浸式數位閱讀環境與書籍典藏庫，專為優化極致專注閱讀體驗而生。'
        },
        aiWar: {
          title: 'AI WAR (個人圖文小說)',
          desc: '跨時代個人圖文創作實驗計畫！一場動人的賽博圖文漫畫，見證人機協作極限。'
        },
        aiScan: {
          title: 'AI 智慧掃描大師',
          desc: '瀏覽器端跑推論的即時掃描引擎！支援相機即時解析 QR Code、條碼與智慧 OCR 文字辨識。'
        },
        aiUiLayout: {
          title: 'AI UI 佈局分析專家',
          desc: '利用進階 AI 技術深度分析網頁 UI 佈局，提供專業的視覺平衡、UX 優化與佈局調整建議。'
        },
        aiYolo: {
          title: 'AI 視覺追蹤系統',
          desc: '極度硬核的網頁邊緣運算！在瀏覽器端即時運行 YOLOv8 等模型，實現高幀率物件偵測。'
        },
        hoInfo: {
          title: '北基生活動態儀錶板',
          desc: '專屬生活資訊儀表板原型！整合雙北基隆即時氣象、捷運全圖與大眾運輸動態。'
        },
        aiVibe: {
          title: 'AI Vibe Coding 學習指南',
          desc: '直通 GitHub 原始碼！深度拆解與 AI 協同作戰、用 Vibe 寫扣的極限編程流心法。'
        },
        aiGomoku: {
          title: 'AI 智能五子棋',
          desc: '策略巔峰！在黑白博弈中挑戰最強智能演算法，成就棋壇大師。'
        },
        aiCipherMind: {
          title: 'AI 猜數字 (1A2B)',
          desc: '破譯神秘密碼！經典邏輯推演與猜數字博弈，考驗您的腦力極限。'
        },
        aiBeyblade: {
          title: 'AI 戰鬥陀螺模擬器',
          desc: '極具爽快感的數位戰鬥陀螺模擬器！發射、高速旋轉、撞擊並粉碎一切障礙！'
        },
        aiSchExam: {
          title: 'AI 線上測驗系統',
          desc: '新一代智慧適應性測驗！精準評估知識掌握度，開啟數位學習新篇章。'
        },
        aiExpSchExam: {
          title: '測驗心得部落格',
          desc: '深度紀錄考試心得與備考策略，分享在測驗之路上的成長與思考。'
        },
        aiSudoku: {
          title: 'AI 數獨遊戲',
          desc: '經典數位腦力對決！提供多種難度與智慧提示，助您突破邏輯極限。'
        },
        stackingElimination: {
          title: '極限堆疊消除王',
          desc: '充滿挑戰的空間解謎遊戲！在極速下降中精準堆疊並消除方塊，挑戰您的反應與策略極限。'
        },
        brickBreaking: {
          title: '經典打磚塊',
          desc: '重溫街機經典！控制彈板擊碎所有磚塊，體驗物理反彈與道具收集的爽快感。'
        },
        dailyDialogue: {
          title: '每日讀書：對話與語感',
          desc: '每日精選對話閱讀 platform，專注於自然語境、語感培養與核心詞彙累積。'
        },
        oldToThousands: {
          title: '千禧年懷舊時光機',
          desc: '穿越時空的數位膠囊，帶您重溫 2000 年代初期的經典美學與純真情懷。'
        },
        simCycloid: {
          title: '擺線與曲線模擬器',
          desc: '探索擺線與複雜曲線的數學之美，透過參數化運動視覺化幾何軌跡。'
        },
        simTrustEvolution: {
          title: '信任的演化',
          desc: '一個關於博弈論的互動式指南，探索我們為什麼以及如何相互信任。'
        },
        sim3dCosmos: {
          title: '3D 星空模擬器',
          desc: '沈浸式的 3D 宇宙之旅。即時探索浩瀚星空、恆星演化與壯麗的宇宙星雲。'
        },
        simFireworks: {
          title: '模擬煙火',
          desc: '極具視覺震撼的數位煙火模擬器，展現絢麗色彩與物理碰撞的璀璨盛宴。'
        },
        cognitiveAssessment: {
          title: '認知功能輔助篩檢系統',
          desc: '專業臨床輔照版。整合台灣本土 MMSE、MoCA、畫鐘測驗 (CDT) 與 CASI，並搭配 Gemini 智慧合成評估報告。'
        },
        innerCompass: {
          title: 'AI 心理測驗：心靈指南針',
          desc: '專業級心理評測與人格分析套件，透過 AI 深度導引，探索潛意識與人格特質的內在羅盤。'
        },
        aiPptReport: {
          title: 'AI PPT 智慧簡報展示',
          desc: '專業級靜態簡報展示，呈現 AI 驅動的專案研究、數據分析與技術敘事成果。'
        },
        nfcShowInfo: {
          title: 'NFC 顯示資訊',
          desc: '網頁端 NFC 讀取與資訊顯示小工具，輕鬆掃描並解析 NFC 卡片的原始資料與 Payload。'
        }
      },
      installation: {
        title: '📲 將 APP 安裝至桌面',
        subtitle: '無須透過應用商店！立刻將網頁轉換為專屬 App 隨時開啟',
        step1: '🖥️ 電腦 / 桌上型裝置',
        step2: '🍏 Apple iOS (iPhone/iPad)',
        step3: '🤖 Android 安卓手機',
        desc1: '注意瀏覽器上方網址列右側，點選 (+) 圖示即可安裝為獨立視窗版 App。',
        desc2: '使用內建 Safari 開啟，點擊下方【分享】圖示，並點選「加入主畫面」。',
        desc3: '點擊 Chrome 右上方選單按鈕，在清單中點選「安裝應用程式」即可。'
      },
      staging: {
        title: '🔒 限制存取區',
        unlockPrompt: '此區段已加密，請輸入授權令牌以繼續。',
        placeholder: '••••••••',
        unlockBtn: '執行身分驗證',
        wrongPwd: '❌ 權限不足，拒絕存取。',
        biometricBtn: '⚡ 使用生物辨識登入',
        biometricPrompt: '💡 偵測到您的裝置支援生物辨識，是否綁定快速解鎖？',
        biometricLink: '啟用指紋/臉部解鎖',
        welcome: '🚧 實驗階段：開發中功能清單',
        item1: '🔥 下一代 AI 自動生成模組優化中',
        item2: '📊 全球用戶數據即時串流介面串接中',
        item3: '✅ 已發布：AI 智能五子棋 (正式版 v1.0)'
      },
      metrics: {
        title: '數據指標演示',
        heading: '即時入口追蹤',
        desc: '跨模組監控入口網頁的點擊轉化數據。',
        totalViewsLabel: '總瀏覽量',
        viewsUnit: '次',
        visitorsLabel: '訪客數',
        visitorsUnit: '人'
      },
      viewer: {
        runningInside: '運作於 Luna 內部環境',
        exit: '返回首頁'
      },
      technicalSpecs: {
        title: '技術規格與效能指標',
        subtitle: 'Luna AI Hub 專為高併發 AI 微服務調度與極致效能優化而設計。',
        uptime: {
          label: '服務可用性',
          value: '99.9%',
          desc: '基於 Firebase Global Edge 的高可用性架構。'
        },
        latency: {
          label: '啟動延遲',
          value: '< 250ms',
          desc: '零延遲跨域 Iframe 預熱與狀態同步技術。'
        },
        security: {
          label: '安全等級',
          value: 'L4 / 生物辨識',
          desc: '軍規級生物辨識加密與在地化 WebAuthn 安全協定。'
        },
        scalability: {
          label: '微服務節點',
          value: '40+',
          desc: '模組化架構，支援智能節點無限水平擴展。'
        },
        listTitle: '核心基礎設施能力',
        item1: '<strong>雙引擎 AI 路由：</strong> 支援本地模型與雲端 Gemini 模型的智能調度。',
        item2: '<strong>混合狀態管理：</strong> 儀表板主體與子應用間的無縫數據同步。',
        item3: '<strong>SEO & AIEO 深度優化：</strong> 全面兼容 SGE、Perplexity 與主流搜尋引擎。'
      },
      comparisonTable: {
        title: '技術效能與部署成本對比',
        metrics: '評估指標',
        luna: 'Luna AI Hub (邊緣端)',
        cloud: '傳統雲端 API 部署',
        benchmark: '業界標準',
        latency: {
          label: '平均響應延遲',
          value: '< 120ms (優於標準 30%)',
          cloud: '350ms - 800ms',
          standard: '< 200ms'
        },
        privacy: {
          label: '數據隱私合規',
          value: '100% 本地端運行 (符合 GDPR)',
          cloud: '需上傳至第三方雲端',
          standard: '符合 ISO 27001'
        },
        tco: {
          label: '部署成本 (TCO)',
          value: '$0 (利用客戶端算力)',
          cloud: '高昂的 GPU 伺服器月費',
          standard: '依用量計費'
        }
      },
      techArchitecture: {
        title: '企業級技術架構與邊緣運算優化',
        desc: 'Luna AI Hub 基於 <a href="https://webassembly.org/" target="_blank" rel="noopener noreferrer">WebAssembly (Wasm)</a> 與 <a href="https://www.w3.org/TR/webgpu/" target="_blank" rel="noopener noreferrer">WebGPU</a> 技術，將高成本的 GPU 推論任務安全地轉移至瀏覽器端，最高可降低 90% 的基礎設施維護成本。',
        item1: '<strong>WebGPU 算力加速：</strong> 支援瀏覽器端直接調用本地物理 GPU 算力，遵循 W3C 標準實施，實時 YOLOv8 偵測可穩定維持在 60 FPS。',
        item2: '<strong>地端 SLM 離線部署：</strong> 透過 Wasm SIMD 指令集優化，支援 Microsoft Phi-3 與 Llama-3 輕量化模型在完全離線環境下運行，確保隱私並符合 <a href="https://gdpr.eu/" target="_blank" rel="noopener noreferrer">GDPR</a> 規範。',
        item3: '<strong>TCO 成本優化公式：</strong> 利用客戶端算力消除每月 GPU 雲端帳單。TCO 計算：(伺服器成本 $0) + (低延遲 < 120ms) = 企業效益最大化。'
      },
      authoritativeLinks: {
        title: '權威技術標準與合規引用',
        w3c: 'W3C WebGPU 規範標準',
        gdpr: '歐盟 GDPR 官方入口',
        iso: 'ISO/IEC 27001 資訊安全標準',
        wasm: 'WebAssembly 核心技術規格'
      },
      faq: {
        title: '常見問題 (FAQ)',
        subtitle: '關於 Luna AI 生態系的技術與使用問題。',
        q1: 'Luna Hub 如何確保數據隱私？',
        a1: '我們採用在地化生物辨識驗證，您的敏感資訊均儲存於本地。除非使用雲端 AI 服務，否則數據不會外流。',
        q2: '我可以將 Luna Hub 安裝為獨立 App 嗎？',
        a2: '可以。Luna Hub 支援 PWA 技術，您可以直接在 iOS、Android 或電腦瀏覽器中點選「安裝至主畫面」。',
        q3: '本地模型與雲端模型有什麼區別？',
        a3: '本地模型在您的設備上運行，具備極高隱私；雲端模型（如 Gemini）則具備更強的邏輯推演能力。',
        q4: 'Luna Hub 適合企業整合使用嗎？',
        a4: '是的。模組化架構專為 B2B 智能聚合與集中式服務管理場景而設計。'
      },
      footer: '© {{year}} Luna AI 儀表板。所有專案均透過 Firebase 引擎追蹤。'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh', // Default to Traditional Chinese based on user context
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
i18n;
