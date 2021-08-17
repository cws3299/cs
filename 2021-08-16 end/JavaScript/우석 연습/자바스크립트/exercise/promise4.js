// Promise.resolve();

// Promise.resolve(new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('foo');
//     },1000)
// })).then((data)=>{
//     console.log('프로미스 객체인 경우, resolve된 결과를 받아서 then이 실행됩니다',data)
// })


// Promise.resolve('bar').then(data =>{
//     console.log('then 메서드가 없는 경우 fulfilled됩니다', data )
// })


// Promise.reject(new Error('reason')).then(error =>{

// }).catch(error => {
//     console.log(error)
// });

function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(ms);
        },ms)
    })
}

Promise.all([p(1000),p(2000),p(3000)]).then((message)=>{
    console.log('모두 fulfilled된 이후에 실행됨',message)
})

Promise.race([p(1000),p(2000),p(3000)]).then((message)=>{
    console.log('하나라도 fulfilled된 이후에 실행됨',message)
})