### 운영체제



#### 프로세스 관리



JOB vs Process

- 작업
  - 실행 할 프로그램 + 데이터
  - 컴퓨터 시스템에 실행 요청 전의 상태
- 프로세스
  - 실행을 위해 시스템(커널)에 등록된 작업 
  - 시스템 성능 향상을 위해 커널에 의해 관리됨
  - `커널에 등록되는 이유는 시스템의 성능을 향상 시키기 위해서`

![20210615_200615](20210615_200615.png)



- 프로세스의 정의
  - 실행중인 프로그램
  - 커널에 등록되고 커널의 관리하에 있는 작업
  - 각종 자원들으르 요청하고 할당 받을 수 있는 개체
  - 프로세스 관리 블록을 할당받은 개체
  - 능동적인 개체 (실행 중에 각종 자원을 요구, 할당 , 반납 하며 진행)



![20210615_200858](20210615_200858.png)



##### 자원의 개념

- 커널의 관리 하에 프로세스에게 할당/반납 되는 수동적 개체
  - 할당/반납의 관리는 "커널"이 한다.
- 자원의 분류
  - 하드웨어 자원
  - 소프트웨어 자원 : 메세지 , 시그널 ,파일 등



##### Process Control Block(PCB)

- 프로세스를 컨트롤하기 위해 필요한 정보들을 모아 놓은 블록
- OS가 프로세스 관리에 필요한 정보 저장
- 프로세스 생성 시, 생성됨

![20210615_201245](20210615_201245.png)

- 우리의 메모리는 커널이 사용하는 영역과 일반영역으로 구분되는데, PCB는 커널이 사용하는 영역에서 활용됨

![20210615_201409](20210615_201409.png)

- PCB 정보는 OS별로 서로 다름
- PCB 참조 및 갱신 속도는 OS의 성능을 결정 짓는 중요한 요소 중 하나

![20210615_201528](20210615_201528.png)

![20210615_201618](20210615_201618.png)



##### Created State

- Job을 커널에 등록
- PCB 할당 및 프로세스 생성
- 가상메모리 공간을 체크해서 메모리 공간이 있다면 : ready  없다면 :suspended ready



##### Ready State

- 프로세서 외에 다른 모든 자원을 할당 받은 상태 
  - 프로세서 할당 대기 상태
  - 즉시 실행 가능 상태
- Dispatch(or Schedule)
  - Ready State -> Running State (Cpu할당)



##### Running State

- 프로세서와 필요한 자원을 모두 할당 받은 상태
- Preemption
  - running state -> ready state
  - 프로세서 스케줄링
- Block/Sleep
  - Running State -> asleep state
  - I/O등 자원 할당 요청



##### Blocked/Asleep State

- 프로세서 외에 다른 자원을 기다리는 상태
  - 자원 할당은 system call에 의해서만 이루어짐
- Wake-up
  - Asleep State -> ready State



##### Suspended State

- 메모리를 할당 받지 못한(빼앗긴 상태)
  - memory image를 swap device에 보관
    - swap device : 프로그램 정보 저장을 위한 특별한 파일 시스템
  - 커널 또는 사용자에 의해 발생
- swap-out(suspended) , swap-in(resume)

![20210615_202942](20210615_202942.png)



##### Terminated / Zombie State

- 프로세스 수행이 끝난 상태
- 모든 자원 반납 후,
- 커널 내에 일부 PCB정보만 남아 있는 상태
  - 이후 프로세스 관리를 위해 정보 수집

![20210615_203450](20210615_203450.png)



### 인터럽트

- 예상하지 못한 , 외부에서 발생한 이벤트
- 인터럽트의 종류
  - I/O interrupt 
  - Clock interrupt
  - Console interrupt
  - Program check interrupt
  - Machine check interrupt
  - Inter-process interrupt
  - System call interrupt



### 인터럽트 처리과정

![20210629_184604](20210629_184604.png)

- Interrupt handling
- Interrupt service



![20210629_185132](20210629_185132.png)



- context saving
  - 인터럽트 때문에 잠깐 프로세스를 중단했을 때 다시 시작할 때를 위해 그전 상태를 저장
- interrupt handling
  - 어디서 인터럽트가 발생했는지
- interrupt service
  - 인터럽트를 실행
  - 해당 인터럽트를 해결하기위한 프로세스가 프로세서에 새롭게 추가
- 프로세서는 방금 중단한 친구가 아닌 ready 큐의 가장 앞에 들어온 애가 먼저 시행됨
  - pi가 다시 들어올 수 있지만 다른애가 들어올 수 도 있음
- 중단된 프로세스가 시작될 때는 자신의 상태를 저장했던 PCB를 가져와서 봄



### Context Switching (문맥 교환)

- context
  - 프로세스와 관련된 정보들의 집합
    - cpu register context => in cpu
    - Code & data, stack, PCB => in memory
- context saving
  - 현재 프로세스의 register context를 저장하는 작업
- context restoring 
  - register context를 프로세스로 복구하는 작업
- context switching 
  - 실행 중인 프로세스의 context를 저장하고 , 앞으로 실행 할 프로세스의 context를 복구하는 일
    - 커널의 개입으로 이루어짐



### Context Switch Overhead

- context switching에 소요되는 비용
  - os마다 다름
  - os의 성능에 큰 영향을 줌
- 불필요한 context switching을 줄여야 함
  - thread를 활용해서 이를 해결함