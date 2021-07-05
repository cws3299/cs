// function p(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(ms);
//             // reject(new Error('reason'))
//         },ms)
//     })
// }

// async function asyncP(){
//     const ms = await p(1000);
//     console.log(ms)
//     return 'WS' + ms;
// }


// (async function main(){
//     try{
//         const name = await asyncP();
//         console.log(name)
//     } catch(error){
//         console.log(`${error}때문에 에러가 발생했습니다.`)
//     }
// })();



// function p(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // resolve(ms);
//             reject(new Error('reason'))
//         },ms)
//     })
// }

// async function asyncP(){
//     const ms = await p(1000);
//     console.log(ms)
//     return 'WS' + ms;
// }


// (async function main(){
//     try{
//         const name = await asyncP();
//         console.log(name)
//     } catch(error){
//         console.log(`${error}때문에 에러가 발생했습니다.`)
//     }
// })();


// function p(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // resolve(ms);
//             reject(new Error('reason'))
//         },ms)
//     })
// }

// async function asyncP(){
//     const ms = await p(1000);
//     console.log(ms)
//     return 'WS' + ms;
// }


// (async function main(){
//     try{
//         const name = await asyncP();
//         console.log(name)
//     } catch(error){
//         console.log(`${error}때문에 에러가 발생했습니다.`)
//     } finally {
//         console.log('end')
//     }
// })();


function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(ms);
            reject(new Error('reason'))
        },ms)
    })
};

p(1000)
    .then(()=>p(1000))
    .then(()=>p(1000))
    .then(()=>{
        console.log('3000ms 후에 실행')
    });


(async function main(){
    await p(1000);
    await p(1000);
    await p(1000);
    console.log('3000ms 후에 실행')
})();


(async function main() {
    const result = await Promise.all([p(1000),p(2000),p(3000)]);
    console.log(result)
})();



(async function main() {
    const result = await Promise.race([p(1000),p(2000),p(3000)]);
    console.log(result)
})();