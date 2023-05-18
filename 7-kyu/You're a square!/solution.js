/*
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer;
in other words, it is the product of some integer with itself.*/

const isSquare = function (number) {
  const root = Math.sqrt(number)
  const root2 = Math.round(root)
  return root === root2
}

console.log(isSquare(4))
console.log(isSquare(23))