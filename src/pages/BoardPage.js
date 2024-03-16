import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BoardPage.css'; // 새로운 CSS 파일을 임포트합니다.

function BoardPage() {
  const [columns, setColumns] = useState([]); // 초기 상태를 빈 배열로 설정

  useEffect(() => {
    // API에서 데이터를 가져오는 함수
    const fetchColumns = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/boards/12/columns');
        console.log(response.data);
        setColumns(response.data); // API 응답으로 받은 데이터로 상태를 업데이트
      } catch (error) {
        console.error('Error fetching data: ', error);
        // 오류 처리 로직 추가 (상태 업데이트 또는 사용자에게 메시지 표시 등)
      }
    };

    fetchColumns();
  }, []);

  return (
    <div className="board-container">
      <header className="board-header">
        <h1 className="board-title">프로젝트명</h1>
        <div className="board-owner">owner 정보 및 기타 상세</div>
      </header>
      <div className="board-columns">
        {columns.map((column) => (
          <div key={column.id} className="column">
            <h2 className="column-title">{column.title}</h2>
            <div className="cards">
              {(column.cards || []).map((card) => (
                <div key={card.id} className="card">
                  {card.text}
                </div>
              ))}
            </div>
            <button className="add-card-btn">+ Add a card</button>
          </div>
        ))}
      </div>
      <button className="add-column-btn">+ Add a column</button>
    </div>
  );
}

export default BoardPage;
