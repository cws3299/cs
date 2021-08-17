// 멤버 변수

class A{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

console.log(new A('ws',29))

// class field는 런타임 확인

class B{
    name;
    age;
}

console.log(new B());

class C {
    name = 'no name';
    age = 0;

    constructor(name,age){
        const default_age = this.age
        this.name = name;
        if (age===undefined){
            this.age = default_age
        }else{
            this.age = age
        }
    }


}

console.log(new C('ws',29))

// 멤버 함수

class D{
    hello1() {
        console.log('hello1',this);
    }

    hello2 = () => {
        console.log('hello2',this)
    } 
}

new D().hello1()
new D().hello2()

class E {
    name = 'WS'

    hello() {
        console.log('hello',this.name)
    }
}

new E().hello()