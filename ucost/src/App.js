import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Users, DollarSign, BarChart3, Zap, Shield, Globe } from 'lucide-react';

const YouTuberStockSystem = () => {
  const [selectedTab, setSelectedTab] = useState('market');
  const [balance, setBalance] = useState(50000);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [myPortfolio, setMyPortfolio] = useState([
    { id: 1, name: '쯔양', shares: 10, currentPrice: 1250, change: 5.2 },
    { id: 2, name: '침착맨', shares: 15, currentPrice: 980, change: -2.1 }
  ]);

  // 실시간 주가 시뮬레이션
  const [stockData, setStockData] = useState([
    {
      id: 1,
      name: '쯔양',
      channel: '@tzuyang',
      subscribers: '10.1M',
      currentPrice: 1250,
      change: 5.2,
      volume: '15.2K',
      marketCap: '12.6B',
      avatar: '🍜',
      category: '먹방',
      description: '대식가 쯔양의 먹방 채널'
    },
    {
      id: 2,
      name: '침착맨',
      channel: '@ChimChakMan_Official',
      subscribers: '7.8M',
      currentPrice: 980,
      change: -2.1,
      volume: '8.9K',
      marketCap: '7.6B',
      avatar: '🎮',
      category: '게임',
      description: '게임 방송의 레전드'
    },
    {
      id: 3,
      name: '백종원의 요리비책',
      channel: '@paik_jongwon',
      subscribers: '6.2M',
      currentPrice: 1150,
      change: 3.8,
      volume: '12.3K',
      marketCap: '7.1B',
      avatar: '👨‍🍳',
      category: '요리',
      description: '요리의 신 백종원'
    },
    {
      id: 4,
      name: '피식대학',
      channel: '@psick_univ',
      subscribers: '4.5M',
      currentPrice: 850,
      change: 8.7,
      volume: '20.1K',
      marketCap: '3.8B',
      avatar: '😂',
      category: '예능',
      description: '웃음을 전하는 피식대학'
    }
  ]);

  // 가격 애니메이션 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setStockData(prevData => 
        prevData.map(stock => ({
          ...stock,
          currentPrice: Math.max(100, stock.currentPrice + (Math.random() - 0.5) * 20),
          change: (Math.random() - 0.5) * 10
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const totalPortfolioValue = myPortfolio.reduce((sum, item) => sum + (item.shares * item.currentPrice), 0);

  // 슬라이드 관련 함수들
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(stockData.length / itemsPerSlide);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return stockData.slice(startIndex, startIndex + itemsPerSlide);
  };

  // 스타일 객체들
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #faf5ff 0%, #eff6ff 50%, #f0f9ff 100%)',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      zIndex: 50
    },
    headerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '1rem',
      paddingBottom: '1rem'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    logoIcon: {
      background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
      padding: '0.5rem',
      borderRadius: '12px',
      color: 'white'
    },
    logoText: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    },
    nav: {
      display: 'flex',
      gap: '2rem'
    },
    navButton: {
      background: 'none',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'color 0.2s',
      padding: '0.5rem 0'
    },
    balanceBox: {
      background: '#dcfce7',
      color: '#166534',
      padding: '0.5rem 0.75rem',
      borderRadius: '8px',
      fontWeight: '600'
    },
    chargeButton: {
      background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    heroSection: {
      paddingTop: '4rem',
      paddingBottom: '4rem',
      textAlign: 'center'
    },
    heroContent: {
      maxWidth: '1024px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '1.5rem',
      lineHeight: '1.2'
    },
    heroGradientText: {
      background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    },
    heroDescription: {
      fontSize: '1.25rem',
      color: '#4b5563',
      marginBottom: '2rem',
      maxWidth: '512px',
      margin: '0 auto 2rem auto'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginBottom: '3rem'
    },
    featureCard: {
      background: 'rgba(255, 255, 255, 0.6)',
      backdropFilter: 'blur(8px)',
      padding: '1.5rem',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    stockCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #f3f4f6',
      transition: 'all 0.3s',
      cursor: 'pointer'
    },
    stockCardHover: {
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transform: 'scale(1.02)'
    },
    stockHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    stockInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    stockAvatar: {
      fontSize: '2rem'
    },
    stockName: {
      fontWeight: 'bold',
      fontSize: '1.125rem',
      color: '#111827',
      margin: 0
    },
    stockChannel: {
      color: '#6b7280',
      fontSize: '0.875rem',
      margin: 0
    },
    categoryTag: {
      background: '#ede9fe',
      color: '#7c3aed',
      padding: '0.25rem 0.5rem',
      borderRadius: '1rem',
      fontSize: '0.75rem',
      fontWeight: '500'
    },
    priceSection: {
      textAlign: 'right'
    },
    stockPrice: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#111827'
    },
    changeIndicator: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      fontWeight: '600'
    },
    positive: {
      color: '#059669'
    },
    negative: {
      color: '#dc2626'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '1rem',
      fontSize: '0.875rem'
    },
    statItem: {
      display: 'flex',
      flexDirection: 'column'
    },
    statLabel: {
      color: '#6b7280'
    },
    statValue: {
      fontWeight: '600',
      color: '#111827'
    },
    description: {
      color: '#4b5563',
      fontSize: '0.875rem',
      marginBottom: '1rem'
    },
    buttonGroup: {
      display: 'flex',
      gap: '0.5rem'
    },
    buyButton: {
      flex: 1,
      background: '#2563eb',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background 0.2s'
    },
    sellButton: {
      flex: 1,
      background: 'white',
      color: '#dc2626',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      border: '1px solid #fecaca',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background 0.2s'
    },
    mainContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem 4rem 1rem'
    },
    sectionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem'
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#111827'
    },
    filterSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    select: {
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '0.5rem 1rem'
    },
    stockGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem',
      transition: 'transform 0.3s ease-in-out'
    },
    sliderContainer: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '12px',
    },
    sliderWrapper: {
      display: 'flex',
      transition: 'transform 0.3s ease-in-out'
    },
    slideButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255, 255, 255, 0.9)',
      border: 'none',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      zIndex: 10,
      transition: 'all 0.2s',
      fontSize:27,
    },
    prevButton: {
      left: '20px'
    },
    nextButton: {
      right: '20px'
    },
    slideIndicators: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '1.5rem'
    },
    indicator: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    activeIndicator: {
      background: '#2563eb'
    },
    inactiveIndicator: {
      background: '#d1d5db'
    },
    portfolioGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    portfolioCard: {
      background: 'white',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #f3f4f6'
    },
    portfolioCardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    portfolioTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#4b5563'
    },
    portfolioValue: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#111827',
      marginTop: '0.5rem'
    },
    portfolioItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      background: 'white',
      borderRadius: '8px',
      border: '1px solid #f3f4f6',
      marginBottom: '1rem'
    },
    portfolioItemInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    portfolioItemAvatar: {
      fontSize: '1.5rem'
    },
    portfolioItemName: {
      fontWeight: '600',
      color: '#111827',
      margin: 0
    },
    portfolioItemShares: {
      fontSize: '0.875rem',
      color: '#6b7280',
      margin: 0
    },
    portfolioItemValues: {
      textAlign: 'right'
    },
    portfolioItemValue: {
      fontWeight: '600',
      color: '#111827'
    },
    portfolioItemProfit: {
      fontSize: '0.875rem'
    },
    walletGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '2rem'
    },
    walletCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #f3f4f6'
    },
    walletTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '1.5rem'
    },
    formGroup: {
      marginBottom: '1rem'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '0.5rem'
    },
    input: {
      width: '100%',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '0.75rem 1rem',
      boxSizing: 'border-box'
    },
    submitButton: {
      width: '100%',
      background: '#2563eb',
      color: 'white',
      padding: '0.75rem',
      borderRadius: '8px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background 0.2s'
    },
    transactionItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      borderBottom: '1px solid #f3f4f6'
    },
    transactionDescription: {
      color: '#4b5563'
    },
    transactionAmount: {
      fontWeight: '600'
    },
    footer: {
      background: '#111827',
      color: 'white',
      paddingTop: '3rem',
      paddingBottom: '3rem'
    },
    footerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem'
    },
    footerLogo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1rem'
    },
    footerLogoText: {
      fontSize: '1.25rem',
      fontWeight: 'bold'
    },
    footerDescription: {
      color: '#9ca3af'
    },
    footerTitle: {
      fontWeight: '600',
      marginBottom: '1rem'
    },
    footerList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    footerListItem: {
      color: '#9ca3af',
      marginBottom: '0.5rem'
    },
    footerBottom: {
      borderTop: '1px solid #374151',
      marginTop: '2rem',
      paddingTop: '2rem',
      textAlign: 'center',
      color: '#9ca3af'
    }
  };

  const StockCard = ({ stock }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div 
        style={{
          ...styles.stockCard,
          ...(isHovered ? styles.stockCardHover : {})
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={styles.stockHeader}>
          <div style={styles.stockInfo}>
            <div style={styles.stockAvatar}>{stock.avatar}</div>
            <div>
              <h3 style={styles.stockName}>{stock.name}</h3>
              <p style={styles.stockChannel}>{stock.channel}</p>
              <span style={styles.categoryTag}>
                {stock.category}
              </span>
            </div>
          </div>
          <div style={styles.priceSection}>
            <div style={styles.stockPrice}>₩{Math.round(stock.currentPrice).toLocaleString()}</div>
            <div style={{
              ...styles.changeIndicator,
              ...(stock.change >= 0 ? styles.positive : styles.negative)
            }}>
              {stock.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span>{stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%</span>
            </div>
          </div>
        </div>
        
        <div style={styles.statsGrid}>
          <div style={styles.statItem}>
            <span style={styles.statLabel}>구독자</span>
            <p style={styles.statValue}>{stock.subscribers}</p>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statLabel}>거래량</span>
            <p style={styles.statValue}>{stock.volume}</p>
          </div>
        </div>

        <p style={styles.description}>{stock.description}</p>
        
        <div style={styles.buttonGroup}>
          <button 
            style={styles.buyButton}
            onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
            onMouseLeave={(e) => e.target.style.background = '#2563eb'}
          >
            매수
          </button>
          <button 
            style={styles.sellButton}
            onMouseEnter={(e) => e.target.style.background = '#fef2f2'}
            onMouseLeave={(e) => e.target.style.background = 'white'}
          >
            매도
          </button>
        </div>
      </div>
    );
  };

  const PortfolioItem = ({ item }) => {
    const currentStock = stockData.find(s => s.id === item.id);
    const totalValue = item.shares * (currentStock?.currentPrice || item.currentPrice);
    const profit = item.shares * ((currentStock?.currentPrice || item.currentPrice) - item.currentPrice);
    
    return (
      <div style={styles.portfolioItem}>
        <div style={styles.portfolioItemInfo}>
          <div style={styles.portfolioItemAvatar}>{currentStock?.avatar}</div>
          <div>
            <h4 style={styles.portfolioItemName}>{item.name}</h4>
            <p style={styles.portfolioItemShares}>{item.shares}주 보유</p>
          </div>
        </div>
        <div style={styles.portfolioItemValues}>
          <div style={styles.portfolioItemValue}>₩{Math.round(totalValue).toLocaleString()}</div>
          <div style={{
            ...styles.portfolioItemProfit,
            color: profit >= 0 ? '#059669' : '#dc2626'
          }}>
            {profit >= 0 ? '+' : ''}₩{Math.round(profit).toLocaleString()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <BarChart3 size={24} />
            </div>
            <h1 style={styles.logoText}>
              UCO$T
            </h1>
          </div>
          
          <nav style={styles.nav}>
            <button
              onClick={() => setSelectedTab('market')}
              style={{
                ...styles.navButton,
                color: selectedTab === 'market' ? '#2563eb' : '#4b5563'
              }}
              onMouseEnter={(e) => e.target.style.color = '#111827'}
              onMouseLeave={(e) => e.target.style.color = selectedTab === 'market' ? '#2563eb' : '#4b5563'}
            >
              마켓
            </button>
            <button
              onClick={() => setSelectedTab('portfolio')}
              style={{
                ...styles.navButton,
                color: selectedTab === 'portfolio' ? '#2563eb' : '#4b5563'
              }}
              onMouseEnter={(e) => e.target.style.color = '#111827'}
              onMouseLeave={(e) => e.target.style.color = selectedTab === 'portfolio' ? '#2563eb' : '#4b5563'}
            >
              포트폴리오
            </button>
            <button
              onClick={() => setSelectedTab('wallet')}
              style={{
                ...styles.navButton,
                color: selectedTab === 'wallet' ? '#2563eb' : '#4b5563'
              }}
              onMouseEnter={(e) => e.target.style.color = '#111827'}
              onMouseLeave={(e) => e.target.style.color = selectedTab === 'wallet' ? '#2563eb' : '#4b5563'}
            >
              지갑
            </button>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={styles.balanceBox}>
              ₩{balance.toLocaleString()}
            </div>
            <button 
              style={styles.chargeButton}
              onMouseEnter={(e) => e.target.style.background = 'linear-gradient(135deg, #6d28d9, #1d4ed8)'}
              onMouseLeave={(e) => e.target.style.background = 'linear-gradient(135deg, #7c3aed, #2563eb)'}
            >
              충전하기
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>
            좋아하는 크리에이터에게
            <br />
            <span style={styles.heroGradientText}>
              투자하고 함께 성장하세요
            </span>
          </h2>
          <p style={styles.heroDescription}>
            유튜버의 성장에 투자하고 수익을 얻는 새로운 방식의 크리에이터 경제 플랫폼
          </p>
          
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <Users style={{ margin: '0 auto 1rem auto', color: '#7c3aed' }} size={48} />
              <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>크리에이터 지원</h3>
              <p style={{ color: '#4b5563' }}>좋아하는 유튜버에게 직접 투자하여 성장을 도와주세요</p>
            </div>
            <div style={styles.featureCard}>
              <TrendingUp style={{ margin: '0 auto 1rem auto', color: '#2563eb' }} size={48} />
              <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>투자 수익</h3>
              <p style={{ color: '#4b5563' }}>크리에이터의 성장과 함께 투자 수익을 얻어보세요</p>
            </div>
            <div style={styles.featureCard}>
              <Shield style={{ margin: '0 auto 1rem auto', color: '#059669' }} size={48} />
              <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>안전한 거래</h3>
              <p style={{ color: '#4b5563' }}>블록체인 기술로 보장되는 투명하고 안전한 거래</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main style={styles.mainContent}>
        {selectedTab === 'market' && (
          <div>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>인기 크리에이터 주식</h2>
              <div style={styles.filterSection}>
                <select style={styles.select}>
                  <option>전체 카테고리</option>
                  <option>먹방</option>
                  <option>게임</option>
                  <option>요리</option>
                  <option>예능</option>
                </select>
                <select style={styles.select}>
                  <option>가격순</option>
                  <option>변동률순</option>
                  <option>거래량순</option>
                </select>
              </div>
            </div>
            
            <div style={styles.sliderContainer}>
              <button 
                style={{...styles.slideButton, ...styles.prevButton}}
                onClick={prevSlide}
                onMouseEnter={(e) => e.target.style.background = 'white'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.9)'}
              >
                &#8249;
              </button>
              
              <div style={styles.stockGrid}>
                {getCurrentSlideItems().map(stock => (
                  <StockCard key={stock.id} stock={stock} />
                ))}
              </div>
              
              <button 
                style={{...styles.slideButton, ...styles.nextButton}}
                onClick={nextSlide}
                onMouseEnter={(e) => e.target.style.background = 'white'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.9)'}
              >
                &#8250;
              </button>
            </div>

            <div style={styles.slideIndicators}>
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  style={{
                    ...styles.indicator,
                    ...(index === currentSlide ? styles.activeIndicator : styles.inactiveIndicator)
                  }}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'portfolio' && (
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ ...styles.sectionTitle, marginBottom: '1rem' }}>내 포트폴리오</h2>
              <div style={styles.portfolioGrid}>
                <div style={styles.portfolioCard}>
                  <div style={styles.portfolioCardHeader}>
                    <h3 style={styles.portfolioTitle}>총 자산</h3>
                    <DollarSign style={{ color: '#2563eb' }} size={24} />
                  </div>
                  <p style={styles.portfolioValue}>₩{(balance + totalPortfolioValue).toLocaleString()}</p>
                </div>
                <div style={styles.portfolioCard}>
                  <div style={styles.portfolioCardHeader}>
                    <h3 style={styles.portfolioTitle}>투자금액</h3>
                    <BarChart3 style={{ color: '#7c3aed' }} size={24} />
                  </div>
                  <p style={styles.portfolioValue}>₩{totalPortfolioValue.toLocaleString()}</p>
                </div>
                <div style={styles.portfolioCard}>
                  <div style={styles.portfolioCardHeader}>
                    <h3 style={styles.portfolioTitle}>보유 종목</h3>
                    <Users style={{ color: '#059669' }} size={24} />
                  </div>
                  <p style={styles.portfolioValue}>{myPortfolio.length}개</p>
                </div>
              </div>
            </div>

            <div style={styles.walletCard}>
              <h3 style={styles.walletTitle}>보유 주식</h3>
              <div>
                {myPortfolio.map(item => (
                  <PortfolioItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'wallet' && (
          <div>
            <h2 style={{ ...styles.sectionTitle, marginBottom: '2rem' }}>지갑 관리</h2>
            <div style={styles.walletGrid}>
              <div style={styles.walletCard}>
                <h3 style={styles.walletTitle}>가상화폐 충전</h3>
                <div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>충전 금액</label>
                    <input 
                      style={styles.input}
                      type="number" 
                      placeholder="충전할 금액을 입력하세요"
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>결제 방법</label>
                    <select style={styles.input}>
                      <option>신용카드</option>
                      <option>계좌이체</option>
                      <option>카카오페이</option>
                    </select>
                  </div>
                  <button 
                    style={styles.submitButton}
                    onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
                    onMouseLeave={(e) => e.target.style.background = '#2563eb'}
                  >
                    충전하기
                  </button>
                </div>
              </div>

              <div style={styles.walletCard}>
                <h3 style={styles.walletTitle}>거래 내역</h3>
                <div>
                  <div style={styles.transactionItem}>
                    <span style={styles.transactionDescription}>쯔양 주식 매수</span>
                    <span style={{ ...styles.transactionAmount, color: '#dc2626' }}>-₩12,500</span>
                  </div>
                  <div style={styles.transactionItem}>
                    <span style={styles.transactionDescription}>가상화폐 충전</span>
                    <span style={{ ...styles.transactionAmount, color: '#059669' }}>+₩50,000</span>
                  </div>
                  <div style={styles.transactionItem}>
                    <span style={styles.transactionDescription}>침착맨 주식 매수</span>
                    <span style={{ ...styles.transactionAmount, color: '#dc2626' }}>-₩14,700</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerGrid}>
            <div>
              <div style={styles.footerLogo}>
                <BarChart3 size={24} />
                <h3 style={styles.footerLogoText}>UCO$T</h3>
              </div>
              <p style={styles.footerDescription}>
                크리에이터와 팬을 연결하는 새로운 투자 플랫폼
              </p>
            </div>
            <div>
              <h4 style={styles.footerTitle}>서비스</h4>
              <ul style={styles.footerList}>
                <li style={styles.footerListItem}>주식 거래</li>
                <li style={styles.footerListItem}>포트폴리오</li>
                <li style={styles.footerListItem}>크리에이터 등록</li>
              </ul>
            </div>
            <div>
              <h4 style={styles.footerTitle}>지원</h4>
              <ul style={styles.footerList}>
                <li style={styles.footerListItem}>고객센터</li>
                <li style={styles.footerListItem}>FAQ</li>
                <li style={styles.footerListItem}>이용약관</li>
              </ul>
            </div>
            <div>
              <h4 style={styles.footerTitle}>연락처</h4>
              <ul style={styles.footerList}>
                <li style={styles.footerListItem}>help@UCO$T.com</li>
                <li style={styles.footerListItem}>1588-1234</li>
              </ul>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p>&copy; 2025 UCO$T. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YouTuberStockSystem;