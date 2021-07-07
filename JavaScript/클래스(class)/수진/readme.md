# 클래스(class)

클래스는 객체 재향 프로그래밍에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 일종의 틀로, 객체를 정의하기 위한 상태와 메서드로 구성된다.



### 1. 기본 문법

```javascript
class MyClass {
	// 여러 메서드를 정의할 수 있다.
	constructor() { ... }
	method1() { ... }
	method2() { ... }
}
```

위와 같이 클래스를 만들고, `new MyClass()`를 호출하면 내부에서 정의한 메서드가 들어 있는 객체가 생성된다.

객체의 기본 상태를 설정해주는 생성자 메서드 `constructor()`는 `new`에 의해 자동으로 호출되므로, 특별한 절차 없이 객체를 초기화 할 수 있다.

```javascript
class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        alert(this.name);
    }
}
// 사용법;
let user = new User("John");
user.sayHi();
```

=> `new User("John")`을 호출하면 다음과 같은 일이 일어난다.

1. 새로운 객체 생성
2. 넘겨방은 인수와 함께 `constructor`가 자동으로 실행, 이 때 인수 `"John"`이 `this.name`에 할당된다.

위 과정을 거친 후에 `user.sayHi()` 같은 객체 메서드를 호출할 수 있다.!



### 2. 클래스란

자바스크립트에서 클래스는 함수의 한 종류이다.

```javascript
alert(typeof User); // function 
```

`class User { ... }` 문법 구조가 하는 일

1. User`라는 이름을 가진 함수를 만듭니다. 함수 본문은 생성자 메서드 `constructor`에서 가져옵니다. 생성자 메서드가 없으면 본문이 비워진 채로 함수가 만들어집니다.
2. `sayHi`같은 클래스 내에서 정의한 메서드를 `User.prototype`에 저장한다.



`new User`를 호출해 객체를 만들고, 객체의 메서드를 호출하면 메서드를 프로토타입에서 가져온다. 이 과정이 있기 때문에 객체에서 클래스 메서드에 접근할 수 있다. 

`class User` 선언 결과를 나타내면 아래와 같다.

[User] 

```javascript
constructor(name) {
    this.name = name;
}
```

[User.prototype]

```javascript
sayHi: function
constructor: User
```

[정리]

```javascript
class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        alert(this.name);
    }
}
// 클래스도 함수이다.
alert(typeof User); // function
// 정확히는 생성자 메서드와 동일하다.
alert(User === User.prototype.constructor); // true
// 클래스 내부에서 정의한 메서드는 User.prototype에 저장된다.
alert(User.prototype.sayHi); // alert(this.name);
// 현재 프로토타입에는 메서드가 두개이다.
alert(Object.getOwPropertyNames(User.prototype)); // constructor, sayHi
```



### 3. 클래스 표현식

함수처럼 클래스도 다른 표현식 내부에서 정의, 전달, 반환, 할당할 수 있다. 

```javascript
// 클래스 표현식
let User = class {
    sayHi() {
        alert("Hello");
    }
}
```

기명 함수 표현식과 유사하게 클래스 표현식에도 이름을 붙일 수 있다.

클래스 표현식에 이름을 붙이면, 이 이름은 오직 클래스 내부에서만 사용 할 수 있다.

```javascript
// 기명 클래스 표현식
let User = class MyClass {
    sayHi() {
        alert(MyClass); // MyClass라는 이름은 오직 클래스 안에서만 사용할 수 있다.!
    }
}
new User().sayHi(); // 정상 작동 (MyClass의 정의를 보여줌.)
alert(MyClass); // ReferenceError: MyClass is not defined, MyClass는 클래스 밖에서 사용할 수 없다.!
```

아래와 같이 '필요에 따라' 클래스를 동적으로 생성하는 것도 가능하다.

```javascript
function makeClass(phrase) {
    // 클래스를 선언하고 이를 반환한다.
    return class {
        sayHi() {
            alert(phrase);
        };
    };
}
// 새로운 클래스 생성
let User = makeClass("Hello");
new User().sayHi(); // Hello
```



### 4. getter와 setter

리터럴을 사용해 만든 객체처럼 클래스도 getter나 setter, 계산된 프로퍼티를 포함할 수 있다.

`get`과 `set`을 이용해 `user.name`을 조작할 수 있다.

```javascript
class User {
    constructor(name) {
        // setter 활성화
        this.name = name;
    }
    get name() {
        return this._name
    }
    set name(value) {
        if (value.length < 4) {
            alert("이름이 너무 짧습니다.");
            return;
        }
        this._name = value.
    }
}
let user = new User("John");
alert(user.name); // John
user = new User(""); // 이름이 너무 짧습니다.
```

이런 방법으로 클래스를 선언하면 `user.prototype`에 getter와 setter가 만들어지므로 get과 set을 사용할 수 있다.!



### 5. 계산된 메서드 이름[...]

대괄호 `[...]`를 이용해 계산된 메서드 이름(computed method name)을 만드는 예시

```javascript
class User {
    ['say' + 'Hi']() {
        alert("Hello");
    }
}
new User().sayHi();
```



### 6. 클래스 필드

`클래스 필드(class field)`라는 문법을 사용하면 어떤 종류의 프로퍼티도 클래스에 추가할 수 있다.!

클래스 `User`에 `name` 프로퍼티를 추가하면

```javascript
class User {
    name = "John";
	sayHi() {
        alert(`Hello, ${this.name}!`);
    }
}
new User.sayHi(); // Hello, John!
```

*클래스를 정의할 때 '<프로퍼티 이름> = <값>'을 써주면 간단히 클래스 필드를 만들 수 있다.

*클래스 필드의 중요한 특징 중 하난느 `User.prototype`이 아닌 개별 객체에만 클래스 필드가 설정된다는 점이다.

```javascript
class User {
    name = 'John';
}
let user = nse User();
alert(user.name) // John
alert(User.prototype.name) // undefined
```



[참고]

- https://ko.javascript.info/class