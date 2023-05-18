/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.*/

function removeExclamationMarks(string) {
  return string.replaceAll('!', '')
}

console.log(removeExclamationMarks("Hello World!"))