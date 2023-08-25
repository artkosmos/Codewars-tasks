// Write a function revR which reverses a given list. Try not to cheat and provide a recursive solution.

function revR(array) {
  if (!array.length) {
    return []
  }
  const lastElement = array.pop()
  return [lastElement, ...revR(array)]
}

console.log(revR([1, 2, 3]))