/*Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const result = [...arr]
  for (let i = 0; i < result.length; i++) {
    result[i] = fn(result[i], i)
  }

  return result
};