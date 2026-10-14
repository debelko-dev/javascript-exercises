const reverseString = function(string) {
    arr = string.split('');
    console.log(arr);
    return string.split('').reverse().join('');
};

console.log(reverseString('hello'));    

// Do not edit below this line
module.exports = reverseString;
