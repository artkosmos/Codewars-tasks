/*
You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in
one of the ranges but not in nums.
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
  let start = nums[0]
  const result = []

  for (let i = 1; i < nums.length + 1; i++) {
    if (nums[i] - 1 !== nums[i - 1]) {
      result.push([start, nums[i - 1]])
      start = nums[i]
    }
  }

  return result.map(item => {
    if (item[0] === item[1]) {
      return `${item[0]}`
    } else {
      return `${item[0]}->${item[1]}`
    }
  })
};


console.log(summaryRanges([0, 1, 2, 4, 5, 7]))