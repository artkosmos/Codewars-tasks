/*
Write a method that returns true if a given parameter is a power of 4, and false if it's not.
If parameter is not an Integer (eg String, Array) method should return false as well.*/

function powerOf4(n) {
  if (typeof n === 'number' && Number.isInteger(n)){
    if (n <= 0) {
      return false
    }
    while (n % 4 === 0) {
      n = n / 4
    }
  }

  return n === 1;
}

console.log(powerOf4(16))
