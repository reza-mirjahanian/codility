// A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.
//
//     Array A contains only 0s and/or 1s:
//
//     0 represents a car traveling east,
//     1 represents a car traveling west.
//     The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.
//
//     For example, consider array A such that:
//
//     A[0] = 0
// A[1] = 1
// A[2] = 0
// A[3] = 1
// A[4] = 1
// We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).
//
//     Write a function:
//
// function solution(A);
//
// that, given a non-empty array A of N integers, returns the number of pairs of passing cars.
//
//     The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.
module.exports = (A) => {
  let sum = 0;
  let result = 0;
  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] === 1) {
      sum++;
    } else {
      result += sum;
    }

    if (result > 1000000000) {
      result = -1;
      break;
    }
  }
  return result;
};
