// CardDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CardPage.css'; // 스타일시트 이름도 변경하세요

const CardPage = () => {
  // 카드 상세 정보 상태를 관리합니다
  const { cardId } = useParams();

  const [cardDetails, setCardDetails] = useState({
    cardTitle: '카드 제목1',
    cardContent: '카드 내용2',
    cardStartTime: {
      year: 2024,
      month: 5,
      day: 15,
      hour: 18,
      minute: 30,
    },
    cardEndTime: {
      year: 2024,
      month: 8,
      day: 18,
      hour: 21,
      minute: 0,
    },
    newComment: '',
    cardStatus: 'COMPLETED',
    comments: [
      {
        cardWrtier: '작성자1',
        content: '댓글 내용1',
        createdAt: {
          year: 2024,
          month: 5,
          day: 15,
          hour: 18,
          minute: 30,
        },
      },
      {
        cardWrtier: '작성자2',
        content: '댓글 내용2',
        createdAt: {
          year: 2024,
          month: 5,
          day: 15,
          hour: 18,
          minute: 30,
        },
      },
    ],
    // 여기에 더 필요한 상태를 추가할 수 있습니다
  });
  const formatCardTime = (startTime) => {
    const { year, month, day, hour, minute } = startTime;
    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
  };
  const formatCardState = (cardStatus) => {
    if (cardStatus === 'COMPLETED') {
      return '완료';
    } else if (cardStatus === 'IN_PROGRESS') {
      return '진행중';
    } else if (cardStatus === 'CANCELED') {
      return '취소됨';
    }
    return '해당 없음';
  };

  const fetchCardDetails = async () => {
    // 여기에 카드 상세 정보를 가져오는 API 호출을 구현하세요
    try {
      const response = await axios.get('localhost:3000/api/columns/4/cards');
      console.log(response);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  // 카드 상세 정보를 가져올 때 사용합니다
  useEffect(() => {
    fetchCardDetails();
    // 다음의 dependencies 배열에 필요한 변수를 추가하세요
  }, []);

  const handleCommentChange = (e) => {
    // 댓글 입력을 처리합니다
  };

  const handleCommentSubmit = async () => {
    // 여기에 댓글을 제출하는 로직을 구현하세요
  };

  return (
    <div className="card-detail-container">
      <div className="card-detail-header">
        <h1>{cardDetails.cardTitle}</h1>
        {/* 카드의 상세 정보를 렌더링하는 부분 */}
      </div>
      <h1>{cardDetails.cardTitle}</h1>
      {/* 기존 렌더링 코드에 이어서 아래 코드를 추가합니다 */}
      <p>시작 시간: {formatCardTime(cardDetails.cardStartTime)}</p>
      <p>종료 시간: {formatCardTime(cardDetails.cardEndTime)}</p>
      <p>카드 상태: {formatCardState(cardDetails.cardStatus)}</p>

      <div className="card-content">{cardDetails.cardContent}</div>
      <div className="card-comment-section">
        <textarea placeholder="댓글을 입력하세요" value={cardDetails.newComment} onChange={handleCommentChange} />
        <button onClick={handleCommentSubmit}>댓글 등록</button>
      </div>
      <div className="card-comments">
        {/* 댓글 목록을 렌더링합니다 */}
        {cardDetails.comments.map((comment) => (
          <div key={comment.id} className="comment">
            {comment.cardWrtier} :{comment.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPage;
