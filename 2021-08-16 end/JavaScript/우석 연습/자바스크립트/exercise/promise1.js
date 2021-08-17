console.log(Promise);

new Promise((resolve,reject)=>{}); // pending상태 (대기)

new Promise((resolve,reject)=>{
    // pending상태
    //... 처리
    resolve(); // fullfilled 이행된 상태
});


new Promise((resolve,reject) => {
    reject(); // rejected상태
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(); // fulfilled
    },1000);
})

const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(); // fulfilled
    },1000);
})

p.then(()=>{
    
})