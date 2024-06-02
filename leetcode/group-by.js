/*
Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and
it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is
an array containing all items in the original array with that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
*/

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  const resultObj = {}

  for (let item of this) {
    const key = fn(item)
    if (!resultObj[key]) {
      resultObj[key] = []
    }

    resultObj[key].push(item)
  }

  return resultObj
};

Array.prototype.groupBy = function (fn) {
  const resultObj = {}

  for (let item of this) {
    const key = fn(item)
    if (resultObj[key]) {
      resultObj[key] = [...resultObj[key], item]
    } else {
      resultObj[key] = [item]
    }
  }

  return resultObj
};