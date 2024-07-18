/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order,
starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
  let mergedStr = ''

  for (let i = 0; i < word1.length + word2.length; i++) {
    const word1Letter = word1[i] || ''
    const word2Letter = word2[i] || ''
    mergedStr += word1Letter + word2Letter
  }

  return mergedStr.trim()
};

console.log(mergeAlternately('ab', 'pqrs'))