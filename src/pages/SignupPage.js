// SignupForm.js
import React, { useState } from 'react';
import './SignupPage.css';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 회원가입 로직을 구현하세요. 입력값 검증 및 API 호출 등
    console.log(email, username, password, passwordConfirm);
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
          required
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="이름"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          required
        />
        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="비밀번호 확인"
          required
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignupPage;
