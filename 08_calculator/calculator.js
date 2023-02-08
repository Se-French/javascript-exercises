const add = function(x, y) {
	let sum = x + y;
  return sum;
};

const subtract = function(x, y) {
	let sub = x - y;
  return sub;
};

const sum = function(array) {  
  let total = array.reduce((a,b) => {
    return a + b;
  }, 0);
  return total;
};

const multiply = function(array) {
  let product = array.reduce((a,b) => {
    return a * b;
  }, 1);
  return product;
};

const power = function(x, y) { 
  let total = Math.pow(x, y);
  return total;
};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num-1; i >= 1; i--){
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
