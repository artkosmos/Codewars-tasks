/*
You will be given an array a and a value x. All you need to do
is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.*/

function check(array, value) {
  return array.includes(value)
}



console.log(check([66, 101], 66))