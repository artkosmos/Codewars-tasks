// Determine the area of the largest square that can fit inside a circle with radius r.
// Площадь треугольника равна половине основания умноженного на высоту, затем сложить 2 треугольника

function areaLargestSquare (r) {
  return (r * r) * 2
}

console.log(areaLargestSquare(3))
