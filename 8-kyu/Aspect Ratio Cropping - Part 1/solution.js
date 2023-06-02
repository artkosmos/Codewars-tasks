/*
Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions
with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.*/

function aspectRatio(x, y) {
  let coefficient = 16 / 9
  console.log(coefficient)
  return [Math.ceil(y * coefficient), y]
}

console.log(aspectRatio(640, 480))
