# Hoisting

> 함수 내부에 모든 선언(var, function, class)을 끌어올려서 동작하는 것



## 특징

- 자바스크립트는 실행되기 전 스코프별 변수값들을 모두 모아서 최상단에 우선적으로 변수를 선언한다.

```js
var arr1 = [1, 2, 3];
function plusSum(arr1) {
    var result = 0;
    arr1.forEach((number) => {
		var plusNumber = abs(number);
        result += plusNumber;
    })
    return result;
}

var arr2 = [4, 5, 6];
function minusSum(arr2) {
    var result = 0;
    arr2.forEach((number) => {
        var minusNumber = -abs(number);
        result += minusNumber
    })
    return result;
}
```

위와 같은 코드는 호이스팅에 의해 아래와 같이 작동한다.

```js
var arr1;
var arr2;

var arr1 = [1, 2, 3];
function plusSum(arr1) {
    var result;
    var plusNumber;
    
    var result = 0;
    arr1.forEach((number) => {
		var plusNumber = abs(number);
        result += plusNumber;
    })
    return result;
}

var arr2 = [4, 5, 6];
function minusSum(arr2) {
    var result;
    var minusNumber;
    
    var result = 0;
    arr2.forEach((number) => {
        var minusNumber = -abs(number);
        result += minusNumber
    })
    return result;
}
```





## `let`과 `const`의 호이스팅

> `var`로 선언된 변수뿐만 아니라 `let`과 `const`로 선언된 변수 또한 호이스팅이 이뤄진다.

- 하지만 `let`과 `const`로 선언된 변수를 선언문 이전에 참조한다면 참조 에러(ReferenceError)가 발생
  - `let`과 `const`로 선언된 변수는 변수가 선언되기 전까지 __일시적 사각지대(TDZ)__에 빠지기 때문



### TDZ (Temporary Dead Zone)

> 선언단계와 초기화단계의 사이의 메모리가 확보되지 않은 구간



#### 변수의 생성 과정

1. 선언 단계
   - 변수를 실행 컨텍스트의 변수 객체에 등록하며, 이 변수 객체는 스코프가 참조하는 대상이 된다.
2. 초기화 단계
   - 변수 객체에 등록된 변수를 메모리에 확보하며, 이 단계에서 변수는 `undefined`로 초기화 된다.
3. 할당 단계
   - `undefined`로 초기화된 변수에 실제 값을 할당한다.



##### `var`

- `var`키워드로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이뤄진다.
  - 스코프에 변수를 선언하고 메모리에 공간을 확보한 후, `undefined`로 초기화의 단계가 한번에 진행
  - 때문에 변수 선언문 이전에 접근하여도 에러가 뜨지 않고 `undefined`를 반환
  - 이러한 현상을 __변수 호이스팅__이라고 한다.



##### `let`

- `let`키워드로 선언된 변수는 선언 단계와 초기화 단계가 분리되어 진행된다.
  - 스코프에 변수를 등록(선언단계)하지만 초기화 단계는 변수 선언문에 도달했을 때 이뤄진다.
  - 변수를 위한 메모리 공간이 할당되지 않았기 때문에 변수 선언문 이전에 접근하면 참조에러가 발생



##### `const`

- `const`로 선언된 변수는 `let`과 같이 작동하지만 값의 재할당이 불가능하기 때문에 선언과 동시에 초기화가 이뤄져야 한다.

  ```js
  const example;                      // SyntaxError
  
  const example = 1;
  example = 2;					    // TypeError
  
  const example = [1];
  example.push(2);
  console.log(example); 				// [1, 2]
  ```





## 우선순위

- 변수 선언이 함수 선언보다 우선순위를 가진다.

  ```js
  var myName;
  var yourName;
  
  function myName() {
      console.log('화랑');
  }
  
  function yourName() {
      console.log('담배');
  }
  
  myName = '프링글스';
  yourName = '천년수';
  
  console.log(type of myName);				// string
  console.log(type of yourName);				// string
  ```

- 값이 할당되지 않은 변수에서의 우선순위

  ```js
  var myName = '프링글스';
  var yourName;
  
  function myName() {
      console.log('화랑');
  }
  
  function yourName() {
      console.log('담배');
  }
  
  console.log(type of myName);				// string
  console.log(type of yourName);				// function
  ```

  







## reference

https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html

https://yceffort.kr/2020/05/var-let-const-hoisting

https://poiemaweb.com/es6-block-scope

https://medium.com/korbit-engineering/let%EA%B3%BC-const%EB%8A%94-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85-%EB%90%A0%EA%B9%8C-72fcf2fac365
