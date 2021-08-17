const arr = [1,4,9,16,25];
const obj = {'a':1,'b':2,'c':3};

for (let item of arr) {
    console.log(item,arr[item])
};

for (let item in obj){
    console.log(item, obj[item])
}


const arr_map = arr.map(num => num*2)
console.log('map',arr_map)

const arr_map2 = arr.map(function(num){
    return num * 2
})
console.log('map',arr_map2)


const arr_foreach = new Array
const arr_foreach2 = new Array

arr.forEach( num => 
    arr_foreach.push(num)
)

console.log('foreach',arr_foreach)

arr.forEach(function(num){
    arr_foreach2.push(num)
})

console.log('foreach',arr_foreach2)

const arr_filter = arr.filter(num => num>3)
console.log('filter',arr_filter)

const arr_filter2 = arr.filter(function(num){
    if (num > 3){ return num}
})

console.log('filter',arr_filter2)