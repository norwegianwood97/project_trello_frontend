// Modal.js 파일
import React, { useState } from 'react';
import './modal.css';

function Modal({ onClose, onSubmit, editData }) {
  const [formData, setFormData] = useState(editData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  const handleCloseModal = (event) => {
    // 모달 외부를 클릭했을 때만 모달을 닫도록 처리
    if (event.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content">
        <h2>유저 정보 수정</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="nickname">닉네임:</label>
          <input id="nickname" name="nickname" value={formData.nickname} onChange={handleChange} />
          <label htmlFor="password">비밀번호:</label>
          <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} />
          <div className="modal-actions">
            <div className="button-container">
              <button type="button" onClick={handleSubmit}>
                수정하기
              </button>
              <button type="button" onClick={onClose}>
                취소
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Modal;
