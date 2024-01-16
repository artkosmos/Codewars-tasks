/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

function isAlphanumeric(char) {
  const charCode = char.charCodeAt(0);
  return (
    (charCode >= 48 && charCode <= 57) ||   // Numeric (0-9)
    (charCode >= 65 && charCode <= 90) ||   // Uppercase letters (A-Z)
    (charCode >= 97 && charCode <= 122)     // Lowercase letters (a-z)
  );
}

function isPalindrome(s) {
  const cleanedString = s.split('').filter(char => isAlphanumeric(char)).join('').toLowerCase();

  return cleanedString === cleanedString.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
