/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const arrayString = s.split('')
  const onlyVowelsFromString = arrayString.filter(letter => vowels.includes(letter))

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(arrayString[i])) {
      arrayString[i] = onlyVowelsFromString.pop()
    }
  }

  return arrayString.join('')
};

console.log(reverseVowels("leetcode"))