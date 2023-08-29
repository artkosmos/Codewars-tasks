// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url) {
  const index = url.indexOf('#')
  if (index !== -1) {
    return url.slice(0, index)
  }

  return url
}


console.log(removeUrlAnchor("www.codewars.com#about"))