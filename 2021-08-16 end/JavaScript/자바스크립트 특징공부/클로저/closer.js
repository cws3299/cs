// f


// innerFunc 함수는 outerFunc함수의 변수에 접근할 수 있다.
// 스코프는 함수를 호출할 때가 아니라 함수를 어디에 선언하였는지에 따라 결정된다.
// 이를 렉시컬 스코핑이라고 한다.
// innerFunc은 전역, outerFunc , innerFunc 3개의 모든 스코프를 참조할 수 있다.

// 스코프 체인을 통해 상위 scope의 변수를 탐색할 수 있다.
// 1. innerFunc 함수 스코프 내에세 x를 발견하지 못했다.
// 2. innerFunc 함수의 외부에 있는 outerFunc에서 x를 검색했고 발견했다.



function outerFunc(){
    var x = 10;
    var innerFunc = function() {console.log(x)}
    return innerFunc;
}

var inner = outerFunc();
inner();

// 함수 outerFunc은 내부함수 innerFunc을 반환하고 생을 마감했다.
// 즉  outerFunc은 콜스택에서 제거되었으므로 함수 outerFunc의 변수 x 또한 
// 더 이상 유효하지 않게 되어 변수 x에 접근할 방법이 없어보인다.

// 이러한 상황처럼 자신을 포함하고 있는 외부함수보다 내부함수가 더 오래 유지되는 경우
// 외부 함수 밖에서 내부함수가 호출되어도 외부함수의 지역변수에 접근할 수 있는데 이를 클로저라고 부른다.

