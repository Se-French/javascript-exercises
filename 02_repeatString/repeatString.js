let string = 'hey';
let num = 3;

const repeatString = function(string, num) {
    let repeat = '';

    if (num >=0){
    while (num > 0){
        repeat += string;
        num--;
    }
    } else {
        repeat = "ERROR";
    }
    return repeat;
}

// Do not edit below this line
module.exports = repeatString;
