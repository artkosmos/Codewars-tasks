/* V = max(R,G,B)
You are given a list of colors in 6-digit hexidecimal notation #RRGGBB.
Return the brightest of these colors! */

function brightest (colors) {
  let indexColor = 0
  let colorValue = 0
  colors.forEach((element, index) => {
    const r = parseInt(element.slice(1, 3), 16)
    const g = parseInt(element.slice(3, 5), 16)
    const b = parseInt(element.slice(5, 7), 16)
    const maxValue = Math.max(r, g, b)

    if (maxValue > colorValue) {
      colorValue = maxValue
      indexColor = index
    }
  });
  return colors[indexColor]
}

console.log(brightest(['#000000', '#001000']))
console.log(brightest(['#ABCDEF', '#123456']))
console.log(brightest(['#00FF00', '#FFFF00']))
console.log(brightest(['#FFFFFF', '#1234FF']))
console.log(brightest(['#FFFFFF', '#123456', '#000000']))
