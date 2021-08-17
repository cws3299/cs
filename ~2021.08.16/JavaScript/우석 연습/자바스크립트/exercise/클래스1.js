// 선언적 방식
class A{}

console.log(new A());

// 클래스 표현식을 변수에 할당

const B = class {};

console.log(new B());


// 클래스는 호이스팅이 일어나지 않는다.

// new C();

// class C{}


// 생성자

class AA {}

console.log(new AA());

class BB{
    constructor(){
        console.log('constructor')
    }
}

console.log(new BB());

class C{
    constructor(name,age){
        console.log('constructor',name,age);
    }
}

console.log(new C('ws',29))
console.log(new C)