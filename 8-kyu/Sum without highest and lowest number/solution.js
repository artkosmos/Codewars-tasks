/*
Sum all the numbers of a given array ( cq. list ),
except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge,
even if there are more than one with the same value.*/

function sumArray(array) {
  if (!Array.isArray(array)) {
    return 0
  }
  const sortedArray = array.sort((a, b) => a - b)
  sortedArray.shift()
  sortedArray.pop()
  return sortedArray.reduce((sum, item) => sum + item, 0)
}

console.log(sumArray([ 6, 2, 1, 8, 10 ]))
console.log(sumArray([ 3, 5 ]))