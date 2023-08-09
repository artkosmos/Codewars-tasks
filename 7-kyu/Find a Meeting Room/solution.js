// In this kata, you will be given an array. Each value represents a meeting room.
// Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

function meeting(x) {
  const emptyRoomIndex =  x.indexOf('O')
  if (emptyRoomIndex === -1) {
    return 'None available!'
  }
  return emptyRoomIndex
}

console.log(meeting(['X', 'O', 'X']))
console.log(meeting(['X', 'X', 'X']))