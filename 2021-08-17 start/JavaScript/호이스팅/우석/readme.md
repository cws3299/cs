##### 호이스팅 / 우석



##### 렉시컬 스코프 / 자바스크립트는 기본적으로 렉시컬 스코프 중심의언어(정적 스코프)

- 함수를 어디서 호출하였는지가 아니라 `어디서 선언되었는지에 따라 결정되는 것`을 말한다  / 호출이 아닌 선언에서 정의된다.
- 즉 `함수를 어디서 선언하였는지에 따라 상위 스코프를 결정한다는  뜻이며 가장 중요한 점은 함수의 호출이 아니라 함수의 선언에 따라 결정되나는 점이다.`
- 다른말로 __정적 스코프__라고도 부른다

```js
var x = 1 // global

function first(){
    var x = 10;
    second()///호출은 여기서 했지만
}

function second(){
    console.log(x)
} /// 선언은 전역에 되어있음

first() //10,10,10
second() //1,1,1


호출이 중요한게 아니라 선언된 위치가 중요한 위치가 중요한언어







first() // 10이 아니라 1이 출력된다!!
second() // 1
```

- __이유__
  - global 범위 안의 x
  - first 범위 안의 x
  - second 범위 안의 x
  - 위 예제의 실행 결과 second의 상위 스코프는 first가 아니라 글로벌이다.
    - 즉 함수의 호출이 아닌 선언을 중심으로 결정하는 렉시컬 스코프를 따르기 때문이다.



__만약 함수의 호출로 상위 스코프가 결정된다면?___

- 이는 정적이 아닌 동적스코프를 따르는 것임





__호이스팅이란?__

- 호이스팅의 정의는 자바스크립트에서 함수나 변수의 선언이 해당 스코프의 최상단으로 끌어올려지는 현상을 말합니다

- let과 const도 호이스팅이 발생하지만 `TDZ`에 의해 제약을 받아 오류가 발생했다고 생각하는 것

- ```js
  var a = undefined
  let aa
  console.log(a)
  console.log(aa)
  
  a = 1
  let aa = 1
  ```

- 



__TDZ__란?

- 선언은 되어있지만 아직 초기화가 되지 않아 `변수에 담길 값을 위한 공간이 메모리에 할당되지 않은 상태`
- 즉 let과 const도 호이스팅이 발생하지만 var와 같이 초기값을 넣어주는 작업을 하지않아 메모리공간이 없어 에러가 발생하는 것



##### 호이스팅 시작

```js
var fruit = "apple"
function change() {
    console.log(fruit)
    var fruit = "banana"
    console.log(fruit)
}

change()
//
//
```



- 이 경우 undefined와 banana가 출력됨

- 그 이유는 유효범위 때문임

  - 전역변수의 경우 어디에서든 사용가능

  - 처음 선언된 fruit은 어디서든 참조가능

  - __자바스크립트 엔진은 인터프리팅 직전에 컴파일레이션이라는 과정을 거침__

  - 컴파일레이션중 코드 생성 과정에서 사전에 변수를 생성하고 메모리에 저장 이때 블록 안에서 호출하려던 전역변수와 같은 이름의 지역변수가  있다면 , undefined를 값으로 갖는 변수로 저장

  - 무슨말이냐면

  - ```js
    var fruit = "apple"
    function change() {
        var fruit // 새롭게 정의
        console.log(fruit)
        var fruit = "banana"
        console.log(fruit)
    }
    ```

- 호이스팅은 함수에서 표현식이 아닌 선언식에서만 발생하고 변수에서는 var키워드 에서만 발생함

- var는 '선언 및 초기화' , '할당'의 단계로 구성되고 , let과 const는 선언, 초기화, 할당 세 단계로 구성

  - ```js
    var sumNumber;
    
    function logMessage(){
        return 'worked'
    } // 선언식
    
    logMessage() // worked
    sumNumbers() // error
    
    
    
    sumNumbers = function(){
        return 10 + 20
} // 표현식
    ```
  
  - 표현식으로 설정된 logMessage의 경우 호이스팅됨
  
  - sumNumbers의 경우 호이스팅 되지 않음





- __변수와 함수 / 선언과 할당__

  - 변수 선언 , 함수 선언 , 변수할당 // 순선대로 이루어진다.

  - ```js
    var num1 = 1;
    var num2 = 2;
    
    function num1(){
        console.log("num1");
    }
    function num2(){
        console.log("num2");
    }
    
    
    console.log(typeof num1); //number
    console.log(typeof num2); //number
    
    ///////////////////
    
    var num1;
    var num2;
    function num1(){
        console.log("num1");
    }
    function num2(){
        console.log("num2");
    }
    num1 = 1;
    num2 = 2;
    
    console.log(typeof num1); //number
    console.log(typeof num2); //number
    ```

  - 























___________________________



__호이스팅은 보통 코드를 실행하기 전 함수의 선언과 변수의 선언을 맨 위로 끌어올리는 것으로 알고 있지만 이는 정확한 호이스팅의 개념이 아니다.__



__함수와 변수는 메모리에 저장되는 방식이 다르다__

- 함수는 전체 함수에 대한 참조와 함께 저장된다.
- let과 const의 경우 초기화되지 않은채로 저장이 되며 var는 undefined로 저장이 된다.



```js
console.log(sum(2,3)) // 함수는 시작과 동시에 저장되므로 출력 가능
console.log(name)     // const와 let은 초기화되지 않은채로 저장이 되기 때문에 참조 불가
console.log(age) // var age만 정의되고 = 29는 정의되지 않은 상태이므로 undefined

function sum(x,y) {
    return x+y
}

const name = "ws"
var age = 29
```



##### 주의할 점

```js
var getName = 'ws'
function getName(){
    console.log('ws')
}
console.log(typeof getName)
```

- 이 경우 변수가 함수를 덮어씌운다.



```js
var getName
function getName() {
    console.log("appear")
}
console.log(typeof getName)
```

- undefiend로 선언되어 있을 경우 변수를 함수가 덮는다.



```js
var myName = "hi";

function myName() {
  console.log("yuddomack");
}
function yourName() {
  console.log("everyone");
}

var yourName = "bye";

console.log(typeof myName);
console.log(typeof yourName);
//////////////////////////////////////////////////////////////////////////////
var myName;
var yourName;
function myName() {
  console.log("yuddomack");
}
function yourName() {
  console.log("everyone");
}

myName = "hi";
yourName = "bye";

console.log(typeof myName);
console.log(typeof yourName);
```



##### 요약

- 함수와 변수는 코드를 실행하기 전에 메모리에 저장시키기 위한 작업의 과정을 호이스팅이라고 합니다.
- 함수는 전체 함수에 대한 참조와 함께 저장되고 , var 키워드는 undefined로 초기화된 상태로 저장 , let과 const는 초기화 되지 않은 상태로 메모리에 저장됨







래퍼런스

https://velog.io/@hoo00nn/%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85Hoisting-%EC%9D%B4%EB%9E%80

https://ljtaek2.tistory.com/145

https://ljtaek2.tistory.com/136?category=863722

https://joshua1988.github.io/web-development/javascript/function-expressions-vs-declarations/

https://usage.tistory.com/51