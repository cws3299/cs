### 호이스팅

호이스팅이란 변수의 선언부를 함수 스코프의 최상단으로 올려서 실행되는 자바스크립트의 특징이다.

코드를 실행하기 전에 변수를 메모리에 저장시키기 위함.

```js
{
    var a = 'a'
}
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
var a = 'undefined'




{
    a = 'a'
}

```

이러한 동작은 `var` 선언자에서만 작동하며 `let` 과 `const` 선언자에서는 작동하지 않는다

그 이유는 바로 `let`과 `const` 선언자로 선언된 변수들은 임시값을 `undefined`가 아닌  `uninitialized`  로 받기때문!

`var`는 선언 &초기화 , 할당 두개의 단계
`let`, `const`는 선언, 초기화, 할당 세개의 단계

```js
let a = 'a'

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

let a = uninitialized


a = 'a'

6개의 원시타입 = undefined
```



`uninitialized` 로 초기화된 변수들은 변수의 값 할당지점까지 가기 전까지  `Temporal Dead Zone` 이라는 곳에 갇히게 된다 

TDZ는 이름 그대로 값 할당 전까지 변수들의 참조를 막기위해 임시로 변수들을 죽은상태로 만들어둔다.

##### function 의 경우 호이스팅이 적용되며(변수에 함수를 할당하는 경우는 예외) class는 호이스팅되지 않는다

```js
function a(){}

var a = function() {}

class === let, const
```

