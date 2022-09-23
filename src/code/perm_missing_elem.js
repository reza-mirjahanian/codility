// This problem has a mathematical solution, based on the fact that the sum of consecutive integers from 1 to n is equal to n(n+1)/2.
//
// Using this formula we can calculate the sum from 1 to N+1. Then with O(N) time complexity we calculate the actual sum of all elements in the array.
//
//     The difference between the full and actual totals will yield the value of the missing element.
//
//     Space complexity is O(1).
module.exports = (A) => {
  let asum = 0;
  let n = A.length + 1;
  let sum = (n * (n + 1)) / 2;

  for (const item of A) {
    asum += item;
  }

  return sum - asum;
};
