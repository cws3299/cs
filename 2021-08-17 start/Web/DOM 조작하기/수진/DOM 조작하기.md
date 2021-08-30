# DOM 조작하기

##### DOM(Document Object Model)

: DOM은 현재 웹 페이지의 문서 모델을 의미한다. 

사용자가 웹페이지를 통해 보게 되는 콘텐츠에 접근하거나 변경할 수 있을 뿐 아니라, 사용자의 동작에 반응할 수 있다.

DOM의 최상위 객체인 document 객체는 HTML 전체 페이지를 표현한다. 

### 1. JS DOM 요소 선택과 조회

#### 1.1 DOM 요소 접근 및 선택

##### 1.1.1 get 메서드

```javascript
// id가 "content"인 요소 찾기
let content = document.getElementById("content")
// class가 "tag"인 모든 요소를 NodeList 객체로 묶어서 리턴
const tags = document.getElementsByClassName("tag");
// 특정 태그이름(li)을 가지는 요소들을 모두 선택
const lists = documents.getElementsByTagName("li");
```

##### 1.1.2 querySelctor()

선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환한다. 해당 요소가 없으면 null을 반환한다.

```html
<body>
    <div class="tweet"></div>
    <div class="tweet"></div>
    <div class="tweet"></div>
</body>
```

```js
const oneTweet = document.querySelector('.tweet')
```

##### 1.1.3 querySelectorAll()

선택자를 통해 여러개의 Element를 가져오기 위해 사용한다.

class가 tweet인 Element에 접근할 수 있다.

```js
const twoTweet = document.querySelectorAll('.tweet')
```

#### 1.2 노드 탐색 Traversing

```js
let content = document.getElementById("content");
// Property
content.parentNode       // 현재 요소노드의 부모 노드
content.previousSibling  // 이전 형제 요소
content.nextSibling      // 다음 형제 요소
content.firstChild       // 현재 요소의 첫번째 자식 노드
content.lastChild        // 현재 요소의 마지막 자식 노드
```



### 2. JavaScript DOM 요소 조작

#### 2.1 요소 조회

- innerText : Element 내에서 사용자에게 '보여지는' 텍스트 값을 읽어온다. 

- textContent : 'Node'의 속성으로 innerText와 달리 <script>나 <style> 태그와 상관없이 해당 노드가 가지고 있는 텍스트 값을 그대로 읽는다. (ex display: none 이 적용되어도 숨겨진 텍스트 문자열도 그대로 출력해 준다. )
- innerHTML : 선택한 요소의 HTML 태그를 그대로 제공. 보안에 취약, 사용자로부터 전달받은 콘텐츠를 추가할 때는 사용하지 않는 것이 좋다.

```JS
const content = document.getElementsByTagName('p')[0];
// 조회
content.textContent; // text 값
content.innerHTML // <b>text값</b>
```

#### 2.2 요소 수정

선택한 요소의 내용을 수정할 때는 `textContent` 및 `innerHTML` 값에 새로운 값을 대입한다. 

```js
// 수정
content.textContent = "Modified HTML file";
content.innerHTML = "Modified <i>HTML</i> file";
```

#### 2.3 새 요소 만들기

`document.creatElement()` 메서드를 이용해 새로운 요소를 만들 수 있습니다. 이렇게 만들어진 요소는 DOM에 추가하는 메서드를 사용해 추가하기 전까지는 DOM에 추가되지 않고 메모리에만 존재합니다.

```js
// 노드 생성
const p1 = document.createElement('p');
const p2 = document.createElement('p');

// 노드에 새로운 컨텐츠를 대입
p1.textContent = "foo";
p2.textContent = "bar";
```

#### 2.4 만들어진 요소 DOM에 추가하기

JavaScript를 이용해 만들어진 요소는 `innsertBefore()`/ `appendChild()` 메서드를 이용해 Dom에 추가할 수 있다.

```js
/* appendChild() */
// 요소를 부모 요소의 자식 요소로 추가합니다. 
// 이미 요소가 존재할 경우 마지막 자식요소로 추가됩니다.
parent.appendChild(element);

/* insertBefore() */
// 부모 요소의 자식 요소로 선택한 요소를 삽입합니다. 이때 삽입할 위치를 선택할 수 있습니다.
// el - 삽입할 요소
// position - 삽입할 위치
parent.insertBefore(el, position)
```

[예시]

```js
// 요소를 추가한 부모 요소
const content = document.getElementById("content");

// 요소 추가
content.appendChild(p2);

// 부모 요소의 첫 번째 자식 선택
cont firstChild = content.childNodes[0];

// p1 자식 요소를 두번째 매개변수로 선택한 자식요소의 앞에 삽인한다.
contnet.innertBefore(p1, firstchild);
```

또한 `document.createTextNode()` 메서드는 새로운 텍스트 노드를 생성합니다.

```js
/* createTextNode() */
// 새로운 텍스트 노드를 생성합니다.
document.createTextNode("text");
```

예시

```js
// ul 태그 아래에 새로운 li 요소를 생성하는 과정
var myText = document.createTextNode("앨리스");
var newLIEl = document.createElement("li");
newLIEl.appendChild(myText);

var ulPos = document.getElementsByTagName("ul")[0];
ulPos.appendChild(newLIEl);
```

#### 2.5 append() vs appendChild()

#### * append()

노드 객체나 DOMString를 사용할 수 있고 여러 개의 자식 요소를 설정할 수 있다.

#### * appendChild()

오직 Node 객체만 받을 수 있다. 한번에 오직 하나의 노드만 추가할 수 있다. 

[Node Object 사용 예시]

##### append()인 경우

```js
// Node object 삽입
const parent = document.createElement('div');
const child = document.createElement('p');

parent.append(child);

// 결과
// <div>
//     <p></p>
// </div>
```

##### appendChild()인 경우

```js
const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);

// 결과
// <div>
//     <p></p>
// </div>
```

[문자열 DomString 사용 예시]

##### append() 인 경우

```js
// DomString 삽입
const parent = document.createElement('div');
parent.append('append추가');

// 결과
// <div>apped추가</div>
```

##### appendChild()인 경우

```js
const parent = document.createElement('div');
parent.appendChild('append추가');
// Uncaught TypeError: Failed to execute 'appendChild' on 'Node'
```

[여러 개의 자식 요소를 설정하는 예시]

##### append()

```js
const div = document.createElement('div');
const span = document.createElement('span');
const p = document.createElement('p');

document.body.append(div,'hello',span,p);

// 결과
// <body>
//     <div></div>
//	   hello
//     <span></span>
//	   <p></p>
// </body>
```

[return 값 반환 여부]

##### append()인 경우

return 값을 반환 하지 않는다.

```js
const div = document.createElement('div');
const span = document.createElement('span');
const p = document.createElement('p');

console.log(document.body.append(div,'hello',span,p));
// undefined
```

##### appendChild()인 경우

return 값을 반환한다. 

```js
const div = document.createElement('div');
const span = document.createElement('span');

console.log(document.body.appendChild(div));
// div(Node object)
```

#### 2.6 요소 삭제하기

DOM에서 요소를 제거하기 위해서는 `removeChild()` 메서드를 사용한다.

```js
/* removeChild */
// target 요소를 parent에서 삭제한다.
parent.removeChild(target);
```

[예시]

```js
// ul 태그 아래에 존재하는 두번째 li 요소를 삭제하는 과정
var itemToRemove = document.getElementsByTagName("li")[1];
var ulContainer = document.getElementsByTagName("ul")[0];
ulContainer.removeChild(itemToRemove);
```



### 3. JavaScript DOM 속성 조작

#### 3.1 요소 스타일링

요소의 스타일을 바꾸고 싶다면 우선 CSS 클래스를 만들고, 만들어진 클래스를 스타일을 적용하고자 하는 요소에 지정하는 방식으로 사용한다.

```js
element.classList                      // 요소의 클래스를 나열
element.classList.add("className")     // 클래스 추가
element.classList.remove("className")  // 클래스 제거
element.classList.item( Number )  	   // 콜렉션의 인덱스를 이용하여 클래스 값을 반환
div.classList.toggle("visible");       // 클래스 값 토글 (0과 1일 반복되는 행위를 의미)
```

#### 3.2 속성 조작하기

- getAttribute() - 어트리뷰트 값을 가져온다.
- hasAttribute() - 어트리뷰트 값을 가지고 있는지 검사한다.
- setAttribute() - 어트리뷰트에 값을 대입한다.
- removeAttribute() - 어트리뷰트를 제거한다.
- className - 클래스값을 가져오거나 변경한다.
- id - 아이디값을 가져오거나 변경한다.

```javascript
let foo = document.getElementById("foo");

// 요소가 class 어트리뷰트를 가지고 있는지 검사한 후, 어트리뷰트 값을 가졍온다.
if (foo.hasAttribute("class")) {
  var attr = foo.getAttribute("class");
}

// class 값을 변경한다. 존재하지 않으면 생성한다.
foo.className = "bar";
foo.setAttribute("class", "baz");

// class 속성을 제거한다
foo.removeAttribute("class");
```



### 4. JavaScript DOM Event 핸들링

#### 4.1 이벤트 핸들러

이벤트 핸들럴르 이용해 이벤트 등록하는 방법

```JS
// 사용법 : 객체의 이벤트 속성에 함수 등록
문서객체.이벤트 속성명 = function() {}
```

[예시]

```js
// window 객체에 `onload` 이벤트 등록
// onload 이벤트 ( 페이지가 로드될 때 특정 함수 호출시 사용 )
window.onload = function() {
  var h1 = document.querySelector('h1');
  h1.innerHTML = 'hello';
}
```

#### 4.2 이벤트 리스터

이벤트 핸들러 외에 이벤트 리스너를 통해 이벤트 등록이 가능하다.

```js
// addEventListener 메서를 사용하여 이벤트 등록
// element - 이벤트에 반응할 요소 선택.
// "event" - 이벤트 바인딩. 어떤 이벤트가 발생했을 때 반응할 것인지 지정.
// fn - 이벤트 발생 시 실행될 코드.
// Boolean - 이벤트 버블링 / 캡처링 지정 (false: 버블링, true: 캡처링)
element.addEventListener("event", fn, Boolean);
```

[예시]

```js
// 특정 영역에 마우스를 올렸을 때 이벤트 발생
const handleMouseEnter = () => {
  const elMsg = document.getElementById("msg");
  elMsg.textContent = "마우스 엔터";
}

var card = document.getElementById("card");
card.adddEventListener("mouseenter", handleMouseEnter, false);
```

#### 4.3 매개변수가 있을 경우

이벤트 핸들러에 지정된 함수에 괄호가 있을 경우 해당 함수는 즉시 실행됩니다. 즉, 함수가 이벤트를 기다리지 않고 바로 실행해버리게 됩니다.

따라서 만약 이벤트 함수에 인수를 전달해야 한다면 해당 함수를 익명함수로 감싸고, 익명함수의 내부에서 함수를 실행합니다.

```js
/* 매개변수를 가진 이벤트 리스너 */
el.addEventListener("click", function(e) {
  handleClick(e);
}, false);
```

#### 4.4 event 객체

event 객체는 이벤트를 발생시킨 요소와 발생한 이벤트에 대한 정보를 제공하는 객체이다.

이 event 객체는 이벤트 리스너에 지정된 함수를 통해 전달된다.

```js
const handleMouseEnter = (e) => {
  const elMsg = document.getElementById("msg");
  elMsg.textContent = e.type; //-> "mouseenter"
}

var card = document.getElementById("card");
card.adddEventListener("mouseenter", function(e) {
  handleMouseEnter(e);
}, false);
```



### 5. JavaScript 웹 스토리지 API localStorage sessionStorage

#### 5.1 sessionStorage

- 웹 브라우저 탭을 종료하면 데이터가 사라지게 된다.
- 브라우저 탭이 열려 있는 동안만 데이터 유효.
- 사용자의 로그인 여부, 위치 데이터, 개인적인 정보 등을 저장하는 용도로 사용 
- ex ) 자동로그인

#### 5.2 localStorage

- 웹 브라우저의 창을 닫아도 데이터가 보존되는 저장소
- 열려있는 모든 창이 스토리지의 데이터를 공유한다.

#### 5.3 저장소 API

- setItem(key, value) - 저장소 객체에 데이터를 저장, 새로운 키/값 쌍을 생성한다.
- getItem(key) - 저장소 객체에서 데이터를 가져온다.
- removeItem(key) - 키와 값을 제거한다.
- clear() - 객체에 저장된 모든 값을 제거한다.

[예시 로컬 스토리지에 데이터 저장/조회]

```js
// 로컬 스토리지에 데이터 저장하기
var name = document.getElementById("name");
name.adddEventListener("click", fuction() {
  var data = { name: "alice" }
	localStorage.setItem('name', JSON.stringify(data));
});

// 저장된 데이터 가져오기
var data = JSON.parse(localStorage.getItem('name'));
console.log(data); // "alice"
```



[참고]

- https://hianna.tistory.com/483
- https://webruden.tistory.com/634

- https://tutorialpost.apptilus.com/code/posts/js/w-bom-web-storage/
- https://velog.io/@bining/javascript-DOM-%EC%A1%B0%EC%9E%91%ED%95%98%EA%B8%B0#append