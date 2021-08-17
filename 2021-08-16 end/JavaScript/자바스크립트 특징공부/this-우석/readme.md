### 함수 호출방식에 의해 결정되는 This



##### 자바스크립트의 함수는 호출될 때, 매개변수로 전달되는 인자값 이외에, argument 객체와 this를 암묵적으로 전달 받는다.

```javascript
function square(number) {
    console.log(arguments)
    console.log(this)
    
    return number*number
}

square(2);
```



##### 함수 호출 방식과 this 바인딩

- 자바스크립트의 경우 함수 호출 방식에 의해 this에 바인딩할 어떤 객체가 동적으로 결정된다.

- <b>함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니라 함수가 어떻게 호출되느냐에 따라 동적으로 결정된다.</b>

- `함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수를 선언할 때 결정된다. this바인딩과 혼동하지 않도록 주의해야한다.`

- 함수의 호출 방식은 크게 아래와 같이 4가지로 나뉜다.

  - 1.함수호출 , 2 메소드 호출 , 3. 생성자 함수 호출 4. apply/call/bind 호출

  - ```javascript
    var foo = function () {
      console.dir(this);
    };
    
    // 1. 함수 호출
    foo(); // window
    // window.foo();
    
    // 2. 메소드 호출
    var obj = { foo: foo };
    obj.foo(); // obj
    
    // 3. 생성자 함수 호출
    var instance = new foo(); // instance
    
    // 4. apply/call/bind 호출
    var bar = { name: 'bar' };
    foo.call(bar);   // bar
    foo.apply(bar);  // bar
    foo.bind(bar)(); // bar
    ```

  - ##### 함수호출

  - 전역객체는 모든 객체의 유일한 최상위 객체를의미하며 일반적으로 window나 global을 의미함

  - `기본적으로 this는 전역객체에 바인딩된다. 전역함수는 물론이고 심지어 내부함수의 경우에도 this는 외부함수가 아닌 전역객체에 바인딩 된다.`

  - ```javascript
    function foo() {
      console.log("foo's this: ",  this);  // window
      function bar() {
        console.log("bar's this: ", this); // window
      }
      bar();
    }
    foo();
    
    //기본적으로 this는 전역객체에 바인딩된다. 전역함수는 물론이고 심지어 내부함수의 경우에도 this는 외부함수가 아닌 전역객체에 바인딩 된다
    ```

  - ```javascript
    var value = 1;
    
    var obj = {
      value: 100,
      foo: function() {
        console.log("foo's this: ",  this);  // obj
        console.log("foo's this.value: ",  this.value); // 100
        function bar() {
          console.log("bar's this: ",  this); // window
          console.log("bar's this.value: ", this.value); // 1
        }
        bar();
      }
    };
    
    obj.foo();
    
    // 또한 메소드의 내부함수일 경우에도 this는 전역객체에 바인딩 된다.
    ```

  - ```javascript
    var value = 1;
    
    var obj = {
      value: 100,
      foo: function() {
        setTimeout(function() {
          console.log("callback's this: ",  this);  // window
          console.log("callback's this.value: ",  this.value); // 1
        }, 100);
      }
    };
    
    obj.foo();
    
    // 콜백함수의 경우에도 전역객체에 바인딩 된다.
    ```

  - ```javascript
    var value = 1;
    
    var obj = {
      value: 100,
      foo: function() {
        var that = this;  // Workaround : this === obj
    
        console.log("foo's this: ",  this);  // obj
        console.log("foo's this.value: ",  this.value); // 100
        function bar() {
          console.log("bar's this: ",  this); // window
          console.log("bar's this.value: ", this.value); // 1
    
          console.log("bar's that: ",  that); // obj
          console.log("bar's that.value: ", that.value); // 100
        }
        bar();
      }
    };
    
    obj.foo();
    
    /*
    내부함수는 일반 함수, 메소드, 콜백함수 어디에서 선언되었든 관게없이 this는 전역객체를 바인딩한다. 더글라스 크락포드는 “이것은 설계 단계의 결함으로 메소드가 내부함수를 사용하여 자신의 작업을 돕게 할 수 없다는 것을 의미한다” 라고 말한다. 내부함수의 this가 전역객체를 참조하는 것을 회피방법은 아래와 같다.
    */
    ```

  - ##### 메소드 호출

  - ```javascript
    var obj1 = {
      name: 'Lee',
      sayName: function() {
        console.log(this.name);
      }
    }
    
    var obj2 = {
      name: 'Kim'
    }
    
    obj2.sayName = obj1.sayName;
    
    obj1.sayName();
    obj2.sayName();
    
    /*
    함수가 객체의 프로퍼티 값이면 메소드로서 호출된다. 이때 메소드 내부의 this는 해당 메소드를 소유한 객체, 즉 해당 메소드를 호출한 객체에 바인딩된다.
    */
    ```

  - ```javascript
    function Person(name) {
      this.name = name;
    }
    
    Person.prototype.getName = function() {
      return this.name;
    }
    
    var me = new Person('Lee');
    console.log(me.getName());
    
    Person.prototype.name = 'Kim';
    console.log(Person.prototype.getName());
    
    /*
    프로토타입 객체도 메소드를 가질 수 있다. 프로토타입 객체 메소드 내부에서 사용된 this도 일반 메소드 방식과 마찬가지로 해당 메소드를 호출한 객체에 바인딩된다.
    */
    ```





### 생성자 함수 및 바인딩



래퍼런스

https://poiemaweb.com/js-this