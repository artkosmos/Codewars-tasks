/*
Given a non-empty array of integers, return the result of multiplying the values together in order.*/

function grow(arr){
  return arr.reduce((acc, item) => acc * item, 1)
}

console.log(grow([4, 1, 1, 1, 4]))