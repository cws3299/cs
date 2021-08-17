function square(number) {
    console.log(arguments)
    console.log(this)
    
    return number*number
}

square(2);