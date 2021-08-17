# 클로저(closure)

### 1. 클로저란?

일반적으로 어떤 함수가 자신의 내부가 아닌 외부에서 선언된 변수에 접근하는 것

[예제]

* 함수 내부에 선언된 환율(rate)을 이용한 경우

```javascript
function covertUsdToKrw(dollar) {
    const rate = 1113.5;
    return dollar * rate;
}
> convertUsdToKrw(5)
// 5567.5
```

- 환율(rate)를 함수 외부에 선언했을 경우

```javascript
const rate = 1113.5;
function convertUsdToKrw(dollar) {
    return dollar * rate;
}
> convertUsdToKrw(5)
// 5567.5
```

​	=> 함수는 매개 변수와 로컬 변수 뿐만 아니라 외부에서 선언된 변수도 자유롭게 접근할 수 있다.! 이렇게 함수가 자신의 밖에서 선언된 변수에 접근하는 것을 클로저라고 한다.



### 2. 클로저의 예

어떤 함수 내에서 또 다른 함수를 선언할 때, 클로저를 자주 사용하게 된다. 

아래는, 여러 개의 미국 달러를 대한민국 원으로 환전해주는 함수이다.

```javascript
function batchConvertUsdToKrw(dollars) {
    const rate = 1113.5;
    const convertUsdToKrw = (dollar) => dollar * rate;
    return dollars.map(convertUsdToKrw);
}
> batchConvertUsdToKrw([1, 2, 10, 20, 50, 100])
[ 1113.5, 2227, 11135, 22270, 55675, 111350 ]
```

=> 배열의 `map()` 메서드의 인자로 `convertUsdToKrw()` 함수가 넘어가고 있다. 여기수 `batchConvertUsdToKrw()` 함수의 내부에서 선언된 `rate` 변수는 `convertUsdToKrw()` 함수의 입장에서 보면 외부에서 선언되어 있다. 

즉, `convertUsdToKrw()` 함수는 자신의 내부가 아닌 외부에서 선언된 `rate` 변수에 접근한고 있으므로 정확히 위에서 정의한 클로저와 일치하는 것을 볼 수 있다.



### 3. 클로저의 특징

클로저를 활용하면 어떤 함수 내부에서만 사용되는 일회성 함수(정의 후 바로 호출되는)의 매개 변수를 생략할 수 있다.



### 4. 클러저의 부작용

클러저의 특징을 과용하거나 오용하게 되면 오히려 코드 품질 측면에서 부정적인 영향을 미칠 수 있다. 

클로저가 많아지게 되면 코드가 읽거나 고치기가 어려워지고 버그가 발생하기 쉬워지기 때문이다. 



[참고]

- https://www.daleseo.com/js-closures/

- https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0