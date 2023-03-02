/* The blocksize is a by a and a ≥ 1.
What is the perimeter of the nth shape in the sequence (n ≥ 1) ? */

function perimeterSequence (a, n) {
  const perimeter = a * 4
  return perimeter * n
}

console.log(perimeterSequence(1, 3))
