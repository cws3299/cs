#  CORS

### 🚩 CORS 정의(Cross Origin Resource Sharing)

W3C에서 서로 다른 Origin에서 리소스(Resource)를 공유 할 수 있도록 하기 위해 내놓은 정책이다. 서로 다른 Origin이라는 것은 도메인 혹은 포트가 다르다는 것을 의마하므로 서로 다른 주소 사이에서 데이터를 주고받을 수 있도록 하기 위한 정책이라고 할 수 있다. 



### CORS의 배경

CORS가 등장하게 된 이유는 Same-Origin Policy(동일 출처 정책) 때문이다. Same-Origin Policy는 어떤 출처에서 불러온 문서나 스크립트가 다른 출처에서 가져온 리소스와 상호작용하는 것을 제한하는 보완 방식을 의미한다. 즉, 서로 다른 Origin에서의 자원 공유를 보안상의 이슈로 인해 제한하는 것이다.

 

*Same-Origin Policy (SOP): 웹 브라우저 보안을 위해 프로토콜, 호스트, 포트가 동일한 서버로만 ajax요청을 주고받을 수 있도록 한 정책



Same-Origin Policy를 적용하게 되면 다른 Origin에서의 자원 요청이 불가능해지기 때문에 공격받을 수 있는 경로를 제한하고, 잠재적으로 해로울 수 있는 문서들을 분리 할 수 있기 때문에 보안상의 이점을 얻을 수 있다.



하지만 SPA(Single Page Application)의 등장으로 클라이언트와 서버의 도메인을 따로 유지하는 경우가 자주 생기고 외부 API를 앱 내에 연동하여 사용하는 경우 앱과 외부 API의 Origin이 다르기 때문에 Same-Origin Policy에 의해 자원공유를 할 수 없는 상황이 생기게 된다. 



기본적으로 HTML파일은 CORS정책을 따르도록 되어 있다. 따라서 추가적인 설정이 없어도 HTML <link>태크를 통해 다른 HTML문서로 이동하거나 CSS파일의 정보를 가져오는 것이 가능하다.



하지만 <script>태크 내에 있는 HTTP 요청등은 기본적으로 Same-Origin Policy를 따르도록 되엉 있다. 따라서 따로 CORS정책을 허가하는 조건들을 추가해주어야 다른Origin과의 자원 공유가 가능하다. 



### 🚩CORS 설정방법(Express)

1. 서버단에서 특정 도메인에서의 요청을 허용한다.

   Express 서버에서 API의 응답 헤더에 "Access-Control-Allow-Origin" 값을 넣어 CORS정책을 따를수 있다. 

   모든 Origin에서의 요청을 허용할 수 있고, 특정 Origin에서의 요청만 허용할 수도 있다. 

   하지만 이 방법은 API에 대해서 개별적으로 적용되는 사항이기 때문에, 모든 API에 일일히 대응해주어야 한다는 단점 때문에 실제로는 아래 2번방법을 더 선호한다. 

2. Node.js Express 미들웨어 CORS

   CORS라이브러리를 Express 서버에 설치해서 사용한다. 

   ```bash
   npm i cors --save
   ```

   ```javascript
   const express = require('express');
   const cors = require('cors');
   const app = express();
   app.use(cors()); <!-- 모든 Origin에서의 요청을 허용하므로, 특정 Origin을 제한하고 싶을 경오 Option들을 추가하면 된다.  -->
   ```



### 🚩 동작 방법

Cross Origin에서 자원을 요청하기 위해서는 다음과 같은 과정을 거친다.

1. HTTP 통신 헤더인 Origin 헤더에 요청을 보내는 곳의 정보를 담고 서버로 요청.
2. 이후 서버는 Access-Control-Allow-Origin헤더에 허용된 Origin이라는 정보를 담아 보낸다.
3. 클라이언트는 헤더의 값과 배교해 정상 응답임을 확인하고 지정된 요청을 보낸다.
4. 서버는 요청을 수행하고 200ok 코드를 응답한다.





[참고]

- https://yeoulcoding.tistory.com/96
- https://wonit.tistory.com/307