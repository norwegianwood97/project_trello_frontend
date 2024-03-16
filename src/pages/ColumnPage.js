import React, { useEffect, useState } from 'react';
import axios from '../api/axios.js';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiMoreVertical } from 'react-icons/fi'; // Example using react-icons
import { FaUser } from 'react-icons/fa';
import { useNavigate,useParams  } from 'react-router-dom';
import './CardPage.css';

const Container = styled.div`
  width: 80%; /* Reduced from 90% to 80% to increase the gap */
  margin: auto; /* Keeps the container centered */
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 50px; /* Add space between Container and CardItemStyle */
  margin-bottom: 50px; /* Add space between Container and CardItemStyle */
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

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: auto; // Adjust width as necessary, auto ensures it doesn't exceed parent
  max-width: 500px; // Prevents the modal from being too wide
  display: flex;
  flex-direction: column;
  align-items: center; // Centers the content horizontally;
  flex-direction: column; // Ensure everything is in a column layout
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column; // Stack the date pickers vertically
  width: 100%; // Use the full width of the ModalContent
  margin-bottom: 20px; // Add some space before the Save Changes button
`;

// Use this style for both the Start Time and End Time DatePicker components
const DatePickerStyle = styled(DatePicker)`
  width: 100%; // Ensure the DatePicker takes the full width
  margin-bottom: 10px; // Add some space between the DatePickers
`;

const CloseButton = styled.button`
  background-color: #ccc; // or any color you prefer
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px; // This adds space between the close button and the form elements
  float: right; // This will place the button to the right, you can adjust as needed
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
  border-radius: 5px;
  margin-bottom: 10px; // Space between the input fields
`;

const FormLabel = styled.label`
  margin-bottom: 5px; // Add a little space above the input field
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

const Icon = styled(FiMoreVertical)`
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 20px;
  right: 50px; /* Adjust as needed for spacing */
  transition: fill 0.3s ease;

  &:hover {
    fill: #555; /* Change the color on hover */
  }
`;

const SubmitButton = styled.button`
  background-color: #bca7af;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block; // Sets the element to block level, enabling width and margin auto
  margin: 0 auto; // Auto margins on both sides to center the button
  margin-top: 20px; // Adds some space above the button if needed
`;

function ColumnPage() {
  const navigate = useNavigate();
  const { columnId } = useParams()
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

  const handleUserIconClick = () => {
    window.location.href = 'http://localhost:5000/'; // Directly navigate to the URL
  };

  const fetchColumnTitle = async (columnId) => {
    try {
      const response = await axios.get(`http://api.nodejstrello.site/api/columns/${columnId}/`);
      setColumnTitle(response.data.columnTitle); // Assuming 'columnTitle' is the key in the response object
    } catch (error) {
      console.error('Error fetching column title:', error);
    }
  };

  // const fetchUserNickname = async () => {
  //   try {
  //     const response = await axios.get('http://api.nodejstrello.site/api/user/get');
  //     setUserNickname(response.data.message); // Assuming the nickname is returned in the 'message' field
  //   } catch (error) {
  //     console.error('Error fetching user nickname:', error);
  //   }
  // };

  // const fetchUserNickname = async (userId) => {
  //   try {
  //     // 여기서 userId를 서버에 보내어 현재 사용자인지 확인할 수 있습니다.
  //     const currentUserResponse = await axios.get('http://api.nodejstrello.site/api/user/');
  //     const currentUserId = currentUserResponse.data.userId;

  //     let response;
  //     // 현재 사용자인 경우
  //     if (currentUserId === userId) {
  //       response = await axios.get('http://api.nodejstrello.site/api/user/');
  //     } else {
  //       // 다른 사용자인 경우
  //       response = await axios.post('http://api.nodejstrello.site/api/user/', { userId });
  //     }

  //     setUserNickname(response.data.nickname);
  //   } catch (error) {
  //     console.error('Error fetching User Nickname:', error);
  //   }
  // };

  const fetchCards = async (columnId) => {
    try {
      const response = await axios.get(`http://api.nodejstrello.site/api/columns/${columnId}/cards`);
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
  };

  const handleDelete = async (columnId, cardId) => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      try {
        await axios.delete(`http://api.nodejstrello.site/api/columns/${columnId}/cards/${cardId}`);
        alert('카드가 삭제되었습니다!');
        fetchCards();
      } catch (error) {
        console.error('Error deleting card:', error);
        alert('삭제 권한이 없습니다!');
      }
    }
  };

  const colors = [
    '#FFC9C9', // Original color
    '#FFDAB9', // Peach
    '#E6D7FF', // Lavender
    '#C9FFCF', // Mint Green
    '#C9F5FF', // Sky Blue
    '#FFF7C9', // Lemon Yellow
    '#D9D9D9', // Coral
  ];
  
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
    width: 100%; // Full width by default
    max-width: 330px; // Set a maximum width for the date picker input
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
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
      let response;
      if (editMode) {
        response = await axios.put(`http://api.nodejstrello.site/api/columns/14/cards/${editCardId}`, cardPayload);
        setEditMode(false);
        setEditCardId(null);
      } else {
        response = await axios.post('http://api.nodejstrello.site/api/columns/14/cards', cardPayload);
      }
      console.log('Card saved:', response.data);
      setShowModal(false);
      fetchCards();
    } catch (error) {
      console.error('Error saving card:', error);
      alert('Error saving card');
    }
  };

  function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleString('ko-KR', options);
  }

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
        <Greeting>{columnTitle || 'Loading...'}</Greeting>
        <AddCardIcon onClick={toggleModal} /> {/* Add card icon */}
        <UserInfoIcon onClick={handleUserIconClick} />
        {/* <div>Created by: {userNickname}</div> */}
      </Header>
      <CardListStyle>
        {cards.map((card) => (
          <CardItemStyle
            key={card.cardId}
            onClick={() => navigateToCard(card.cardId)}
            bgColor={colors[card.cardColor % colors.length]} // cardColor를 사용하여 배경색 설정
          >
            <div className="card-writer"></div>
            <strong>카드 ID: {card.cardId}</strong>
            <p>카드 제목: {card.cardTitle}</p>
            <p>카드 내용: {card.cardContent}</p>
            <p>기간: {formatDateRange(card.cardStartTime, card.cardEndTime)}</p>
            <Icon
              onClick={(e) => {
                e.stopPropagation(); // 이벤트 버블링 방지
                toggleOptions(card.cardId);
              }}
            />
            {showOptionsCardId === card.cardId && (
              <CardOptions>
                <div
                  onClick={(e) => {
                    e.stopPropagation(); // 이벤트 버블링 방지
                    handleEdit(card);
                  }}
                >
                  수정
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation(); // 이벤트 버블링 방지
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
        <Modal>
          <ModalContent>
            <CloseButton onClick={toggleModal}>Close</CloseButton>
            <h2>Edit Card</h2>
            <Form onSubmit={handleSubmit}>
              <FormLabel htmlFor="cardTitle">Card Title:</FormLabel>
              <FormInput type="text" id="cardTitle" name="cardTitle" value={cardData.cardTitle} onChange={handleChange} />

              <FormLabel htmlFor="cardContent">Card Content:</FormLabel>
              <FormInput type="text" id="cardContent" name="cardContent" value={cardData.cardContent} onChange={handleChange} />

              <TimeContainer>
                <FormLabel htmlFor="startTime">Start Time:</FormLabel>
                <DatePickerStyle selected={cardData.cardStartTime} onChange={handleStartDateChange} showTimeSelect dateFormat="Pp" />

                <FormLabel htmlFor="endTime">End Time:</FormLabel>
                <DatePickerStyle selected={cardData.cardEndTime} onChange={handleEndDateChange} showTimeSelect dateFormat="Pp" />
              </TimeContainer>

              {/* ... other form elements ... */}

              <SubmitButton type="submit">Save Changes</SubmitButton>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}

export default ColumnPage;
