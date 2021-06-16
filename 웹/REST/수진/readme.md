# REST 

### 1. REST란

#### 1.1 REST 정의

- 자원을 이름(자원의 표현)으로 구분하여 해당 자원의 상태(정보)를 주고 받는 모든 것을 의미한다.
- 즉, 자원(resource)의 표현(representation)에 의한 상태 전달
  - 자원의 표현
    - 자원 : 해당 소프트웨어가 관리하는 모든 것
    - ex) 문서, 그림, 데이터, 해당 소프트웨어 자체 등
    - 자원의 표현 : 그 자원을 표현하기 위한 이름
    - ex) DB의 학생 정보가 자원일 때, 'students'를 자원의 표현으로 정한다.
  - 상태 전달
    - 데이터가 요청되어지는 시점에서 자원의 상태(정보)를 전달한다.
    - JSON혹은 XML을 통해 데이터를 주고 받는 것이 일반적이다.
  - World Wide Web(www)과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 개발 아키텍처의 한 형식
    - REST는 기본적으로 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용하기 때문에 **웹의 장점을 최대한 활용할 수 있는 아키텍처 스타일이다.**
    - REST는 네트워크 상에서 Client와 Server 사이의 통신 방식 중 하나이다.



#### 1.2 REST의 구체적인 개념

- **HTTP URI(Uniform Resource Identifier)를 통해 자원을 명시하고, HTTP Method(POST, GET, PUL, DELETE)를 통해 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미한다.**
  
  - 즉, REST는 자원 기반의 구조(ROA, Rexource Oriented Architecture) 설계의 중심에 Resource가 있고 HTTP Method를 통해 Resource를 처리하도록 설계된 아키텍쳐를 의미한다.
  - 웹 사이트의 이미지, 텍스트, DB 내용 등의 모든 자원에 고유한 ID인 HTTP URI를 부여한다.
  
  

### 2. REST 구성 요소

1. 자원(Resource) : URI
   - 모든 자원에 고유한 ID가 존재하고, 이 자원은 Server에 존재한다.
   - 자원을 구별하는 ID는 `/groups/:group_id`와 같은 HTTP URI이다.
   - Client는 URI를 이용해서 자원을 지정하고 해당 자원의 상태(정보)에 대한 조작을 Server에 요청한다.
2. 행위: HTTP Method
   - HTTP 프로토콜의 Method를 사용한다.
   - HTTP 프로토콜은 GET, POST, PUT, DELETE와 같은 메서드를 제공한다.
3. 표현
   - Client가 자원의 상태에 대한 조작을 요청하면 Server는 이에 적절한 응답을 보낸다.
   - REST에서 하나의 자원은 JSON,XML,TEXT,RSS등 여러 형태의 표현으로 나타내어 질 수 있다.
   - JSON 혹은 XML를 통해 데이터를 주고 받는 것이 일반적이다.



### 3. REST API 개념

#### 3.1 REST API란

- API란

  - 데이터와 기능의 집합을 제공하여 컴퓨터 프로그램간 상호작용을 촉진하며, 서로 정보를 교환가능 하도록 하는 것

- REST API란

  - REST 기반으로 서비스 API를 구현한 것
  - 최근 Open API, 마이크로 서비스(하나의 큰 애플리케이션을 여러 개의 작은 애플리케이션으로 쪼개어 변경과 조합이 가능하도록 만든 아키텍처)등을 제공하는 업체 대부분은 REST API를 제공한다.

- REST API 특징

  - REST 기반으로 시스템을 분산해 확장성과 재사용성을 높여 유지부소 및 운용을 편리하게 할 수 있다. 
  - REST는 HTTP 표준을 기반으로 구현하므로, HTTP를 지원하는 프로그램 언어로 클라이언트, 서버를 구현할 수 있다. 

  

### 4. REST API 디자인 가이드

REST에서 가장 중요하며 기본적인 규칙 두가지

1. URI는 정보의 자원을 표현해야 한다.
2. 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE 등)으로 표현한다.

#### 4.1 REST API 중심 규칙

1. URI는 정보의 자원을 표현해야 한다. (리소스명은 동사보다는 명사를 사용)

   `GET / members/delete/1`

   위와 같은 방식은 REST를 제대로 적용하지 않은 URI이다. URI는 자원을 표현하는데 중점을 두어야 한다. `delete`와 같은 행위에 대한 표현이 들어가서는 안된다.

2. 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE 등)으로 표현

   위의 잘못 된 URI를 HTTP Method를 통해 수정하면

   `DELETE /members/1`

   회원정보를 가져오는 URI 

   `GET / members/show/1    (x)`

   `GET / members/1         (o)`

   회원을 추가할 때

   `GET / members/insert/2  (x)`

   `POST / members/2        (o)`



### 5. RESTful

#### 5.1 RESTful이란

 - RESTful은 일반적으로 REST라는 아키텍처를 구현하는 웹 서비스를 나타내기 위해 사용되는 용어이다. 
   	- 'REST API'를 제공하는 웹 서비스를 'RESTful'하다고 할 수 있다.
- RESTful은 REST를 REST답게 쓰기 위한 방법으로, 누군가가 공식적으로 발표한 것은 아니다.
  - 즉, REST 원리를 따르는 시스템은 RESTful일나 용어로 지칭된다.

#### 5.2 RESTful 목적

- 이해하기 쉽고 사용하기 쉬운 REST API를 만드는 것
- RSETful한 API를 구현하는 근본적인 목적이 성능 향상에 있는 것이 아니라 일관적인 컨벤션을 통한 API의 이해도 및 호환성을 높이는 것이 주 동기이니, 성능이 중요한 상황에서는 굳이 RESTful한 API를 구현할 필요는 없다.

#### 5.3 RESTful 하지 못한 경우

- CRUD 기능을 모두 POST로만 처리하는 API
- route에 resource, id외의 정보가 들어가는 경우 (`/students/updateName`)



[참고]

- https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html
- https://spoqa.github.io/2012/02/27/rest-introduction.html
- https://meetup.toast.com/posts/92

