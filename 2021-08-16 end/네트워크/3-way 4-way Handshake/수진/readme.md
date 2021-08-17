## 3-way / 4-way Handshake

#### TCP

> 네트워크 계층 중 전송 계층에서 사용하는 프로토콜 로서, 장치들 사이에 논리적인 접속을 성립하기 위해 연결을 설정하여 신뢰성을 보장하는 연결형 서비스.

### TCP 3-way Handshake

> TCP 장치들 사이에 논리적인 접속을 정립하기 위해 사용.
>
> TCP/IP 프로토콜을 이용해서 통신을 하는 응용프로그램이 데이터를 전송하기 전에 정확한 전송을 보장하기 위해 상대방 컴퓨터와 사전에 세션을 수립하는 과정.

[역할]

- 양쪽 모두 데이터를 전송할 준비가 되었다는 것을 보장, 실제로 데이터 전달이 시작하기 전에 한쪽이 다른 한쪽이 준비되었다는 것을 알 수 있도록 한다.
- 양쪽 모두 상대편에 대한 초기 순차일련번호를 얻을 수 있도록 한다.
- SYN(Synchronization) : 연결요청, 세션을 설정하는데 사용, 초기에 시퀀스 번호를 보냄
- ACK(Acknowledgement) : 보낸 시퀀스 번호에 TCP 계층에서의 길이 또는 양을 더한 것과 같은 값을 ACK에 포함하여 전송


![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNwPCT%2FbtqD0hCftBa%2F4fUpGdt1ddNBtk9RGmfKw0%2Fimg.png)

[과정]

1. 클라이언트는 서버에 접속을 요청하는 SYN 패킷을 보낸다.
   - 클라이언트는 SYN을 보내고 SYN/ACK 응답을 기다리는 SYN_SENT 상태
   - 서버는 Wait for Client 상태
2. 서버는 SYN 요청을 받고 클라이언트에게 요청을 수락한다는 ACK와 SYN flag가 설정된 패킷을 발송.
   - 클라이언트는 ACK으로 응답하기를 기다림
   - 서버는 SYN_RECEIVED 상태
3. 클라이언트는 서버에게 ACK를 보내고 이후로부터는 연결이 이루어지고 데이터가 오가게 된다.
   - 서버는 ESTABLISHED 상태

위와 같은 방식으로 통신하는 것이 신뢰성 있는 연결을 맺어 준다는 TCP의 Way handshake 방식이다.



### 4-way Handshaking

> 3-way handshaking은 TCP의 연결을 초기화할 때 사용
>
> 4-way handshaking은 통신의 종료를 위한 과정으로 TCP간 세션을 종료하기 위해 수행되는 절차

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUXSw%2FbtqDWsFNWJw%2FhVdKIneSYb7UK3wc0pj6Z0%2Fimg.png)


[과정]

- FIN(Finish) : 세션을 종료시키는데 사용되며 더 이상 보낸 데이터가 없음을 표시

1. 클라이언트가 연결을 종료했다는 FIN플래그를 전송.
   - 클라이언트는 FIN-WAIT 상태
2. 서버는 FIN플래그르르 받고, 확인메시지 ACK를 보내고 자신의 통신이 끝날때까지 기다린다.
   - 서버는 CLOSE_WAIT 상태
3. 연결을 종료할 준비가 되면, 연결해지를 위한 준비가 되었음을 알리기 위해 클라이언트에게 FIN플래그를 전송
   - 서버는 LAST-ACK 상태
4. 클라이언트는 해지준비가 되었다는 ACK를 확인했다는 메시지를 보낸다.
   - 클라이언트 생태가 FIN-WAIT => TIME-WAIT로 변경

만약 '서버에서 FIN을 전송하기 전에 전송한 패킷이 Routing 지연이나 패킷 유실로 인한 재존송 등으로 인해 FIN패킷보다 늦게 도착하는 상황'이라면

=>  클라이언트에서 세션을 종료시킨 후 뒤늦게 도착하는 패킷이 있다면 이 패킷은 Drop되고 데이터는 유실 .

이러한 현상에 대비하여 클라이언트는 서버로부터 FIN을 수신하더라도 일전시간(디폴트 240초) 동안 세션을 남겨놓고 잉여 패킷을 기다리는 과정을 거치게 되는 이과정을 TIME_WAIT라고 한다.



###### 참고

- https://mindnet.tistory.com/entry/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-22%ED%8E%B8-TCP-3-WayHandshake-4-WayHandshake

- https://needjarvis.tistory.com/157



