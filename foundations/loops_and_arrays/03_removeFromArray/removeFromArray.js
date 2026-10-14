const removeFromArray = function(arr, value) {
    for(let i = 1; i < arguments.length ;i++){


        while (arr.includes(arguments[i])){
            arr.splice(arr.indexOf(arguments[i]), 1);
        }

        
    }
    return arr;
};


console.log(removeFromArray([2,3,4,1,2,5], 2,3))

// Do not edit below this line
module.exports = removeFromArray;
