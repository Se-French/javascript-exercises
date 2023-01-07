let arr = [1, 2, 3, 4];
let args = 3;

const removeFromArray = function(arr, ...args) {
    for (const arg of args){    
        if (arr.includes(arg)){
            let index = arr.indexOf(arg);
            arr.splice(index, 1);  
        } else {
            continue;
        }
    }   
    return arr;
}


// Do not edit below this line
module.exports = removeFromArray;
