import React, { useState, useEffect } from 'react';
import axios from '../api/axios.js';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import Header from './Header'; // Make sure the path to your Header component is correct
import BoardList from './BoardList'; // Make sure the path to your BoardList component is correct
import Modal from './modal.js'; // Make sure the path to your Modal component is correct
import AddBoardModal from './addModal.js';
import JoinBoardModal from './joinModal.js';

function MainPage() {
  const [user, setUser] = useState(null);
  const [boards, setBoards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // 추가
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [userBoards, setUserBoards] = useState([]);

  const [editData, setEditData] = useState({
    email: '',
    nickname: '',
    password: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user information
    axios
      .get('/api/user/get', {
        headers: {
          'Cache-Control': 'no-cache',
        },
      })
      .then((response) => {
        setUser(response.data.message); // Make sure this matches the actual structure of your response
      })
      .catch((error) => {
        console.error('닉네임을 가져오는데 실패했습니다');
      });

    // Fetch board information
    axios
      .get('/api/boards', {
        headers: {
          'Cache-Control': 'no-cache',
        },
      })
      .then((response) => setBoards(response.data)) // Make sure this matches the actual structure of your response
      .catch((error) => {
        
      });
    axios
      .get('/api/boards/userBoard', {
        headers: {
          'Cache-Control': 'no-cache',
        },
      })
      .then((response) => {
        setUserBoards(response.data); // 사용자가 참여한 보드 목록 상태 업데이트
      })
      .catch((error) => {
       
      });
  }, []);

  const handleLogout = () => {
    axios.delete('/api/logout').then(() => navigate('/login')); // Make sure to navigate to the correct path
  };

  const handleWithdrawal = () => {
    axios.delete('/api/user').then(() => navigate('/login')); // Make sure to navigate to the correct path
  };

  const openModal = () => {
    setIsModalOpen(true);
    setEditData({ ...editData, email: user?.email, nickname: user?.nickname });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };


  
  const handleEditSubmit = (updatedData) => {
    axios
      .put('/api/user', updatedData)
      .then((response) => {
        // Make sure this matches the actual structure of your response
        closeModal();
        window.location.reload();
      })
      .catch((error) => console.error('사용자 정보 수정 실패'));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add submission logic if necessary
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  

  const handleAddBoard = (newBoardData) => {
    // POST 요청을 '/api/boards' 엔드포인트로 보냅니다.
    axios
      .post('/api/boards', newBoardData)
      .then((response) => {
        // 요청이 성공적으로 처리되면 실행됩니다.
        // 여기서는 상태를 업데이트하여 새로 추가된 보드를 보드 목록에 반영합니다.
        // 예를 들어, response.data가 새로운 보드 객체를 포함하고 있다고 가정합니다.

        // 모달을 닫고, 필요하다면 추가적인 액션을 취합니다.
        handleCloseAddModal();
        window.location.reload();
      })
      .catch((error) => {
        // 요청이 실패하면 오류를 처리합니다.
        alert("보드를 추가하는데 실패했습니다");
      
      });
  };

  const handleOpenJoinModal = () => {
    setIsJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false);
  };
  const handleJoinSubmit = (boardCode) => {
    // Form 데이터를 객체로 포장
    const formData = {
      boardCode: boardCode,
    };

    // axios를 사용하여 서버에 POST 요청
    axios
      .post('/api/boards/joinPage', formData)
      .then((response) => {
        // 요청 성공 시의 로직
        window.location.reload();
        // 여기에서 추가적인 성공 처리 로직을 구현할 수 있습니다.
      })
      .catch((error) => {
        // 요청 실패 시의 로직
        alert('참여 실패: 참여 코드를 확인해주세요');
      });
  };

  <Header user={user} onLogout={handleLogout} onWithdrawal={handleWithdrawal} onOpenModal={handleOpenModal} onCloseModal={handleCloseModal} />;

  return (
    <div className="main-page-container">
      <form className="main-form" onSubmit={handleSubmit}>
        <Header user={user} onLogout={handleLogout} onWithdrawal={handleWithdrawal} openModal={openModal} />
        <div className="header-content">
          <h1 className="board-title">My Board</h1>
          <div className="header-icons">
            <div className="plus-icon-container" onClick={handleOpenAddModal}>
              <img src="/plus.png" alt="Add Board" className="plus-icon" />
            </div>
            <div className="Settings-icon-container" onClick={handleOpenJoinModal}>
              <img src="/setting.png" alt="Settings" className="settings-icon" />
            </div>
          </div>
        </div>

        <BoardList boards={boards} />

        {isModalOpen && <Modal editData={editData} onClose={closeModal} onSubmit={handleEditSubmit} />}
        {/* Modal 추가 */}
        {isAddModalOpen && <AddBoardModal isOpen={isAddModalOpen} onClose={handleCloseAddModal} onSubmit={handleAddBoard} />}
        {isJoinModalOpen && <JoinBoardModal isOpen={isJoinModalOpen} onClose={handleCloseJoinModal} onJoinSubmit={handleJoinSubmit} />}
      </form>
    </div>
  );
}

export default MainPage;
