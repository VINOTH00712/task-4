const stringArray = ["hello world", "javascript is fun", "arrow functions"];

const convertToTitleCase = (arr) => {
  return arr.map((str) => {
    return str.split(' ').map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  });
};
const titleCaseArray = convertToTitleCase(stringArray);


console.log(titleCaseArray);
