## DNS

> DNS(Domain Name System)은 호스트의 도메인 이름을 호스트의 네트워크 주소로 바꾸거나 그 반대의 변환을 수행할 수 있도록 하기 위해 개발되었다.

- `www.example.com`과 같이 사람이 읽을 수 있는 이름을 `192.0.2.1`과 같은 숫자 IP 주소로 변환하여 컴퓨터가 서로 통신할 수 있도록 한다.
- 인터넷의 DNS 시스템은 이름과 숫자 간의 매핑을 관리하여 마치 전화번호부와 같은 기능
- DNS 서버는 이름에 대한 요청을 IP주소로 변환하여 최종 사용자가 도메인 이름을 웹 브라우저에 입력할 때 해당 사용자를 어떤 서버에 연결할 것인지를 제어한다. 이 요청을 쿼리라고 한다.

### Domain 구조

- 인터넷상에서 사용되는 도메인은 전 세계적으로 고유하게 존재하는 이름
- 정해진 규칙 및 체계에 따라야 하며, 임의로 변경되거나 생성될 수 없음
- 인터넷상의 모든 도메인은 `.(dot)` 또는 `루트(root)`라 불리는 도메인 아래에 그람과 같이 나무를 거꾸로 위치시킨 역트리 구조로 계층적으로 구성되어 있다.
- 루트 도메인 바로 아래의 단계를 1단계 도메인 또는 최상위도메인(TLD, Top-Level Domain)이라고 부르며, 그 다음 단계를 2단계 도메인(SLD, Second Level Domain)이라고 함
- 도메인은 일반최상위도메인(gTLD: Generic Top Level Domain)과 국가최상위도메인(ccTLD: Country Code Top Level Domain)로 구분할 수 있으며 여기서 일반최상위도메인은 다시 스폰서도메인(Sponsored TLD)과 언스폰서도메인(Unsponsored TLD)로 구분된다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcgbedZ%2FbtqDcys1quP%2FLxsyP81Uw67vK6YeKtjNEK%2Fimg.png)

### DNS 작동원리

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fuhbu7%2FbtqDdG49oE7%2F5wIVgki8Uq7JVl9wBVAP10%2Fimg.png)


1. 웹 브라우저에 `www.naver.com`을 입력하면 먼저 Local DNS에게 `www.naver.com`이라는 hostname에 대 한 IP주소를 질의하여 Local DNS에 없으면 다른 DNS name 서버 정보를 받음 (Root DNS 정보 전달 받음)
2. Root DNS 서버에 `www.naver.com` 질의
3. Root DNS 서버로부터 `com 도메인` 을 관리하는 TLD(Top-Level Domain) 이름 서버 정보 전달 받음
4. TLD에 `www.naver.com`질의
5. TLD에서 `www.naver.com`관리하는 DNS 정보 전달
6. `naver.com` 도메인을 관리하는 DNS 서버에 `www.naver.com`호스트네임에 대한 IP 주소 질의
7. Local DNS 서버에게 `www.naver.com`에 대한 IP 주소 응답
8. Local DNS는 `www.naver.com`에 대한 IP 주소를 캐싱을 하고 IP 주소 정보 전달



*Recursive Query: Local DNS 서버가 여러 DNS 서버를 차례대로 (Root DNS 서버 -> com DNS 서버 -> naver.com DNS 서버) 질의해서 답을 찾아가는 과정
