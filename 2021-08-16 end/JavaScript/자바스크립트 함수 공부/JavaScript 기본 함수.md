##### JavaScript 기본 함수



##### :flags: reduce

- `reduce()` 메서드는 배열의 각 요소에 대해 주어진 reducer를 실행하고, `하나의 결과 값`을 반환함
- `reduceRight()는 reduce()와 같은 동작을 하지만 순회를 오른쪽에서 왼쪽으로 한다.`
- map, filter,find 의 모든 기능을 reduce로 구현 가능하다.



```javascript
const array1 = [1,2,3,4]
const reducer = (accumulator, currentValue) => accumulator + currentValue

console.log(array1.reduce(reducer))
// 1 + 2 + 3 + 4
// 10

console.log(array1,reduce(reducer,5))
// 5 + 1 + 2 + 3 + 4
// 15
```



- 리듀서는 네개의 인자를 갖는다.
  - 1. 누산기 (accumulator)
    2. 현재값 (currentValue)
    3. 현재 인덱스 (index)
    4. 원본 배열 (src)
  - 리듀서 함수의 반호나 값은 누산기에 지속적으로 할당된다.



- `arr.reduce(callback [, initialValue])`

`callback` : 배열의 각 요소에 대해 실행할 함수

- accumulator
  - 콜백의 반환값을 누적한다.
  - 콜백의 이전 반환값 또는 , 콜백의 첫번째 호출이면서 `initialValue`를 제공한 경우에는 `initialValue`의 값
- currentValue
  - 처리할 현재 요소
- index (선택)
  - 처리할 현재 요소의 인덱스, `initialValue`를 제공한 경우 0, 아닌 경우 1부터 시작
- array (선택)
  - reduce()를 호출한 배열

`initialValue` : callback의 최초 호출에서 첫 번째 인수에 제공하는 값, 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 reduce()를 호출할 경우 오류가 발생함



##### 일반적인 활용

```javascript
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
}, 10);

// 10
// 11
// 13
// 16
// 20
```



##### 화살표 함수 활용

```javascript
const a = [0, 1, 2, 3, 4].reduce( (prev, curr) => prev + curr , 10 );
console.log(a) // 20
```



##### :flags: 활용

1.  객체 배열에서의  값 합산

```javascript
let initialValue = 0;
let sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)

console.log(sum)
```

2. 중첩 배열 펼치기

```javascript
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(accumulator, currentValue) {
    return accumulator.concat(currentValue);
  },
  []
);
// 펼친 결과: [0, 1, 2, 3, 4, 5]
```

- reduce를 안 쓰고 만들 경우 for문을 돌리면서 계속 concat을 했을듯



3. 객체 내의 값 인스턴스 개수 세기

```javascript
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(counterNames) // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

- allNames 의 경우 완전 초기의 형태는 `{}`



<b> 4. 배열의 중복 항목 제거 </b>

```javascript
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);

console.log(result) // [1,2,3,4,5]
```

- sort를 1차적으로 해줌 [1,1,2,2,3,3,4,4,4,4,4,5,5]
- 누산기가 비었을 경우 값을 넣어줌
- 소팅을 했기 때문에 지금 느려는 현재값이 누산기의 마지막 값과 다르다면 넣어주는 방식



<b>비동기 활용 5. Promise실행</b> / 어려움

```javascript
function runPromiseInSequence(arr,input){
    return arr.reduce(
    	(promiseChain, currentFunction) => promiseChain.then(currentFunction),
        Promise.resolve(input)
    );
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10)
  .then(console.log);   // 1200
```





래퍼런스 

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce