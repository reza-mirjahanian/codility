// increase(X) − counter X is increased by 1,
//     max counter − all counters are set to the maximum value of any counter.
//     A non-empty array A of M integers is given. This array represents consecutive operations:
//
//     if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
//     For example, given integer N = 5 and array A such that:
//
//     A[0] = 3
// A[1] = 4
// A[2] = 4
// A[3] = 6
// A[4] = 1
// A[5] = 4
// A[6] = 4
// the values of the counters after each consecutive operation will be:
//
//     (0, 0, 1, 0, 0)
//     (0, 0, 1, 1, 0)
//     (0, 0, 1, 2, 0)
//     (2, 2, 2, 2, 2)
//     (3, 2, 2, 2, 2)
//     (3, 2, 2, 3, 2)
//     (3, 2, 2, 4, 2)

// module.exports = (N, A) => {
//   let counters = Array(N).fill(0);
//   //take care of the case when there is no element === N+1
//   //simply run through the array and return the counters at the end
//   if (A.indexOf(N + 1) === -1) {
//     for (let j = 0; j < A.length; j++) {
//       counters[A[j] - 1]++;
//     }
//     return counters;
//   }
//
//   let max = 0;
//   let nextSkip = 0;
//
//   for (const item of A) {
//     if (item < N + 1) {
//       nextSkip = 0;
//       counters[item - 1]++;
//       //we check and keep a record of the max counter
//       if (counters[item - 1] > max) {
//         max = counters[item - 1];
//       }
//     } else if (item === N + 1 && nextSkip === 0) {
//       nextSkip = 1;
//       for (let j = 0; j < counters.length; j++) {
//         counters[j] = max;
//       }
//     }
//   }
//   return counters;
// };

module.exports = (N, A) => {
  let counters = new Array(N).fill(0);

  let maxCounter = 0;

  let maxToSet = 0;

  for (let i = 0; i < A.length; i++) {
    let X = A[i] - 1;

    if (X === N) {
      // lazy update all counters
      maxToSet = maxCounter;
    } else if (0 <= X && X < N) {
      // see if we needed to set it to maxToSet but havent yet
      counters[X] = Math.max(counters[X] + 1, maxToSet + 1);

      maxCounter = Math.max(counters[X], maxCounter);
    }
  }

  // update any counters to maxToSet that we havent yet
  counters = counters.map((val) => Math.max(val, maxToSet));
  return counters;
};
