// Using an anonymous function
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

const removeDuplicates = function(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};

const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log(arrayWithoutDuplicates);

// Using IIFE
const arrayWithoutDuplicatesIIFE = (function(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
})(arrayWithDuplicates);

console.log(arrayWithoutDuplicatesIIFE);