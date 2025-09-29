import React, { useState, useEffect } from 'react';
import './App.css';

import LoginPage from './login.js';
import Header from './header.js';
import MarketPage from './market.js';
import PortfolioPage from './portfolio.js';
import WalletPage from './wallet.js';
import Footer from './footer.js';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedTab, setSelectedTab] = useState('market');
  const [balance, setBalance] = useState(50000);

  const [myPortfolio] = useState([
    { id: 1, name: '쯔양', shares: 10, currentPrice: 1250, change: 5.2 },
    { id: 2, name: '침착맨', shares: 15, currentPrice: 980, change: -2.1 }
  ]);

  const [stockData, setStockData] = useState([
    {
      id: 1, name: '쯔양', channel: '@tzuyang', subscribers: '10.1M',
      currentPrice: 1250, change: 5.2, volume: '15.2K', marketCap: '12.6B',
      avatar: '🍜', category: '먹방', description: '대식가 쯔양의 먹방 채널'
    },
    {
      id: 2, name: '침착맨', channel: '@ChimChakMan_Official', subscribers: '7.8M',
      currentPrice: 980, change: -2.1, volume: '8.9K', marketCap: '7.6B',
      avatar: '🎮', category: '게임', description: '게임 방송의 레전드'
    },
    {
      id: 3, name: '백종원의 요리비책', channel: '@paik_jongwon', subscribers: '6.2M',
      currentPrice: 1150, change: 3.8, volume: '12.3K', marketCap: '7.1B',
      avatar: '👨‍🍳', category: '요리', description: '요리의 신 백종원'
    },
    {
      id: 4, name: '피식대학', channel: '@psick_univ', subscribers: '4.5M',
      currentPrice: 850, change: 8.7, volume: '20.1K', marketCap: '3.8B',
      avatar: '😂', category: '예능', description: '웃음을 전하는 피식대학'
    }
  ]);

  // 실시간 주가 시뮬레이션.
  useEffect(() => {
    if (!isLoggedIn) return;
    const interval = setInterval(() => {
      setStockData(prev =>
        prev.map(stock => ({
          ...stock,
          currentPrice: Math.max(100, stock.currentPrice + (Math.random() - 0.5) * 20),
          change: (Math.random() - 0.5) * 10
        }))
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="container">{/* ✅ App.css의 .container 사용 */}
      <Header
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        balance={balance}
        onLogout={() => setIsLoggedIn(false)}
      />

      <main className="mainContent">{/* ✅ .mainContent 사용 */}
        {selectedTab === 'market' && <MarketPage stockData={stockData} />}
        {selectedTab === 'portfolio' && (
          <PortfolioPage
            myPortfolio={myPortfolio}
            stockData={stockData}
            balance={balance}
          />
        )}
        {selectedTab === 'wallet' && <WalletPage />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
