import React from 'react';
import './BoardList.css';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios.js';

function BoardList({ boards }) {
  const navigate = useNavigate();
  // 보드 클릭 시 실행될 함수
  const handleBoardClick = (boardId) => {
    // 여기에서 boardId를 사용하여 Axios 요청을 보냅니다.
    axios
      .get(`/api/boards/${boardId}/columns`)
      .then((response) => {
        // 요청 성공 시의 처리 로직
        navigate(`board/${boardId}`);
        console.log(response.data);
      })
      .catch((error) => {
        // 요청 실패 시의 처리 로직
        console.error('보드 상세 정보 가져오기 실패:', error);
      });
  };

  return (
    <div className="board-list">
      {boards.map((board) => (
        <div
          key={board.boardId}
          className="board"
          onClick={() => handleBoardClick(board.boardId)} // 클릭 이벤트에 핸들러 연결
          data-boardid={board.boardId} // 보드 아이디를 data-* 속성으로 저장
        >
          <h3 className="board-title">{board.boardTitle}</h3>
          <p className="board-content">{board.boardContent}</p>
          {/* 여기에 추가적인 버튼이나 링크를 포함시킬 수 있습니다. */}
        </div>
      ))}
    </div>
  );
}

export default BoardList;