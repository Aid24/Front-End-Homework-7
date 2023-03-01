// 1
for (let i = 20; i <= 30; i += 0.5) {
  console.log(i);
}

// 2
const rate = 27;
for (let i = 10; i <= 100; i += 10) {
  console.log(`${i} долларів = ${i * rate} гривень`);
}

// 3
const n = 100;
for (let i = 1; i * i <= n; i++) {
  console.log(i);
}

// 4
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7)); 
console.log(isPrime(12)); 

// 5
function isPowerOfThree(num) {
  if (num <= 0) {
    return false;
  }
  while (num > 1) {
    if (num % 3 !== 0) {
      return false;
    }
    num /= 3;
  }
  return true;
}

console.log(isPowerOfThree(9)); 
console.log(isPowerOfThree(81)); 
console.log(isPowerOfThree(13)); 
