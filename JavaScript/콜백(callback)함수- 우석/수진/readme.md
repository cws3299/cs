# JavaScript 콜백(callback)함수

### 1. 콜백 함수란

> 어떤 이벤트가 발생한 후, 수행될 함수를 의미한다.

> 자바스크립트의 비동기 처리 방식의 문제점을 해결해주기 위해 특정 시점에서 호출이 되도록 사용하는 함수이다.

*비동기 처리 : 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 특성



### 2. 문제점

```javascript
getData();
test();
function getData() {
    // ajax 통신
}
function test() {
    alert("test");
}
```

=> ajax 통신을 하는 시간동안 alert()가 먼저 실행된다.



### 3. 해결방안

```javascript
getData(test);
function getData(callback) {
    $.ajax({
        ...
        success: function(data) {
            alert('통신 성공!')
            callback();
        }
    })
}
function test() {
    alert("test");
}
```

=> 함수를 매개변수로 보내서 ajax 통신이 성공한 후 실행하게 한다. 

=> '통신 성공!'이 'test'보다 먼저 반응한다.



### 4. 단점

> 콜백에 콜백이 무는 로직을 짜야하는 복잡한 경우가 생기고 콜백을 많이 사용하면 가독성도 떨어지고 오류 찾기도 힘들어지고 유지보수가 힘들어진다. 

=> 이를 보완해서 나온 함수는 `promise`이다.



[참고]

- https://kongda.tistory.com/20