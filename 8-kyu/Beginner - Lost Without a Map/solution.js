/*
Given an array of integers, return a new array with each value doubled.*/

function maps(array){
  return array.map(item => item * 2)
}

console.log(maps([1, 2, 3]))