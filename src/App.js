// app.js
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

// 페이지 임포트
import MainPage from './pages/MainPage';
import BoardPage from './pages/BoardPage';
import ColumnPage from './pages/ColumnPage';
import CardPage from './pages/CardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  // 함수 처리 부분
  // 프론트 요소 배치 부분
  return (
    <Router>
      <Link to="/" className="MainPage">
        ToMainPage(icon으로 대체)
      </Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/board/:boardId" element={<BoardPage />} />
        <Route path="/column/:columnId" element={<ColumnPage />} />
        <Route path="/card/:cardId" element={<CardPage />} />
      </Routes>
    </Router>
  );
}

export default App;

//123456@naver.com
//123456
