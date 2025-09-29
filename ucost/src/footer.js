// src/footer.js
import React from 'react';
import { BarChart3 } from 'lucide-react';
import './App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerGrid">
          {/* 로고 + 소개 */}
          <div>
            <div className="footerLogo">
              <BarChart3 size={24} />
              <h3 className="footerLogoText">UCO$T</h3>
            </div>
            <p className="footerDescription">
              크리에이터와 팬을 연결하는 새로운 투자 플랫폼
            </p>
          </div>

          {/* 서비스 */}
          <div>
            <h4 className="footerTitle">서비스</h4>
            <ul className="footerList">
              <li className="footerListItem">주식 거래</li>
              <li className="footerListItem">포트폴리오</li>
              <li className="footerListItem">크리에이터 등록</li>
            </ul>
          </div>

          {/* 지원 */}
          <div>
            <h4 className="footerTitle">지원</h4>
            <ul className="footerList">
              <li className="footerListItem">고객센터</li>
              <li className="footerListItem">FAQ</li>
              <li className="footerListItem">이용약관</li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="footerTitle">연락처</h4>
            <ul className="footerList">
              <li className="footerListItem">help@UCOST.com</li>
              <li className="footerListItem">1588-1234</li>
            </ul>
          </div>
        </div>

        <div className="footerBottom">
          <p>&copy; 2025 UCO$T. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
