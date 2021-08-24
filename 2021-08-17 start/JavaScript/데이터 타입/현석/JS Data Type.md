# JS Data Type

>프로그래밍 언어에서 사용할 수 있는 데이터(string, number, boolean etc..)의 종류



## 1. Primitive data type

> 원시 타입의 값은 변경 불가능한 값(immutable)이다.



### 1. number

> JS에서 숫자 타입은 정수와 실수를 구분하지 않는 64비트 부동소수점형 데이터 타입이다.



- 진수와 상관없이 2진수로 저장되고, 참조할시 모두 10진수로 해석된다.

```js
let binary = 0b01000001; 		// 2진수
let octal = 0o101;       		// 8진수
let hexa = 0x41;          		// 16진수

console.log(binary);			// 65
console.log(octa);				// 65
console.log(hexa);				// 65

console.log(binary === octa);	// true
console.log(binary === hexa);	// true
```



- 정수의 모든 연산도 실수로서 처리한다. (float, int 구분이 없다)

```js
console.log(1 === 1.0);			// true
console.log(4 / 2);				// 2
console.log(3 / 2);				// 1.5
```



- `Infinity`, `-Infinity`, `NaN`의 표기가 가능하다.

```js
console.log(10 / 0);			// Infinity
console.log(10 / -0);			// -Infinity
console.log(1 * 'string');		// NaN
```





### 2. string

>텍스트 데이터를 나타내는 16bit의 데이터 타입이다.



- 재할당이 가능하지만 재할당시 주소값이 변화하고, 같은 문자열은 같은 주소값을 가진다.

```js
let a = 'string';
let b = 'string';
console.log(a === b);			// true
```



- 문자열은 유사배열이지만 내부 값을 변경시킬 수 없다.

```js
let str = 'string';
console.log(str[0])				// s

str[0] = 'a';
console.log(str);				// string
```



- `Template literal`을 사용하면 공백과 줄바꿈 표현을 escape문자 없이 표현 할 수 있다.
  - 인코딩 되어 나오는 값이 아니라 정상적인 공백과 줄바꿈 표현으로 나타난다.





### 3. boolean

> 논리적 값인 `true`, `false` 를 나타내는 데이터 타입이다.



- `''`(빈 문자열), `undefined`, `null`, '0'(숫자)은 `false`로 인식한다.





### 4. undefined

> 변수 선언 이후 값을 할당하지 않은 초기화 상태의 데이터 타입이다.



- 변수 선언시 초기화된 값

```js
console.log(a);						// undefined
var a = 'b';
```





### 5. null

> `null`은 의도적으로 변수에 값이 없다는 것을 명시할 때 사용하는 데이터 타입이다.



- null 타입의 값은 `null`이 유일하며, Null, NULL등과 다르다.

```js
let a = null;
let b = 'Null';

console.log(a === b);				// false
```



- 함수가 호출되었으나 유효한 값을 반환할 수 없는 경우 `null`을 반환하기도 한다.

```js
let element = document.querySelector('.myElem');
// myElem이라는 클래스를 가진 요소가 없다면 null을 반환

console.log(element);				// null
```



- `null`타입을 확인할 때는 type of 가 아닌 일치 연산자(===)를 사용한다.

```js
let a = null;
console.log(typeof a);				// object

console.log(a === null)				// true
console.log(typeof a === null); 	// false
```





### 6. symbol

> 주로 이름의 충돌 위험이 없는 유일한 객체 프로퍼티 키(property key)를 만들기 위해 사용한다.
>
> ES6에서 추가



- Symbol함수를 호출하여 생성

```js
let key = Symbol('key');
console.log(typeof key);			// symbol

const obj = {};
obj[key] = 'value';
console.log(obj[key]);				// value
```



- 심볼들은 매번 새로운 심볼을 생성한다.

```js
let key1 = Symbol('key');
let key2 = Symbol('key');
let key3 = Symbol('key');

console.log(key1 === key2);			// false
console.log(key2 === key3);			// false
```









## 2. Object (reference) type

> 객체는 데이터와 데이터 관련 동작(절차, 방법, 기능)을 모두 포함할 수 있는 개념적 존재



- 이름과 값을 가진 데이터를 의미하는 프로퍼티와 동작을 의미하는 메소드를 포함할 수 있는 독립적 주체

- 원시타입을 제외한 나머지 값들(배열, 함수, 정규표현식 등)은 모두 객체이다.

- 객체는 pass-by-reference(참조에 의한 전달) 방식으로 전달된다.







## reference

https://poiemaweb.com/js-data-type-variable

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol
