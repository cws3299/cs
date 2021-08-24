# this

### 🚩this 란

this는 어떻게 정의되었느냐가 아니라 어떻게 호출되었느냐에 따라 결정된다.



### 1. 전역에서의 this

:ballot_box_with_check: 전역에서의 this는 기본적으로 window 객체이다.

```javascript
console.log(this); // window {...}
```



### 2. 일반 함수의 this

:ballot_box_with_check: 일반 함수에서의 this는 window 객체이다. 

```javascript
function whatIsThis() {
    console.log(this);
}
whitIsThis(); // window {...}
```

전역에서 실행된 함수 내부의 this 는 window가 된다.

:white_check_mark: 단, strict mode에서는 undefined 이다.

```javascript
function whatIsThis() {
    'use strict'
    console.log(this);
}
whitIsThis(); // undefined
```

```javascript
'use strict';
var name = 'july';
function foo() {
    console.log(this.name); // error
}
foo();
```

일반 함수 실행 방식에서 this는 window 객체를 가리킨다. 하지만 strice mode에서 this는 무조건 `undefined`이다. 

undefined에는 어떠한 속성도 없으므로 this.name은 실행이 불가하고 error를 출력한다. 

단, 메서드로 호출시 this가 `undefined`가 아니다.!, 

simple parameter를 받는 함수만 use strict 발견 가능 parameter로 default값을 주면 non-simple parameter라 error 일반함수호출 시는 use strict 사용시 this가 undefined가 된다. 메소드함수호출 시는 use strict 사용을 해도 this가 메소드를 호출한 객체가 된다.

#### 3. 객체 메서드(method)의 this

:ballot_box_with_check: 객체의 method로 호출될 때 this는 해당 객체를 가리킨다.

```javascript
var apple = '독이 든 사과';
var home = {
    apple: '맛있는 사과',
    eatApple: eatAppleFn
}
function eatAppleFn() {
    console.log(this)
    console.log(`백설공주가 ${this.apple}를 먹습니다.`);
}
// (1) 객체 method 호출
home.eatApple(): // 
// (2) 함수 직접 호출
eatAppleFn(); // 
```

(1) 객체 메서드 호출(실행)

home.eatApple()로 `home의 메서드로 호출`!  객체의 메서드로 호출된 경우 this는 호출한 객체를 가리킨다. 

따라서 여기서의 this는 home이 되고 객체 내부의 apple은 '맛있는 사과' 가 된다. 

(2) 함수 직접 호출(실행)

eatAppleFn()은 전역에서 독립적으로 실행! 

이 경우 this 는 window를 나타낸다. 따라서 apple은 '독이 든 사과'가 된다.

=> 같은 eatAppleFn()를 실행했지만 `함수를 어떻게 호출했느냐`에 따라서 this가 참조하는 객체가 달라진다.!

```javascript
var homeApple = home.eatApple;
homeApple(); 
```

일반 함수의 형태로 호출되므로 this는 window이다. 



### 4. 명백한 바인딩 call, bind, apply

:ballot_box_with_check: call, apply, bind를 이용하면 `this`를 원하는 객체에 연결할 수 있다.

즉, this 의 역할을 우리가 직접 명확하게 지정해준다는 뜻이다.

```javascript
var apple = '독이 든 사과';
var home = {
    apple: '맛있는 사과',
    eatApple: function() {
        eatAppleFn();
    },
    eatApppleCall: function() {
        // 여기서의 this는 home
        eatAppleFn.call(this);
    },
    eatAppleBind: function() {
        // 여기서의 this는 home
        (eatAppleFn.bind(this))();
    }
}
function eatAppleFn() {
  console.log(`백설공주가 ${this.apple}를 먹습니다.`);
}
home.eatApple();     // 백설공주가 독이 든 사과를 먹습니다.
home.eatAppleCall(); // 백설공주가 맛있는 사과를 먹습니다.
home.eatAppleBind(); // 백설공주가 맛있는 사과를 먹습니다.
```



### 5. 생성자 함수

:ballot_box_with_check: 생성자 함수로 객체를 생성할 때, 생성자 함수의 this 는 새로 생성된 객체를 가리킨다.

```javascript
function Person() {
    console.log(this);
}
new Person();
```

`new` 키워드를 사용해서 생성자 함수를 만드는 경우 this 는 `빈 객체`가 된다.

위의 생성자 함수는 빈 객체를 return 한다. ! (return문이 없어도 return 하는 것은 생성자 함수의 특징 중 하나이다.!)

```javascript
function Person() {
    this.name = 'ken';
    console.log(this);
}
var ken = new Person();
console.log(ken);
```

생성자 함수로 실행 => this는 빈 객체를 생성 => name속성에 'ken'을 할당, return이없지만 객체를 리턴 ! 





[참고]

- https://paperblock.tistory.com/44

- https://im-developer.tistory.com/96