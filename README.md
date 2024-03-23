***
## 💼프로젝트 소개

<img width="1378" height = "500" alt="서비스" src="https://polished-shrew-581.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb0df0dc5-bcfc-4a5a-a31d-c0033437e6ca%2Fa2452049-dec1-458c-acea-3e7048290c74%2Flogo.png?table=block&id=6db8c49d-3b9e-45a7-90fc-17439d8b6d7e&spaceId=b0df0dc5-bcfc-4a5a-a31d-c0033437e6ca&width=250&userId=&cache=v2">

- 안녕하세요! 프로젝트 Trello는 실제 Trello 페이지를 모티프 삼아 board, column, card로 분리해 일정을 정리하기 위한 앱입니다.


***

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

***

## **🧑🏻‍💻 팀원 및 역할 분담**

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
|ECR| 원할하게 작업에만 집중하기 위해서는 cd를 진행해 배포에 신경쓰지 않고 반복적인 작업을 최소화 해야 된다고 생각했습니다. 이에 따라 깃 액션을 통해 이미지를 
도커 허브에 올리는 것을 먼저 계획하고 실행했으나 도커 허브는 모든 사람이 볼 수 있는 곳이기 때문에 보안이 우려되어 aws의 ECR로 이미지 올리는 곳을 바꾸게 되었습니다.|
|Socket.io| Socket.io를 선택한 주된 이유는 뛰어난 호환성, 이벤트 기반 통신 메커니즘, 그리고 고급 기능들 때문입니다. 특히, Socket.io는 웹소켓이 지원되지 않는 구형 브라우저와의 호환성을 보장하며, 네트워크 연결이 불안정할 때 자동으로 재연결하는 기능을 지원합니다. 이러한 자동 재연결 기능은 애플리케이션의 신뢰성과 사용자 경험을 크게 향상시킵니다. 또한, Socket.io의 Room과 네임스페이스 기능은 특정 사용자 그룹에게 메시지를 효율적으로 전달할 수 있게 해주어, 다중 사용자 채팅 애플리케이션과 같은 복잡한 실시간 애플리케이션을 구현할 때 매우 유용해 사용하였습니다.|
|passport.js| 로컬에서 로그인을 진행하는 것과 달리 passport는 구글이나 카카오등 다양한 인증전략을 사용할 수 있습니다. 또한 인증과정에서 작성해야 하는 복잡한 로직을 간단하게 구현하도록 도와줍니다. 따라서 개발 편의성과 구글 로그인 구현을 위해 사용하기로 결정했습니다.|
|prettier/eslint| 각자 작성한 코드의 스타일을 일치시키기 위해 prettier를 사용하여 세미콜론, 줄 바꿈과 관련하여 자동으로 조정하고자 하였고, ESLint를 이용해 prettier의 스타일에 맞게 코드 스타일을 일치 시키게 하였습니다.|
|Github Action| Github Action은 사용이 쉽고 복잡한 절차없이 GitHub를 사용할 수 있다는 장점이 있고 배포과정이 이미 구현되어 있는 다양한 종류의 템플릿을 제공합니다. 2주라는 짧은 시간안에 배울 수 있고 사용할 수 있는 GitHub Action을 사용하기로 결정했습니다.|
***

## ⁉️ 트러블 슈팅

<details>
  <summary><b>1. NGINX ERROR & EC2 메모리 문제</b></summary>
  <div markdown="1">
    <ul>
      <li>1-1 : Typescript 사용시 웹 브라우저가 TS 파일을 읽지 못해 배포 환경에서 tsc -w 를 사용하여 TS 파일을 JS 파일로 변환시 EC2 서버의 메모리가 부족해 변환을 하지 못하는 문제 발생 → </li>
      <li>1-2 : EC2 메모리를 t2.micro 에서 small로 변환 으로 해결 → </li>
       <li>2-1 : IP 주소가 바뀌어 연결해 놓은 도메인에 접근을 하지 못하는 상황 발생 </li>
       <li>2-2 : 재 설정된 IP 주소로 가비아 및 NGINX 에 적용 후에 다시 시도 → Permission denied 라는 NGNIX 에러 발생 → 구글링 결과 /xxx/xxx/bulid/index.html, failed 라는 경로에 해당 권한이 없어 접근 하지 못하는 것 이라는 정보 를 얻고 → </li>
       <li>2-3 :  NGINX 에서 root 으로 설정한 디렉토리 경로의 권한 을 확인하고 → </li>
       <li>2-4 : 해당 유저 그룹을 /etc/nginx/nginx.conf 에서 일치 시키며 에러를 해결. </li>
       <li><img width="811" alt="해당룻" src="https://github.com/puru-puru/puru-puru-BE/assets/152770526/1fe7a8ef-81b1-40ad-889d-9b58f99b29cc">
</li>
       <li>2-5 : 유저 그룹을 파악 하고  /etc/nginx/nginx.conf 에서 일치 시키며 해결.</li>
       <li><img width="811" alt="해결" src="https://github.com/puru-puru/puru-puru-BE/assets/152770526/5deaf9e7-4be0-4cec-823c-affe1a377221">
</li>
    </ul>
  </div>
</details>

<details>
  <summary><b>2. NGINX 초기 세팅 오류 </b></summary>
  <div markdown="2">
    <ul>
      <li>1-1 : 엔지닉스를 사용하여 로드밸런싱을 구축 하기 전 파일 백업 하는과정 →
cp -rvf ngnix nginx_bak 하는 과정에 → Permission denied 가 출력이 되었음. → </li>
      <li>1-2 : 구글링 결과 ( 스택 오버 플로우 )
nginx소유한 ngnix 프로세스에서 생성된 로그 파일을 볼 수 있는 권한이 없기 때문에 표시됩니다 라는 정보를 얻고 → </li>
       <li>1-3 : 앞에 sudo 를 붙여 권한을 변경 함으로 해당 문제 해결.</li>
       <li><img width="682" alt="첫 문제 해결" src="https://github.com/puru-puru/puru-puru-BE/assets/152770526/db502d6c-772a-441c-9e35-23ec02733717">
</li>
       <li>1-4 : 이후 진행을 해보려 했을때 지속 되는 nginx -t 테스트 명령어 실패, 및 권한 오류 발생 → </li>
       <li>1-5 : 구글링 결과 ( 스택 오버 플로우 )→ <br><br> 1. 구성에서 가져온 파일 내부에 오타가 있을 수 있습니다. <br><br>
2. 공식 Nginx CookBook의 최신 버전에 따르면, 우리는 내부에서 어떤 구성도 생성할 필요가 없습니다. `/etc/nginx/sites-enabled/`이것은 이전 관행이었으며 현재는 더 이상 사용되지 않습니다. <br><br>
3. nginx.conf 파일 내부중 내용을 
`include /etc/nginx/conf.d/includes-optional/cpanel-proxy-vendors/*.conf;` 으로 교체 하여도 지속된 오류 발생 <br> </li>
       <li>1-6 : 많은 과정을 거쳤으나. 도출된 결과는 기본적으로 NGNIX 초기 세팅 부분에서 잘못되었고 → 이후 다시 NGINX 초기 세팅 마무리 후.→ </li>
      ``` 
      
      upstream myserver {
        server xxx.xx.x.xxx:xxx; <-- 프라이빗 ip 
        server xxx.xx.xx.x:xxx; <-- 프라이빗 ip 
    }

    server {
          listen 80;
          server_name xxx.xxxxx.xxx;<-- 내가 연결할 도메인. 입력


        location / {
          proxy_pass http://myserver;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header Host $http_host;
      }
    } 
    ```
  <li>1-7: 해당 방식으로 처음 부터 로드밸런싱을 진행할 IP 및 도메인을 미리 입력하고 certbot --nginx 명령어를 통해서 서브 서버로 사용할 주소 까지 certbot 에서 자동으로 입력하여 해결 할 수 있었음.</li>  
  </ul>
  </div>
</details>

<details>
  <summary><b>3. Saving priority 문제 </b></summary>
  <div markdown="3">
    <ul>
      <li>문제</li>
      <li>두 개의 api인 ‘나의 반려 식물 일지 등록’과 해당 일지에 ‘식물 등록’가 있다.</li>
      <li>이 둘이 합쳐져 ‘식물 일지’ 데이터가 형성되는게 기본 방침</li>
      <li>첫 번째 api인 ‘나의 반려 식물 일지 등록’만 했을 데이터가 완성되지 않을 채 생기고 저장된다는 버그가 발생했다.</li>
      <br><br>
      <li>시도 방법</li>
      <li>구글과 chatGPT에 여러 질문을 문의하였는데, 두 개의 post 하는 api에서 두 번째 api가 실행될 때 최종적으로 1, 2번째에서 수신한 데이터가 최종적으로 저장되게 하는 가능성에 대한 것이었다.</li>
      <li>GPT가 추천하는 transaction을 이용하여 처음에 비즈니스 로직을 구성을 하였는데, 정확한 원리는 잘 모르고, 클론코딩을 하는 방식으로 작성해서 인지 부족함을 느꼈다. 또한 해당 코딩은 작동하지 않았다.</li>
      <li>3계층 아키텍처를 이용하는 만큼, 레포지토리의 로직을 따로 빼와서 사용할 수 있는 방법이 있을까 고안을 해보았으나, 첫 번째에서 두 번째 api로 넘어가면서 입력 받은 데이터가 날아갈 수 있다는 위험이 있었다.</li>
      <br><br>
      <li>해결</li>
      <li>deletedAt의 활용. 현 비즈니스 로직을 멘토님 권고사항에 따라 물리적으로 삭제가 되는 것이 아닌 deletedAt의 값이 null에서 값을 넣는 것으로 처리하고 있는 만큼, 이를 활용하고자 했다.</li>
      <li>먼저 첫 번째 api로 인해 생성된 데이터는 deletedAt의 값을 자동으로 넣게 한 다음, 두 번째 api로 건너가 사용자가 성공적으로 데이터를 입력해서 받을 경우, deletedAt의 값을 다시 null 처리를 하여 사용자에게 보여지게 하는 방식을 선택하였다.</li>
      <li>만약 첫 번째 api만 거친 미완성 데이터는 db상 보관하더라도 deletedAt의 값이 null이 아니므로 사용자에게는 해당 데이터가 보이지 않는다.</li>
  </ul>
  </div>
</details>

***

## 👍 유저 피드백 & 반영

<details>
  <summary><b>✅(User) 회원가입 시 비밀번호에 특수문자를 기입한 뒤 가입하면 ‘회원가입 실패’ 에러 반환</b></summary>
  <div markdown="3">
    <ul>
      <li>1. 사용자 로컬 가입시에 비밀번호에 특수 문자를 넣는다는걸 고려 하지 못하여 유효성에 추가를 하지 않았음.<br>  2. 현재는 비밀번호 입력시에 특수 문자도 넣을 수 있도록 유효성 수정. </li>
    </ul>
  </div>
</details>

<details>
  <summary><b>✅(User) 회원가입 시 이메일 형식이 아니면 가입이 불가능한데, 형식이 맞지 않다는 에러핸들링 추가해주세요</b></summary>
  <div markdown="4">
    <ul>
      <li>1. 기존에는 test@test.com 을 입력을 해도 가입이 되는 경우... 발생..<br> 2. 도메인 유효성을 추가 및 수정 함 으로 해결. </li>
    </ul>
  </div>
</details>

<details>
  <summary><b>✅(Main) 이달의 추천 식물이 접속할 때마다 변경이 되요. 일관성을 가질 수 있도록 해주세요</b></summary>
  <div markdown="5">
    <ul>
      <li>1. 기존에는 식물 db에서 라우트를 호출 할 때마다 랜덤으로 식물을 추첨해 보내주는 식이었음 → 새롭게 접속할 때마다 새로운 식물이 화면에 뿌려짐 <br> 2. 추천 식물을 뿌려주는 별도의 db를 만들도 cronjob을 사용해 1달 주기로 새로운 식물이 들어오고, 기존 식물은 deletedAt 처리를 하여는 방식으로 변경.</li>
    </ul>
  </div>
</details>

<details>
  <summary><b>✅(Board) 커뮤니티에서 글을 작성할 때 공백으로만 입력해도 글이 작성됩니다.</b></summary>
  <div markdown="6">
    <ul>
      <li>1. 유효성 검사를 충분히 하지 못해서 공백 으로만 입력 해도 작성이 되는 경우 발생.<br> 2. 현재는 글 작성 부분 유효성을 추가 및 수정 하여 제목은 최소 2자 이상 내용은 5자 이상으로 수정 </li>
    </ul>
  </div>
</details>

<details>
  <summary><b>✅(Board) 커뮤니티에서 최신글이 가장 최상단으로 가게끔 위치하게 해주세요.</b></summary>
  <div markdown="7">
    <ul>
      <li>1. 보드쪽 부분에 order: [['createdAt', 'DESC']] 을 추가 함으로 수정 </li>
    </ul>
  </div>
</details>

<details>
  <summary><b>✅(Plant) 나무를 검색했을 때 이미지가 엑스박스로 뜹니다.</b></summary>
  <div markdown="8">
    <ul>
      <li>1. 식물 데이터 상에서 이미지가 안나오는 파일이 있기에 검수 및 수정. </li>
    </ul>
  </div>
</details>

<details>
  <summary><b>✅(Plant) 이미지를 불러올 수 없는 경우 기본이미지가 있는게 좋을 것 같습니다.</b></summary>
  <div markdown="9">
    <ul>
      <li>1. 기본 이미지를 넣을 수 있는 모델을 만들어 수정. </li>
    </ul>
  </div>
</details>

***
