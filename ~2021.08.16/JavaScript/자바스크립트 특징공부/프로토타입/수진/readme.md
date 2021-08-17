# 프로토타입

### 1. 프로토타입 객체

자바스크립트는 프로토타입 기반 객체지향 프로그래밍 언어이다. 

프로토타입 기반 객체지향 프로그래밍 언어는 클리스 없이(Class-less)도 객체를 생성할 수 있다.(ECMAScript 6에서 클래스가 추가됨.)

#### 1.1 자바스크립트의 객체 생성 방법

자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 그리고 이것은 마지 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다. 이러한 부모 객체를 **Proptotype(프로토타입) 객체** 또는 줄여서 **Prototype(프로토타입)**이라 한다.

Prototype 객체는 생성자 함수에 의해 생성된 각각의 객체에 공유 프로퍼티를 제공하기 위해 사용한다.

```javascript
var student = {
    name: 'Lee',
    score: 90
};
// student에는 hasOwnProperty 메소드가 없지만 아래 구문은 동작한다.
console.log(student.hasOwnProperty('name')) // true
console.dir(student);
```

![image](readme.assets/123264344-e57b2280-d534-11eb-99d7-1648ef345003.png)

> [[Prototype]] 객체의 데이터 프로퍼티는 get 엑세스를 위해 상속되어 자식 객체의 프로퍼티처럼 사용할 수 있다. 하지만 set 엑세스는 혀용되지 않는다.

[[Prototype]]의 값은 Prototype(프로토타입) 객체이며 _ _ proto _ _ acessor property로 접근 할 수 있다. _ _ proto _ _ 프로퍼티에 접근하면 내부적으로 Object.getPrototypeOf가 호출되어 프로토타입 객체를 반환한다.



student 객체는 _ _ proto _ _ 프로퍼티르 자신의 부모 객체(프로토타입 객체)인 Object.prototype을 가리키고 있다.

`console.log(student._ _ proto _ _ === Object.prototype); // true `

객체를 생성할 때 프로토타입은 결정된다. 결정된 프로토타입 객체는 다른 임의이 객체로 변경할 수 있다. 이것은 부모 객체인 프로토타입을 동적으로 변경할 수 있다는 것을 의미한다. 이러한 특징을 활용하여 객체의 상속을 구현할 수 있다.



### 2. [[Prototype]] vs prototype 프로퍼티

모든 객체는 자신의 프로토타입 객체를 가리키는 [[Prototype]] 인터널 슬롯을 갖으며 상속을 위해 사용된다.

함수도 객체이므로 [[Prototype]] 인터널 슬롯을 갖는다. 그런데 함수 객체는 일반 객체와는 달리 prototype 프로퍼티도 소유하게 된다.

```javascript
function Person(name) {
    this.name = name;
}
var foo = new Person('Lee');

console.dir(Person); // prototype 프로퍼티가 있다.
console.dir(foo); // prototype 프로퍼티가 없다.
```



#### 2.1 [[Prototype]]

- 함수를 포함한 모든 객체가 가지고 있는 인터널 슬롯이다.
- **객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리키며 함수 객체의 경우 `Function.prototype`을 가리킨다. **

`console.log(Person._ _ proto _ _ === Function.prototype);`

#### 2.2 prototype 프로퍼티

- 함수 객체만 가지고 있는 프로퍼티이다.
- **함수 객체가 생성자로 사용될 때 이 함수를 통해 생성될 객체의 부모 역항르 하는 객체(프로토타입 객체)를 가리킨다.**

`console.log(Person.prototype === foo._ _ proto _ _);`



### 3. constructor 프로퍼티

프로토타입 객체는 constructor 프로퍼티를 갖는다. 이 constructor 프로퍼티는 객체의 입장에서 자신을 생성한 객체를 가리킨다.

```javascript
function Person(name) {
    this.name = name;
}
var foo = new Person('Lee');

// foo 객체의 프로토타입 객체는 Person.protototype이다.
// Person() 생성자 함수에 의해 생성된 객체를 생성한 객체는 Person()생성자 함수이다.
console.log(Person.prototype.constructor === Person);

// foo 객체를 생성한 각체는 Person() 생성자 함수이다.
console.log(foo.constructor === Person);

// Person() 생성자 함수를 생성한 객체는 Function() 생성자 함수이다.
console.log(Person.constructor === Function);
```



[참고]

- https://poiemaweb.com/js-prototype

