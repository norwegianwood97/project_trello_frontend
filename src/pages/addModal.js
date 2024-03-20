import React, { useState } from 'react';
import './addmodal.css';

function AddBoardModal({ isOpen, onClose, onSubmit }) {
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContent, setBoardContent] = useState('');
  const [boardThumbnail, setBoardThumbnail] = useState(null); // 추가

  const handleSubmits = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('boardTitle', boardTitle);
    formData.append('boardContent', boardContent);
    if (boardThumbnail) {
      formData.append('boardThumbnail', boardThumbnail); // 이미지 파일 추가
    }

    onSubmit(formData); // 상위 컴포넌트로 새 보드 데이터 전달
    onClose(); // 모달 닫기
  };
  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      setBoardThumbnail(event.target.files[0]); // 파일 상태 업데이트
    }
  };

  if (!isOpen) {
    return null;
  }
  const handleCloseModal = (event) => {
    // 모달 외부를 클릭했을 때만 모달을 닫도록 처리
    if (event.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };
  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content">
        <form onSubmit={handleSubmits}>
          <h2>Add Board</h2>
          <label htmlFor="board-title">Board Title:</label>
          <input id="board-title" value={boardTitle} onChange={(e) => setBoardTitle(e.target.value)} />
          <label htmlFor="board-content">Board Content:</label>
          <textarea id="board-content" value={boardContent} onChange={(e) => setBoardContent(e.target.value)}></textarea>
          <label htmlFor="board-thumbnail">Board Thumbnail:</label>
          <input type="file" id="board-thumbnail" onChange={handleFileChange} />
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
