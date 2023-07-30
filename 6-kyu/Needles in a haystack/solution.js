/*
Find the needle(s) in a haystack by creating a function that returns all properties (recursively) which contains the needle (string).

Return value should be a sorted array.*/

const obj = {
  site: "Codewars",
  description: "Lorem ipsum dolor sit...",
  obj2: {
    str: "Yeah, Codewars!",
    num: 123,
    obj3: {
      something: "Ph'nglui mglw'nafh Codewars R'lyeh wgah'nagl fhtagn. Gotha fm'latgh h'gof'nn, geb chtenff"
    }
  }
}

function search(obj, needle, path = "") {
  let results = [];

  for (let key in obj) {
    const currentPath = path ? path + "." + key : key;
    const value = obj[key];

    if (typeof value === "string" && value.includes(needle)) {
      results.push(currentPath);
    } else if (typeof value === "object" && value !== null) {
      const nestedResults = search(value, needle, currentPath);
      results = results.concat(nestedResults);
    }
  }

  return results.sort();
}

console.log(search(obj, "Codewars"))