// const say = function () {
//     console.log(this)
//     console.log('Hello, my name is' + this.name);
// }

// say();

// this는 객체 내부, 객체 메서드 호출, 생성자 호출등
// 상황에 따라 굉장히 다양하게 바뀜

// call , apply
const obj = {name:'Tome'};
const say = function(city){
    console.log(`hello, my name is ${this.name}, i live in ${city}`);
}

say("seoul");
say.call(obj, "seoul")
say.apply(obj, ["seoul"])
// 첫번째 인자로 setting하고 싶은 객체를 넣어줌
// call과 apply의 유일한 차이점은 parameter를 입력하는 방식의 차이이다.

// bind

const obj1 = {name:'Tom'};
const say1 = function (city) {
    console.log(`hello, my name is ${this.name}, i live in ${city}`)
}
const boundSay = say1.bind(obj1);
boundSay("seoul")