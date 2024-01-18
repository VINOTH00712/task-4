const words = ["level", "hello", "radar", "world", "madam"];


const getPalindromes = (arr) => {
  return arr.filter((word) => {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  });
};


const palindromes = getPalindromes(words);

console.log(palindromes);