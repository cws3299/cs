### map, filter, forEach차이 분석

#### map ((value, index)=> <p>value<p> )

배열의 인자를 받아 그 인자로 콜백함수를 실행하는 내부함수

- map은 각 콜백함수의 리턴값을 모아다가 배열로 반환하기때문에 리액트에서 배열을 이용에 화면을 그릴때 굉장히 자주 사용한다

#### map과 forEach

배열의 인자를 받아 그 인자로 콜백함수를 실행하는 내부함수

- map에 비해 forEach는 각 콜백함수의 리턴값을 반환하지 않는다 (단순 실행)

- 배열의 인자로 for문을 돌리고싶을때 자주 사용

#### map과 filter

(value)=> {조건식 :boolean} []

```js
let list = [1,2,3,4,5]
let newList = list.filter((value)=> value >= 3)
let newListt = list.map((value)=> {} )
// newListt = [undefined,undefinedundefined]
```



배열의 인자를 받아 조건식을 통과(boolean값)하는 값만을 모아 배열의 인자로 담아 반환해준다

세개의 함수 모두 전달받는 인자는 복사값이며 실행 및 반환의 시퀸스 보장이 된다.
