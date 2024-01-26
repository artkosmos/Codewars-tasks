/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every(str => str[i] === strs[0][i])) {
      prefix += strs[0][i];
    } else break;
  }

  return prefix;
};

// Example usage:
const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1));  // Output: "fl"

const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2));  // Output: ""