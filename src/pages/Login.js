import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 로그인 처리 로직을 추가하세요
    console.log('Submitting', username, password);
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
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="아이디"
            style={{ margin: '0.5rem 0', padding: '0.5rem' }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            style={{ margin: '0.5rem 0', padding: '0.5rem' }}
          />
          <button
            type="submit"
            style={{
              padding: '0.5rem',
              marginTop: '1rem',
              backgroundColor: '#blue',
              color: 'white',
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
