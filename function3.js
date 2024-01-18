// Using an anonymous function
const numbers = [1, 2, 3, 4, 5];

const sumArray = function(arr) {
  return arr.reduce(function(acc, num) {
    return acc + num;
  }, 0);
};

const result = sumArray(numbers);
console.log(result);

// Using IIFE
const resultIIFE = (function(arr) {
  return arr.reduce(function(acc, num) {
    return acc + num;
  }, 0);
})(numbers);

console.log(resultIIFE);
