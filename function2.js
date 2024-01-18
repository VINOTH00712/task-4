// Using an anonymous function
const stringArray = ["apple", "banana", "cherry", "date"];

const convertToTitleCase = function(arr) {
  return arr.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
};

const titleCaseArray = convertToTitleCase(stringArray);
console.log(titleCaseArray);

// Using IIFE
const titleCaseArrayIIFE = (function(arr) {
  return arr.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
})(stringArray);

console.log(titleCaseArrayIIFE);
