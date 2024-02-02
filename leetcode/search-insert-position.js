/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not,
return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  let currentArray = nums
  let index

  while (currentArray.length !== 1) {
    const middle = Math.floor(currentArray.length / 2)
    if (currentArray[middle] === target) {
      index = middle
      break
    } else if (target > currentArray[middle]) {
      currentArray = currentArray.slice(middle + 1)
    } else {
      currentArray = currentArray.slice(0, middle)
    }
  }

  return index || nums.length
};

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))