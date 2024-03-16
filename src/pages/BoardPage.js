//BoardPage.js
import React, { useEffect, useState } from 'react';
import axios from '../api/axios.js';
import './BoardPage.css';
import Modal from '../components/Modal'; // 가정: 모달 컴포넌트가 이 경로에 존재

function BoardPage() {
  const [columns, setColumns] = useState([]);
  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [selectedColumnId, setSelectedColumnId] = useState(null);
  const [newCard, setNewCard] = useState({
    cardTitle: '',
    cardContent: '',
    cardStartTime: {},
    cardEndTime: {},
    cardStatus: 'IN_PROGRESS',
  });

  // 현재 시간과 3일 후 시간 계산 로직 추가
  const calculateStartAndEndTime = () => {
    const startTime = new Date();
    const endTime = new Date();
    endTime.setDate(endTime.getDate() + 3);

    return {
      cardStartTime: formatDateTimeForApi(startTime),
      cardEndTime: formatDateTimeForApi(endTime),
    };
  };

  // 날짜와 시간을 API 형식으로 변환하는 함수
  const formatDateTimeForApi = (date) => {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
    };
  };

  useEffect(() => {
    fetchColumnsAndCards();
  }, []);

  const fetchColumnsAndCards = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/boards/12/columns', {
        headers: { 'Cache-Control': 'no-cache' },
      });
      let columnsData = response.data;

      const columnsWithCards = await Promise.all(
        columnsData.map(async (column) => {
          const res = await axios.get(`http://localhost:3000/api/columns/${column.columnId}/cards`, {
            headers: { 'Cache-Control': 'no-cache' },
          });
          return { ...column, cards: res.data };
        })
      );

      setColumns(columnsWithCards);
    } catch (error) {
      console.error('Error fetching columns and cards: ', error);
    }
  };

  // 카드 추가 모달 열기
  const handleAddCardButtonClick = (columnId) => {
    const { cardStartTime, cardEndTime } = calculateStartAndEndTime();
    setNewCard((prevState) => ({
      ...prevState, // 기존 상태 유지
      cardTitle: '', // 카드 제목 초기화
      cardContent: '', // 카드 내용 초기화
      cardStartTime,
      cardEndTime,
    }));
    setSelectedColumnId(columnId);
    setIsCardModalOpen(true);
  };

  // 카드 제목과 내용 입력 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 카드 추가 함수
  const handleAddCard = async () => {
    try {
      console.log('Sending new card data:', newCard); // 데이터 로깅
      await axios.post(`http://localhost:3000/api/columns/${selectedColumnId}/cards`, newCard);
      setIsCardModalOpen(false);
      fetchColumnsAndCards(); // 카드 추가 후 목록 새로고침
    } catch (error) {
      console.error('Error adding new card: ', error);
    }
  };

  // 컬럼 추가 함수
  const handleAddColumn = async () => {
    try {
      await axios.post('http://localhost:3000/api/boards/12/columns', { columnTitle: newColumnTitle });
      setIsColumnModalOpen(false);
      fetchColumnsAndCards(); // 컬럼 추가 후 목록 새로고침
    } catch (error) {
      console.error('Error adding new column: ', error);
    }
  };

  return (
    <div className={`board-container ${isCardModalOpen ? 'blur-background' : ''}`}>
      <header className="board-header">
        <h1 className="board-title">프로젝트명</h1>
        <div className="board-owner">owner 정보 및 기타 상세</div>
      </header>
      <Modal isOpen={isColumnModalOpen} onClose={() => setIsColumnModalOpen(false)}>
        {/* 컬럼 추가 모달 내용 */}
        <div>
          <input type="text" placeholder="Column Title" value={newColumnTitle} onChange={(e) => setNewColumnTitle(e.target.value)} />
          <button className="save-column-btn" onClick={handleAddColumn}>
            저장
          </button>
        </div>
      </Modal>
      <button className="add-column-btn" onClick={() => setIsColumnModalOpen(true)}>
        컬럼 추가
      </button>
      <div></div>
      <div className="board-columns">
        {columns.map((column) => (
          <div key={column.columnId} className="column">
            <h2 className="column-title">{column.columnTitle}</h2>
            <div className="cards">
              {(column.cards || []).map((card) => (
                <div key={card.cardId} className="card">
                  {card.cardTitle}
                </div>
              ))}
            </div>
            <button className="add-card-btn" onClick={() => handleAddCardButtonClick(column.columnId)}>
              카드 추가
            </button>
            <Modal isOpen={isCardModalOpen} onClose={() => setIsCardModalOpen(false)}>
              {/* 카드 추가 모달 내용 */}
              <div>
                <input
                  type="text"
                  name="cardTitle"
                  placeholder="Card Title"
                  value={newCard.cardTitle}
                  onChange={handleInputChange} // 카드 제목 변경 핸들러
                />
                <textarea
                  name="cardContent"
                  placeholder="Card Content"
                  value={newCard.cardContent}
                  onChange={handleInputChange} // 카드 내용 변경 핸들러
                />
                <button className="save-card-btn" onClick={handleAddCard}>
                  저장
                </button>
              </div>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BoardPage;
