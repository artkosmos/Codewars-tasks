/*
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters.
Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
*/

function diamond(n) {
  if (n < 0 || n % 2 === 0) {
    return null
  }

  let firstPart = []

  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    const spaces = ' '.repeat(Math.ceil(n / 2) - i);
    const stars = '*'.repeat(i + (i - 1));
    const diamondRow = `${spaces}${stars}\n`
    firstPart.push(diamondRow)
  }
  const secondPart = [...firstPart].reverse().slice(1)
  const diamond = firstPart.concat(secondPart).join('')
  return diamond
}

console.log(diamond(5))
console.log(diamond(21))