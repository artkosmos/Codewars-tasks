/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let step = 0

  while(step < k) {
    const lastElement = nums.pop()
    nums.unshift(lastElement)
    ++step    
  }


  return nums
}

console.log(rotate([1,2,3,4,5,6,7], 3))