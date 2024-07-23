/*
You have a long flowerbed in which some of the plots are planted, and some are not. However,
flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n,
return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
  let plantedPlaces = 0

  for (let i = 0; i < flowerbed.length ; i++) {
    const previousPlace = flowerbed[i - 1]
    const nextPlace = flowerbed[i + 1]
    const currentPlace = flowerbed[i]

    if ((previousPlace === 0 || !previousPlace) && (nextPlace === 0 || !nextPlace) && currentPlace === 0) {
      flowerbed[i] = 1
      plantedPlaces++
    }
  }

  return plantedPlaces >= n
};

console.log(canPlaceFlowers([1,0,0,0,1,0,1,0,0,0,1], 2))