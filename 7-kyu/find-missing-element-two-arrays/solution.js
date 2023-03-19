/* Given two integer arrays where the second array is a shuffled duplicate of
the first array with one element missing, find the missing element. */

function findMissing (arr1, arr2) {
  const newArr1 = arr1.sort((a, b) => a - b)
  const newArr2 = arr2.sort((a, b) => a - b)
  const missingNumber = newArr1.filter((element, index) => element !== newArr2[index])

  return missingNumber[0]
}

console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]))
