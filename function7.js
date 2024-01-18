
 // Using an anonymous function
 const originalArray = [1, 2, 3, 4, 5];
 const k = 2;
 
 const rotateArray = function(arr, k) {
   const n = arr.length;
   const pivot = k % n;
   const rotatedArray = arr.slice(pivot).concat(arr.slice(0, pivot));
   return rotatedArray;
 };
 
 const rotatedArray = rotateArray(originalArray, k);
 console.log(rotatedArray);
 c
 // Using IIFE
 const rotatedArrayIIFE = (function(arr, k) {
   const n = arr.length;
   const pivot = k % n;
   return arr.slice(pivot).concat(arr.slice(0, pivot));
 })(originalArray, k);
 
 console.log(rotatedArrayIIFE);