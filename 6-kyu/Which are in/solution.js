/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]*/

const a1 = ["arp", "live", "strong"]
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
const b1 = ["tarp", "mice", "bull"]
const b2 = ["lively", "alive", "harp", "sharp", "armstrong"]

function inArray(array1, array2) {
  const resultArray = array1.filter(item => {
    for (let i = 0; i < array2.length; i++) {
      if (array2[i].includes(item)) {
        return true
      }
    }
    return false
  })

  return resultArray.sort()
}

console.log(inArray(a1, a2))
console.log(inArray(b1, b2))