const palindromes = function (string) {
    symbolsToDelete = [' ', '.', ',', '!', '?'];
    
    for(let symbol of symbolsToDelete){
        string = string.split(symbol).join('');
    }
    return string.toLowerCase() === string.split('').reverse().join('').toLowerCase();
};




// Do not edit below this line
module.exports = palindromes;
