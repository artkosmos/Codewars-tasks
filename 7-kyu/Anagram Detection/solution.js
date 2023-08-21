// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.\

const isAnagram = function(test, original) {
  if (test.length !== original.length) return false
  const sortedTest = test.toLowerCase().split('').sort()
  const sortedOriginal = original.toLowerCase().split('').sort()
  for (let i = 0; i < sortedOriginal.length; i++) {
    if (sortedOriginal[i] !== sortedTest[i]) {
      return false;
    }
  }
  return true
}

console.log(isAnagram("Buckethead", "DeathCubeK"))
console.log(isAnagram("dumble", "bumble"))
console.log(isAnagram("apple", "pale"))
