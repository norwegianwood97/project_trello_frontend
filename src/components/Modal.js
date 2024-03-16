// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // 모달 스타일링을 위한 CSS 파일

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    e.stopPropagation(); // 모달 박스 클릭 시 이벤트 전파 방지
  };

  return ReactDOM.createPortal(
    <>
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-box" onClick={handleBackdropClick}>
          {children}
        </div>
      </div>
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
