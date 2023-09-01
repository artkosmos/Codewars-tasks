// Complete the solution so that it returns the number of times the search_text is found within the full_text.
// full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
// ---> should return 2 since "bb" shows up twice

function solution(fullText, searchText) {
  let count = 0
  let position = 0
  while (true) {
    const substringPosition = fullText.indexOf(searchText, position)
    if (substringPosition === -1) {
      break
    }
    count += 1
    position = substringPosition + 1
  }

  return count
}

console.log(solution('abcdeb', 'b'))