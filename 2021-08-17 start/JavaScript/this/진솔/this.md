### THIS

`this`는 자바스크립트 실행컨텍스트의 3가지 구성객체중 하나의 요소이다.

여기에서의 `this`는 자바의 자기자신을 호출하는 `this`와는 다르게 동작하며 함수 호출방식에 따라 `this`에 바인딩 되는 방식이 바뀌게된다

#### 호출방식에 따른 this

##### (메인)함수의 내부함수로 선언된경우

객체나 함수의 내부함수는 `this`에 자신이 선언된 스코프의 변수객체를 바인딩 하는것이 아닌 전역객체를 바인딩 하게된다(반드시). (js 설계상의 미스)

**내부함수는 일반 함수, 메소드, 콜백함수 어디에서 선언되었든 관게없이 this는 전역객체를 바인딩한다!!** 굉장히 중요



##### 객체의 메소드로 호출된경우

객체(클래스)의 메소드로 호출된 경우는 `this` 에 자신을 호출한 객체를 바인딩 하게 된다.

아래에 예시

```js
let something = 'bad'
let someObject = {
    something: 'good'
    good() {
        console.log(this.something) // good 객체의 속성값으로 호출된경우
        function bad() {
            console.log(something) // bad 함수의 내부함수로 선언된 경우
        }
    }
}
```



##### 생성자로 호출된 경우

새로운 객체를 생성하는 생성자로 함수가 호출된 경우 먼저 빈 객체를 만든 뒤 `this`에 방금 생성된 객체가 바인딩 된다. 이후 생성자 함수의 `프로토타입 속성`을 자신의 프로토타입으로 지정한다.

이제 `this`에는 새 객체가 바인딩 됐음으로 this를 이용해 객체의 값이나 메소드가 생성된다.

모든 실행이 끝나면 `this` 를 반환한다(명시 안해도 알아서 반환)

```js
function SomeObject(initialValue = 'nothing') {
    // 호출시 빈객체가 생성되고 this에 바인딩
    // this = {}
    // this.__proto__ = SomeObject.__proto__
    
    // this를 이용해 객체에 값 혹은 메소드 생성
    this.value = initialValue
    this.setValue = function setValue(value) {
        this.value = value
    }
    return {a:1, b:2}
    // return this
    // return값을 **객체로 줄 경우** return this가 아니라 return 객체{}로 반환값이 대체된다.
}

let obj = new SomeObject('something')

console.log(obj.value) // 'something'
obj.setValue('1')
console.log(obj.value) // '1'

let test = SomeObject('something')

```

##### 생성자로 만든 함수를 그냥 호출할 경우

내부함수로 선언된 경우와 같이 this는 전역객체를 바라보게 된다.



### this의 명시적 바인딩(apply/call/bind)

#### apply

function의 프로토타입의 메서드

```js
function SomeObject(initialValue = 'nothing') {
    this.value = initialValue
    this.setValue = function setValue(value) {
        this.value = value
    }
}
newThis = {}
SomeObject.apply(newThis, ['something']) // this가 볼 새로운 객체와 함수로 전달할 인자 args[]
```

#### call

apply와 인자전달방식만 다르고 나머지는 같다

```js
SomeObject.call(newThis, ['something']) // this가 볼 새로운 객체와 함수로 전달할 인자들
```

#### bind

함수에 인자로 객체를 넘기고 this에 바인딩 해서 **새로운 함수**로 반환

```js
let newFunction = oldFunction.bind(newObject)
```





### strict mode

일반함수 호출 시는 use strict 사용시 `this`는 전역객체를 보지 않고 `undefined`가 된다. 

메소드함수 혹은 생성자로 호출 시는 use strict 사용을 해도 this가 메소드를 호출한 객체가 된다.

```js
function SomeObject(initial) {
    'use strict'
    this.value = initial
    this.setValue = function setValue(value) {
        this.value = value
    }
    console.log(this)
}

new SomeObject(1) // object SomeObject
SomeObject(1) // 문법오류(this는 undefined인데 프로퍼티 접근해서)

```



simple parameter를 받는 함수만 strict mode 가능하며

parameter로 default값을 주면 non-simple parameter 라 error 발생



