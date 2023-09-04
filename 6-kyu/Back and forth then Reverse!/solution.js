// A list S will be given. You need to generate a list T from it by following the given process:
// Remove the first and last element from the list S and add them to the list T.
// Reverse the list S
// Repeat the process until list S gets emptied.
// The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.

function arrange(s) {
  const _arrS = [...s]
  const arrT = []
  while (_arrS.length > 0) {
    if (_arrS.length) {
      const firstElement = _arrS.shift()
      arrT.push(firstElement)
    }
    if (_arrS.length) {
      const secondElement = _arrS.pop()
      arrT.push(secondElement)
    }
    _arrS.reverse()
  }

  return arrT
}

console.log(arrange([1,2,3,4,5]))