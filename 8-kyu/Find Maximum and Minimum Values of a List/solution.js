/*
Your task is to make two functions ( max and min, or maximum and minimum, etc.,
depending on the language ) that receive a list of integers as input,
and return the largest and lowest number in that list, respectively.*/

const min = function(list){

  return Math.min(...list)
}

const max = function(list){
  return Math.max(...list)
}

console.log(max([-52, 56, 30, 29, -54, 0, -110]))
console.log(min([-52, 56, 30, 29, -54, 0, -110]))
