##### JavaScript 내장함수



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





