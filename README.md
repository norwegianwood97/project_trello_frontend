
## 💼프로젝트 소개

<img width="800" height = "500" alt="서비스" src="https://polished-shrew-581.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb0df0dc5-bcfc-4a5a-a31d-c0033437e6ca%2Fa2452049-dec1-458c-acea-3e7048290c74%2Flogo.png?table=block&id=6db8c49d-3b9e-45a7-90fc-17439d8b6d7e&spaceId=b0df0dc5-bcfc-4a5a-a31d-c0033437e6ca&width=250&userId=&cache=v2">

- 안녕하세요! 프로젝트 Trello는 실제 Trello 페이지를 모티프 삼아 board, column, card로 분리해 일정을 정리하기 위한 앱입니다.



## 👀 링크 

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
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/jovid18/project_trello_backend">Backend Github</td>
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



## **🧑🏻‍💻 팀원 및 역할 분담**

|이름|분담|
|:---:|:---|
|정소이| 유저 CRUD <br> 회원가입 및 로그인 기능 <br> 세션 이용 로그인 구현 <br> Docker 적용 <br> .env  git-secret 연계 <br> github action ,aws ECR 이용 cd 구축 <br> passport.js 이용 구글 로그인 구현 <br> 회원가입시 인증 메일 기능 구현 <br> 메인페이지, 회원가입 페이지, 로그인 페이지 구현|
|조성현| 카드 CRUD <br> 카드 페이지 구현 <br> 백 repository 관리 <br> 프론트 및 백 배포 (Vercel, EC2) <br> 도메인 생성 및 연결 (Gabia) <br> HTTP→HTTPS 초기 설정(route53, AWS certification) <br> CI 구축(JEST, eslint) <br> 이미지 업데이트 및 리사이징(S3, lambda) <br> Redis 세션 관리 적용
|최준혁|보드 CRUD <br> 프론트 repository 관리 <br> Redis 세션 관리 적용 <br> 동시성 제어(transaction) - 상위 요소 생성시 하위요소 자동 생성 <br> 보드페이지 구현 |
|윤형식|컬럼 CRUD <br> 댓글페이지 생성,삭제,수정 <br> Socket.io 채팅 기능 구현 <br> 컬럼페이지 구현 <br> 채팅모달 구현 |


## 🗒️ 주요기능


**회원가입 및 로그인**
- 로컬로그인 뿐만 아니라 구글 로그인을 이용해 손쉽게 회원가입을 통해 서비스를 이용할 수 있습니다.


**실시간 채팅**
- 채팅방에 안에 room을 만들어 원하는 room에 입장후 같은 room에 있는 사람끼리 채팅이 가능합니다.


**프로젝트 관리**
- 보드/ 칼럼/ 카드와 같이 하위 분류에 따라 업무를 지정하고 관리할 수 있습니다.



## 🖊️ ERD 설계
<img width="1378" alt="서비스" src="https://polished-shrew-581.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb0df0dc5-bcfc-4a5a-a31d-c0033437e6ca%2F4b4b785f-9aca-44dc-818d-ca7c5875baf8%2FdrawSQL-image-export-2024-03-22.png?table=block&id=d8a40e64-d42d-4074-8136-366d13d5109c&spaceId=b0df0dc5-bcfc-4a5a-a31d-c0033437e6ca&width=1920&userId=&cache=v2">


## 🔍 서비스 아키텍처
<img width="1378" alt="서비스" src="https://polished-shrew-581.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb0df0dc5-bcfc-4a5a-a31d-c0033437e6ca%2F67a96870-dfb2-49d4-9442-7f69d8d79ddd%2Farchitecture.drawio.png?table=block&id=5be2cc70-f732-4d2a-a265-408319ae93c8&spaceId=b0df0dc5-bcfc-4a5a-a31d-c0033437e6ca&width=1920&userId=&cache=v2">








## 🗣️ 기술적 의사 결정

|사용 기술|기술 설명|
|:---:|:---:|
|Node.JS| JavaScript를 이용하는 가장 대중적인 프레임워크인 Node.JS를 사용하기로 결정했습니다.|
|MySQL| MySQL은 사용자가 데이터베이스 솔루션을 무료로 개발하고 배포 할 수 있으며 ACID규악을 준수해 높은 신뢰성과 안정성을 보장하고, 또한 웹 애플리케이션에서 빠른 읽기와 쓰기속도 등 많은 장점을 가져서 사용하였습니다.|
|PRISMA| 프리즈마는 간단한 구문을 사용해 데이터 베이스를 다룰 수 있고 TypeScript를 지원하여 타입안정성을 보장하여 사용하였습니다.|
|Redis| Redis를 이용해 인메모리 캐싱 시스템을 사용하여 get 메소드와 같은 데이터 접근 메소드의 리소스 소모와 DB 서버의 부하를 줄이기 위해 사용했습니다.  이를 통해 데이터 접근 속도를 대폭 개선하고 전반적인 시스템 성능을 향상시킬 수 있었습니다.|
|Docker| Docker는 환경을 격리해줘서 EC2에 직접 서버를 배포하는 것과 비교했을때 보다 환경의 일관성과 이식성이 뛰어납니다. 또한, Docker 사용해 CD 과정을 진행 할 수 있습니다.|
|argon2| 기존에 사용하던 bycrypt보다 향상된 성능을 가지는 argon2를 채택하여 보안부분에 활용하였습니다.|
|express-session| 그동안 배운 JWT를 쓰려고 했지만 찾아보니 JWT는 토큰 탈취에 취약하다는 것을 알게 되었습니다 . 세션의 경우에는 모든 인증 정보를 세션에서 관리하기 떄문에 보안 측면에서 유리하고, 만약 세션이 탈취가 되어도 서버에서 해당 세션을 무효화 하면 되지만 토큰에는 정보가 다 들어있어서 해당 토큰을 무효화하더라도 정보 유출을 막을 수 없습니다. 이에 따라 보안성이 더 뛰어난 세션을 쓰기로 결정했습니다.|
|ECR| 원할하게 작업에만 집중하기 위해서는 cd를 진행해 배포에 신경쓰지 않고 반복적인 작업을 최소화 해야 된다고 생각했습니다. 이에 따라 깃 액션을 통해 이미지를 도커 허브에 올리는 것을 먼저 계획하고 실행했으나 도커 허브는 모든 사람이 볼 수 있는 곳이기 때문에 보안이 우려되어 aws의 ECR로 이미지 올리는 곳을 바꾸게 되었습니다.|
|Socket.io| Socket.io를 선택한 주된 이유는 뛰어난 호환성, 이벤트 기반 통신 메커니즘, 그리고 고급 기능들 때문입니다. 특히, Socket.io는 웹소켓이 지원되지 않는 구형 브라우저와의 호환성을 보장하며, 네트워크 연결이 불안정할 때 자동으로 재연결하는 기능을 지원합니다. 이러한 자동 재연결 기능은 애플리케이션의 신뢰성과 사용자 경험을 크게 향상시킵니다. 또한, Socket.io의 Room과 네임스페이스 기능은 특정 사용자 그룹에게 메시지를 효율적으로 전달할 수 있게 해주어, 다중 사용자 채팅 애플리케이션과 같은 복잡한 실시간 애플리케이션을 구현할 때 매우 유용해 사용하였습니다.|
|passport.js| 로컬에서 로그인을 진행하는 것과 달리 passport는 구글이나 카카오등 다양한 인증전략을 사용할 수 있습니다. 또한 인증과정에서 작성해야 하는 복잡한 로직을 간단하게 구현하도록 도와줍니다. 따라서 개발 편의성과 구글 로그인 구현을 위해 사용하기로 결정했습니다.|
|prettier/eslint| 각자 작성한 코드의 스타일을 일치시키기 위해 prettier를 사용하여 세미콜론, 줄 바꿈과 관련하여 자동으로 조정하고자 하였고, ESLint를 이용해 prettier의 스타일에 맞게 코드 스타일을 일치 시키게 하였습니다.|
|Github Action| Github Action은 사용이 쉽고 복잡한 절차없이 GitHub를 사용할 수 있다는 장점이 있고 배포과정이 이미 구현되어 있는 다양한 종류의 템플릿을 제공합니다. 2주라는 짧은 시간안에 배울 수 있고 사용할 수 있는 GitHub Action을 사용하기로 결정했습니다.|
