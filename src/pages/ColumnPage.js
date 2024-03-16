import React, { useEffect, useState } from 'react';
import axios from '../api/axios.js';

function ColumnPage() {
  const [cards, setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showOptionsCardId, setShowOptionsCardId] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editCardId, setEditCardId] = useState(null);
  const [cardData, setCardData] = useState({
    cardTitle: '',
    cardContent: '',
    cardStartTime: new Date(),
    cardEndTime: new Date(),
    cardStatus: 'IN_PROGRESS',
  });

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/columns/14/cards');
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    setEditMode(false);
    setEditCardId(null);
    setCardData({
      cardTitle: '',
      cardContent: '',
      cardStartTime: new Date(),
      cardEndTime: new Date(),
      cardStatus: 'IN_PROGRESS',
    });
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

  const handleDelete = async (cardId) => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      try {
        await axios.delete(`http://localhost:3000/api/columns/14/cards/${cardId}`);
        alert('Card deleted successfully');
        fetchCards();
      } catch (error) {
        console.error('Error deleting card:', error);
        alert('Error deleting card');
      }
    }
  };

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
        response = await axios.put(`http://localhost:3000/api/columns/14/cards/${editCardId}`, cardPayload);
        setEditMode(false);
        setEditCardId(null);
      } else {
        response = await axios.post('http://localhost:3000/api/columns/14/cards', cardPayload);
      }
      console.log('Card saved:', response.data);
      setShowModal(false);
      fetchCards();
    } catch (error) {
      console.error('Error saving card:', error);
      alert('Error saving card');
    }
  };

  return (
    <Container>
      <Header>
        <Greeting>안녕하세요!</Greeting>
        <Icon onClick={toggleModal}>+ Add a card</Icon>
      </Header>
      <CardListStyle>
        {cards.map((card) => (
          <CardItemStyle key={card.cardId}>
            <strong>카드 ID: {card.cardId}</strong>
            <p>카드 제목: {card.cardTitle}</p>
            <p>카드 내용: {card.cardContent}</p>
            <Icon onClick={() => toggleOptions(card.cardId)} style={{ position: 'absolute', top: '10px', right: '10px' }}>
              ...
            </Icon>
            {showOptionsCardId === card.cardId && (
              <CardOptions>
                <div onClick={() => handleEdit(card)}>수정</div>
                <div onClick={() => handleDelete(card.cardId)}>삭제</div>
              </CardOptions>
            )}
          </CardItemStyle>
        ))}
      </CardListStyle>
      {showModal && (
        <Modal>
          <ModalContent>
            <button type="button" onClick={toggleModal}>
              Close
            </button>
            <h2>{editMode ? 'Edit Card' : 'Create a Card'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="cardTitle">Card Title:</label>
                <input type="text" className="form-control" id="cardTitle" name="cardTitle" value={cardData.cardTitle} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="cardContent">Card Content:</label>
                <input type="text" className="form-control" id="cardContent" name="cardContent" value={cardData.cardContent} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="startTime">Start Time:</label>
                <DatePicker selected={cardData.cardStartTime} onChange={handleStartDateChange} showTimeSelect dateFormat="Pp" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="endTime">End Time:</label>
                <DatePicker selected={cardData.cardEndTime} onChange={handleEndDateChange} showTimeSelect dateFormat="Pp" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="cardStatus">Card Status:</label>
                <select id="cardStatus" name="cardStatus" value={cardData.cardStatus} onChange={handleChange} className="form-control">
                  <option value="IN_PROGRESS">IN_PROGRESS</option>
                  <option value="COMPLETED">COMPLETED</option>
                  <option value="BLOCKED">BLOCKED</option>
                </select>
              </div>
              <SubmitButton type="submit">{editMode ? 'Save Changes' : 'Add Card'}</SubmitButton>
            </form>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}

export default ColumnPage;
