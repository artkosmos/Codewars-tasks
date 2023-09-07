// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  const object = {}
  for (let i = 0; i < arr.length; i++) {
    if (object[arr[i]]) {
      object[arr[i]] += 1
    } else {
      object[arr[i]] = 1
    }
  }
  for (let key in object) {
    if (object[key] === 1) {
      return +key
    }
  }
}

console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))