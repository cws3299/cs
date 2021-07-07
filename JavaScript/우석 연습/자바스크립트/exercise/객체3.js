// 프로토타입을 이용한 객체 확장

function Person() {

}

Person.prototype.hello = function() {
    console.log('hello')
}

function korean(region){
    this.region = region
    this.where = function(){
        console.log('where',this.region)
    }
}

korean.prototype = Person.prototype

const k = new korean('seoul')

k.hello()
k.where()

console.log(k instanceof korean)
console.log(k instanceof Person) // chain됨 
console.log(k instanceof Object)


// 객체 리터럴

const aa = {};

console.log(aa, typeof aa)

const bb = {
    name:'ws'
}

console.log(bb, typeof bb)

const cc = {
    name:'ws',
    hello1(){
        console.log('hello1',this)
    },
    hello2: function(){
        console.log('hello2',this)
    },
    hello3:() =>{
        this.name = 1
        console.log('hello3',this,this.name)
    } // arrow 함수 시에는 this가 다르게 해석됨

}

cc.hello1()
cc.hello2()
cc.hello3()