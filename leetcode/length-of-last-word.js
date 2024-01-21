/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.
Constraints:
1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
*/

/**
 * Variant one
 * @param {string} string
 * @return {number}
 */
const lengthLastWord = (string) => {
  return string.trimEnd().split(' ').at(-1).length
}


/**
 * Variant two
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  let currentWord = ''
  const wordsFromString = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if (currentWord) {
        wordsFromString.push(currentWord)
        currentWord = ''
      }
    } else {
      currentWord += s[i]
    }
  }

  if (currentWord) {
    wordsFromString.push(currentWord);
  }

  return wordsFromString.at(-1).length

};


