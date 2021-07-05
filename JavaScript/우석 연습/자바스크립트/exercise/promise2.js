/*
const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(); // fulfilled
    },1000);
});

p.then(()=>{
    console.log('1000ms 후에 fullfilled 됩니다')
});

*/

/*
function p() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(); // fulfilled
        },1000);
    });
}

p().then(()=>{
    console.log('1000ms 후에 fulfill 됩니다.')
});
*/

/*
function p() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(); // reject
        },1000);
    });
}

p().then(()=>{
    console.log('1000ms 후에 fulfill 됩니다.')
}).catch(()=>{
    console.log('1000ms 후에 rejected 됩니다.')
});
*/

/*
function p() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('hello');
        },1000);
    });
}

p().then((message)=>{
    console.log('1000ms 후에 fulfill 됩니다.',message)
}).catch(()=>{
    console.log('1000ms 후에 rejected 됩니다.')
});
*/

/*

function p() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('error');
        },1000);
    });
}

p().then(()=>{
    console.log('1000ms 후에 fulfill 됩니다.')
}).catch((reason)=>{
    console.log('1000ms 후에 rejected 됩니다.',reason)
});

*/

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
});

