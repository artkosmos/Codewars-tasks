// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end).
// The length of the strings, before and after the colon, are random.
// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

function tailSwap(arr) {
  const firstIndex = arr[0].indexOf(':')
  const secondIndex = arr[1].indexOf(':')
  const firstValue = arr[0].slice(firstIndex + 1)
  const secondValue = arr[1].slice(secondIndex + 1)
  return [arr[0].slice(0, firstIndex + 1) + secondValue, arr[1].slice(0, secondIndex + 1) + firstValue ]
}

console.log(tailSwap(["abc:123", "cde:456"]))