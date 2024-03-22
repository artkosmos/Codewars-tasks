// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const store = {}

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i]

    if (difference in store) {
      return [i, store[difference]]
    }

    store[nums[i]] = i
  }
};

console.log(twoSum([2, 7, 11, 15], 9))