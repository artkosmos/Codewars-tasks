/* Input:
List = [{'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, {'-2': 'Vatsan'},
{'5': 'for'}, {'6': 'a'}, {'12': 'spin'}]
Output:
'Vatsan took his dog for a spin'

Return the values as a string-separated sentence in the order of their
keys' integer equivalent (increasing order). */

function sentence(array) {
  const sortedByKeys = array.sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
  const orderedValues = sortedByKeys.map((item) => Object.values(item)[0])
  return orderedValues.join(' ')
}

const data = [
  { 4: 'dog' }, { 2: 'took' }, { 3: 'his' },
  { '-2': 'Vatsan' }, { 5: 'for' }, { 6: 'a' }, { 12: 'spin' },
];

console.log(sentence(data))
