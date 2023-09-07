// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd
// number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
  const result = [];

  for (let i = 0; i < str.length; i += 2) {
    const pair = str.slice(i, i + 2);
    if (pair.length === 1) {
      result.push(pair + '_');
    } else {
      result.push(pair);
    }
  }

  return result;
}

console.log(solution('abcde'))