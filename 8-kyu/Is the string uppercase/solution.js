/*
Create a method to see whether the string is ALL CAPS.*/

function isUpperCase (string) {
  const punctuationMarks = [
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
    ':', ';', '<', '=', '>', '?', '@', '[', ' ', ']', '^', '_', '`', '{', '|',
    '}', '~'
  ];
  for (let i = 0; i < string.length; i++) {
    if (!punctuationMarks.includes(string[i])) {
      if (string[i].charCodeAt(0) < 65 || string[i].charCodeAt(0) > 90) {
        return false
      }
    }
  }
  return true
}

console.log(isUpperCase("ACSKLDFJSgSKLDFJSKLDFJ"))
console.log(isUpperCase("ACSKLDFJSGSKLDFJSKLDFJ"))
console.log(isUpperCase("HELLO I AM DONALD"))
console.log(isUpperCase('BOB WALKS HIS DOG EVERY DAY.'))

// or function() {return this === this.toUpperCase()} :))