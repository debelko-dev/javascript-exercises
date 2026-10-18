const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, elem) => sum += elem, 0)
};

const multiply = function(arr) {
  return arr.reduce((multiply, elem) => multiply *= elem, 1);

};

const power = function(value, power) {
	let newValue = 1;
  for(let i = 0; i < power; i++) newValue *= value;
  return newValue;
};

const factorial = function(value) {
  let factVal = 1;
	for(let i = 1; i <= value; i++) factVal *= i;
  return factVal;
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
