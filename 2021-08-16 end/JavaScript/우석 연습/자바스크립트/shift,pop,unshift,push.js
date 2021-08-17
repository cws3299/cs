const numbers = [10,20,30,40];

// const value = numbers.shift() // shift는 맨앞의 원소를 계속 빼냄
// console.log(value,numbers) 10 [ 20, 30, 40 ]

// const value = numbers.pop()
// console.log(value,numbers) 40 [ 10, 20, 30 ]

// numbers.unshift(5); // [ 5, 10, 20, 30, 40 ]
// console.log(numbers)


// numbers.push(50);
// console.log(numbers) [ 10, 20, 30, 40, 50 ]

// unshift - shift (앞)
// push - pop (뒤)


// concat -> 기존의 배열을 수정하지 않는다.
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const arr3 = arr1.concat(arr2)
// console.log(arr3) // [ 1, 2, 3, 4, 5, 6 ]



// spread
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const spread = [...arr1,...arr2]
// console.log(spread)


// join
// const array = [1,2,3,4,5]
// console.log(array.join()) // 1,2,3,4,5
// console.log(array.join(' ')) // 1 2 3 4 5
