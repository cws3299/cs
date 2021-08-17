const superheros = ['아이언맨','캡틴 아메리카','토르','헐크']
const array = [1,2,3,4,5,6,7,8];

// map은 배열안의 원소를 변환할 때 사용함 - 새로운 객체를 내보냄

// const squared = []
// for (let i=0; i<array.length; i++){
//     squared.push(array[i]*array[i])
// }

// console.log(squared)

// array.forEach((num)=>{
//     squared.push(num*num)
// })

// console.log(squared)

// const square = n => n*n;
// const squared = array.map(square)

// console.log(squared)


// const a_squared = array.map(n => n*n)

// const a_squared = array.map(function(num){
//     return num*num
// })

// console.log(a_squared)


///


// const items = [
//     {
//         id:1,
//         text:'hello'
//     },
//     {
//         id:2,
//         text:'bye'
//     }
// ];


// const texts = items.map(item => item.text)
// console.log(texts)


// indexof 함수 : 특정 항목이 배열에서 몇 번째 원소인지 알고 싶을경우
// const index = superheros.indexOf('헐크');
// console.log(index)

// findIndex 함수 : 만약에 안에 들어있는 값들이 객체이거나 조건으로 찾을떄
const todos = [
    {
        id:1,
        text:'자바스크립트 입문',
        done:true,
    },
    {
        id:2,
        text:'함수 배우기',
        done:true
    },
    {
        id:3,
        text:'객체와 배열 배우기',
        done:true,
    },
    {
        id:4,
        text:'배열 내장함수 배우기',
        done:true
    }
]

const index2 = todos.findIndex(todo => todo.text === '객체와 배열 배우기')
console.log(index2)

const index3 = todos.find(todo => todo.text === '객체와 배열 배우기')
console.log(index3)