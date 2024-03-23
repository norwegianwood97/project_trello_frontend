import React, { useEffect, useState } from 'react';
import axios from '../api/axios.js';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiMoreVertical } from 'react-icons/fi'; // Example using react-icons
import { FaUser } from 'react-icons/fa';
import { useNavigate,useParams  } from 'react-router-dom';
import Icon from '../components/Icon.js';
import './CardPage.css';

const Container = styled.div`
  width: 60%;
  margin: auto;
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 더 진한 그림자 */
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #fff; /* Header seems to be white */
  padding: 20px;
  position: relative; /* Add position relative for absolute positioning of icons */
`;

const Greeting = styled.h1`
  margin: 0;
  color: #333; /* Adjust the color if needed */
`;

const CardItemStyle = styled.div`
  position: relative;
  border: 1px solid #ddd;

  padding: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 70%;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor || '#e8f0fe'}; /* Use bgColor prop for background color */
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

const CardListStyle = styled.div`
  padding: 20px; /* Add padding around the entire list to create space from the container edges */
  width: 900px;
  margin: 0 auto; // 상단과 하단 마진은 0, 좌우 마진은 auto로 설정하여 중앙 정렬
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 모달의 전체 배경색과 패딩도 조정합니다.
const ModalContent = styled.div`
  background-color: transparent; // 배경색을 투명하게 설정합니다.
  padding: 20px;
  border-radius: 0; // 테두리 반경을 0으로 설정하여 사각형 모양을 없앱니다.
  box-shadow: none; // 그림자를 제거합니다.
  width: auto; // 자동 너비 설정을 유지합니다.
  max-width: 700px; // 최대 너비 설정을 유지합니다.
  display: flex;
  flex-direction: column;
  align-items: center;
  onclick: (e) => e.stopPropagation();
`;

const CardContainer = styled.div`
  background-color: white; // 배경색 설정
  padding: 20px; // 내부 여백
  border-radius: 5px; // 모서리 둥글기
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); // 그림자 효과
  // 높이를 원하는 대로 설정하세요. 'auto'로 설정하면 컨텐츠에 따라 늘어납니다.
  height: auto;
  // 다른 스타일 속성들...
`;

// 'Card' 제목을 위한 스타일 컴포넌트를 정의합니다.
const CardTitle = styled.h1`
  font-size: 2em; // 글자 크기를 크게 설정
  font-weight: bold; // 볼드체로 설정
  text-align: center; // 가운데 정렬
  margin-top: 0; // 상단 여백을 제거
  margin-bottom: 20px; // 제목과 내용 사이의 간격 설정
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px; // 필요한 경우 마진 값 조정

  width: calc(100% - 40px); // 모달의 padding을 고려하여 너비를 조정합니다.
  margin: 0;
  padding: 0; // TimeContainer 내부 패딩을 제거합니다.
  box-sizing: border-box;
`;

const SelectStyle = styled.select`
  margin-left: 50px; // 드롭다운을 왼쪽으로 옮기기 위해 여백을 조정합니다.
  // ...기타 스타일 속성
`;

// Use this style for both the Start Time and End Time DatePicker components
const DatePickerStyle = styled(DatePicker)`
  width: 100%; // Ensure the DatePicker takes the full width
  margin-bottom: 10px; // Add some space between the DatePickers
`;

const CloseButton = styled.button`
  background-color: transparent; // 배경색을 투명하게 설정합니다.
  color: black; // 버튼의 텍스트 색상을 검은색으로 유지합니다.
  border: none; // 테두리 제거
  padding: 10px 20px; // 패딩 유지
  border-radius: 5px; // 테두리 반경 유지
  cursor: pointer; // 마우스 커서 포인터 유지
  margin-bottom: 20px; // 하단 여백 유지
  float: right; // 오른쪽 정렬 유지
`;

const Form = styled.form`
  clear: both; // This will ensure that the form is not affected by the floated close button
  display: flex;
  flex-direction: column;
  gap: 10px; // This will add space between form elements
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  margin-left: 60px; // 왼쪽 여백을 없앱니다.
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%; // 부모 컨테이너에 꽉 차게 조정합니다.
  box-shadow: none; // 그림자 제거
  background-color: transparent; // 배경색 투명으로 조정
`;

const FormTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 70%; // Sets the width to 70% of its container
  height: 100px; // Adjust this value to increase the vertical length as desired
  resize: vertical; // Allows users to resize the textarea vertically
  // Add any other styles you need
`;

const FormLabel = styled.label`
  display: none; // 레이블을 숨깁니다.
`;

const UserInfoIcon = styled(FaUser)`
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  right: 20px; /* Adjust the position as needed */
  top: 20px; /* Adjust as needed */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); /* Slightly increase the size */
  }
`;

const CardOptions = styled.div`
  className: 'card-options'
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 5px;
  z-index: 10;

  div {
    padding: 10px 15px;
    font-size: 16px;
    margin: 5px 0;
    cursor: pointer;
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const ModifyIcon = styled(FiMoreVertical)`
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 20px;
  right: 50px;
  transition: fill 0.3s ease;

  &:hover {
    fill: #555;
  }
`;

const SubmitButton = styled.button`
  background-color: #4caf50; // 버튼의 배경색을 HEX 코드로 설정합니다.
  color: white; // 텍스트 색상을 하얀색으로 설정합니다.
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  // margin: 20px auto; // 가운데 정렬을 위한 마진 설정
  margin-left: 20px;
`;
function ColumnPage() {
  const navigate = useNavigate();
  const { columnId } = useParams();
  const [cards, setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showOptionsCardId, setShowOptionsCardId] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editCardId, setEditCardId] = useState(null);
  // const [userNickname, setUserNickname] = useState('');
  const [columnTitle, setColumnTitle] = useState('');
  const [cardData, setCardData] = useState({
    cardTitle: '',
    cardContent: '',
    cardStartTime: new Date(),
    cardEndTime: new Date(),
    cardStatus: 'IN_PROGRESS',
  });

  useEffect(() => {
    fetchColumnTitle(columnId);
    fetchCards(columnId);
    // fetchUserNickname();
  }, [columnId]);

  const navigateToCard = (cardId) => {
    navigate(`/card/${cardId}`);
  };

  


  const fetchColumnTitle = async (columnId) => {
    try {
      const response = await axios.get(`/api/columns/${columnId}/`);
      setColumnTitle(response.data.columnTitle); // Assuming 'columnTitle' is the key in the response object
    } catch (error) {
      console.error('Error fetching column title:', error);
    }
  };

  // const fetchUserNickname = async () => {
  //   try {
  //     const response = await axios.get('/api/user/get');
  //     setUserNickname(response.data.message); // Assuming the nickname is returned in the 'message' field
  //   } catch (error) {
  //     console.error('Error fetching user nickname:', error);
  //   }
  // };

  // const fetchUserNickname = async (userId) => {
  //   try {
  //     // 여기서 userId를 서버에 보내어 현재 사용자인지 확인할 수 있습니다.
  //     const currentUserResponse = await axios.get('/api/user/');
  //     const currentUserId = currentUserResponse.data.userId;

  //     let response;
  //     // 현재 사용자인 경우
  //     if (currentUserId === userId) {
  //       response = await axios.get('/api/user/');
  //     } else {
  //       // 다른 사용자인 경우
  //       response = await axios.post('/api/user/', { userId });
  //     }

  //     setUserNickname(response.data.nickname);
  //   } catch (error) {
  //     console.error('Error fetching User Nickname:', error);
  //   }
  // };

  const fetchCards = async (columnId) => {
    try {
      const response = await axios.get(`/api/columns/${columnId}/cards`);
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    setEditMode(false);
    setEditCardId(null);
    // Reset cardData to default values if creating a new card
    setCardData({
      cardTitle: '',
      cardContent: '',
      cardStartTime: new Date(),
      cardEndTime: new Date(),
      cardStatus: 'IN_PROGRESS',
    });
  };

  const handleUserInformation = (userId) => {
    // Logic to handle user information view
    console.log('User info for:', userId);
    // You could set some state here to open a modal or navigate to a user info page
  };

  const toggleOptions = (cardId) => {
    setShowOptionsCardId(showOptionsCardId === cardId ? null : cardId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData({
      ...cardData,
      [name]: value,
    });
  };

  const handleStartDateChange = (date) => {
    setCardData({
      ...cardData,
      cardStartTime: date,
    });
  };

  const handleEndDateChange = (date) => {
    setCardData({
      ...cardData,
      cardEndTime: date,
    });
  };

  const handleEdit = (card) => {
    setCardData({
      cardTitle: card.cardTitle,
      cardContent: card.cardContent,
      cardStartTime: new Date(card.cardStartTime),
      cardEndTime: new Date(card.cardEndTime),
      cardStatus: card.cardStatus,
    });
    setEditCardId(card.cardId);
    setEditMode(true);
    setShowModal(true);
    setShowOptionsCardId(null);
  };

  const handleDelete = async (cardId) => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      try {
        await axios.delete(`/api/columns/${columnId}/cards/${cardId}`);
        alert('카드가 삭제되었습니다!');
        fetchCards(columnId); // 삭제 후 카드 목록 새로고침
      } catch (error) {
        console.error('Error deleting card:', error);
        alert('삭제 권한이 없습니다!');
      }
    }
  };

  const colors = ['#ffdddd', '#fff6dd', '#ffffdd', '#e5ffdd', '#ddffff', '#dde5ff', '#eeddff'];

  const AddCardIcon = styled(FiMoreVertical)`
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    right: 50px; /* Adjust the position as needed */
    top: 20px; /* Adjust as needed */
    transition: rotate 0.3s ease;

    &:hover {
      transform: rotate(90deg); /* Rotate the icon on hover */
    }
  `;

  const DatePickerStyle = styled(DatePicker)`
    width: 100%; // DatePicker의 너비를 부모 요소에 맞춥니다.
    padding: 10px;
    border: 1px solid #ddd;
    margin-left: 60px; // 왼쪽 여백을 없앱니다.
    width: 320px !important;
    border-radius: 5px;
    box-sizing: border-box; // 너비 계산에 테두리와 패딩을 포함합니다.
    .react-datepicker-wrapper,
    .react-datepicker__input-container {
      width: 100%; // 내부 요소의 너비를 100%로 설정합니다.
    }
    // 기본 react-datepicker 스타일을 재정의할 필요가 있을 수 있습니다.
  `;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cardPayload = {
      cardTitle: cardData.cardTitle,
      cardContent: cardData.cardContent,
      cardStartTime: {
        year: cardData.cardStartTime.getFullYear(),
        month: cardData.cardStartTime.getMonth() + 1,
        day: cardData.cardStartTime.getDate(),
        hour: cardData.cardStartTime.getHours(),
        minute: cardData.cardStartTime.getMinutes(),
      },
      cardEndTime: {
        year: cardData.cardEndTime.getFullYear(),
        month: cardData.cardEndTime.getMonth() + 1,
        day: cardData.cardEndTime.getDate(),
        hour: cardData.cardEndTime.getHours(),
        minute: cardData.cardEndTime.getMinutes(),
      },
      cardStatus: cardData.cardStatus,
    };

    try {
      if (editMode) {
        // 카드 수정 로직
        await axios.put(`/api/columns/${columnId}/cards/${editCardId}`, cardPayload);
        setEditMode(false);
        setEditCardId(null);
      } else {
        // 카드 생성 로직
        await axios.post(`/api/columns/${columnId}/cards`, cardPayload);
        fetchCards(columnId); // 카드 생성 후 카드 목록을 새로고침
      }
      setShowModal(false); // 모달 닫기
      fetchCards(columnId); // 변경사항 적용을 위해 카드 목록 새로고침
    } catch (error) {
      console.error('Error saving card:', error);
      alert('Error saving card');
    }
  };
  function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleString('ko-KR', options);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  function formatDateRange(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const startFormatted = `${start.getFullYear()}년 ${start.getMonth() + 1}월 ${start.getDate()}일 ${start.getHours()}시 ${start.getMinutes()}분`;
    const endFormatted = `${end.getFullYear()}년 ${end.getMonth() + 1}월 ${end.getDate()}일 ${end.getHours()}시 ${end.getMinutes()}분`;
    return `${startFormatted} ~ ${endFormatted}`;
  }

  return (
    <Container>
      <Header>
        <Greeting style={{ fontWeight: 'bold', fontSize: '50px', }}>{columnTitle || 'Loading...'}</Greeting>
        <Icon type="Plus" onClick={toggleModal} />
      </Header>
      <CardListStyle>
        {cards.map((card) => (
          <CardItemStyle
            key={card.cardId}
            onClick={() => navigateToCard(card.cardId)}
            bgColor={colors[card.cardColor % colors.length]} // cardColor를 사용하여 배경색 설정
          >
            <div className="card-writer"></div>
            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>카드 제목: {card.cardTitle}</p>
            <p>카드 내용: {card.cardContent}</p>
            <p>기간: {formatDateRange(card.cardStartTime, card.cardEndTime)}</p>
            <p>상태: {card.cardStatus === 'IN_PROGRESS' ? '진행 중' : card.cardStatus === 'COMPLETED' ? '완료됨' : '취소됨'}</p>
            <ModifyIcon
              onClick={(e) => {
                e.stopPropagation(); // 이벤트 버블링 방지
                toggleOptions(card.cardId);
              }}
            />
            {showOptionsCardId === card.cardId && (
              <CardOptions>
                <div
                  onClick={(e) => {
                    e.stopPropagation(); // 이벤트 버블링 중단
                    handleEdit(card);
                  }}
                >
                  수정
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation(); // 이벤트 버블링 중단
                    handleDelete(card.cardId);
                  }}
                >
                  삭제
                </div>
              </CardOptions>
            )}
          </CardItemStyle>
        ))}
      </CardListStyle>
      {showModal && (
        <Modal onClick={handleCloseModal}>
          <ModalContent onClick={handleModalContentClick}>
            {/* <h2>Edit Card</h2> */}
            <Form onSubmit={handleSubmit}>
              <FormLabel htmlFor="cardTitle"></FormLabel>
              <FormInput
                type="text"
                id="cardTitle"
                name="cardTitle"
                value={cardData.cardTitle}
                onChange={handleChange}
                style={{ width: '70%' }}
                placeholder="카드 제목을 입력하세요" // Add inline style for debugging
              />
              <FormLabel htmlFor="cardContent"></FormLabel>
              <FormInput type="text" id="cardContent" name="cardContent" value={cardData.cardContent} onChange={handleChange} style={{ width: '70%' }} placeholder="카드 내용을 입력하세요" />
              <TimeContainer>
                <FormLabel htmlFor="startTime"></FormLabel>
                <DatePickerStyle selected={cardData.cardStartTime} onChange={handleStartDateChange} showTimeSelect dateFormat="Pp" />

                <FormLabel htmlFor="endTime"></FormLabel>
                <DatePickerStyle selected={cardData.cardEndTime} onChange={handleEndDateChange} showTimeSelect dateFormat="Pp" />
              </TimeContainer>

              <FormLabel htmlFor="cardStatus"></FormLabel>
              <SelectStyle
                id="cardStatus"
                name="cardStatus"
                value={cardData.cardStatus}
                onChange={handleChange}
                style={{ width: '70%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', marginBottom: '20px', marginLeft: '60px' }}
              >
                <option value="IN_PROGRESS">IN_PROGRESS</option>
                <option value="COMPLETED">OMPLETED</option>
                <option value="CANCELED">CANCELED</option>
              </SelectStyle>

              <SubmitButton className="btn btn-success" type="submit" style={{ width: '73%', marginLeft: '55px' }}>
                저장
              </SubmitButton>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}

export default ColumnPage;
