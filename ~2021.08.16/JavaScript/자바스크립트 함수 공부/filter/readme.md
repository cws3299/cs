##### JavaScript 내장함수



##### :flags: forEach

- `forEach()`메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.
- 기본적으로 js는 배열을 순회하는 방법으로 `for`문과 `forEach`문이 사용된다.

```javascript
const arr = [1,2,3,4];

for (let i=0; i<arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach(arrElement => console.log(arrElement));
```

- `for`문은 인덱스 값에 해당하는 변수를 만들고 그 변수의 값을 증가시키면서 배열의 각 요소에 접근
- `forEach`문은 콜백 함수를 인자로 받아, 각각의 배열요소에 그 함수를 실행하는 방법
- <b>기능적 측면만 고려한다면, 두 가지 방법에 차이는 존재하지 않는다.</b>
- `forEach()의 경우 콜백 함수를 인자로 받아 배열의 각 요소에 콜백함수를 실행한다. `
- <b>아무 값도 반환하지 않음
- </b>

### 용도 : <b> 반환 값 없이 요소 값에 일련의 action을 취하고자 할 경우</b>

- `for` 문이 `forEach`에 비해 성능적으로는 빠르지만 스코프를 오염시킬 수 있는 위험이 보다 높음



```javascript
const array = [1,4,9,16]
const brray = []

array.forEach(element => {
    brray.push(element*2)
});

console.log(array)
console.log(brray)
```



- array의 요소들을 모두 돌면서 각 요소에서 특정 기능을 수행한다. 
- 여기서 특정 기능은 brray에 array의 각 요소 element에 2를 곱한 값을 넣는 작업



##### :heavy_check_mark: 구문

`arr.forEach(callback(currentValue[, index[,array]])[,thisArg])`

- callback : 각 요소에 대해 실행할 함수, 다음 세 가지 매개변수를 받습니다.
  - currentValue : 처리할 현재 요소 (map은 currentValue가 선택요소)
  - index (선택) : 처리할 현재 요소의 인덱스
  - array (선택) : forEach()를 호출한 배열
- thisArg (선택) : callback을 실행할 this로 사용할 값

`forEach()는 주어진 callback을 배열에 있는 각 요소에 대해 오름차순으로 한 번씩 실행함 , 삭제 했거나 초기화 하지 않은 인덱스 속성에 대해서는 실행하지 않음`



`forEach()로 처리할 요소의 범위는 callback 호출 전에 설정됨. forEach() 호출을 시작한 뒤 배열에 추가한 요소는 callback이 방문하지 않음`

`배열의 기존값이 바뀐경우, callback에 전달하는 forEach()가 요소를 방문한 시점의 값을 사용함`

##### forEach는 배열을 변형하지 않지만 ,  callback을 변형시킬수는 있다.



##### :heavy_check_mark: thisArg 활용

```javascript
function Counter() {
  this.sum = 0
  this.count = 0
}
Counter.prototype.add = function(array) {
  array.forEach(function(entry) {
    this.sum += entry
    ++this.count
    console.log(this)
  }, this)
  // ^---- 주의
}

const obj = new Counter()
obj.add([2, 5, 9])
obj.count
// 3
obj.sum
// 16
```

- thisArg 매개변수(this)를 forEach에 제공했기 때문에 , callback은 전달받은 this의 값을 자신의 this값으로 사용할 수 있음
- 만약에 주의라고 적힌 곳에 있는 this를 사용하지 않을 경우  console.log(this)에는 전역객체가 찍힘



##### :heavy_check_mark:반복 중 배열의 변경에 따른 반복 생랴

```javascript
let words = ['one', 'two', 'three', 'four']
words.forEach(function(word) {
  console.log(word)
  if (word === 'two') {
    words.shift()
  }
})
// one
// two
// four
```





래퍼런스

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

https://velog.io/@tonyk0901/for-forEach-map-reduce-find-filter-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EB%B0%8F-%EC%82%AC%EC%9A%A9%EC%B2%98



