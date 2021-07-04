function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve(ms);
            reject(new Error('reason'))
        },ms)
    })
}

// p(1000).then((ms)=>{
//     console.log(`${ms} ms 후에 실행된다`)
// })


// const ms = await p(1000);
// console.log(`${ms} ms후에 실행된다.`);
// (async function main(){
//     const ms = await p(1000);
//     console.log(`${ms} ms 후에 실행된다`)
// })();


// (async function main(){
//     try{
//         const ms = await p(1000);
//     } catch(error){
//         console.log(`${error}때문에 에러가 발생했습니다.`)
//     }
// })();

async function asyncP(){
    return 'WS';
}


(async function main(){
    try{
        const name = await asyncP();
        console.log(name)
    } catch(error){
        console.log(`${error}때문에 에러가 발생했습니다.`)
    }
})();