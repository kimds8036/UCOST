// src/portfolio.js
import React, { useState } from 'react';
import { DollarSign, BarChart3, Users } from 'lucide-react';
import './App.css';

const PortfolioPage = ({ myPortfolio, stockData, balance }) => {
  const totalPortfolioValue = myPortfolio.reduce((sum, item) => {
    const currentStock = stockData.find(s => s.id === item.id);
    return sum + (item.shares * (currentStock?.currentPrice || item.currentPrice));
  }, 0);

  return (
    <div>
      <div className="sectionHeader">
        <h2 className="sectionTitle">내 포트폴리오</h2>
      </div>

      {/* 상단 카드 3개 */}
      <div className="portfolioGrid">
        <div className="portfolioCard">
          <div className="portfolioCardHeader">
            <h3 className="portfolioTitle">총 자산</h3>
            <DollarSign size={24} style={{ color: '#2563eb' }} />
          </div>
          <p className="portfolioValue">₩{(balance + totalPortfolioValue).toLocaleString()}</p>
        </div>

        <div className="portfolioCard">
          <div className="portfolioCardHeader">
            <h3 className="portfolioTitle">투자금액</h3>
            <BarChart3 size={24} style={{ color: '#7c3aed' }} />
          </div>
          <p className="portfolioValue">₩{totalPortfolioValue.toLocaleString()}</p>
        </div>

        <div className="portfolioCard">
          <div className="portfolioCardHeader">
            <h3 className="portfolioTitle">보유 종목</h3>
            <Users size={24} style={{ color: '#059669' }} />
          </div>
          <p className="portfolioValue">{myPortfolio.length}개</p>
        </div>
      </div>

      {/* 보유 주식 리스트 */}
      <div className="walletCard">
        <h3 className="walletTitle">보유 주식</h3>
        {myPortfolio.map(item => {
          const currentStock = stockData.find(s => s.id === item.id);
          const totalValue = item.shares * (currentStock?.currentPrice || item.currentPrice);
          const profit = item.shares * ((currentStock?.currentPrice || item.currentPrice) - item.currentPrice);

          return (
            <div key={item.id} className="portfolioItem">
              <div className="portfolioItemInfo">
                <div className="portfolioItemAvatar">{currentStock?.avatar}</div>
                <div>
                  <h4 className="portfolioItemName">{item.name}</h4>
                  <p className="portfolioItemShares">{item.shares}주 보유</p>
                </div>
              </div>

              <div className="portfolioItemValues">
                <div className="portfolioItemValue">₩{Math.round(totalValue).toLocaleString()}</div>
                <div
                  className="portfolioItemProfit"
                  style={{ color: profit >= 0 ? '#059669' : '#dc2626' }}
                >
                  {profit >= 0 ? '+' : ''}₩{Math.round(profit).toLocaleString()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioPage;
