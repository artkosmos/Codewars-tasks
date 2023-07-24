// You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

function camelize(str) {
  let string = ''

  function checkValue(char) {
   return (
      (char >= 65 && char <= 90) ||
      (char >= 97 && char <= 122) ||
      (char >= 48 && char <= 57)
    )
  }

  for (let i = 0; i < str.length; i++) {
    if (checkValue(str[i].charCodeAt(0))) {
      string += str[i]
    } else {
      if (str[i + 1]) {
        if (checkValue(str[i + 1].charCodeAt(0))) {
          string += ' '
        }
      }
    }
  }

  const result = string.trim()

  if (result) {
    return result
    .split(' ')
    .map(item => item[0].toUpperCase() + item.slice(1).toLowerCase())
    .join('')
  }

  return ''
}

console.log(camelize('GusGl7QvhGeGD60;jEkgeCfg8c5!Ewg:DJf,e 3ZZRHorcFj?!'))
console.log(camelize('java script'))
console.log(camelize(":"))

console.log('GusGl7QvhGeGD60;jEkgeCfg8c5!Ewg:DJf,e 3ZZRHorcFj?!'.match(/[a-z0-9]+/gi))