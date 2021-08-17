### JavaScript

##### :heavy_check_mark: forEach , map , filter의 차이



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





##### :flags: map

- `map()`메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아<b>새로운 배열을 반환</b>
- <b>새로운 배열을 반환한다는 사실에 주의를 기울여야 한다.</b>



##### :heavy_check_mark: 예시

```javascript
const array = [1,4,9,16]

const map_array = array.map((x)=>x*2)
const map_array = array.map(function(x){ return x*2 })

// map_array = [2, 8, 18 ,32]
```



##### :heavy_check_mark: 구문

`arr.map(callback(currentValue[,index[,array]])[, thisArg])`



`callback` : 새로운 배열 요소를 생성하는 함수

- `currentValue` :(선택) 처리할 현재 요소
- `index` : (선택) 처리할 현재 요소의 인덱스
- `array` : (선택) map()을 호출한 배열

`thisArg`: (선택) `callback`을 실행할 때 `this`로 사용되는 값



##### :heavy_check_mark: MDN에 없던 예제

```javascript
const array = [1,4,9,16]
const array2 = [1,2,3,4]

const map_array1 = array.map((x)=>x*2)
const map_array = array.map(function(x,index,array){
    console.log(index)
    console.log(array)
    console.log(this)
    return x*2 
    
} , array)

console.log(map_array1)
console.log(map_array)

/*
0
[ 1, 4, 9, 16 ]
[ 1, 4, 9, 16 ] => this
1
[ 1, 4, 9, 16 ]
[ 1, 4, 9, 16 ] => this
2
[ 1, 4, 9, 16 ]
[ 1, 4, 9, 16 ] => this
3
[ 1, 4, 9, 16 ]
[ 1, 4, 9, 16 ] => this


[ 2, 8, 18, 32 ]
[ 2, 8, 18, 32 ]
*/


const array = [1,4,9,16]
const array2 = [1,2,3,4]

const map_array1 = array.map((x)=>x*2)
const map_array = array.map(function(x,index,array){
    console.log(index)
    console.log(array)
    console.log(this)
    return x*2 
    
} , array2)

console.log(map_array1)
console.log(map_array)

/*
0
[ 1, 4, 9, 16 ]
[ 1, 2, 3, 4 ] => this
1
[ 1, 4, 9, 16 ]
[ 1, 2, 3, 4 ] => this
2
[ 1, 4, 9, 16 ]
[ 1, 2, 3, 4 ] = > this
3
[ 1, 4, 9, 16 ]
[ 1, 2, 3, 4 ] => this


[ 2, 8, 18, 32 ]
[ 2, 8, 18, 32 ]
*/
```







##### :heavy_check_mark: 반환 값

- 배열의 각 요소에 대해 실행한  `callback`의 결과를 모은 새로운 배열



##### :heavy_check_mark:설명 

- map의 callback함수는 (undefined)도 포함해서 배열 값이 들어있는 인덱스에 대해서 호출 된다.
- callback함수는 호출될 대상 요소의 값, 인덱스 그리고 map을 호출한 원본 배열 세개의 인수를 받는다.
- thisArg 매개변수가 map에 전달된 경우 callback 함수의 this값으로 활용된다.



##### :heavy_check_mark:예제

```javascript
let numbers = [1,4,9]
let roots = numbers.map(Math.sqrt)

// root [1,2,3]
// numbers [1,4,9]

// callback 함수만 표현되고 선택요소들은 모두 표현 안된 사례
```



```javascript
let array = [{key:1 , value:10}, {key:2, value:20}, {key:3, value:30}]

let reformarray = array.map(function(obj){
    let new_obj = {}
    new_obj[obj.key] = obj.value;
    return new_obj
})

// reformarray [{1:10},{2:20},{3:30}]
```

- <b>MDN에 안나온 설명</b>
  - callback함수 => 존재
  - currentValue => 존재
  - new_obj -> currentValue의 아웃풋 값
  - reformarray에 new_obj들이 하나씩 들어감



##### :flags:filter

- filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

- ```javascript
  const words = ['spray' , 'limit' , 'elite' , 'exuberant' , ' destruction' , 'present']
  
  const result = words.filter(word => word.length > 6)
  
  console.log(result)
  // result = ["exuberant" , "destruction" , "present"]
  ```

##### `arr.filter(callback(element[, index[, array]])[, thisArg])`

`callback` : 새로운 배열 요소를 생성하는 함수

- `element`: 처리할 현재 요소
- `index` : (선택) 처리할 현재 요소의 인덱스
- `array` : (선택) filter()를 호출한 배열

`thisArg`: (선택) `callback`을 실행할 때 `this`로 사용되는 값



##### 반환값

- 테스트를 통과한 요소로 이루어진 새로운 배열을 반환, 어떠한 요소도 테스트를 통과하지 못했을 경우 빈 배열을 반환
- filter에 의해 처리되는 요소의 범위는 callback의 첫 호출 전에 설정됩니다. filter 호출 시작이후로 배열에 추가된 요소는 callback에 의해 방문되지 않습니다. 배열의 기존 요소가 변경 또는 삭제된 경우 , callback에 전달된 그 값은 filter가 그 요소를 방문한 시점의 값이 됩니다. 삭데된 요소는 반영되지 않습니다.



##### 예제

- 10이하인 모든 요소가 제거된 걸러진 배열을 만드는 과정

- ```javascript
  function isBigEnough(value){
      return value > = 10
  }
  
  var filterd  = [12,5,8,130,44].filter(isBigEnough)
  // filterd [12,130,44]
  ```

- JSON에서 무효한 항목 거르기

- ```javascript
  var arr = [
      {id:15},
      {id:-1},
      {id:0},
      {id:3},
      {id:12.2},
      {},
      {id: null},
      {id: Nan},
      {id: 'undefined'}
  ];
  
  var invaildEntries = 0
  
  function isNumber(obj){
      return obj !== undefined && typeof(obj) === 'number' && !isNan(obj);
  }
  
  function filterByID(item){
      if (isNumber(item.id) && item.id !== 0){
          return true
          }
     	invalidEntries++
      return false
  }
  
  var arrByID = arr.filter(filterByID)
  
  console.log('Filtered Array|n' , arrByID);
  // Filtered Array
  // [{id: 15} , {id:-1} , {id:3} , {id:12.2}]
  
  console.log('Number of Invalid Entries = ', invalidEntries);
  Number of Invalid Entries =  5
  ```





##### Array.map() : Array의 모든 요소를 가져와 배열로 재구성할 때 사용 (새롭게 리턴할 때) , return 값을 정해줄 수 있다 

- 콜백이 반환하는 반환값을 배열에 담는다.

##### Array.filter() : 조건에 일치하는 일부 요소를 가져와 배열로 재구성할 때 사용 (새롭게 리턴할 때) , return값이 정해져있고

- return값이 정해져있다.

##### Array.forEach() : 배열의 인자수 만큼 반복되는 for문으로 생각하면 편함



##### forEach vs map

- forEach 메소드는 아무것도 리턴하지 않는다
- forEach의 콜백은 Array를 변경시킬 수 있다.
- forEach의 경우 Array안의 데이터를 변경하련느 것이 아니라 데이터 베이스에 저장 및 로그아웃 하는 과정에 유용하다
- map은 기존 배열을 이용해, 새로운 배열을 생성한다.
- map은 데이터를 변경할 때 선호될 수 있다. 더 빠르게 새로운 배열을 반환하며 다른 메소드들과의 메소드 체이닝에 유용하게 활용 가능하다.



래퍼런스

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

https://velog.io/@tonyk0901/for-forEach-map-reduce-find-filter-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EB%B0%8F-%EC%82%AC%EC%9A%A9%EC%B2%98

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

https://code-monkey7.tistory.com/30

https://velog.io/@limes/Javascript-Array-Method-for-each-%EC%99%80-map%ED%95%A8%EC%88%98%EC%9D%98-%EC%B0%A8%EC%9D%B4