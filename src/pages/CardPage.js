import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios.js';
import './CardPage.css';

// ISO 8601 문자열에서 날짜 및 시간을 파싱하는 함수
const parseDateTime = (isoString) => {
  const date = new Date(isoString);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
};

// 카드의 시작 시간을 형식화하는 함수
const formatCardTime = (startTime) => {
  const { year, month, day, hour, minute } = startTime;
  return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
};

// 카드의 상태를 문자열로 변환하는 함수
const formatCardState = (cardStatus) => {
  switch (cardStatus) {
    case 'COMPLETED':
      return '완료';
    case 'IN_PROGRESS':
      return '진행중';
    case 'CANCELED':
      return '취소됨';
    default:
      return '해당 없음';
  }
};

const CardPage = () => {
  const { cardId } = useParams();
  const [cardDetails, setCardDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingCommentContent, setEditingCommentContent] = useState('');
  const [currentUserNickname, setCurrentUserNickname] = useState(''); // 현재 사용자의 닉네임 상태

  const showErrorAlert = (message) => {
    alert(`요청이 실패하였습니다! 오류: ${message}`);
  };

  const fetchNickname = async (userId) => {
    try {
      const response = await axios.post('http://api.nodejstrello.site:3000/api/user/get', {
        userId: userId,
      });
      return response.data.message;
    } catch (error) {
      console.error('Error fetching nickname: ', error);
      showErrorAlert(error.message);
      return null;
    }
  };

  // 현재 사용자의 닉네임을 불러오는 함수
  const fetchCurrentUserNickname = async () => {
    try {
      const response = await axios.get('http://api.nodejstrello.site:3000/api/user/get');
      setCurrentUserNickname(response.data.message); // 현재 사용자의 닉네임을 상태에 저장
    } catch (error) {
      console.error('Error fetching current user nickname: ', error);
      showErrorAlert(error.message);
    }
  };

  const fetchCardAndCommentsDetails = async () => {
    try {
      const cardResponse = await axios.get(`http://api.nodejstrello.site:3000/api/cards/${cardId}`);
      const cardData = cardResponse.data;
      const commentsResponse = await axios.get(`http://api.nodejstrello.site:3000/api/cards/${cardId}/comments`);
      let commentsData = commentsResponse.data;

      const commentsWithNickname = await Promise.all(
        commentsData.map(async (comment) => {
          const nickname = await fetchNickname(comment.commentWriterId);
          return {
            ...comment,
            nickname,
          };
        })
      );

      setCardDetails({
        ...cardData,
        cardStartTime: parseDateTime(cardData.cardStartTime),
        cardEndTime: parseDateTime(cardData.cardEndTime),
      });

      setComments(commentsWithNickname);
    } catch (error) {
      console.error('Error fetching card details and comments: ', error);
      showErrorAlert(error.message);
    }
  };

  useEffect(() => {
    fetchCardAndCommentsDetails();
    fetchCurrentUserNickname(); // 컴포넌트 마운트 시 현재 사용자의 닉네임을 불러옵니다.
  }, [cardId]);

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`http://api.nodejstrello.site:3000/api/cards/${cardId}/comments/${commentId}`);
      setComments(comments.filter((comment) => comment.commentId !== commentId));
    } catch (error) {
      console.error('Error deleting comment: ', error);
      showErrorAlert(error.message);
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    try {
      await axios.post(`http://api.nodejstrello.site:3000/api/cards/${cardId}/comments`, {
        commentContent: newComment,
      });

      fetchCardAndCommentsDetails();
      setNewComment('');
    } catch (error) {
      console.error('Error submitting comment: ', error);
      showErrorAlert(error.message);
    }
  };

  const handleEditComment = (commentId) => {
    const commentToEdit = comments.find((comment) => comment.commentId === commentId);
    if (commentToEdit) {
      setEditingCommentId(commentId);
      setEditingCommentContent(commentToEdit.commentContent);
      setIsEditModalOpen(true);
    }
  };

  const saveEditedComment = async () => {
    try {
      await axios.put(`http://api.nodejstrello.site:3000/api/cards/${cardId}/comments/${editingCommentId}`, {
        commentContent: editingCommentContent,
      });
      fetchCardAndCommentsDetails();
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error updating comment: ', error);
      showErrorAlert(error.message);
    }
  };

  if (!cardDetails) return <div>Loading...</div>;

  return (
    <div className="card-detail-container">
      <div className="card-detail-header">
        <h1>{cardDetails.cardTitle}</h1>
        <p>시작 시간: {formatCardTime(cardDetails.cardStartTime)}</p>
        <p>종료 시간: {formatCardTime(cardDetails.cardEndTime)}</p>
        <p>카드 상태: {formatCardState(cardDetails.cardStatus)}</p>
        <p className="card-content">{cardDetails.cardContent}</p>
      </div>
      <div className="card-comment-section">
        <textarea placeholder="댓글을 입력하세요" value={newComment} onChange={handleCommentChange} />
        <button className="comment-submit-button" onClick={handleCommentSubmit}>
          댓글 등록
        </button>
      </div>
      <div className="card-comments">
        {comments.map((comment) => (
          <div key={comment.commentId} className="comment">
            <div className="comment-content">
              {comment.nickname} : {comment.commentContent}
            </div>
            <div className="comment-actions">
              {comment.nickname === currentUserNickname && (
                <>
                  <button className="comment-edit-button" onClick={() => handleEditComment(comment.commentId)}>
                    수정
                  </button>
                  <button className="comment-delete-button" onClick={() => handleDeleteComment(comment.commentId)}>
                    삭제
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      {isEditModalOpen && (
        <div className="edit-modal">
          <textarea value={editingCommentContent} onChange={(e) => setEditingCommentContent(e.target.value)} />
          <button className="edit-modal-save-button" onClick={saveEditedComment}>
            저장
          </button>
          <button className="edit-modal-cancel-button" onClick={() => setIsEditModalOpen(false)}>
            취소
          </button>
        </div>
      )}
    </div>
  );
};

export default CardPage;
