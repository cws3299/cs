# map, filter, for, forEach



## map

> 기존의 배열을 이용해, 새로운 배열을 생성 (형태 및 크기를 유지)
>
> 콜백 함수를 인자로 받아, 배열의 각 요소에 대하여 실행한 결과 값을 반환

```javascript
const arr = [1, 2, 3, 4];
const newArr = arr.map((x) => (x + 1));

console.log(newArr);
// [2, 3, 4, 5]
```

- 새롭게 생성한 배열을 변수에 저장하지 않으면 생성된 배열은 사라진다.





## forEach

> 외부 변수를 변화시키거나 콘솔에 로그를 남기거나 DOM을 변경하는 `side effects`에 유용하다.
>
> 콜백 함수를 인자로 받아, 배열의 각 요소에 콜백함수를 실행하며 `return`값이 존재하지 않는다

```javascript
const arr = [1, 2, 3, 4];
const newArr = new Array(4).fill(0);

arr.forEach((val, index) => {
    newArr[index] += val * 2;
})

console.log(newArr);
// [2, 4, 6, 8]
```

- 높은 가독성을 제공하며, 복잡한 객체를 처리하는데 유리하다.





## fliter

> 조건에 부합하는 여러 요소를 선택할 때 사용
>
> 함수의 인자는 `boolean`형태의 값을 반환하는 함수

```javascript
const students = ['김현석', '스폰지밥', '김수진', '박우석', '정진솔', '김천년수'];

const result = students.filter(val => val[0] === '김');

console.log(result);
// ['김현석', '김수진', '김천년수']
```

- 원하는 요소만 필터링 하기에 유용하다.
- `return`값이 `true`일 경우 해당 요소를 반환하고, `false`일 경우 반환하지 않는다.
  - 기본값은 `false`
- `return` 값이 정해져있다.





## for

> 가장 빠르고 단순하여 효율적
>
> 인덱스에 해당하는 변수를 만들어 접근 
>
> 루프를 건너뛰거나 종료가 가능 (continue, break)
>
> 반복범위의 컨트롤이 가능 (조건문의 3번째 인자값에 증감식 사용)

```js
const arr = [1, 2, 3];
for (var i = 0; i < arr.length - 1; i++) {
    console.log(arr[i]);                 // 1, 2, 3
}
```



### 1. for in

> 열거가 가능한 속성에 대해 반복

```js
const obj = {
    a: 1,
    b: 2,
    c: 3,
};
for (var key in obj) {
    console.log(key);                   // a, b, c
    var val = obj[key];
    console.log(val);                   // 1, 2, 3
}
```



### 2. for of

> `iterator`의 속성을 가지고 있어야 가능

```js
const arr = [1, 2, 3];
for (var val of arr) {
    console.log(val);                   // 1, 2, 3
}
```



### 차이점

```js
Array.prototype.arrCustom = function () {};
Object.prototype.objCustom = function () {};

const arr = [1, 2, 3];
arr.foo = "hello";

for (var key in arr) {
    console.log(key);                  // 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (var val in arr) {
    console.log(val);                  // 1, 2, 3
}
```









## reference

https://velog.io/@leyuri/for-each-v%ED%8D%BC%ED%8F%AC%EB%A8%BC%EC%8A%A4-%ED%95%A8%EC%88%98-%EB%B3%80%EC%88%98-%EC%9D%B4%EB%A6%84-%ED%8C%81

https://okky.kr/article/868584?note=2232949

https://jsdev.kr/t/for-in-vs-for-of/2938

https://velog.io/@tonyk0901/for-forEach-map-reduce-find-filter-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EB%B0%8F-%EC%82%AC%EC%9A%A9%EC%B2%98
