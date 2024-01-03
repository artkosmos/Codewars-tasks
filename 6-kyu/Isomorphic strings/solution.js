/*
Two strings a and b are called isomorphic if there is a one to one mapping possible for every character of
a to every character of b. And all occurrences of every character in a map to same character in b.
Task
In this kata you will create a function that return True if two given strings are isomorphic to each other,
and False otherwise. Remember that order is important.
Your solution must be able to handle words with more than 10 characters.


*/

function isomorph(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  const mappingAtoB = {};
  const mappingBtoA = {};

  for (let i = 0; i < a.length; i++) {
    const charA = a[i];
    const charB = b[i];

    if (mappingAtoB[charA] === undefined && mappingBtoA[charB] === undefined) {
      mappingAtoB[charA] = charB;
      mappingBtoA[charB] = charA;
    } else if (mappingAtoB[charA] !== charB || mappingBtoA[charB] !== charA) {
      return false;
    }
  }

  return true;
}