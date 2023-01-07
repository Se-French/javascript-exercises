const string = 'hello there';

const reverseString = function(string) {
    const arr = Array.from(string);
    const reverse =[...arr].reverse();
    let result = reverse.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
