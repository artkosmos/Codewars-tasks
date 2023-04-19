/* Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" */

function findNeedle(haystack) {
  const indexOfNeedle = haystack.indexOf("needle")
  return `found the needle at position ${indexOfNeedle}`
}

console.log(
  findNeedle([
    "283497238987234",
    "a dog",
    "a cat",
    "some random junk",
    "a piece of hay",
    "needle",
    "something somebody lost a while ago",
  ])
)
