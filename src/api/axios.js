import axios from 'axios';

// 공통으로 사용할 axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, // 모든 요청에 자동으로 쿠키를 포함시키도록 설정
});

export default axiosInstance;
