import React from 'react';

function MainPage() {
  // 여기에 보드 데이터를 state로 관리할 수 있습니다.
  const boards = [
    {
      id: 1,
      title: '프로젝트명',
      description: '내용',
      owner: '홍길동',
      color: 'red',
    },
    // ... 다른 보드 데이터
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '2rem',
        }}
      >
        <h1>My Board</h1>
        <button>보드 추가하기</button>
      </div>
      {boards.map((board) => (
        <div
          key={board.id}
          style={{
            margin: '1rem 0',
            padding: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            backgroundColor: board.color,
          }}
        >
          <h2>{board.title}</h2>
          <p>{board.description}</p>
          <span>{board.owner}</span>
        </div>
      ))}
    </div>
  );
}

export default MainPage;
