/* | HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const head = (array) => array[0]
const tail = (array) => array.slice(1)
const init = (array) => array.slice(0, [array.length - 1])
const last = (array) => array.at(-1)

console.log(head(arr))
console.log(tail(arr))
console.log(init(arr))
console.log(last(arr))
console.log(init([1, 5, 7, 9]))
