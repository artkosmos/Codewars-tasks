/*
Given an array arr = a1,a2,a3,a4, ... aN and consider the absolute difference between two elements as the absolute value
of ai - aj, where i != j for any elements in arr.
Find the minimum absolute difference (MAD) between any two elements in arr.
Example
For arr = [-10,0,-3,1]
The MAD is 1.
*/

function getting_mad(arr) {
  arr.sort((a, b) => a - b);

  let minAbsoluteDifference = Infinity;

  for (let i = 1; i < arr.length; i++) {
    const absoluteDifference = Math.abs(arr[i] - arr[i - 1]);
    minAbsoluteDifference = Math.min(minAbsoluteDifference, absoluteDifference);
  }

  return minAbsoluteDifference;
}