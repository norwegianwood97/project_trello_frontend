import React, { useState } from 'react';
import './addmodal.css';

function AddBoardModal({ isOpen, onClose, onSubmit }) {
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContent, setBoardContent] = useState('');

  const handleSubmits = (event) => {
    event.preventDefault();
    const newBoardData = {
      boardTitle: boardTitle,
      boardContent: boardContent,
    };
    onSubmit(newBoardData); // 상위 컴포넌트로 새 보드 데이터 전달
    onClose(); // 모달 닫기
  };

  if (!isOpen) {
    return null;
  }

  return (
    
      <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Add Board</h2>
          <label htmlFor="board-title">Board Title:</label>
          <input id="board-title"  value={boardTitle} onChange={(e) => setBoardTitle(e.target.value)} />
          <label htmlFor="board-content">Board Content:</label>
          <textarea id="board-content" value={boardContent} onChange={(e) => setBoardContent(e.target.value)}></textarea>
          <div className="modal-actions">
            <button type="button" onClick={handleSubmits}>
              Add
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBoardModal;
