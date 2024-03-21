import React, { useEffect, useState } from 'react';
import './ChatModal.css';
import io from 'socket.io-client';

const SOCKET_IO_URL = process.env.REACT_APP_API_URL;
const TYPING_TIMEOUT = 2000; // 사용자가 타이핑을 멈춘 것으로 간주하기 전까지 기다릴 시간 (2초)



function ChatModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [room, setRoom] = useState('main');
  const [socket, setSocket] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [typer, setTyper] = useState('');

  let typingTimeoutId = null;

  useEffect(() => {
    const newSocket = io(SOCKET_IO_URL, { withCredentials: true });
    setSocket(newSocket);

    newSocket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    newSocket.on('typing', ({ user, isTyping }) => {
      setIsTyping(isTyping);
      setTyper(user);
    });

    return () => {
      newSocket.off('chat message');
      newSocket.off('typing');
      clearTimeout(typingTimeoutId);
    };
  }, []);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = { text: inputMessage.trim() };
    socket.emit('chat message', newMessage);

    setInputMessage('');
    sendTypingStopped();
  };

  const handleJoinRoom = () => {
    socket.emit('join room', room);
  };

  const handleLeaveRoom = () => {
    socket.emit('leave room');
    setRoom('main');
  };

  const sendTyping = () => {
    socket.emit('typing', { room, user: 'You', isTyping: true });
    clearTimeout(typingTimeoutId);
    typingTimeoutId = setTimeout(sendTypingStopped, TYPING_TIMEOUT);
  };

  const sendTypingStopped = () => {
    socket.emit('typing stopped', { room, user: 'You', isTyping: false });
    clearTimeout(typingTimeoutId);
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
    sendTyping();
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
                <strong>
                  {msg.user}:{msg.msg}{' '}
                </strong>
              </div>
            </div>
          ))}
          {isTyping && <div className="typing-indicator">{typer} is typing...</div>}
        </div>
        <div className="chat-modal-footer">
          <input type="text" placeholder="Room name..." value={room} onChange={(e) => setRoom(e.target.value)} />
          <button onClick={handleJoinRoom}>Join</button>
          <button onClick={handleLeaveRoom}>Leave</button>
          <input
            type="text"
            placeholder="Type your message here..."
            value={inputMessage}
            onChange={handleInputChange}
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
