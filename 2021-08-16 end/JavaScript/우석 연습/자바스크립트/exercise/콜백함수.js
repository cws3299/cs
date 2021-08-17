function hello (c) {
    console.log('hello')
    c();
}

// hello(function(){
//     console.log('콜백')
// })

hello(()=>{
    console.log('콜백')
})


