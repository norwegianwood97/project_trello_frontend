import React, { useState } from 'react';
import axios from '../api/axios.js';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // 여기에 "가벼운" 쿠키를 생성하는 코드를 추가합니다.
      document.cookie = 'lightweightCookie=exampleValue; path=/;';

      // 로그인 요청을 서버에 보냅니다. withCredentials 옵션을 true로 설정하여 쿠키를 포함시킵니다.
      const response = await axios.post(
        'http://localhost:3000/api/login',
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(email);
      console.log(password);
      console.log(response.data); // 응답 로그 확인

      // 로그인 성공 시 다음 페이지로 이동
      navigate('/'); // 성공 시 리디렉션할 페이지 주소를 적절히 조정하세요.
    } catch (error) {
      console.error('로그인 오류:', error);
      alert('로그인 실패'); // 오류 메시지를 개선하였습니다.
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
        }}
      >
        <h1 style={{ textAlign: 'center' }}>로그인</h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: 'none',
            boxShadow: 'none',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" style={{ margin: '0.5rem 0', padding: '0.5rem' }} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" style={{ margin: '0.5rem 0', padding: '0.5rem' }} />
          <button
            type="submit"
            style={{
              padding: '0.5rem',
              marginTop: '1rem',
              backgroundColor: '#B1BDC5',
              color: 'white',
              transition: 'background-color 0.3s',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#92A4AD';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#B1BDC5';
            }}
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
