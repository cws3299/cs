# 데이터 타입

### 1. 기본 타입(원시 타입)

#### 1.1 숫자(number) 

64bit 부동소수점 형식으로, 모든 숫자를 실수로 처리한다.

```javascript
var num_1 = 10; // 정수는 실수 처리한다.
var num_2 = -10.05; 
var num_3 = 10/0; // +Infinity
var num_4 = 10/-0; // -Infinity
var num_5 = 1 * 'str'; // NaN
```

NaN (Not a Number) : 나온 값이 숫자가 아니다. 

#### 1.2 문자열(string)

16bit 유니코드 문자셋으로 구성된 문자열 

- 작은따옴표(''), 큰따옴표(""), 템플릿 리터럴(``)으로 문자열 할당한다.

#### 1.3 불리언(boolean)

```javascript
var bool_1 = ture;
console.log(typeof bool_1) // boolean
```

#### 1.4 undefined

값이 할당되지 않았을 때, 자바스크립트 엔진이 암묵적을 초기화하는 값 , 타입과 값 모두 undefined

```javascript
var undef_1;
console.log(undef_1); // undefined
console.log(typeof undef_1); // undefined
```

#### 1.5 null

의도적으로 '값이 없음'을 명시하기 위해 할당하는 값

- null 타입의 typeof 연산 결과는 null이 아니라 object이다 .(기본 데이터 타입은 객체가 아니지만, 초기 자바스크립트의 버그로 object가 나온다. )
- 따라서 null값 체크를 위해서는 `===`일치 연산자를 사용한는게 좋다.
- null은 객체가 아닌 기본타입이다. 

```javascript
var null_1 = null;
console.log(null_1); // null
console.log(typeof null_1); // object
null_1 === null; // true
```

#### 1.6 심벌(symbol)

변경불가능한 유일한 값을 생성할 때 사용하며, 값 자체의 확인이 불가하여 외부로 노출되지 않는다.

```javascript
var sym_1 = Symbol('key');
console.log(typeof sym_1); // symbol
```

#### 1.7 기본타입의 표준 메서드

순자, 문자열, 불리언, 심벌 타입은 객체가 아니지만, 표준메서드가 정의되어 있어 객체처럼 호출이 가능하다.!

##### 1.7.1 숫자타입

```javascript
var num 777;
num.toExponential(2); // 7.77e+2
```

##### 1.7.2 문자열 타입

```javascript
var str = 'hello';
str.toUpperCase(); // HELLO
```

##### 1.7.3 불리언 타입

```javascript
var bool = true;
bool.valueOf(); // true
```

##### 1.7.4 심벌 타입

```javascript
var sym = Symbol('key');
sym.toString(); // Symbol(key)
```

##### 1.7.5 래퍼 객체

순간적으로 생성되었다가 사라지는 객체를 래퍼 객체라고 한다.

원시타입의 메서드를 호출하면 아래와 같이 행동한다. 

1. 순간적으로 원시타입에 해당하는 '객체' 생성

2. '객체'의 메서드 호출

3. 메서드 처리가 끝나는 '객체'는 사라지고, 원래의 원시타입만 남는다.

##### 1.7.6 래퍼객체의 존재 이유

1. 객체의 딜레마 

   : 객체는 다양한 프로퍼티와 메서드가 있어서 유용하지만, `무겁고 느리다`는 단점이 있다. 

2. 원시타입의 딜레마

   : 원시타입은 가볍고 빠르지만, 그저 **값 하나 뿐이라는 단점**이 있다. 

3. 래퍼객체 등장

   : 원시타입을 그대로 쓰되, **메서드를 호출할 때만 잠깐 객체로** 바꾸자.

따라서 객체를 따로 생성할 필요 없이, 원시타입을 그대로 사용하는것이 권장사항이다. 

### 2. 참조 타입(객체 타입)

객체는 데이터와 그 데이터에 관련한 동작(절차, 방법, 기능)을 모두 포함할 수 있는 개념적 존재이다. 이름과 값을 가지는 데이터를 의미하는 프로퍼티와 동작을 의미하는 메소드를 포함할 수 있는 독립적 주체이다. 

원사타입을 제외한 나머지 값들(배열, 함수, 정규표현식)등은 모두 객체이다. 

#### 1. 객체

##### [객체 생성 방식]

##### 1.1 객체 리터럴 방식(Object Literal)

`var obj = {key: value, ...}` : 변수처럼 객체를 생성하는 방식

```javascript
var myObj = {
    name: 'ori',
    age: 20,
    hello: function(){
        return `이름은 ${this.name}이고, 나이는 ${this.age}입니다.`;
    }
};
```

*myObj객체 생성, name, age는 `프로퍼티`, hello는 `메서드`이다.

##### 1.2 생성자 방식(Constructor)

new Constructor()방식으로 객체를 생성하는 방식

##### 1.2.1 `new Object()` : new 연산자를 통해 Object객체의 생성자함수를 호출한다. 

```javascript
var myObj = new Object();
myObj.name = 'ori';
myObj['age'] = 20;
myObj.hello = function(){
    return `이름은 ${this.name}이고, 나이는 ${this.age}입니다.`;
};
console.log(myObj); // {name: 'ori', age: 20, hello: [Function]}
```

##### 1.2.2 `new 생성자()`: Number, String, Array 등의 내장 객체도 생성할 수 있다.

```javascript
// String객체 생성하기
var strObj = new String('hello');
console.log(strObj); // [String: 'hello']

// Array(배열)객체 생성하기
var arrObj = new Array([1, 2, 3]);
console.log(arrObj); // [ [1, 2, 3] ]
```

##### 1.2.3 `new 사용자 정의 생성자()` : 직접 생성자 함수를 만들어 객체를 생성할 수 있다.

```javascript
// 생성자 함수 만들기
var SelfObj = function(name, age){
    this.name = name;
    this.age = age;
    this.hello = function(){
        return `이름은 ${this.name}이고, 나이는 ${this.age}입니다.`;
    }
}
// 객체 생성하기
var selfObj = new SelfObj('ori',20);
console.log(selfObj); // SelfObj { name: 'ori', age: 20, hello: [Function] }
```

##### 1.3 Object. create()방식

Object.create(프로토타입) : 프로토타입 상속을 통해 객체를 만드는 방식이다. 

```javascript
// 부모 객체 생성
var parent = {a:10, b:20};
// 자식 객체 생성(부모의 프로퍼티를 상속 받음)
var child = Object.create(parent);
console.log(child.a); // 10
```



[참고]

- https://curryyou.tistory.com/182

- https://curryyou.tistory.com/189?category=898979