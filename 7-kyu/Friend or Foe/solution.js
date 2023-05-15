/*
Make a program that filters a list of strings and returns
a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be
a friend of yours! Otherwise, you can be sure he's not...*/

function friend(friends){
  const only4Chars = friends.filter(item => item.length === 4)
  return only4Chars.filter(item => {
    for (let i = 0; i < item.length; i++) {
      if (!isNaN(parseInt(item[i]))) {
        return false;
      }
    }

    return true;
  })
}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))