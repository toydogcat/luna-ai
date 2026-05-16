import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        projects: 'Projects',
        analytics: 'Analytics',
        installation: 'Installation',
        staging: 'Construction Zone',
        launch: 'Launch Console'
      },
      categories: {
        intelligence: '🧠 AI Intelligence',
        tech: '💻 Data & Tech',
        games: '🎮 Gaming Arcade',
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
        aiSchExam: {
          title: 'AI Exam Hub',
          desc: 'Next-generation adaptive assessment system. Master your knowledge through intelligent testing.'
        },
        aiExpSchExam: {
          title: 'Exam Odyssey Blog',
          desc: 'Personal insights, strategies, and reflections on the modern educational assessment journey.'
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
      footer: '© {{year}} Luna AI Dashboard. All projects tracked via Firebase Engine.'
    }
  },
  zh: {
    translation: {
      nav: {
        projects: '專案集合',
        analytics: '數據中心',
        installation: '安裝教學',
        staging: '施工專區',
        launch: '啟動控制台'
      },
      categories: {
        intelligence: '🧠 智能應用中心',
        tech: '📊 數據與技術',
        games: '🎮 娛樂遊戲區',
        leisure: '🎭 公開休閒區'
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
        aiSchExam: {
          title: 'AI 線上測驗系統',
          desc: '新一代智慧適應性測驗！精準評估知識掌握度，開啟數位學習新篇章。'
        },
        aiExpSchExam: {
          title: '測驗心得部落格',
          desc: '深度紀錄考試心得與備考策略，分享在測驗之路上的成長與思考。'
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
