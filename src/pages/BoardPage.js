import React from 'react';

function ProjectBoard() {
  // 이 데이터는 실제 API에서 가져오거나 상태 관리 라이브러리를 통해 관리될 수 있습니다.
  const columns = [
    { id: 1, title: 'To Do', cards: [{ id: 1, text: '할일명' }] },
    { id: 2, title: 'Doing', cards: [{ id: 2, text: '처리중' }] },
    { id: 3, title: 'Done', cards: [{ id: 3, text: '완료명' }] },
    // ... 추가 컬럼과 카드
  ];

  return (
    <div>
      <h1>프로젝트명</h1>
      <div>owner 정보 및 기타 상세</div>
      {/* 컬럼 목록을 렌더링 */}
      <div>
        {columns.map((column) => (
          <div key={column.id}>
            <h2>{column.title}</h2>
            {/* 카드 목록을 렌더링 */}
            {column.cards.map((card) => (
              <div key={card.id}>{card.text}</div>
            ))}
            <button>+ Add a card</button>
          </div>
        ))}
      </div>
      <button>+ Add a column</button>
    </div>
  );
}

export default BoardPage;