// Using an anonymous function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumbers = function(arr) {
  arr.forEach(function(num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers(numbers);

// Using IIFE
(function(arr) {
  arr.forEach(function(num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})(numbers);

