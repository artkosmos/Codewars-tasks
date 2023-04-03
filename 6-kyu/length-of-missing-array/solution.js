function getLengthOfMissingArray (arrayOfArrays) {
  if (!arrayOfArrays || arrayOfArrays.length === 0) {
    return 0
  }

  const arraysLength = arrayOfArrays.map((item) => (item === null ? 0 : item.length))
  if (arraysLength.includes(0)) {
    return 0
  }

  const minValue = Math.min(...arraysLength)
  const maxValue = Math.max(...arraysLength)
  const newArray = []

  for (let i = minValue; i <= maxValue; i += 1) {
    newArray.push(i)
  }

  return newArray.filter((element) => !arraysLength.includes(element))[0]
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
console.log(getLengthOfMissingArray([[null], [null, null, null]]))
console.log(getLengthOfMissingArray([['a', 'a', 'a'], ['a', 'a'], ['a', 'a', 'a', 'a'], ['a'], ['a', 'a', 'a', 'a', 'a', 'a']]))
console.log(getLengthOfMissingArray([]))
console.log(getLengthOfMissingArray([[], [1], [1, 3], [3, 2, 0, 4]]))
