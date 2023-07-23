/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except
for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
*/

function findOutlier(integers){
  let result = integers.filter(item => item % 2 === 0)
  if (result.length === 1) {
    return result[0]
  } else {
    result = integers.filter((item) => item % 2 !== 0)
  }
  return result[0]
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
console.log(findOutlier([0, 1, 2]))

