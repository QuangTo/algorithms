const array = [-3, 2, 3, 4, 5, 8, 10, 11, 14, 15, 25, 35];

// so nguyen to
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5]
console.log(isPrime(15)); //false
