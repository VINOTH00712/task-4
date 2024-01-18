// Using an anonymous function
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const findMedian = function(arr1, arr2) {
  const combinedArray = arr1.concat(arr2);
  const sortedArray = combinedArray.sort((a, b) => a - b);

  const length = sortedArray.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // If the combined array has an even length, average the two middle elements
    return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
  } else {
    // If the combined array has an odd length, return the middle element
    return sortedArray[middleIndex];
  }
};

const median = findMedian(arr1, arr2);
console.log(median);

// Using IIFE
const medianIIFE = (function(arr1, arr2) {
  const combinedArray = arr1.concat(arr2);
  const sortedArray = combinedArray.sort((a, b) => a - b);

  const length = sortedArray.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
  } else {
    return sortedArray[middleIndex];
  }
})(arr1, arr2);

console.log(medianIIFE);