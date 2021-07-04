// get , set


class A{
    _name = 'no name';

    get name(){
        return this._name +'@@@';
    }

    set name(value){
        this._name = value + '!!!';
    }
}

const a = new A();
console.log(a)

a.name = 'ws';

console.log(a)

console.log(a.name)
console.log(a._name)

// readonly

class B {
    _name = 'no name';

    get name(){
        return this._name +'@@@';
    }

}

const b = new B();
console.log(b)
b.name = 'ws'
console.log(b)

// static 변수 , 함수

class C {
    static age = 29;
    static hello() {
        console.log(C.age);
    }
}

console.log(C,C.age)
C.hello()

class D {
    age = 29;
    static hello(){
        console.log(this.age);
    }
}

console.log(D,D.age)
D.hello()

class E{
    static name="이 클래스의 이름은 E가 아니다"
    static name1="이 클래스의 이름은 E가 아니다1111"
}

console.log(E)