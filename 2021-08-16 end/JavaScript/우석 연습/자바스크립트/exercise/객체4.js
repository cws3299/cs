// 표준 내장 객체

const a = new Array('red','black','white');
console.log(a, typeof a)

console.log(a instanceof Array);
console.log(a instanceof Object);

const b = ['red','white','yellow']

console.log(b, typeof b)
console.log(b instanceof Array)

const c = new Object()

c.hello = function(){
    console.log('cc')
}

console.log(c)

