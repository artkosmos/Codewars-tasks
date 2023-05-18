/*
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.*/

const areaOrPerimeter = function(length , weight) {
  if (length === weight) {
    return length * weight
  }

  return length * 2 + weight * 2
};

console.log(areaOrPerimeter(3,  3))
console.log(areaOrPerimeter(6, 10))