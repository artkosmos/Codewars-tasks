/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day
in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  if (!prices.length || prices.length < 2) {
    return 0
  }

  let minPrice = prices[0]
  let profit = 0

  for (const price of prices) {
    minPrice = Math.min(minPrice, price)
    profit = Math.max(profit, price - minPrice)
  }

  return profit
};

const prices = [7,1,5,3,6,4]

console.log(maxProfit(prices))
