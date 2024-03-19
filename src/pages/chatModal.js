import React, { useEffect, useState } from 'react';
import './ChatModal.css';
import io from 'socket.io-client';

const SOCKET_IO_URL = 'https://api.nodejstrello.site';

function ChatModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(SOCKET_IO_URL, {
      withCredentials: true,
    });
    setSocket(newSocket);

    newSocket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
 
    return () => {
      newSocket.off('chat message');
    //   newSocket.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
        const newMessage = {text: inputMessage.trim(),user:"Username"}
      socket.emit('chat message', newMessage); // 'chat message' 이벤트로 메시지 전송
    //   socket.emit('chat message', inputMessage); // 'chat message' 이벤트로 메시지 전송
      setInputMessage(''); // 입력 필드 초기화
    }
  };

//   if (!isOpen) return null;

  return (
    <div className="chat-modal-overlay">
      <div className="chat-modal">
        <div className="chat-modal-header">
          <h2>Chat</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="chat-modal-body">
  {messages.map((msg, index) => (
    <div key={index} className={`message ${msg.own === socket.id ? 'own' : 'other'}`}>
      <img src="/user.png" alt="User Icon" className="user-icon" />
      <div className="message-text">
        <div key={index}>
          <strong>
            {msg.user}: {msg.msg}
          </strong>
        </div>
      </div>
    </div>
  ))}
</div>
        <div className="chat-modal-footer">
          <input
            type="text"
            placeholder="Type your message here..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault(); // 엔터 키 기본 동작(줄바꿈) 방지
                handleSendMessage(); // 메시지 전송 함수 호출
              }
            }}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatModal;
