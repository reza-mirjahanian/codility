// A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).
//
// For example, array A such that:
//
//     A[0] = -3
// A[1] = 1
// A[2] = 2
// A[3] = -2
// A[4] = 5
// A[5] = 6
// contains the following example triplets:
//
//     (0, 1, 2), product is −3 * 1 * 2 = −6
// (1, 2, 4), product is 1 * 2 * 5 = 10
// (2, 4, 5), product is 2 * 5 * 6 = 60
// Your goal is to find the maximal product of any triplet.

module.exports = (A) => {
  //Sorting
  // A.sort(function(a,b){return b-a;});
  //
  // return Math.max(
  //     A[0] * A[1] * A[2],
  //     A[0] * A[1] * A[A.length-1],
  //     A[0] * A[A.length-1] * A[A.length-2],
  //     A[A.length-1] * A[A.length-2] * A[A.length-3]
  // );

  if (A.length === 3) {
    return A[0] * A[1] * A[2];
  }

  let min1, min2, max1, max2, max3;
  min1 = min2 = 1001;
  max1 = max2 = max3 = -1001;
  // If the three maximums are all positives, their product will be the maximum.
  //     If the two minimums are negatives, their product will be a large positive.
  //     If between these 5 values there are three negatives or all of them are negatives, the maximum product will be the one between the two minimums and the maximum value of all the array.
  for (const item of A) {
    if (item > max1) {
      max3 = max2;
      max2 = max1;
      max1 = item;
    } else if (item > max2) {
      max3 = max2;
      max2 = item;
    } else if (item > max3) {
      max3 = item;
    }

    if (item < min1) {
      min2 = min1;
      min1 = item;
    } else if (item < min2) {
      min2 = item;
    }
  }

  let prod1 = max1 * max2 * max3;
  let prod2 = max1 * min1 * min2;

  if (prod1 > prod2) {
    return prod1;
  } else {
    return prod2;
  }
};
