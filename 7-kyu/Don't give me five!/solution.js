/*
In this kata you get the start number and the end number of a region and should return
the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!*/

function dontGiveMeFive(start, end) {
  const result = []
 for (let i = start; i <= end; i++) {
   if (i.toString().indexOf('5') !== -1) {
     continue
   }
   result.push(i)
  }

 return result.length
}

console.log(dontGiveMeFive(1,9))
console.log(dontGiveMeFive(4,17))