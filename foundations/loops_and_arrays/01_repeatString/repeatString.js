const repeatString = function(string, num) {
    if(num < 0){
        return 'ERROR';
    }
    if(num === 0){
        return '';
    }
    uniqString = string;
    for (let i = 1; i < num; i++){
        string += uniqString;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
