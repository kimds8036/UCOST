// src/loginPage.js
import React, { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import './App.css';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginCard" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {/* 로고 + 소개 */}
        <div style={{ textAlign: 'center', margin: '2rem' }}>
          <div className="logoIcon" style={{ display: 'inline-flex', marginBottom: '2rem' }}>
            <BarChart3 size={32} />
          </div>
          <h1 className="loginTitle">UCO$T에 오신 것을 환영합니다</h1>
          <p className="loginSubtitle">크리에이터 투자 플랫폼</p>
        </div>

        {/* 로그인 폼 (정사각형 박스 안에) */}
        <form onSubmit={handleSubmit} className="loginBox">
          <div className="formGroup">
            <label className="label">이메일</label>
            <input
              type="email"
              className="input"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label className="label">비밀번호</label>
            <input
              type="password"
              className="input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submitButton">
            로그인
          </button>
        </form>

        {/* 회원가입 안내 */}
        <div className="loginFooter">
          <p>
            계정이 없으신가요?{' '}
            <span className="signupLink">회원가입</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
