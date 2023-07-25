/*
As a part of this Kata, you need to create a function that when provided with a
triplet, returns the index of the numerical element that lies between the other two elements.*/

function gimme (triplet) {
    const middleElement =  [...triplet].sort((a, b) => a - b)[1]
    return triplet.indexOf(middleElement)
}

console.log(gimme([-5.2, -10.6, 14]))