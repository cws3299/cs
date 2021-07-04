// 상속

class Parent{
    name = 'Lee';

    hello() {
        console.log('hello',this.name);
    }
}

class Child extends Parent {}

const p = new Parent();
const c = new Child();

console.log(p,c)

c.hello()
c.name = 'anna';
c.hello()


// override
// 자식이 만들어놓은 함수가 부모의 함수를 덮어씌운다. 부모에게 없을 경우 추가

class Parents{
    name = 'Lee';
    hello(){
        console.log('hello',this.name);
    }
}

class Childs extends Parents{
    age = 29;
    hello() {
        console.log('hello',this.name,this.age);
    }
}

const PP = new Parents();
const CC = new Childs();

console.log(PP,CC)

CC.hello()
CC.name = 'anna'
CC.hello()

// super

class Parentss {
    name;

    constructor(name){
        this.name = name;
    }
    hello(){
        console.loig('hello',this.name);
    }
}


class Childss extends Parentss{
    age;
    constructor(name,age){
        super(name);
        this.age = age
    }
    hello(){
        console.loig('hello',this.name,this.age);
    }
}

const PPP = new Parentss('ww')
const CCC = new Childss('ws',29)

console.log(PPP,CCC)

// STATIC. 상속

class Parentt {
    static age = 29;
}

class Childd extends Parentt{}

console.log(Parentt.age , Childd.age)
