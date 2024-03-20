import axios from 'axios';

// 공통으로 사용할 axios 인스턴스 생성
const axiosInstance = axios.create({
  // 테스트 할때는 http://localhost:3000, 배포할때는 https://api.nodejstrello.site
  //baseURL: 'https://api.nodejstrello.site',
   baseURL: 'http://localhost:3000',
  withCredentials: true, // 모든 요청에 자동으로 쿠키를 포함시키도록 설정
});

export default axiosInstance;
