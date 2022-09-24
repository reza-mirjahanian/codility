// A non-empty array A consisting of N integers is given.
//
//     The leader of this array is the value that occurs in more than half of the elements of A.
//
//     An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.
//
//     For example, given array A such that:
//
//     A[0] = 4
// A[1] = 3
// A[2] = 4
// A[3] = 4
// A[4] = 4
// A[5] = 2
// we can find two equi leaders:
//
//     0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
// 2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.
// The goal is to count the number of equi leaders.
module.exports = (A) => {
  if (A.length === 1) return 0;
  let maxRepetition = 1;
  let maxIndex = -1;
  let table = {};
  for (let i = 0; i < A.length; i++) {
    if (table.hasOwnProperty(A[i])) {
      table[A[i]][0]++;
      if (table[A[i]][0] > maxRepetition) {
        if (table[A[i]][0] > A.length / 2) {
          maxRepetition = table[A[i]][0];
          maxIndex = table[A[i]][1];
        }
      }
    } else {
      table[A[i]] = [];

      table[A[i]][0] = 1;
      table[A[i]][1] = i;
    }
  }

  let leader = A[maxIndex];

  let equiLeader = 0;
  let stack = [];
  for (let i = 0; i < A.length; i++) {
    if (
      stack.length > Math.floor(i / 2) &&
      maxRepetition - stack.length > Math.floor((A.length - i) / 2)
    ) {
      equiLeader++;
    }
    if (A[i] === leader) stack.push(i);
  }

  return equiLeader;
};
