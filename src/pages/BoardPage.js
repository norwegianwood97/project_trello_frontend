//BoardPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios.js';
import './BoardPage.css';
import Modal from '../components/Modal';
import Icon from '../components/Icon.js';

function BoardPage() {
  const { boardId } = useParams();
  const [columns, setColumns] = useState([]);
  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [selectedColumnId, setSelectedColumnId] = useState(null);
  const [isModifyColumnModalOpen, setIsModifyColumnModalOpen] = useState(false);
  const [editingColumnId, setEditingColumnId] = useState(null);
  const [editingColumnTitle, setEditingColumnTitle] = useState('');
  const [editingColumnOrder, setEditingColumnOrder] = useState('');
  const [boardMembers, setBoardMembers] = useState([]);
  const [boardInfo, setBoardInfo] = useState({
    boardTitle: '',
    boardCode: '',
    writerNickname: '',
    boardContent: '',
  });

  const [newCard, setNewCard] = useState({
    cardTitle: '',
    cardWriter: '',
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
    if (boardId) {
      fetchBoardInfo();
      fetchBoardMembers(boardId);
      fetchColumnsAndCards(boardId);
    }
  }, [boardId]); // boardId를 의존성 배열에 추가

  const fetchBoardMembers = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/boards/${boardId}/userBoard`);
      setBoardMembers(response.data);
    } catch (error) {
      console.error('Error fetching board members:', error);
    }
  };

  const fetchBoardInfo = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/boards');
      if (response.data && response.data.length > 0) {
        const { boardTitle, boardCode, writerNickname, boardContent } = response.data[0];
        setBoardInfo({ boardTitle, boardCode, writerNickname, boardContent });
      }
    } catch (error) {
      console.error('Error fetching board info: ', error);
    }
  };

  const fetchColumnsAndCards = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/boards/${boardId}/columns`, {
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

  // 카드 추가 모달 열기
  const handleAddCardButtonClick = (columnId) => {
    const { cardStartTime, cardEndTime } = calculateStartAndEndTime();
    setNewCard({
      cardTitle: '',
      cardContent: '',
      cardStartTime,
      cardEndTime,
      cardStatus: 'IN_PROGRESS',
    });
    setSelectedColumnId(columnId);
    setIsCardModalOpen(true);
  };

  // 컬럼 추가 함수
  const handleAddColumn = async () => {
    const url = `http://localhost:3000/api/boards/${boardId}/columns`; // 로깅을 위한 변수 추가
    // alert('Sending POST request to URL:', url); // URL 로깅
    try {
      await axios.post(url, { columnTitle: newColumnTitle });
      setIsColumnModalOpen(false);
      fetchColumnsAndCards(); // 컬럼 추가 후 목록 새로고침
    } catch (error) {
      alert('Error adding new column: ', error);
    }
  };

  // 색상 코드 매핑 함수
  const getColorCode = (colorNumber) => {
    const colors = {
      1: '#ffdddd',
      2: '#fff6dd',
      3: '#ffffdd',
      4: '#e5ffdd',
      5: '#ddffff',
      6: '#dde5ff',
      7: '#eeddff',
    };
    return colors[colorNumber] || '#FFFFFF';
  };

  // Function to open the modify modal
  const openModifyModal = (columnId, columnTitle) => {
    setEditingColumnId(columnId);
    setEditingColumnTitle(columnTitle);
    setIsModifyColumnModalOpen(true);
  };

  // Function to handle PUT request
  const handleModifyColumn = async () => {
    // Construct the data to be sent
    const updatedColumnData = {
      columnTitle: editingColumnTitle,
      columnOrder: editingColumnOrder,
    };

    try {
      await axios.put(`http://localhost:3000/api/boards/12/columns/${editingColumnId}`, updatedColumnData);
      setIsModifyColumnModalOpen(false);
      fetchColumnsAndCards(); // Refresh columns after modification
    } catch (error) {
      console.error('Error updating the column: ', error);
    }
  };

  // Function to handle DELETE request
  const handleDeleteColumn = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/boards/12/columns/${editingColumnId}`);
      setIsModifyColumnModalOpen(false);
      fetchColumnsAndCards(); // Refresh columns after deletion
    } catch (error) {
      console.error('Error deleting the column: ', error);
    }
  };

  return (
    <div className={`board-container ${isCardModalOpen ? 'blur-background' : ''}`}>
      <header className="board-header">
        <div>
          <div className="board-title">
            <h1 className="board-title-title">{boardInfo.boardTitle}</h1>
            <div className="board-title-owner">owner: {boardInfo.writerNickname}</div>
            <div className="board-title-code">코드: {boardInfo.boardCode}</div>
          </div>
          <div className="board-content">{boardInfo.boardContent}</div>
        </div>

        <div className="board-members">
          <h1>Member</h1>
          <div className="member-list">
            <div className="member-list">
              {boardMembers.map((member) => (
                <div key={member.userId}>
                  {' '}
                  {/* 고유한 key 값을 설정해야 합니다. */}
                  <Icon type="User" />
                  <div>{member.User.nickname}</div> {/* 참가자의 닉네임을 렌더링 */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <div className="column-header">
        <h1 className="column-title">Column</h1>
        <div className="column-add-icon" onClick={() => setIsColumnModalOpen(true)}>
          <Icon type="Plus" />
        </div>
      </div>
      <Modal isOpen={isColumnModalOpen} onClose={() => setIsColumnModalOpen(false)}>
        {/* 컬럼 추가 모달 내용 */}
        <div>
          <input type="text" placeholder="Column Title" value={newColumnTitle} onChange={(e) => setNewColumnTitle(e.target.value)} />
          <button className="save-column-btn" onClick={handleAddColumn}>
            저장
          </button>
        </div>
      </Modal>

      <div></div>
      <div className="board-columns">
        {columns.map((column) => (
          <div
            key={column.columnId}
            className="column"
            style={{ backgroundColor: getColorCode(column.columnColor) }} // 컬럼 색상 적용
          >
            <div className="card-column-header">
              <h2 className="column-title">{column.columnTitle}</h2>
              <div className="column-modify-icon" onClick={() => openModifyModal(column.columnId, column.columnTitle)}>
                <Icon type="Modify" />
              </div>
            </div>
            <Modal isOpen={isModifyColumnModalOpen} onClose={() => setIsModifyColumnModalOpen(false)}>
              <div>
                <div className="column-modify-name">Column 수정</div>
                <input type="text" placeholder="Column Title" value={editingColumnTitle} onChange={(e) => setEditingColumnTitle(e.target.value)} />
                <input type="number" placeholder="Column Order" value={editingColumnOrder} onChange={(e) => setEditingColumnOrder(e.target.value)} />
                <button className="save-column-btn" onClick={handleModifyColumn}>
                  수정
                </button>
                <button className="delete-column-btn" onClick={handleDeleteColumn}>
                  삭제
                </button>
              </div>
            </Modal>
            <div className="cards">
              {(column.cards || []).map((card) => (
                <div
                  key={card.cardId}
                  className="card"
                  style={{ backgroundColor: getColorCode(card.cardColor) }} // 카드 색상 적용
                >
                  <div className="card-title">{card.cardTitle}</div>
                </div>
              ))}
            </div>
            <div className="add-card-text" onClick={() => handleAddCardButtonClick(column.columnId)}>
              + Add a card
            </div>
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
