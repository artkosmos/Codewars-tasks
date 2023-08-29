// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and
// return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

function twoOldestAges(ages){
  const sortedArray = [...ages].sort((a,b) => a - b)
  return sortedArray.slice(-2)
}

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]))