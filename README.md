## 💼프로젝트 소개

<img width="400" height = "300" alt="서비스" src="https://polished-shrew-581.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb0df0dc5-bcfc-4a5a-a31d-c0033437e6ca%2Fa2452049-dec1-458c-acea-3e7048290c74%2Flogo.png?table=block&id=6db8c49d-3b9e-45a7-90fc-17439d8b6d7e&spaceId=b0df0dc5-bcfc-4a5a-a31d-c0033437e6ca&width=250&userId=&cache=v2">

- 안녕하세요! 프로젝트 Trello는 실제 Trello 페이지를 모티프 삼아 페이지를 board, column, card로 분리해 일정을 정리하기 위한 앱입니다.

</br>

## 👀 링크

<table width="80%;">
  <tr align="center">
    <td><strong>구분</strong></td>
    <td><strong>링크</strong></td>
  </tr>
  <tr align="center">
    <td><img src="https://github.com/jovid18/project_trello_backend/assets/143411145/0b7f433b-19ad-413c-8242-cb650ff064f2" alt="트렐로 아이콘" style="width: 23px;"></td>
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.nodejstrello.site/">트렐로</a></td>
  </tr>
  <tr align="center">
    <td><img src="https://github.com/norwegianwood97/project_trello_backend_personal/blob/dev/icons/FeGithub.png" alt="FE Github 아이콘" style="width: 23px;"></td>
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/norwegianwood97/project_trello_frontend">FE Github</a></td>
  </tr>
  <tr align="center">
    <td><img src="https://github.com/norwegianwood97/project_trello_backend_personal/blob/dev/icons/BeGithub.png" alt="BE Github 아이콘" style="width: 23px;"></td>
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/jovid18/project_trello_backend">BE Github</td>
  </tr>
  <tr align="center">
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png" alt="노션 아이콘" style="width: 23px;"></td>
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="https://polished-shrew-581.notion.site/Trello-6db8c49d3b9e45a790fc17439d8b6d7e">브로슈어</a></td>
  </tr>
  <tr align="center">
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png" alt="노션 아이콘" style="width: 23px;"></td>
    <td><a target="_blank" rel="noopener noreferrer nofollow" href="https://maroon-yttrium-a81.notion.site/Trello-S-A-615eed4f4cd64174b58905f67efb2f99">팀 S.A</a></td>
  </tr>
</table>

</br>

## **🧑🏻‍💻 팀원 및 역할 분담**

|  이름  | 분담                                                                                                                                                                                                                                                                                  |
| :----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 정소이 | 유저 CRUD <br> 회원가입 및 로그인 기능 <br> 세션 이용 로그인 구현 <br> Docker 적용 <br> .env git-secret 연계 <br> github action ,aws ECR 이용 cd 구축 <br> passport.js 이용 구글 로그인 구현 <br> 회원가입시 인증 메일 기능 구현 <br> 메인페이지, 회원가입 페이지, 로그인 페이지 구현 |
| 조성현 | 카드 CRUD <br> 카드 페이지 구현 <br> 백 repository 관리 <br> 프론트 및 백 배포 (Vercel, EC2) <br> 도메인 생성 및 연결 (Gabia) <br> HTTP→HTTPS 초기 설정(route53, AWS certification) <br> CI 구축(JEST, eslint) <br> 이미지 업데이트 및 리사이징(S3, lambda) <br> Redis 세션 관리 적용 |
| 최준혁 | 보드 CRUD <br> 프론트 repository 관리 <br> Redis 세션 관리 적용 <br> 동시성 제어(transaction) - 상위 요소 생성시 하위요소 자동 생성 <br> 보드페이지 구현                                                                                                                              |
| 윤형식 | 컬럼 CRUD <br> 댓글페이지 생성,삭제,수정 <br> Socket.io 채팅 기능 구현 <br> 컬럼페이지 구현 <br> 채팅모달 구현                                                                                                                                                                        |

</br>

## 🗒️ 주요기능

**회원가입 및 로그인**

- 로컬로그인 뿐만 아니라 구글 로그인을 이용해 손쉽게 회원가입을 통해 서비스를 이용할 수 있습니다.

**실시간 채팅**

- 채팅방에 안에 room을 만들어 원하는 room에 입장후 같은 room에 있는 사람끼리 채팅이 가능합니다.

**프로젝트 관리**

- 보드/ 칼럼/ 카드와 같이 하위 분류에 따라 업무를 지정하고 관리할 수 있습니다.

</br>

## 🖊️ ERD 설계

<img width="1378" alt="서비스" src="https://polished-shrew-581.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb0df0dc5-bcfc-4a5a-a31d-c0033437e6ca%2F4b4b785f-9aca-44dc-818d-ca7c5875baf8%2FdrawSQL-image-export-2024-03-22.png?table=block&id=d8a40e64-d42d-4074-8136-366d13d5109c&spaceId=b0df0dc5-bcfc-4a5a-a31d-c0033437e6ca&width=1920&userId=&cache=v2">

</br>

## 🔍 서비스 아키텍처

<img width="1378" alt="서비스" src="https://polished-shrew-581.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb0df0dc5-bcfc-4a5a-a31d-c0033437e6ca%2F67a96870-dfb2-49d4-9442-7f69d8d79ddd%2Farchitecture.drawio.png?table=block&id=5be2cc70-f732-4d2a-a265-408319ae93c8&spaceId=b0df0dc5-bcfc-4a5a-a31d-c0033437e6ca&width=1920&userId=&cache=v2">

</br>

## 🗣️ 기술적 의사 결정

|    사용 기술    |                                                                                                                                                                                                                                                                            기술 설명                                                                                                                                                                                                                                                                             |
| :-------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     Node.JS     |                                                                                                                                                                                                                                       JavaScript를 이용하는 가장 대중적인 프레임워크인 Node.JS를 사용하기로 결정했습니다.                                                                                                                                                                                                                                        |
|      MySQL      |                                                                                                                                                                         MySQL은 사용자가 데이터베이스 솔루션을 무료로 개발하고 배포 할 수 있으며 ACID규악을 준수해 높은 신뢰성과 안정성을 보장하고, 또한 웹 애플리케이션에서 빠른 읽기와 쓰기속도 등 많은 장점을 가져서 사용하였습니다.                                                                                                                                                                          |
|     PRISMA      |                                                                                                                                                                                                                     프리즈마는 간단한 구문을 사용해 데이터 베이스를 다룰 수 있고 TypeScript를 지원하여 타입안정성을 보장하여 사용하였습니다.                                                                                                                                                                                                                     |
|      Redis      |                                                                                                                                                             Redis를 이용해 인메모리 캐싱 시스템을 사용하여 get 메소드와 같은 데이터 접근 메소드의 리소스 소모와 DB 서버의 부하를 줄이기 위해 사용했습니다. 이를 통해 데이터 접근 속도를 대폭 개선하고 전반적인 시스템 성능을 향상시킬 수 있었습니다.                                                                                                                                                             |
|     Docker      |                                                                                                                                                                                                Docker는 환경을 격리해줘서 EC2에 직접 서버를 배포하는 것과 비교했을때 보다 환경의 일관성과 이식성이 뛰어납니다. 또한, Docker 사용해 CD 과정을 진행 할 수 있습니다.                                                                                                                                                                                                |
|     argon2      |                                                                                                                                                                                                                                  기존에 사용하던 bycrypt보다 향상된 성능을 가지는 argon2를 채택하여 보안부분에 활용하였습니다.                                                                                                                                                                                                                                   |
| express-session |                                                                                 그동안 배운 JWT를 쓰려고 했지만 찾아보니 JWT는 토큰 탈취에 취약하다는 것을 알게 되었습니다 . 세션의 경우에는 모든 인증 정보를 세션에서 관리하기 떄문에 보안 측면에서 유리하고, 만약 세션이 탈취가 되어도 서버에서 해당 세션을 무효화 하면 되지만 토큰에는 정보가 다 들어있어서 해당 토큰을 무효화하더라도 정보 유출을 막을 수 없습니다. 이에 따라 보안성이 더 뛰어난 세션을 쓰기로 결정했습니다.                                                                                 |
|       ECR       |                                                                                                                   원할하게 작업에만 집중하기 위해서는 cd를 진행해 배포에 신경쓰지 않고 반복적인 작업을 최소화 해야 된다고 생각했습니다. 이에 따라 깃 액션을 통해 이미지를 도커 허브에 올리는 것을 먼저 계획하고 실행했으나 도커 허브는 모든 사람이 볼 수 있는 곳이기 때문에 보안이 우려되어 aws의 ECR로 이미지 올리는 곳을 바꾸게 되었습니다.                                                                                                                    |
|    Socket.io    | Socket.io를 선택한 주된 이유는 뛰어난 호환성, 이벤트 기반 통신 메커니즘, 그리고 고급 기능들 때문입니다. 특히, Socket.io는 웹소켓이 지원되지 않는 구형 브라우저와의 호환성을 보장하며, 네트워크 연결이 불안정할 때 자동으로 재연결하는 기능을 지원합니다. 이러한 자동 재연결 기능은 애플리케이션의 신뢰성과 사용자 경험을 크게 향상시킵니다. 또한, Socket.io의 Room과 네임스페이스 기능은 특정 사용자 그룹에게 메시지를 효율적으로 전달할 수 있게 해주어, 다중 사용자 채팅 애플리케이션과 같은 복잡한 실시간 애플리케이션을 구현할 때 매우 유용해 사용하였습니다. |
|   passport.js   |                                                                                                                                                   로컬에서 로그인을 진행하는 것과 달리 passport는 구글이나 카카오등 다양한 인증전략을 사용할 수 있습니다. 또한 인증과정에서 작성해야 하는 복잡한 로직을 간단하게 구현하도록 도와줍니다. 따라서 개발 편의성과 구글 로그인 구현을 위해 사용하기로 결정했습니다.                                                                                                                                                    |
| prettier/eslint |                                                                                                                                                                             각자 작성한 코드의 스타일을 일치시키기 위해 prettier를 사용하여 세미콜론, 줄 바꿈과 관련하여 자동으로 조정하고자 하였고, ESLint를 이용해 prettier의 스타일에 맞게 코드 스타일을 일치 시키게 하였습니다.                                                                                                                                                                              |
|  Github Action  |                                                                                                                                                          Github Action은 사용이 쉽고 복잡한 절차없이 GitHub를 사용할 수 있다는 장점이 있고 배포과정이 이미 구현되어 있는 다양한 종류의 템플릿을 제공합니다. 2주라는 짧은 시간안에 배울 수 있고 사용할 수 있는 GitHub Action을 사용하기로 결정했습니다.                                                                                                                                                           |

</br>

## ⁉️ 트러블 슈팅

<details>
  <summary><b>id 전달이 안되는 오류</b></summary>
  <div markdown="1">

```javascript
// 기존 코드
createBoard = async (boardData, { id }) => {
  const newBoardData = {
    ...boardData,
    userId: id,
    boardWriterId: id,
  };
  await this.boardRepository.createBoard(newBoardData);
  return '보드가 생성됐습니다.';
};
// 수정 코드
createBoard = async (boardData, id) => {
  const newBoardData = {
    ...boardData,
    userId: id,
    boardWriterId: id,
  };
  await this.boardRepository.createBoard(newBoardData);
  return '보드가 생성됐습니다.';
};
```

<ul>
기존에는 id를 객체로 받아 id가 undefined 되어 있었지만 이를 string id로 받게 함
</ul>
  </div>
</details>

<details>
  <summary><b>상위 라우터 params에 접근할 수 없는 오류 </b></summary>
  <div markdown="2">

```javascript
//card/card.router.js 기존
import express from 'express';
import { prisma } from '../../utils/prisma/index.js';
import { CardsRepository } from './card.repository.js';
import { CardsService } from './card.service.js';
import { CardsController } from './card.controller.js';
import authMiddleware from '../../middlewares/authMiddleware.js';
const router = express.Router();
const cardsRepository = new CardsRepository(prisma);
const cardsService = new CardsService(cardsRepository);
const cardsController = new CardsController(cardsService);

router.get('/', authMiddleware, cardsController.getCards);
router.post('/', authMiddleware, cardsController.createCard);
router.put('/:cardId', authMiddleware, cardsController.updateCard);
router.delete('/:cardId', authMiddleware, cardsController.deleteCard);

export default router;
```

<ul>
상위 라우터의 params에 접근하지 못하는 경우에는 router를 선언할 때 mergeParams:true를 넣어주면 된다.
</ul>

```javascript
//해결
import express from 'express';
import { prisma } from '../../utils/prisma/index.js';
import { CardsRepository } from './card.repository.js';
import { CardsService } from './card.service.js';
import { CardsController } from './card.controller.js';
import authMiddleware from '../../middlewares/authMiddleware.js';
const router = express.Router({ mergeParams: true });
const cardsRepository = new CardsRepository(prisma);
const cardsService = new CardsService(cardsRepository);
const cardsController = new CardsController(cardsService);

router.get('/', authMiddleware, cardsController.getCards);
router.post('/', authMiddleware, cardsController.createCard);
router.put('/:cardId', authMiddleware, cardsController.updateCard);
router.delete('/:cardId', authMiddleware, cardsController.deleteCard);

export default router;
```

  </div>
</details>

<details>
  <summary><b>Order 관리</b></summary>
  <div markdown="3">
 <ul>
순서를 업데이트 하는 경우 삽입으로 정의하였고, 계속해서 swap을 하는 으로 구현하였다.

</ul>

```javascript

/ 좌표압축 함수

Define func(컬럼)

// 컬럼 내 카드의 order를 좌표 압축

Complexity: O(nlogn)// 카드 생성

Create

If 컬럼 내 카드가 존재하지 않음

Set 카드 order = 1

Else

Set 카드 order = 컬럼 내 마지막 카드의 order + 1// 카드 업데이트

Update

If 카드의 칼럼 order를 수정

If 입력 columId가 존재하지 않음

Return 에러

Else

Set a = 변경하려는 칼럼의 마지막 카드 order + 1

Update 카드의 columId to 입력 columId

Update 카드의 order to a

Call func(본래 존재했던 컬럼)    Else if 카드의 카드 order를 수정

Set b = 카드의 카드 order 수정 요청 값

If b < a (a는 현재 칼럼의 마지막 카드 order)

a -> b로 가며 card order swap

Else

Set a = 현재 카드의 card order

Set b = min(수정 요청 카드 order, 컬럼 내 카드 order의 최댓값)

a -> b로 가며 card order swap// 나머지 사항들은 상황에 따라 수정// 카드 삭제

Delete

Delete 카드

Call func(칼럼)

```

  </div>
</details>

<details>
  <summary><b>쿠키 전송 오류 </b></summary>
  <div markdown="4">

<ul>
passport를 이용하여 로그인을 진행하였으나(데이터베이스에 user가 추가된 것 확인), 다른 페이지에서 authmiddleware를 통하지 못하는 상황 발생.
조사를 해보니 쿠키 전달과 관련하여 오류가 발생한 것으로 확인

**해결**
백엔드 에서는app.js 파일에서

</ul>

```javascript
//.js기존
app.use(cors());

//수정후
app.use(
  cors({
    origin: true, // 요청이 온 도메인을 허용
    credentials: true, // 쿠키를 포함한 요청을 허용
  })
);
```

<ul>
이렇게 바꾸면 서버가 클라이언트에서 보내는 쿠키를 포함한 요청을 허용
프론트에서는 쿠키를 보낼 수 있도록 axios 인스턴스를 정의하고
</ul>

```javascript
import axios from 'axios';

// 공통으로 사용할 axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // 모든 요청에 사용될 베이스 URL
  withCredentials: true, // 모든 요청에 자동으로 쿠키를 포함시키도록 설정
});

export default axiosInstance;
```

<ul>
다음과 같은 구조를 이용하고 그걸 page.js에서 불러와서 사용
</ul>

```javascript
import axios from '../api/axios.js';
```

  </div>
</details>

<details>
  <summary><b>프론트 배포 후 쿠키 전송 오류 </b></summary>
  <div markdown="5">

<ul>
백에서는 console로 쉽게 디버그를 할 수 있으므로 백은 로컬로(localhost:3000), 프론트는 vercel에서 진행하였으나 로컬에서는 잘되는 쿠키전송이  프론트 배포를 하니 되지 않았다.

**해결**

개발자 도구를 이용하여 찾아보니 아예 쿠키가 저장이 안되는 것을 확인

이 문제를 찾아보니 위의 동일 출처 정책의 일환으로 서로 다른 도메인에서는 쿠키가 공유가 안된다는 것이었다.

이를 해결하기 위해 서브 도메인을 이용해야한다고 한다.

예를 들어 프론트가 example.com 이면 백서버는 api.example.com으로 맞춰야 한다는 것이었다.

그렇게 되면 둘 간의 쿠키가 저장이 가능해진다.

</ul>
  </div>
</details>

<details>
  <summary><b>id 전달이 안되는 오류</b></summary>
  <div markdown="6">

<ul>
그러나 아직 쿠키가 해결되지 않았는데 그 이유는 현재 프론트는 vercel로 인해 https로 인증이 되었지만 백은 인증이 안됐기 때문에 http인 상황이었다. 이는 혼합컨텐츠 정책으로, 이떄 쿠키 전송이 안되게 된다.

- 해결

결국 백엔드 https 인증을 완료하였고, 통신 및 쿠키 전송이 잘되는 것을 확인하였다.

[트렐로 프로젝트 배포 (https 배포)](https://velog.io/@jovid18/트렐로-프로젝트-배포-https-배포)

</ul>
  </div>
</details>

<details>
  <summary><b>git pull을 해도 업데이트가 되지 않는 오류</b></summary>
  <div markdown="7">

<ul>
ubuntu bash에서 git pull을 해서 업데이트를 했음에도 내용 업데이트가 안되는 것을 확인 (api.nodejstrello.site의 메인 텍스트로 확인)

그래서 제가 계속 찾아본 결과 pm2 delete 0을 해서 pm2를 실행하지 않았음에도 불구하고 3000번 포트를 어떤 프로세스가 사용하고 있는 것을 확인

3000번 포트의 사용자가 root인걸 확인할 수 있었음.

확인해보니 이전에 sudo 상태에서 pm2를 설치하고 그 환경에서 pm2를 실행해서 root 사용자로 실행했던 것

해결

root 사용자로 바꿔서 pm2를 종료하였고 ubuntu환경에서 pm2로 실행하니 변경사항이 잘 반영 되는 것을 확인

  </div>
</details>

<details>
  <summary><b>mainPage에서 실행하지 않은 쿼리가 요청되는 오류</b></summary>
  <div markdown="8">

<ul>
mainPage에서 실행되지 않은 쿼리가 발생되었다.

그 이유는 board.router.js에서

get /api/boards/userboard

get /api/boards/:boardId 둘다 존재했고, 순서가 :boardId가 먼저 있는 상황이었다.

기존

</ul>

```javascript
router.get('/:boardId', authMiddleware, boardController.getBoardsId);
router.get('/userBoard', authMiddleware, boardController.findUserBoard);
```

<ul>
해결
</ul>

```javascript
router.get('/userBoard', authMiddleware, boardController.findUserBoard);
router.get('/:boardId', authMiddleware, boardController.getBoardsId);
```

  </div>
</details>

<details>
  <summary><b>Error: read ETIMEDOUT 에러</b></summary>
  <div markdown="9">

<ul>
실행 → 로그인 후 아무것도 하지 않고 서버만 열어놓기

최소시간 30분 부터 최대 3시간 후 Error: read ETIMEDOUT 발생

연결시간 종료 에러라고 함

이유는 passport.js 사용시 설정파일을 통해 passport.use을 정의하고 이를 app.js에 import해 적용해야 하는데

그동안은 단지 import만 해와서 세션이 연결이 안돠서 생겼던 문제

그래서 import만 하고 있던 것을 import후 적용시켜줌

전 : passport.js의 설정파일을 불러오기만 하고 적용시키지 못함

</ul>

```javascript
app.use(passport.initialize());
app.use(passport.session());
import '../config/passport.js';
```

<ul>
후: passport의 설정을 불러오고 적용시켜줌
</ul>

```javascript
import passportConfig from '../config/index.js';
// Passport 초기화 및 세션 사용
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);
```

  </div>
</details>

<details>
  <summary><b>ECR EOF에러</b></summary>
  <div markdown="10">

<ul>
도커이미지를 만들고 ECR에 푸시할때 ECR레포지토리를 찾지 못해 계속 찾다가 EOF에러 발생

이는 ECR레포지토리를 퍼블릭으로 만들었는데 깃액션에서 docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG 이렇게

ECR_REGISTRY에 login-ecr.outputs.registry를 지정하는데 이게 ECR프라이빗시 나오는 URL지정

레포지토리를 퍼블릭이 아닌 프라이빗으로 바꾸니 해결

</ul>
  </div>
</details>

<details>
  <summary><b>소켓 1대1 채팅 오류</b></summary>
  <div markdown="11">

```javascript
io.on('connection', async (socket) => {
  console.log('연결 성공!');
  const userId = socket.handshake.session.passport?.user;
  let userNickname = '익명';

  if (userId) {
    try {
      // 사용자 정보 조회
      const user = await prisma.user.findUnique({ where: { userId: +userId } });
      userNickname = user?.nickname ?? '익명';
    } catch (error) {
      console.error('사용자 정보 조회 중 오류 발생:', error);
    }
  }

  // 개인 메시지 전송 처리
  socket.on('private message', ({ recipientId, msg }) => {
    // recipientId는 메시지를 받을 대상의 사용자 ID
    const recipientSocket = findRecipientSocketById(recipientId); // 받는 사람의 소켓 ID를 찾는 함수, 이 부분이 가상 코드임
    if (recipientSocket) {
      io.to(recipientSocket).emit('private message', { msg: msg.text, from: userNickname });
      console.log(`Private message from ${userNickname} to recipient ID ${recipientId}: ${msg.text}`);
    } else {
      console.log(`Recipient (ID: ${recipientId}) not found or not connected.`);
    }
  });

  // 사용자 연결 해제 처리
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
```

<ul>
상대방이 온/오프라인여부를 확인하고 관리하는 로직이 복잡해지고 상대방이 오프라인일 때 귓속말을 어떻게 처리할지에 대한 추가적인 로직이 필요했습니다.
문제를 해결하기 위해 Socket.IO의 room 기능을 사용하기로 결정했다. Socket.IO의 room은 여러 소켓이 같은 '방'에 참여하여 메시지를 공유할 수 있게 해주는 기능으로, 1대1 채팅 뿐만 아니라 다수의 참여자가 있는 채팅방에도 적합하다. 이를 통해 서버의 구조를 단순화하고, 메시지 전송 로직을 효율적으로 관리할 수 있었다.

이후 고친 코드:

</ul>

```javascript
io.on('connection', async (socket) => {
  console.log('연결 성공!');
  const userId = socket.handshake.session.passport?.user;
  let userNickname = '익명';
  let currentRoom = 'main'; // 기본값으로 'main' 채팅방 설정

  if (userId) {
    try {
      // 사용자 정보 조회
      const user = await prisma.user.findUnique({ where: { userId: +userId } });
      userNickname = user?.nickname ?? '익명';
    } catch (error) {
      console.error('사용자 정보 조회 중 오류 발생:', error);
    }
  }

  // 사용자를 기본 채팅방에 입장시킴
  socket.join(currentRoom);

  // 방 입장 처리
  socket.on('join room', (roomName) => {
    socket.leave(currentRoom); // 현재 방에서 나감
    socket.join(roomName); // 새로운 방에 입장
    currentRoom = roomName;
    console.log(`${userNickname} entered ${roomName}`);
  });

  // 채팅 메시지 처리
  socket.on('chat message', (msg) => {
    io.to(currentRoom).emit('chat message', { msg: msg.text, user: userNickname, own: socket.id });
    console.log(`Message in ${currentRoom}: ${msg.text}`);
  });

  // 사용자 연결 해제 처리
  socket.on('disconnect', () => {
    console.log('User disconnected');
    socket.leave(currentRoom);
  });
});
```

  </div>
</details>
