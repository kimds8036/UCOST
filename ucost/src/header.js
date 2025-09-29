// src/header.js
import React from 'react';
import { BarChart3 } from 'lucide-react';
import './App.css';

const Header = ({ selectedTab, setSelectedTab, balance, onLogout }) => {
  return (
    <header className="header">
      <div className="headerContent">
        {/* 로고 */}
        <div className="logo" onClick={() => setSelectedTab('market')}>
          <div className="logoIcon">
            <BarChart3 size={24} />
          </div>
          <h1 className="logoText">UCO$T</h1>
        </div>

        {/* 네비게이션 */}
        <nav className="nav">
          <button
            onClick={() => setSelectedTab('market')}
            className="navButton"
            style={{ color: selectedTab === 'market' ? '#2563eb' : '#4b5563' }}
          >
            마켓
          </button>
          <button
            onClick={() => setSelectedTab('portfolio')}
            className="navButton"
            style={{ color: selectedTab === 'portfolio' ? '#2563eb' : '#4b5563' }}
          >
            포트폴리오
          </button>
          <button
            onClick={() => setSelectedTab('wallet')}
            className="navButton"
            style={{ color: selectedTab === 'wallet' ? '#2563eb' : '#4b5563' }}
          >
            지갑
          </button>
        </nav>

        {/* 우측 박스 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="balanceBox">₩{balance.toLocaleString()}</div>
          <button className="logoutButton" onClick={onLogout}>
            로그아웃
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
