// src/wallet.js
import React from 'react';
import './App.css';

const WalletPage = () => {
  return (
    <div>
      <div className="sectionHeader">
        <h2 className="sectionTitle">지갑 관리</h2>
      </div>

      <div className="walletGrid">
        {/* 가상화폐 충전 */}
        <div className="walletCard">
          <h3 className="walletTitle">가상화폐 충전</h3>
          <div>
            <div className="formGroup">
              <label className="label">충전 금액</label>
              <input
                className="input"
                type="number"
                placeholder="충전할 금액을 입력하세요"
              />
            </div>

            <div className="formGroup">
              <label className="label">결제 방법</label>
              <select className="input">
                <option>신용카드</option>
                <option>계좌이체</option>
                <option>카카오페이</option>
              </select>
            </div>

            <button className="submitButton">충전하기</button>
          </div>
        </div>

        {/* 거래 내역 */}
        <div className="walletCard">
          <h3 className="walletTitle">거래 내역</h3>
          <div>
            {[
              { desc: '쯔양 주식 매수', amount: -12500, type: 'sell' },
              { desc: '가상화폐 충전', amount: 50000, type: 'buy' },
              { desc: '침착맨 주식 매수', amount: -14700, type: 'sell' }
            ].map((t, i) => (
              <div key={i} className="transactionItem">
                <span className="transactionDescription">{t.desc}</span>
                <span
                  className="transactionAmount"
                  style={{ color: t.type === 'buy' ? '#059669' : '#dc2626' }}
                >
                  {t.amount >= 0 ? '+' : ''}₩{Math.abs(t.amount).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
