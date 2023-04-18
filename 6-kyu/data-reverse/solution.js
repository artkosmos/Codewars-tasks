/* A stream of data is received and needs to be reversed.
The data is given in an array as such:
[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

Each segment is 8 bits long, meaning the order of these segments 
needs to be reversed, for example:

11111111  00000000  00001111  10101010
(byte1)   (byte2)   (byte3)   (byte4)

should become:
10101010  00001111  00000000  11111111
(byte4)   (byte3)   (byte2)   (byte1) */

function dataReverse(data) {
  const dataCopy = [...data]
  const bytes = []
  while (dataCopy.length > 0) {
    bytes.push(dataCopy.splice(0, 8))
  }
  const reversedData = bytes.reverse()
  return reversedData.flat()
}

console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
)
