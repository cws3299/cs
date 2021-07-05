function hello(base){
    return function(num){
        return base+num;
    };
};

const hello5 = hello(5);
console.log(hello5(3))