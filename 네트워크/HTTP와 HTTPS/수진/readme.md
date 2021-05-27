## HTTP와 HTTPS

### 1. HTTP

> HTTP(Hyper Text Transfer Protocol)는 www상에서 정보를 주고 받는 프로토콜이다. 

클라이언트인 웹브라우저가 서버에 HTTP를 통해 웹페이지나 이미지 정보를 요청하면 서버는 이 요총에 응답하여 요구하는 정보를 제공하게 된다.

HTTP는 웹브라우저(Client) 와 서버(Server)간의 웸페이지같은 자원을 주고 받을 때 쓰는 통신 규약이다.

HTTP는 텍스트 교환이다. 단순 텍스트를 주고 받기 때문에 누군가 네트워크에서 신호를 가로채어 본다면 내용이 노출된다. (보안성 X)



### 2. HTTPS

> HTTPS(Hyper Text Trnasfer Protocol Over Secure Socket Layer)는 인터넷 상에서 정보를 암호화하는 SSL(Secure Socket Layer)프로토콜을 이용하여 웹브라우저(Client)와 서버(Server)가 데이터를 주고 받는 통신 규약.

HTTP 메세지(text)를 암호화하고 공개키 암호화 방식을 사용한다.

*공개키 : 암호화와 복호화에 사용하는 암호키를 분리한 알고리즘



### 3. HTTPS와 HTTP

- HTTP는 암호화가 추가되지 않았기 때문에 보안에 취약
- HTTPS는 안전하게 데이터를 주고받을 수 있다.(보안성)
- HTTPS를 이용하면 암/복호화의 과정이 필요하기 때문에 HTTP 보다 속도가 느리다. 
- HTTPS는 인증서를 발급받고 유지하기 위한 추가 비용이 발생한다.
- 개인 정보와 같은 민감한 데이터를 주고받을 때는 HTTPS를 사용
- 단순한 정보 조회 등만을 처리 할때는 HTTP를 사용

=> 최근 하드웨어의 발달로 인해 HTTPS를 사용하더라도 속도 저하가 거의 일어나지 않는다. 새로운 표준인 HTTP 2.0을 함께 이용한다면 오히려 HTTPS가 HTTP보다 더 빠르게 동작한다. 또한 현재 모든 웹 페이지에서 HTTPS를 적용하는 방향으로 바뀌어가고 있다. 





[참고]

- https://mangkyu.tistory.com/98

- https://jeong-pro.tistory.com/89