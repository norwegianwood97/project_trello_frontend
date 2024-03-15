import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './SignupPage.css'; 

function SignupPage() {
  const [email, setEmail] = useState("");
  const [nickname, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
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

    try {
      const response = await axios.post("http://localhost:3000/api/sign-up", {
        email,
        nickname,
        password,
      });

      console.log(response.data); // 서버 응답 확인
      navigate("/login"); // 메인 페이지로 리다이렉트
      // 추가적인 작업 수행
    } catch (error) {
      console.error("Error while signing up:", error);
      alert(error);
      // 에러 처리
    }
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
          value={nickname}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="이름"
          required
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onFocus={() => setShowPasswordMessage(true)}
          placeholder="비밀번호"
          required
        />
        <input
          type="password"
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
          onFocus={() => setShowPasswordMessage(true)}
          placeholder="비밀번호 확인"
          required
        />
        {showPasswordMessage && password && passwordConfirm && (
          <div id="pw_check" style={{ color: passwordMatch ? "green" : "red" }}>
            {passwordMatch
              ? "비밀번호가 일치합니다"
              : "비밀번호가 일치하지 않습니다"}
          </div>
        )}
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignupPage;
