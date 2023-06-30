/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.*/

function moveZeros(arr) {
    const arrayOfZeros = []
    const arrayWithoutZeros = arr.filter(item => {
        if (item === 0) {
            arrayOfZeros.push(item)
            return false
        }
        return true
    })
    return arrayWithoutZeros.concat(arrayOfZeros)
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
