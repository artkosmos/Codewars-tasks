// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
//
// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
//
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

function isValidBraces(str) {
  const stack = [];
  const openingBraces = "([{";
  const closingBraces = ")]}";

  for (let char of str) {
    if (openingBraces.includes(char)) {
      stack.push(char);
    } else if (closingBraces.includes(char)) {
      const lastOpeningBrace = stack.pop();
      if (!lastOpeningBrace || openingBraces.indexOf(lastOpeningBrace) !== closingBraces.indexOf(char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
