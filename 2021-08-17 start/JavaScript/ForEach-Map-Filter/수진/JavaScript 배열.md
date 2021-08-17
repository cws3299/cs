# JavaScript 배열 

### 1. forEach 패턴

배열내의 모든 요소 각각에 대하여 함수를 실행한다. 

```javascript
let date = [10, 15, 20, 25, 30];
let res = [];
// 모든 원소 값에서 -5
date.forEach( x => {
    res.push(x-5)
});
console.log(res);
// [5, 10, 15, 20, 25]
```

```javascript
let date = [10, 15, 20, 25, 30];
// 모든 원소 값에서 -5
date.forEach( (var, idx, arr) => {
    date[idx] = var -5;
})
// 얕은 복사가 수행되어 기존 배열 수정
```



### 2. map 패턴

배열내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 가진 `새로운 배열`을 만들어 낸다. 

```javascript
let date = [10, 15, 20, 25, 30];
// 모든 원소 값에서 -5 후 새로운 배열 반환
// 1. 
let res = date.map( x => {
    return x - 5
})
// 2. 
let res = date.map(function(x){
    return x - 5
})
// 3.
function minus(x){
    return x - 5
}
var res = date.map(minus);
```



#### forEach vs map

배열 순회 후 내부 인자의 원소의 값을 가공하여 로직을 완성하는 메소드

새롭게 가공후 수정된 배열을 리턴을 할 때는 map

기존 배열을 가공하여 평균, 합산 등을 구할 때는 forEach를 사용한다.



### 3. filter 패턴

콜백 함수에 지정된 조건에 맞는 요소를 새롭게 반환한다.

콜백함수의 인자는 순서대로 값(value), 인덱스(index), 원 배열(array)이다.

```javascript
let date = [
    {name: 'jack', age; 20},
    {name: 'kevin', age: 15},
    {name: 'rick', age: 29}
]
// age가 20 이상인 원소 필터링 
let res = date.filter( x => {
    return x.age >= 20
});
```



### 4. reduce 패턴

배열의 각 요소에 대해 주어진 reducer함수를 실행하고, 하나의 결과값을 반홚나다. 

```javascript
// 1
[0,1,2,3,4].reduce(function(acc,cur){
    return acc+cur
})
//2
[0,1,2,3,4].reduce((prev,cur => prev+cur))
// return 10
```



### 5. every, some

특정 조건을 만족하는지 배열 내부의 원소를 순회하면서 검사한다.

#### 5.1 every

성능을 위해 조건을 만족하지 않는 값이 발견되면 그 즉시 순회가 중단된다.(Return false)

```javascript
let date = [
    {name: 'jack', age; 20},
    {name: 'kevin', age: 15},
    {name: 'rick', age: 29}
]
// 내부 원소 모두 만족해서 true 출력
let res = date.every(x => {
    return x.age >= 20
})
// false
```

#### 5.2 some

```javascript
let date = [
    {name: 'jack', age; 20},
    {name: 'kevin', age: 15},
    {name: 'rick', age: 29}
]
// 내부 원소 한 개라도 만족 true 출력
let res = date.some(x => {
    return x.age >= 20
})
//true
```



[출처]

- https://velog.io/@nayeon/Array%EC%9D%98-map-filter-reduce-forEach-%EB%A9%94%EC%86%8C%EB%93%9C

- https://velog.io/@yunsungyang-omc/JS-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4-%EC%B2%98%EB%A6%AC-%EC%A0%95%EB%A6%AC-map-forEach



### 자주 사용하는 연산

#### 1.1 배열 만들기

```javascript
let fru = ['사과', '바나나'];
```

#### 1.2 인덱스로 배열의 항목 접근하기

```javascript
let first = fru[0]
let last = fru[fru.length -1]
```

#### 1.3 배열 항목들을 순환하며 처리하기

```javascript
fru.forEach(function (item, index, array) {
    console.log(item, index)
})
// 사과 0
// 바나나 1
```

#### 1.4 배열 끝에 항목 추가하기

```javascript
let newLength = fru.push('오렌지')
// ['사과','바나나','오렌지']
```

#### 1.5 배열 끝에서 부터 항목 제거하기

```javascript
let last = fru.pop();
// ['사과','바나나']
```

#### 1.6 배열 앞에서 부터 항목 제거하기

```javascript
let fist = fru.shift()
// ['바나나']
```

#### 1.7 배열 앞에 항목 추가하기

```javascript
let newLength = fru.unshift('딸기')
// ['딸기','바나나']
```

#### 1.8 배열 안 항목의 인덱스 찾기

```javascript
let pos = fru.indexOf('바나나')
// 1
```

#### 1.9 인덱스 위치에 있는 항목 제거하기

```javascript
let removedItem = fru.splice(pos,1)
// ['딸기']
```

#### 1.10 인덱스 위치에서 여러개의 항목 제거하기

```javascript
let vegetables = ['양배추', '순무', '무', '당근']
let pos = 1
let n = 2
let removedItem = vegetables.spice(pos,n)
// pos 인덱스부터 n개의 항목 제거
console.log(vegetables)
// ['양배추','당근']
console.log(removedItem)
// ['순무','무']
```

#### 1.11 배열 복사하기

```javascript
let shallowCopy = fru.slice()
```

