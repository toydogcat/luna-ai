import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        projects: 'Projects',
        analytics: 'Analytics',
        launch: 'Launch Console'
      },
      categories: {
        intelligence: '🧠 AI Intelligence',
        tech: '💻 Data & Tech',
        games: '🎮 Gaming Arcade'
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
        }
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
        launch: '啟動控制台'
      },
      categories: {
        intelligence: '🧠 智能應用中心',
        tech: '📊 數據與技術',
        games: '🎮 娛樂遊戲區'
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
        }
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
