### 클로저

- ###### 개념

  - 클로저는 함수와 그 함수가 선언되었을 때의 렉시컬 환경과의 조합이다.

```javascript
function outerFunc() {
  var x = 10;
  var innerFunc = function () { console.log(x); };
  innerFunc();
}

outerFunc(); // 10
```

- 함수 outerFunc 내에서 내부함수 innerFunc이 선언되었다. 이때 내부함수 innerFunc은 자신을 포함하고 있는 outerFunc의 변수 x에 접근할 수 있다.
- `스코프는 함수를 호출할 떄가 아니라 함수를 어디에 선언하였는지에 따라 결정된다. 이를 렉시컬 스코핑이라 한다. 위의 함수 innerFunc은 함수 outerFunc의 내부에 선언되었기 때문에 innerFunc의 상위 스코프는 outerFunc이다.`
- <b>결론적으로  위의 예제에 있는 innerFunc은 전역, outerFunc, innerFunc 모두에 접근 가능 하다.</b>
- `내부 함수 innerFunc이 호출되면 자신의 실행 컨텍스트가 맨 아래에 쌓이고 이후 변수 객체와 스코프 체인 그리고 this에 바인딩할 객체가 결정된다. 이 때 스코프 체인은 전역 스코프를 가리키는 전역객체와 outerFunc의 객체 그리고 자신의 객체를 순차적으로 바인딩 한다.`
- 다시 말하자면 innerFunc 함수는 전역 -> outerFunc -> InnerFunc의 순서로 스코프 체인 되어있으며 innerfunc은 이러한 이유 덕분에 outerFunc에 있는 변수 x에 접근 가능하다.



- ##### 이번에는 innerFunc을 함수 outerFunc에서 호출하는 것이 아니라 반환하도록 변경해보자

```javascript
function outerFunc() {
  var x = 10;
  var innerFunc = function () { console.log(x); };
  return innerFunc;
}

/**
 *  함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다.
 *  그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다.
 */
var inner = outerFunc();
inner(); // 10
```

- 함수 outerFunc은 내부함수 innerFunc을 반환하고 생을 마감했다. 하지만 위의 결과값은 10인데 어떻게 스택에서 제거된 outerFunc의 지역변수가 사용될 수 있을까?



- 클로저는 이러한 상태를 나타내는 단어이다.
  - 자신을 포함하고 있는 외부함수보다 내부함수가 더 오래 유지되는 경우, 외부 함수 밖에서 내부함수가 호출되더라도 외부함수의 지역 변수에 접근할 수 있는데 이를 클로저라고 한다.
  - 클로저는 함수와 그 함수가 선언됬을때의 렉시컬 환경과의 조합이다.
  - `즉 클로저는 반환된 내부함수가 자신이 선언되었을때의 환경인 스코프를 기억하여 자신이 선언되었을 때의 환경 밖에서 호출도어도 그 환경에 접근할 수 있음을 의미한다. 쉽게말해 고향을 잊지 않는녀석이다.`
  - <b>클로저에 의해 참조되는 외부함수의 변수 즉 outerFunc 함수의 변수 x를 자유변수라고 부른다. // 클로저라는 이름은 자유변수가 함수에 닫혀있다 다른말로 엮여있다라는 의미를 갖는다.</b>
  - <b>엄청 쉽게 말해 외부함수가 죽었어도 외부함수 내의 내부함수가 살아있는 한 내부함수를 통해 외부함수의 정보를 활용할 수 있다.</b>



##### 클로저의 활용

- 클로저는 자신이 생성될 떄의 환경을 기억해야 하므로 메모리 차원에서 손해를 볼 수 이다. 하지만 클로저는 자바스크립트의 강력한 기능으로 이를 적극적으로 활용해야 한다.

- ##### 상태유지

- ```html
  <!DOCTYPE html>
  <html>
  <body>
    <button class="toggle">toggle</button>
    <div class="box" style="width: 100px; height: 100px; background: red;"></div>
  
    <script>
      var box = document.querySelector('.box');
      var toggleBtn = document.querySelector('.toggle');
  
      var toggle = (function () {
        var isShow = false;
  
        // ① 클로저를 반환
        return function () {
          box.style.display = isShow ? 'block' : 'none';
          // ③ 상태 변경
          isShow = !isShow;
        };
      })();
  
      // ② 이벤트 프로퍼티에 클로저를 할당
      toggleBtn.onclick = toggle;
    </script>
  </body>
  </html>
  ```

- <b>클로저는 현재상태를 기억하고 변경된 최신상태를 유지하는 데 가장 유용하게 사용된다.</b>



	##### 전역 변수 사용의 억제

- 변수의 값은 누군가에 의해 언제든지 변경될 수 있어 오류 발생의 근본적 원인이 될 수 있다. 상태 변경이나 가변(mutable) 데이터를 피하고 **불변성(Immutability)을 지향**하는 함수형 프로그래밍에서 **부수 효과(Side effect)를 최대한 억제**하여 오류를 피하고 프로그램의 안정성을 높이기 위해 클로저는 적극적으로 사용된다.



##### 정보의 은닉

- 클래스를 활용한다면 정보의 은닉 또한 가능하다.





래퍼런스

https://poiemaweb.com/js-closure