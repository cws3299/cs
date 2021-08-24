#  Block Scope & Function Scope



## Scope

> 변수나 함수가 선언되어 사용될 때, 유효 범위 
>
> 참조할 수 있는 범위





## Block Scope

> `{}` 블록이 생성될 때마다 새로운 스코프가 형성
>
> `let`, `const`

- 변수를 선언한 블록 내에서만 접근이 가능
  - 해당 블록이 종료되면 증발

```js
let desk = 'desk';                // global
if (desk) {
    let chair = 'chair';          // local
}

console.log(desk)                 // desk
console.log(chair)                // error
```



#### ❗  `let` 과  `const` 의 차이

1. `let`

   - 변수의 재할당이 가능

   ```js
   let a = 1;
   a = 2;
   
   console.log(a)                // 2
   ```

   

2. `const`

   - 변수의 재할당이 불가능

   ```js
   const a = 1;
   a = 2;                        // error
   ```

   - 내부 값을 바꿀 수 없는 것은 아니다

   ```js
   const a = [1, 2, 3];
   a[2] = 4;
   
   console.log(a)                // [1, 2, 4]
   ```

   





## Function Scope

> 새로운 함수가 생성될 때마다 새로운 스코프가 형성
>
> `var`

- 함수 내부에서 변수 선언시 => __local scope__
- 함수 외부에서 변수 선언시 => __global scope__

```js
var desk = 'desk';                // global
function a() {
    var chair = 'chair';          // local
}

console.log(desk)                 // desk
console.log(chair)                // error
```



#### ❗  `var`  의 특징

1. `var`

   - 변수의 재할당이 가능

   ```js
   var desk = 'desk';
   desk = 'chair';
   
   console.log(desk)              // chair
   ```

   - 생략 시 `global` 설정

   ```js
   function a() {
       chair = 'chair';
   }
   
   a()
   console.log(chair)             // chair
   ```

   







## reference

https://velog.io/@fromzoo/%ED%95%A8%EC%88%98%EC%8A%A4%EC%BD%94%ED%94%84-vs-%EB%B8%94%EB%A1%9D%EC%8A%A4%EC%BD%94%ED%94%84

