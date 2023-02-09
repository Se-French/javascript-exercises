const palindromes = function (string) {
    let newString = string.replace(/ /g, '').replace(/[^a-zA-Z]/g, '');
    const arr = Array.from(newString);
    let result = [...arr].reverse().join('');
    if (newString.toLowerCase() === result.toLowerCase()){
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
