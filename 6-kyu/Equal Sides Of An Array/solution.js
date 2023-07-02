function findEvenIndex(arr) {
  if (arr.slice(1).reduce((acc, item) => acc + item) === 0) {
    return 0
  }
  const necessaryIndexes = []
  arr.forEach((item, index, array) => {
    const sumFirstPart = array.slice(0, index).reduce((acc, item) => acc + item, 0)
    const sumSecondPart = array.slice(index + 1).reduce((acc, item) => acc + item, 0)
    if (sumFirstPart === sumSecondPart) {
      necessaryIndexes.push(index)
    }
  })

  if (necessaryIndexes.length > 0) {
    return necessaryIndexes[0]
  }
  return -1
}

console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]))
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))
console.log(findEvenIndex([1,2,3,4,5,6]))