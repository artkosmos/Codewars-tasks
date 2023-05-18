/*
Given a set of numbers, return the additive inverse of each.
Each positive becomes negatives, and the negatives become positives.*/

function invert(array) {
   return array.map((item) => 0 - item)
}

console.log(invert([1,-2,3,-4,5]))
console.log(invert([0]))