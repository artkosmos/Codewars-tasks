/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

function isArrayEmpty (inputArray) {
  if (inputArray.length > 0) {
    return 'Массив не пустой'
  }
  if (inputArray.length === 0) {
    return 'Массив пустой'
  }
}

console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))

// вариант 2
const myArray = [1, 2, 3]

myArray.length === 0
  ? console.log('Массив пустой')
  : console.log('Массив не пустой')

// вариент 3
const isEmpty = (inputArray) => {
  if (inputArray.length > 0) {
    return 'Массив не пустой'
  }
  return 'Массив пустой'
}

console.log(isEmpty([]))
console.log(isEmpty([1, 2, 3]))
