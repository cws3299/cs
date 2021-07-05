const numbers = [1,2,3,4,5];

// let sum = 0;
// numbers.forEach(n => sum+=n)
// console.log(sum)

// const sum = numbers.reduce((accumulator,current)=> accumulator+current , 0)
// console.log(sum)

const sum = numbers.reduce((accumulator,current , index ,array)=> 
{
    if (index === array.length -1){
        return (accumulator + current ) / array.length
    }
    return accumulator + current;
},0)
console.log(sum)