// An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:
//
//     A[P] + A[Q] > A[R],
//     A[Q] + A[R] > A[P],
//     A[R] + A[P] > A[Q].
//         For example, consider array A such that:
//
//     A[0] = 10    A[1] = 2    A[2] = 5
// A[3] = 1     A[4] = 8    A[5] = 20
// Triplet (0, 2, 4) is triangular.
module.exports = (A) => {
  if (A.length < 2) return 0;
  A = A.sort((a, b) => a - b);
  for (let i = 0; i < A.length - 2; i++) {
    if (
      A[i] + A[i + 1] > A[i + 2] &&
      A[i + 1] + A[i + 2] > A[i] &&
      A[i] + A[i + 2] > A[i + 1]
    ) {
      return 1;
    }
  }

  return 0;
};
