/*
It should remove all values from list a, which are present in list b keeping their order.*/

function arrayDiff(a, b) {
  return a.filter(element => !b.includes(element));
}

console.log(arrayDiff([1,2,2,2,3],[2]))
console.log(arrayDiff([1,2,2],[]))