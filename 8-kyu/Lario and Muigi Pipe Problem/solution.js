/*
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum
value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/

function pipeFix(numbers){
  const resultArr = []
  for (let i = numbers[0]; i <= numbers.at(-1); i++) {
    resultArr.push(i)
  }

  return resultArr
}

console.log(pipeFix([1,2,3,5,6,8,9]))