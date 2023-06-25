/*
Take an array and remove every second element from the array.
Always keep the first element and start removing with the next element.*/

function removeEveryOther(arr){
  return arr.filter((item, index) => index % 2 === 0)
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
