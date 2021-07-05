/*
*/


/*
function p() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error('bad'));
        },1000);
    });
}

p().then(()=>{
    console.log('1000ms 후에 fulfill 됩니다.')
}).catch(error=>{
    console.log('1000ms 후에 rejected 됩니다.',error)
}).finally(()=>{
    console.log('끝')
});
*/

/*
function c(callback){
    setTimeout(()=>{
        callback();
    },1000)
}

c(()=>{
    console.log('1000ms후에 callback 함수가 실행됩니다.')
    c(()=>{
        console.log('2000ms후에 callback 함수가 실행됩니다.')
    })
})
*/

function p(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },1000)
    })
}

p().then(()=>{
    return p();
})
.then(()=> p())
.then(p)
.then(()=>{
    console.log('4000ms후에 실행됩니다')
})