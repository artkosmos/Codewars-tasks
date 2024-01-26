/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) {
    return "";
  }

  let prefix = strs[0]

  for (let string of strs) {
    while (string.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1)
    }
  }

  return prefix
}

// Example usage:
const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1));  // Output: "fl"

const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2));  // Output: ""