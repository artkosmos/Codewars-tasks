// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function (str1, str2) {
  const shorterStr = str1 >= str2 ? str2 : str1
  let largestString = ''

  for (let i = 0; i < shorterStr.length; i++) {
    if (str1[i] === str2[i]) {
      largestString += str1[i]
    }
  }

  return largestString
};

console.log(gcdOfStrings('ABCABC', 'ABC'))
console.log(gcdOfStrings('ABABAB', 'ABAB'))
console.log(gcdOfStrings('LEET', 'CODE'))