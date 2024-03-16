// Header.js
import React from 'react';
import './Header.css'; // Header 컴포넌트의 스타일시트
import { useNavigate } from 'react-router-dom';

// Header.js
function Header({ user, onLogout, onWithdrawal, openModal }) {
  const navigate = useNavigate(); // 이동 함수를 가져옵니다.

  const handleLoginClick = () => {
    navigate('/login'); // 로그인 페이지로 이동합니다.
  };
  return (
    <div className="main-container">
      <div className="user-profile">
        <img src="/user.png" alt="User" className="user-image" />
        <div className="user-info-container">
          {' '}
          {/* 이 div가 새로운 컨테이너 역할을 합니다 */}
          <h2 className="user-nickname">
            {user ? user : '로그인을 해주세요'} {/* user가 객체라면 user.nickname을, 그렇지 않으면 메시지를 출력합니다 */}
          </h2>
          <div className="user-actions">
            {user ? (
              <>
                <p onClick={openModal}>수정하기</p>
                <p onClick={onLogout}>로그아웃</p>
                <p onClick={onWithdrawal}>탈퇴하기</p>
              </>
            ) : (
              <button onClick={handleLoginClick}>로그인</button> // 버튼 클릭 이벤트 추가
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
