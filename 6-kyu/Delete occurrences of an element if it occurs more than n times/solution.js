/*
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2],
drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].*/


function deleteNth(arr, n) {
  const resultArray = []
  const quantityObj =  arr.reduce((obj, item) => {
    if (obj[item]) {
      if (obj[item] < n) {
        obj[item] += 1
        resultArray.push(item)
      }
    } else {
      obj[item] = 1
      resultArray.push(item)
    }
    return obj;
  }, {})

  return resultArray
}

console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))