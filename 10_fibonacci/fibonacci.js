const fibonacci = function(n) {
    let num;
    if (n < 0){
        return 'OOPS'
    } else if (typeof(n) === 'string'){
        num = (+n) - 1;
    } else {
         num = n - 1;
    }
    let x = 0;
    let y = 1;
    let fib;
    let i = 0;
    for ( i = 0; i < num; i++){
        fib = x + y;
        x = y;
        y = fib;
    }
    return y;
};

// Do not edit below this line
module.exports = fibonacci;
