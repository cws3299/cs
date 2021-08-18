# Hoisting

호이스팅(Hoisting)은 모든 선언(var, let, const, function등) 을 가장 위로 끌어올린다.!

[호이스팅 대상]

var 변수선언과 함수 선djs문에서만 호이스팅이 일어난다. 

변수의 범위가 `전역`인지 `함수`인지에 따라 다르게 동작한다.

1. 전역 범위(global scope)

   스크립트 단위에서 최상단으로 끌어 올린다.

2. 함수 범위(function scope)

   해당 함수의 최상단으로 끌어 올린다.

단, 변수의 선언만 최상단으로 끌어 올려진다. 할당된 값은 올라가지 않는다. 

##### 1. 변수 호이스팅

```javascript
console.log(hoisting); // undefined
var hoisting = "success";
console.log(hoisting); // success
```

변수의 선언이 최상단으로 올라가 에러가 아닌 undefined를 출력한다. 

##### 2. 함수 호이스팅

##### 2.1 함수 선언식

함수선언을 다른 코드보다 먼저 읽고 실행한다. (함수가 어디에 생성되어 있어도 함수가 호출부보다 먼저 실행되어 오류가 발생하지 않는다. )

즉, 함수선언 전에 number()함수를 호출하여도 문제없이 정상적으로 동작한다.

```javascript
number(); 
function number() {
    console.log('num')
}
```

##### 2.2 함수 표현식

함수 선언식과 다르게 함수를 먼저 실행해 주지 않기 때문에 함수 선언 전에 호출을 하면 오류가 발생한다. 즉, 호이스팅이 되지 않는다.

```javascript
a():
// 함수 표현식
var a = function() {
console.log('a is not a function');
}
```



함수 호이스팅이 함수 호출 전 반드시 함수를 선언해야 한다는 규칙을 무시하기 때문에 `함수표현식`을 쓰는 것을 권장한다. !



[참고]

- https://velog.io/@stampid/Hoisting%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85%EC%9D%B4%EB%9E%80
- https://m.blog.naver.com/ka28/221992900149