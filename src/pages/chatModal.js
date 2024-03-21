import React, { useEffect, useState } from 'react';
import './ChatModal.css';
import io from 'socket.io-client';

const SOCKET_IO_URL = 'https://api.nodejstrello.site';

function ChatModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [room, setRoom] = useState('main'); // 현재 방 이름 상태 추가
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(SOCKET_IO_URL, { withCredentials: true });
    setSocket(newSocket);

    newSocket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      newSocket.off('chat message');
    };
  }, []);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = { text: inputMessage.trim() };
    socket.emit('chat message', newMessage);

    setInputMessage('');
  };

  // 방 입장 처리 함수
  const handleJoinRoom = () => {
    socket.emit('join room', room); // 서버에 방 입장 요청
  };

  // 방 나가기 처리 함수
  const handleLeaveRoom = () => {
    socket.emit('leave room'); // 서버에 방 나가기 요청
    setRoom('main'); // 기본 방으로 변경
  };

  return (
    <div className={`chat-modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="chat-modal">
        <div className="chat-modal-header">
          <h2>Chat</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="chat-modal-body">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.own === socket.id ? 'own' : 'other'}`}>
              <div className="message-text">
                <strong>{msg.user}: </strong>{msg.msg}
              </div>
            </div>
          ))}
        </div>
        <div className="chat-modal-footer">
          <input
            type="text"
            placeholder="Room name..."
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={handleJoinRoom}>Join</button>
          <button onClick={handleLeaveRoom}>Leave</button>
          <input
            type="text"
            placeholder="Type your message here..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
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
