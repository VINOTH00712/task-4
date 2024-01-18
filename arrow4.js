const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const getPrimeNumbers = (arr) => {
  return arr.filter((number) => {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  });
};


const primeNumbers = getPrimeNumbers(numbers);


console.log(primeNumbers);
