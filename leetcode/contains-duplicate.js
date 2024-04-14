/*
Given an integer array nums and an integer k,
return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  const seenItems = {}

  for (let i = 0; i < nums.length; i++) {
    if (seenItems[nums[i]] !== undefined) {
      if (Math.abs(seenItems[nums[i]] - i) <= k) return true
    }

    seenItems[nums[i]] = i
  }

  return false
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))