# this

### 🚩1. this의 용법

#### 1.1 메서드와 this

메서드 내부에서 `this`키워드를 사용하면 객체에 접근할 수 있다. 이때 '점 앞'의 `this`는 객체를 나타낸다. (메서드를 호출할 때 사용된 객체)

```javascript
let user = {
    name: 'John',
    age: 30,
    sayHi() {
        // 'this'는 '현재 객체'를 나타냄
        alert(this.name);
    }
};
user.sayHi(); // John
```

`user.sayHi()`가 실행되는 동안에 `this`는 `user`를 나타낸다. 

`this`를 사용하지 않고 외부 변수를 참조해 객체에 접근하는 것도 가능하다.

```javascript
let user = {
    name: 'John',
    age: 30,
    sayHi() {
        alert(user.name) // 'this'대신 'user'를 이용
    }
}
```

하지만, 이렇게 외부 변수를 사용해 객체를 참조하면 예상치 못한 에러가 발생할 수 있다. `user`를 복사해 다른 변수에 할당(`admin = user`) 하고, `user`는 전혀 다른 값으로 덮어썼다고 가정하면, `sayHi()`는 원치 않는 값을 참조할 것이다.

```javascript
let user = {
    name: 'John',
    age: 30,
    sayHi() {
        alert(user.name); // Error: Cannot read property 'name' of null
    }
};
let admin = user
user = null; // user을 null로 덮어쓰기

admin.sayHi(); //  sayHi()가 객체를 참조하면서 에러가 발생 
```

`user.name`대신 `this.name`을 인수로 받았다면 에러가 발생하지 않았을 것이다.



#### 1.2 자유로운 this

`this`값은 런타임에 결정된다. 동일한 함수라도 다른 객체에서 호출했다면 `this`가 참조하는 값이 달라진다.

```javascript
let user = { name: 'John' };
let admin = { name: 'Admin' };
 
function sayHi() {
    alert(this.name);
}
//각자의 객체에서 동일한 함수 사용
user.f = sayHi;
admin.f = sayHi;

// this는 점(.)앞의 객체를 참조하기 때문에 this 값이 달라짐
user.f(); // John (this === user)
admin.f(); // Admin (this === admin)

admin['f'](); // Admin (점과 대괄호는 동일하게 동작)
```



#### 1.3 this가 없는 화살표 함수

화살표 함수는 일반 함수와는 달리 '고유한' `this`를 가지지 않는다. 화살표 함수에서 `this`를 참조하면, 화살표 함수가 아닌 '평범한'외부 함수에서 `this`값을 가져온다.

아래 예시에서 함수 `arrow()`의 `this`는 외부 함수 `user.sayHi()`의 `this`가 된다.

```javascript
let user = {
    firstName : 'John',
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};
user.sayHi(); // John
```





[참고]

- https://ko.javascript.info/object-methods