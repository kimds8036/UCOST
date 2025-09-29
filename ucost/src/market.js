// src/market.js
import React, { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './App.css';

const MarketPage = ({ stockData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(stockData.length / itemsPerSlide);

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return stockData.slice(startIndex, startIndex + itemsPerSlide);
  };

  const StockCard = ({ stock }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className={`stockCard ${isHovered ? 'stockCardHover' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="stockHeader">
          <div className="stockInfo">
            <div className="stockAvatar">{stock.avatar}</div>
            <div>
              <h3 className="stockName">{stock.name}</h3>
              <p className="stockChannel">{stock.channel}</p>
              <span className="categoryTag">{stock.category}</span>
            </div>
          </div>

          <div className="priceSection">
            <div className="stockPrice">₩{Math.round(stock.currentPrice).toLocaleString()}</div>
            <div className={`changeIndicator ${stock.change >= 0 ? 'positive' : 'negative'}`}>
              {stock.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span>{stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%</span>
            </div>
          </div>
        </div>

        <div className="statsGrid">
          <div className="statItem">
            <span className="statLabel">구독자</span>
            <p className="statValue">{stock.subscribers}</p>
          </div>
          <div className="statItem">
            <span className="statLabel">거래량</span>
            <p className="statValue">{stock.volume}</p>
          </div>
        </div>

        <p className="description">{stock.description}</p>

        <div className="buttonGroup">
          <button className="buyButton">매수</button>
          <button className="sellButton">매도</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="sectionHeader">
        <h2 className="sectionTitle">인기 크리에이터 주식</h2>
        <div className="filterSection">
          <select className="select">
            <option>전체 카테고리</option>
            <option>먹방</option>
            <option>게임</option>
            <option>요리</option>
            <option>예능</option>
          </select>
        </div>
      </div>

      <div className="sliderContainer">
        <button
          className="slideButton prevButton"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
          aria-label="이전"
        >
          &#8249;
        </button>

        <div className="stockGrid">
          {getCurrentSlideItems().map((stock) => (
            <StockCard key={stock.id} stock={stock} />
          ))}
        </div>

        <button
          className="slideButton nextButton"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
          aria-label="다음"
        >
          &#8250;
        </button>
      </div>

      <div className="slideIndicators">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'activeIndicator' : 'inactiveIndicator'}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`슬라이드 ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MarketPage;
