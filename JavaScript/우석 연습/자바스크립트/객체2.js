// new Object()

const a = new Object();

console.log(a,typeof a)

const b = new Object(true);

console.log(b,typeof b)

const c = new Object({name:'ws'})

console.log(c)

// 프로토타입 체인

function Person(name,age){
    this.name = name;
    this.age = age;
    // this.hello = function() {
    //     console.log('hello',this.name,this.age)
    // }
}

const p = new Person('ws',29)

Person.prototype.hello = function(){
    console.log('hello',this.name,this.age)
}

p.hello()
console.log(p.toString())
// console.log('---',p.hello)

console.log(Person.prototype)
console.log(Person.prototype.toString)
console.log(Person.prototype.constructor)
console.log(Person.prototype.hello)

console.log(Object.prototype)
console.log(Object.prototype.toString)
console.log(Object.prototype.constructor)

console.log(p instanceof Person);
console.log(p instanceof Object)