'use strict';

function isPrime(number) {
  if (number > 1000 || number === 0) {
    return 'Данные неверны';
  }
  let maxDiv = Math.sqrt(number);
  for (let i = 2; i <= maxDiv; i++) {
    if (number % i === 0) {
      return `Число ${number} - составное число`;
    }
  }
  return `Число ${number} - простое число`;
}

module.exports = isPrime;