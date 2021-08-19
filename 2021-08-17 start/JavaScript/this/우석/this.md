### :flags:this

- __함수와 객체(메서드)의 구분이 느슨한 자바스크립트에서 this는 실질적으로 이 둘을 구분하는 유일한 기능__



##### 1. 상황에 따라 달라지는 this

- 자바스크립트에서 this는 기본적으로 실행 컨택스트가 생성될 때 함께 결정됨
- 실행 컨텍스트는 함수를 호출할 때 생성됨
- __즉 this는 함수를 호출할  때 결정됨__
- __어떤 방식으로 호출하느냐에 따라 this의 값이 달라짐__



##### 1-1. 전역 공간에서의 this

- 전역공간에서 this는 전역 객체를 가리킴 

- ```js
  console.log(this)
  console.log(window)
  consonle.log(this === window) // true
  ```

- __자바스크립트의 모든 변수는 사실 특정 객체의 프로퍼티__

  - 전역변수는 전역객체(window)의 프로퍼티

----------------------

##### 1-2 메서드로서 호출할 때 그 메서드 내부에서의 this

- 함수 vs 메서드

  - 이 둘을 구분하는 유일한 차이는 __독립성__
  - __함수는 그 자체로 독립적인 기능을 수행 vs 메서드는 자신을 호출한 대상 객체에 관한 동작을 수행__
  - 자바스크립트는 상황별로 this 키워드에 다른 값을 부여하게 함으로써 이를 구현함

  - ```js
    var func = function (x){
        console.log(this, x)
    }
    func(1); // window  , 1
    
    var obj = {
        method:func
    }
    obj.method(2) // {method: func } , 2
    ```
    
  - 객체의 메서드로서 호출한 경우에만 메서드로 동작, 그렇지 않을경우 함수로 동작

  - __함수로서의 호출과 메서드로서의 호출은 앞에 점(.)이 있거나 대괄호[]로 호출된 경우 무조건 메서드로 호출되었다고 생각하면 됨__

  - ```js
  var obj = {
        method:function(x){console.log(this,x)}
  }
    
    obj.method(1) = obj , 1
    obj[`method`](1) = obj , 2
    ```
  
- 메서드 내부에서의 this

  - this에는 호출한 주체에 대한 정보가 담김

  - 어떤 함수를 호출하는 경우 호출 주체는 함수명 앞의 객체, 쉽게 말해 마지막 점 앞의 객체

  - ```js
    var obj = {
        methodA : function() {console.log(this)}
        inner:{
            methodB: function() {console.log(this)}
        }
    };
    
    obj.methodA() // obj
    obj.inner.methodB() // inner
    a.b.c.d.func()
    ```



-----------------------------

##### 함수로서 호출할 때 그 함수 내부에서의 this

- 함수 내부에서의 this

  - 어떤 함수를 함수로서 호출할 경우 this가 지정되지 않음
  - this가 지정되지 않은 경우 전역객체를 바라봄

- 메서드 내부함수에서의 this

  - ```js
    var obj ={
        outer:function(){
            console.log(this) // obj               // 1
            var innerFunc = function(){
                console.log(this)                  // 2 , 3
            }
            innerFunc() // widnow
            
            var obj2 = {
                innerMethod:innerFunc
            };
            obj2.innerMethod() // obj2
        }
    }
    
    obj.outer()
    진솔 obj , window , obj2
    현석 obj , window , obj2
    수진 obj , window , obj2
    
    함수로 실행되었다 -> 전역이다 
    메서드로 실행되었다 -> .앞의 객체
    

    
    
    ```
    
  - 답은 obj , 전역객체 ,obj2





- 메서드의 내부 함수에서 this를 우회하는 방법

  - 호출 주체가 없을 때 자동으로 전역객체를 바인딩 하지 않고 호출 주변 환경의 this를 상속받아 사용하고 싶은 경우

  - 변수가 스코프체인을 타면서 확인하듯이 this도 가장 바인딩이 안되어있을 경우 바로 직전 컨텍스트의 this를 바라보도록

  - __ES5 시절의 방법__

  - ```js
    var obj = {
        outer: function(){
            console.log(this)                    // obj
            var innerFunc1 = function(){
                console.log(this)                // window
            }
            innerFunc(1)
            
            
            var self = this;
            var innerFunc2 = function(){
                console.log(self)                // obj
                //console.log(this) // window
            }
            innerFunc2()
        }
    }
    
    ```

obj.outer()
    ```

  - __ES6의 방법 : 화살표 함수__
  
  - ```JS
    var obj = {
        outer: function(){
            console.log(this)                 //obj
            var innerFunc = () =>{
                console.log(this)             //obj
            }
            innerFunc()
        }
    }
    
    obj.innerFunc()
    ```



----------------------

##### 콜백 함수 호출 시 그 함수 내부에서의 this

- 함수 a의 제어권을 다른 함수 b에세 넘겨주는 경우 함수 a를 콜백 함수라고 한다.

- 이때 함수 a는 함수 b의 내부 로직에 따라 실행되며 , this역시 함수 b가 정한 로직에 따라 결정된다.

- ```js
  setTimeout(function() {console.log(this)}, 300)  // window
  
  [1,2,3,4,5].forEach(function(x){
      console.log(this,x)                          // window
  })
  
  document.body.innerHTML += '<button id="a">클릭</button>'
  document.body.querySelector('#a')
  	.addEventListenr('click',function(e){
      console.log(this,e)                         // 앞에서 지정한 element
  })
  ```

- 콜백함수 상황에서도 특별히 정의하지 않은경우 전역객체를 참조함

- ------- // ----



-----------

##### 생성자 함수 내부에서의 this

<다음기회에>



---------------------------------

##### 명시적으로 this를 바인딩하는 방법

- __call 메서드__

  - 첫번째 인자를 this로 바인딩 하고 나머지 인자들을 매개변수로 활용

  - ```js
    var func = function(a,b,c) {
        console.log(this,a,b,c)
    }
    
    func(1,2,3)                  // window , 1,2,3
    func.call({x:1},4,5,6)       // {x:1} , 1,2,3
    func(첫번째 인자가 this , 4,5,6)
    ```
  ```
    
  - ```js
    var = obj ={
        a:1,
        method:function (x,y){
            console.log(this.a,x,y)
        }
    }
    
    obj.method(2,3)     // 1,2,3
    obj.method.call({a:4},5,6) // 4,5,6
  ```

- __apply메서드__

  - apply의 경우 첫번째 인자의 경우 call과 같고 그 다음 매개변수들을 리스트형태로 받음

  - ```js
    var func = function (a,b,c){
        console.log(this, a,b,c)
    }
    func.apply({x:1}.[4,5,6]) // {x:1} 4,5,6
    
    var obj = {
        a:1,
        method:function(x,y){
            console.log(this.a ,x,y)
        }
    }
    obj.method.apply({a:4},[5,6]) // 4.5.6
    ```

- __call과 apply의 활용 심화__

  - (양이 많아서 추후에)

- __bind__

- ```js
  var func = function(a,b,c,d){
      console.log(this, a,b,c,d) // window , 1,2,3,4
  }
  func(1,2,3,4)
  
  var bindFunc1 = func.bind({x:1})
  bindFunc1(5,6,7,8)  // {x:1} , 5,6,7,8
  
  var bindFun2 = func.bind({x:1},4,5)
  bindFunc2(6,7) // {x:1} , 4,5,6,7
  bindFunc2(8,9) // {x:1} , 4,5,8,9
  ```
```
  
- __bind에는 name프로퍼티라는 속성 추후 정리__

- __상위 컨텍스트의 this를 내부함수나 콜백함수에 전달하기__

  - (양이 많아서 추후에)

- __화살표 함수 예외사항__

  - (양이 많아서 추후에)

- __별도인 인자를 this로 받는경우__

  - (양이 많아서 추후에)



--------------------------

##### 정리

- 전역공간에서의 this는 전역객체를 참조한다.
- 어떤 함수를 메서드로 호출한 경우 this는 메서드 호출 주체를 참조한다 .
- 어떤 함수를 함수로 호출한 경우 this는 전역객체를 참조하며 , 메서드 내부함수도 동일하다
- 콜백 함수 내부에서 this는 콜백 함수의 제어권을 넘겨받은 함수가 정의한 바에  따르며 정의하지 않은 경우 전역객체를 참조한다.
- 생성자 함수에서의 this는 생성될 인스턴스를 참조한다.]



- call , apply 메서드는 this를 명시적으로 지정하면서 함수 또는 메서드를 호출합니다.
- bind 메서드는 this및 함수에 넘길 인수를 지정해서 새로운 함수를 만듭니다.
- __별도의 인자 this를 받는 콜백함수의 경우도 존재한다__.
```