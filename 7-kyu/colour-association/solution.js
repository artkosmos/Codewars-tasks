/* You are given a 2D array,
composed of a colour and its 'common' association in each array element.
The function you will write needs to return the colour
as 'key' and association as its 'value'. */

function colourAssociation (array) {
  return array.map((element) => Object.fromEntries([element]))
}

console.log(colourAssociation([['white', 'goodness'], ['blue', 'tranquility']]))

// or

const anotherDecision = (array) => array.map(([key, value]) => ({ [key]: value }))
console.log(anotherDecision([['white', 'goodness'], ['blue', 'tranquility']]))
