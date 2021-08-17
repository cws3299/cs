function A() {

}

const a = new A();
console.log(a, typeof a)
console.log(A())

// 생성하면서 데이터 넣기

function B(name,age){
    console.log(name,age)
    return 'wss'
}

const b = new B();
const c = new B('ws',29);
console.log(B())


// 객체에 속성 추가하기
// 값을 속성으로 넣기

function D(){
    this.name = 'ws';
}

const d = new D()
console.log('-====',d)

// 함수를 속성으로 넣기

function E() {
    this.hello = function() {
        console.log('hello')
        return 'return11'
    }
}

new E().hello()

const e = new E()
console.log(e)
console.log(e.hello())