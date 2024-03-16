import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios.js';
import './CardPage.css';

const CardPage = () => {
  const { cardId } = useParams();

  // 초기값이 없는 상태로 카드 상세 정보 상태를 관리합니다
  const [cardDetails, setCardDetails] = useState(null);

  // 댓글 상태를 별도로 관리합니다
  const [comments, setComments] = useState([]);

  // 댓글 입력 상태를 관리합니다
  const [newComment, setNewComment] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingCommentContent, setEditingCommentContent] = useState('');

  const fetchNickname = async (userId) => {
    try {
      const response = await axios.post('http://localhost:3000/api/user/get', {
        userId: userId,
      });
      return response.data.message; // 닉네임 반환
    } catch (error) {
      console.error('Error fetching nickname: ', error);
      return null; // 오류 발생 시 null 반환
    }
  };

  // 카드 상세 정보와 댓글 정보를 가져오는 함수
  const fetchCardAndCommentsDetails = async () => {
    try {
      const cardResponse = await axios.get(`http://localhost:3000/api/cards/${cardId}`);
      const cardData = cardResponse.data;

      const commentsResponse = await axios.get(`http://localhost:3000/api/cards/${cardId}`);
      let commentsData = commentsResponse.data;

      // 댓글 작성자의 닉네임을 조회하여 각 댓글 정보에 추가
      const commentsWithNickname = await Promise.all(
        commentsData.map(async (comment) => {
          const nickname = await fetchNickname(comment.commentWriterId);
          return {
            ...comment,
            nickname, // 닉네임을 댓글 정보에 추가
          };
        })
      );

      setCardDetails({
        ...cardData,
        cardStartTime: parseDateTime(cardData.cardStartTime),
        cardEndTime: parseDateTime(cardData.cardEndTime),
      });

      setComments(commentsWithNickname); // 닉네임이 추가된 댓글 정보를 상태에 저장
    } catch (error) {
      console.error('Error fetching card details and comments: ', error);
    }
  };
  const handleDeleteComment = async (commentId) => {
    try {
      // 서버에 DELETE 요청을 보냄
      await axios.delete(`http://localhost:3000/api/cards/${cardId}/comments/${commentId}`);
      // 요청 성공 후, 클라이언트 상태에서 해당 댓글을 제거하여 UI 업데이트
      setComments(comments.filter((comment) => comment.commentId !== commentId));
    } catch (error) {
      console.error('Error deleting comment: ', error);
    }
  };
  useEffect(() => {
    fetchCardAndCommentsDetails();
  }, [cardId]); // cardId가 변경될 때마다 정보를 다시 가져옵니다

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    try {
      // 여기에 댓글을 제출하는 API 호출 로직 구현
      const response = await axios.post(`http://localhost:3000/api/cards/${cardId}/comments`, {
        commentContent: newComment,
        // 필요한 추가 필드가 있다면 여기에 포함
      });

      // 댓글 제출 후 댓글 목록 새로고침
      fetchCardAndCommentsDetails(); // 댓글을 다시 불러옵니다
      setNewComment(''); // 입력 필드를 초기화합니다
    } catch (error) {
      console.error('Error submitting comment: ', error);
    }
  };
  // 댓글 수정 버튼 클릭 시 호출될 함수
  const handleEditComment = (commentId) => {
    // 수정할 댓글의 현재 내용 찾기
    const commentToEdit = comments.find((comment) => comment.commentId === commentId);
    if (commentToEdit) {
      setEditingCommentId(commentId);
      setEditingCommentContent(commentToEdit.commentContent); // 현재 댓글 내용으로 초기화
      setIsEditModalOpen(true); // 수정 모달 열기
    }
  };

  // 수정된 댓글을 서버에 저장하는 함수
  const saveEditedComment = async () => {
    if (editingCommentId && editingCommentContent.trim() !== '') {
      try {
        await axios.put(`http://localhost:3000/api/cards/${cardId}/comments/${editingCommentId}`, {
          commentContent: editingCommentContent, // API 요구사항에 따라 키 이름을 'commentContent'로 변경 가능성 있음
        });
        fetchCardAndCommentsDetails(); // 댓글 목록을 새로고침하여 변경사항 반영
        setIsEditModalOpen(false); // 모달 닫기
      } catch (error) {
        console.error('Error updating comment: ', error);
      }
    }
  };

  if (!cardDetails) return <div>Loading...</div>; // 카드 상세 정보가 없을 때 로딩 상태를 표시

  return (
    <div className="card-detail-container">
      <div className="card-detail-header">
        <h1>{cardDetails.cardTitle}</h1>
        <p>시작 시간: {formatCardTime(cardDetails.cardStartTime)}</p>
        <p>종료 시간: {formatCardTime(cardDetails.cardEndTime)}</p>
        <p>카드 상태: {formatCardState(cardDetails.cardStatus)}</p>
        <div className="card-content">{cardDetails.cardContent}</div>
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
            {comment.nickname} : {comment.commentContent}
            <button className="comment-edit-button" onClick={() => handleEditComment(comment.commentId)}>
              수정
            </button>
            <button className="comment-delete-button" onClick={() => handleDeleteComment(comment.commentId)}>
              삭제
            </button>
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

// 카드 상태 및 시간 포맷팅 함수는 여기에 구현하세요
// formatCardTime와 formatCardState 함수는 기존의 로직을 그대로 사용합니다
const parseDateTime = (isoString) => {
  const date = new Date(isoString);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1, // getMonth()는 0부터 시작하기 때문에 1을 더해줍니다.
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
};
const formatCardTime = (startTime) => {
  const { year, month, day, hour, minute } = startTime;
  return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
};

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
export default CardPage;
