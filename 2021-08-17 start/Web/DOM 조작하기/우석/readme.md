### Dom!!!!



_​_:checkered_flag: __그래서 Dom이 뭔데?__

##### [ Dom => 문서 객체 모델 (The Document Object Model : DOM)은 HTML, XML 문서의 프로그래밍  인터페이스이다. ]

- __1. 내가 작성한 코드가 브라우저에 의해 파싱되면 DOM이다 __
- __2. View Source는 그 페이지를 이루고 있는 HTML을 보여준다. (혹은 컴파일 or 빌드)에 의해 변형된 HTML__
- __3. DevTools에서 보이는 코드가 Dom이다__



:computer: __Dom이 HTML과 달라지는 경우__

- __Case1 : 브라우저가 HTML을 수정한 경우 (내가 작성한 HTML의 오류를 브라우저가 수정)__
- __Case2 : JavaScript로 돔조작을 하는 경우__
- __Case3: AJAX 혹은 클라이언트 사이드 템플링__
- 등



:notebook_with_decorative_cover: __console.log(elem)과 console.log(elem)의 차이__

- __두 명령어는 모두 인수를 출력해 준다__
- __1. 인수가 자바스크립트 객체라면 보통 같은 결과를 출력__
- __2. 인수가 Dom요소 일때는 log는 "Dom Tree" , dir은 "객체"형식으로 반환__



:notebook: __자바스크립트에서 Dom은 document 객체에 구현되었기 때문에 브라우저에서 작동되는 자바스크립트 code에서 document 객체 조회가능__

- __예시__
  - body의 자식 엘리먼트 : console.log(document.body.children)
  - 부모 엘리먼트 : parent.Element



:flags:__Dom조작__

- 1.Element 생성

  - JavaScript로 Dom을 조작하여 HTML Element를 추가 , 변경 , 삭제 할 수 있다

  - >  __createElement()__
    >
    > ```javascript
    > const tweetDiv = document.createElement('div') // undefined
    > document.createElement('div')  // <div></div>
    > 
    > ```
    >
    > __현재는 DomTree에 연결되지 않은 TweetDiv만 생성된 상태__

- 2. Element추가

  - 공중에 떠 있는 element <TweetDiv>를 연결해야함

  - document.body.append(TweetDiv)

  - __append()__

    - parentNode.append()메서드는 parentNode의 마지막 자식 뒤에 Node객체 또는 DomString 객체를 삽입한다.

  - __요소추가__

    - ```javascript
      let parent = document.createElement("div")
      let p = document.createElement('p')
      parent.append(p)
      console.dir(parent.childNodes) // NodeList(1) 0:p
      ```

  - __문서추가__

    - ```javascript
      let parent = document.createElement('div')
      parent.append("Some Text")
      console.log(parent.textContent) // "Some Text"
      ```

  - __요소와 문자 추가__

    - ```javascript
      parent.append("Some Text",p)
      ```

- 3. appendChild()

  - Node.appendChild() 메서드는 한 노드를 특정노드의 자식 노드 리스트 마지막에 삽입한다
  - `만약이미 주어진 노드가 다른 노드를 참조중이면 그 관계를 끊고 새로운 관계가 진행됨`



##### append() vs appendChild()

- append()는 Node, DomString 추가 가능
- appendChild()는 Node만 추가 가능
- append()는반환값 x
- appendChild()는 추가한 Node객체 반환
- append는 여러 Node , 문자 추가가능
- appendChild()는 Node하나만



##### prepend : 첫번째 자식으로 Node나 DomString추가

##### after        : 선택한 element 다음 위치에 추가

##### before     : 선택한 element 전 위치에 추가



##### Element 조회

- querySelector()
- querySelectorAll()
- getElementById()
- getElementByClassName()
- getElementsByClassName()



##### Element Value

- setAttribute(name,value)
  - 지정된 요소의 속성값을 설정(이미 존재하면 값이 update , 없을시 추가)
  - name => 속성의 이름 , value => 속성의 값
- classList.add()
  - element에 class name을 추가할 수 있다.
- textContent
  - element 및 노드에 텍스트 추가 반환값은 문자열 or Object
- innetHtml => 비추





##### Element 제거

- removeChild() vs remove()
  - 자식 Node를 삭제하는 메서드
- remove는 노드를 메모리에서도 삭제
- removeChild는 관계만 끊음



래퍼런스

https://velog.io/@bining/javascript-DOM-%EC%A1%B0%EC%9E%91%ED%95%98%EA%B8%B0#append