const fibonacci = function(value) {
    if(!(typeof value === 'number')
        || isNaN(value) 
        || value <= 0){
        return 'OOPS';
    }

    let fibo = [0, 1];
    let i = 2;
    while (fibo.length <= value) {
        fibo.push(fibo[i - 2] + fibo[i - 1]);
        i++;
    }
    return fibo[value];
};

console.log(fibonacci(4));



// Do not edit below this line
module.exports = fibonacci;
