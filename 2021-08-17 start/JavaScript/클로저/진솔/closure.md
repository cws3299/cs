### 클로저

클로저는 `함수형 프로그래밍` 에서 사용되는 중요한 특성 

클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다

함수의 스코프는 함수를 **호출**할 때가 아니라 함수를 **선언**할 때 결정된다. 

```js
var x = "global";

function outer() {
  var x = "local";
  inner();
}

function inner() {
  console.log(x);
}

outer();
inner();
```





```js
let a = "iCantSeeYou"
function fun1() {
    var a = "iSeeYou";
    function fun2() {
        console.log(a)
    }
    return fun2;
}

var testFun = fun1(); // testFun에 반환된 fun2가 할당됐다

testFun()// 'iSeeYou'
```

위 코드를 실행하면 testFun 함수는 함수가 호출된 전역스코프가 아닌 함수가 선언됐던 fun1의 변수 a값을 출력하게된다. 

testFun에 할당 fun2함수가 클로저를 형성했기 때문.



#### 클로저 스코프 체인

클로저에는 로컬스코프, 외부함수스코프, 전역스코프 3개의 스코프가 있다.

```js
function makeAdder(x) {
    var y = 1;
    return function(z) {
        y = 100;
        return x + y + z;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

// 이때의 add5라는 함수는 
// {
//    var x = 5
//    var y = 1    
// }
// 을 클로저의 외부함수 스코프를 통해 접근할 수 있다

console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
```



