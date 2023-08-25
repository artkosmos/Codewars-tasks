// Write function lenR which returns the length of a given list. Try no to cheat and provide recursive solution.

function lenR(x) {
  const testArr = [...x]
  if (!testArr.length) {
    return 0
  }
  testArr.pop()
  return 1 + lenR(testArr)
}

console.log(lenR([1, 2, 3]))