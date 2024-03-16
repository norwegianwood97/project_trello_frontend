// JoinBoardModal.js
import React, { useState } from 'react';
import './joinModal.css';

function JoinBoardModal({ isOpen, onClose, onJoinSubmit }) {
  const [boardCode, setboardCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onJoinSubmit(boardCode);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <h2>보드 참여</h2>
          <input placeholder="참여 코드 입력" value={boardCode} onChange={(e) => setboardCode(e.target.value)} />
          <div className="modal-actions">
            <button type="submit" >
              참여하기
            </button>
            <button type="button" onClick={onClose}>
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JoinBoardModal;
