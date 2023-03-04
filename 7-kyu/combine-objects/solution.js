/* Your task is to write a function that takes two or more objects and returns
a new object which combines all the input objects.

All input object properties will have only numeric values.
Objects are combined together so that the values of matching keys are added together. */

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

function combine (...arg) {
  return arg.reduce((acc, item) => {
    for (const key in item) {
      if (acc[key]) {
        acc[key] += item[key]
      } else {
        acc[key] = item[key] // добавление ключ:значение в аккумулятор
      }
    }
    return acc
  }, {})
}

console.log(combine(objA, objB, objC, objD))
