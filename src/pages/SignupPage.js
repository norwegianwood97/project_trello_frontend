import React, { useState, useEffect } from 'react';
import axios from '../api/axios.js';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [nickname, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true); // 비밀번호 일치 여부 상태 추가
  const [showPasswordMessage, setShowPasswordMessage] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옴

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  useEffect(() => {
    const confirmPasswordMatch = password === passwordConfirm;
    setPasswordMatch(confirmPasswordMatch);
  }, [password, passwordConfirm]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 비밀번호 일치 여부를 확인
    if (password !== passwordConfirm) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return; // 비밀번호가 일치하지 않으면 여기서 함수 실행을 멈추고 더 이상 진행하지 않음
    }

    try {
      const response = await axios.post('/api/sign-up', {
        email,
        nickname,
        password,
      });

      alert(response.data.message);
      navigate('/login'); // 메인 페이지로 리다이렉트
      // 추가적인 작업 수행
    } catch (error) {
      alert(error.response.data.error.message);
      // 에러 처리
    }
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" required />
        <input value={nickname} onChange={(e) => setUsername(e.target.value)} placeholder="이름" required />
        <input type="password" value={password} onChange={handlePasswordChange} onFocus={() => setShowPasswordMessage(true)} placeholder="비밀번호" required />
        <input type="password" value={passwordConfirm} onChange={handlePasswordConfirmChange} onFocus={() => setShowPasswordMessage(true)} placeholder="비밀번호 확인" required />
        {showPasswordMessage && password && passwordConfirm && (
          <div id="pw_check" style={{ color: passwordMatch ? 'green' : 'red' }}>
            {passwordMatch ? '비밀번호가 일치합니다' : '비밀번호가 일치하지 않습니다'}
          </div>
        )}
        <button type="submit">회원가입</button>
        <a className="btn btn-block" href={`${process.env.REACT_APP_API_URL}/api/auth/google`} role="button">
          <i className="fab fa-google"></i>
          Sign up with Google
        </a>
      </form>
    </div>
  );
}

export default SignupPage;
