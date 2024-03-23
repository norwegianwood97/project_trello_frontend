***
## 💼프로젝트 소개
<img width="1378" alt="서비스" src="https://polished-shrew-581.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb0df0dc5-bcfc-4a5a-a31d-c0033437e6ca%2Fa2452049-dec1-458c-acea-3e7048290c74%2Flogo.png?table=block&id=6db8c49d-3b9e-45a7-90fc-17439d8b6d7e&spaceId=b0df0dc5-bcfc-4a5a-a31d-c0033437e6ca&width=250&userId=&cache=v2">
- 안녕하세요! 프로젝트 Trello는 실제 Trello 페이지를 모티프 삼아 board, column, card로 분리해 일정을 정리하기 위한 앱입니다.


***

## 👀링크 

<table width="80%;">
  <tr align="center">
    <td><strong>구분</strong></td>
    <td><strong>링크</strong></td>
  </tr>
  <tr align="center">
    <td>배포 사이트</td>
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.nodejstrello.site/">배포 사이트</a></td>
  </tr>
  <tr align="center">
    <td>Frontend Github</td>
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/norwegianwood97/project_trello_frontend">Frontend Github</a></td>
  </tr>
  <tr align="center">
    <td>Backend Github</td>
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/jovid18/project_trello_backend">/a>Backend Github</td>
  </tr>
  <tr align="center">
    <td>공개 Notion</td>
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="https://polished-shrew-581.notion.site/Trello-6db8c49d3b9e45a790fc17439d8b6d7e">공개 Notion</a></td>
  </tr>
  <tr align="center">
    <td>팀 Notion</td>
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="https://maroon-yttrium-a81.notion.site/Trello-S-A-615eed4f4cd64174b58905f67efb2f99">팀 Notion</a></td>
  </tr>
</table>

</br>

***

## **🧑🏻‍💻팀원 및 역할 분담**

|이름|분담|
|:---:|:---|
|정소이| 유저 CRUD <br> 회원가입 및 로그인 기능 <br> 세션 이용 로그인 구현 <br> Docker 적용 <br> .env  git-secret 연계 <br> github action ,aws ECR 이용 cd 구축 <br> passport.js 이용 구글 로그인 구현 <br> 회원가입시 인증 메일 기능 구현 <br> 메인페이지, 회원가입 페이지, 로그인 페이지 구현|
|조성현| 카드 CRUD <br> 카드 페이지 구현 <br> 백 repository 관리 <br> 프론트 및 백 배포 (Vercel, EC2) <br> 도메인 생성 및 연결 (Gabia) <br> HTTP→HTTPS 초기 설정(route53, AWS certification) <br> CI 구축(JEST, eslint) <br> 이미지 업데이트 및 리사이징(S3, lambda) <br> Redis 세션 관리 적용
|최준혁|보드 CRUD <br> 프론트 repository 관리 <br> Redis 세션 관리 적용 <br> 동시성 제어(transaction) - 상위 요소 생성시 하위요소 자동 생성 <br> 보드페이지 구현 |
|윤형식|컬럼 CRUD <br> 댓글페이지 생성,삭제,수정 <br> Socket.io 채팅 기능 구현 <br> 컬럼페이지 구현 <br> 채팅모달 구현 |
***

## 🗒️ 주요기능


**회원가입 및 로그인**
- 로컬로그인 뿐만 아니라 구글 로그인을 이용해 손쉽게 회원가입을 통해 서비스를 이용할 수 있습니다.


**실시간 채팅**
- 채팅방에 안에 room을 만들어 원하는 room에 입장후 같은 room에 있는 사람끼리 채팅이 가능합니다.


**프로젝트 관리**
- 보드/ 칼럼/ 카드와 같이 하위 분류에 따라 업무를 지정하고 관리할 수 있습니다.



****

***

## 🖊️ERD 설계
<img width="1378" alt="서비스" src="https://polished-shrew-581.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb0df0dc5-bcfc-4a5a-a31d-c0033437e6ca%2F4b4b785f-9aca-44dc-818d-ca7c5875baf8%2FdrawSQL-image-export-2024-03-22.png?table=block&id=d8a40e64-d42d-4074-8136-366d13d5109c&spaceId=b0df0dc5-bcfc-4a5a-a31d-c0033437e6ca&width=1920&userId=&cache=v2">


