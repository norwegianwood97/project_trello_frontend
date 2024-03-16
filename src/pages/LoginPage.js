import React, { useState } from 'react';
import axios from '../api/axios.js';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate hook 추가

  const handleSubmit = async (event) => {
    // async 키워드 추가
    event.preventDefault();
    try {
      // 로그인 요청을 서버에 보냅니다.
      const response = await axios.post('http://api.nodejstrello.site/api/login', {
        email,
        password,
      }); // withCredentials 옵션을 true로 설정

      // 응답 로그 확
      // 로그인 성공 시 다음 페이지로 이동
      navigate('/'); // '/main' 페이지로 이동
    } catch (error) {
      console.error('로그인 오류:', error);
      alert(error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '400px',
          padding: '2rem',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          backgroundColor:"white"
        }}
      >
        <h1 style={{ textAlign: 'center' }}>로그인</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {' '}
          {/* 폼 컨테이너 추가 */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              border: 'none',
              boxShadow: 'none',
              textAlign: 'center',
              alignItems: 'center', // input 요소를 수직 가운데 정렬
              width:"700px"
            }}
          >
            <input  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" style={{ margin: '0.5rem 0', padding: '0.5rem' }} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" style={{ margin: '0.5rem 0', padding: '0.5rem' }} />
            <button
              type="submit"
              style={{
                padding: '0.5rem',
                marginTop: '1rem',
                backgroundColor: '#B1BDC5',
                color: 'white',
                transition: 'background-color 0.3s', // 배경색 변경 시 부드러운 전환 효과를 추가
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                width:"300px"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#92A4AD';
              }} // 호버 시 배경색 변경
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#B1BDC5';
              }} // 호버 종료 시 배경색 원래대로
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
