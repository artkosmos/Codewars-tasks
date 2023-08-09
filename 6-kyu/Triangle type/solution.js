/*
In this kata, you should calculate the type of triangle with three given sides a, b and c (given in any order).

If each angle is less than 90°, this triangle is acute and the function should return 1.

If one angle is strictly 90°, this triangle is right and the function should return 2.

If one angle is more than 90°, this triangle is obtuse and the function should return 3.

If three sides cannot form a triangle, or one angle is 180° (which turns the triangle into a segment) - the function should return 0.

Three input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both, depending on the language).
*/

function triangleType(a, b, c){
  const angleA = Math.acos((b * b + c * c - a * a) / (2 * b * c)) * (180 / Math.PI)
  const angleB = Math.acos((a * a + c * c - b * b) / (2 * a * c)) * (180 / Math.PI)
  const angleC = Math.acos((a * a + b * b - c * c) / (2 * a * b)) * (180 / Math.PI)

  if (a + b > c && a + c > b && b + c > a) {
    if (angleA < 90 && angleC < 90 && angleB < 90) return 1
    if (angleA === 90 || angleB === 90 || angleC === 90) return 2
    if (angleA > 90 || angleB > 90 || angleC > 90) return 3
  }
  return 0
}

console.log(triangleType(2, 4, 6))