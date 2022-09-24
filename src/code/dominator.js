// An array A consisting of N integers is given. The dominator of array A is the value that occurs in more than half of the elements of A.
//
//     For example, consider array A such that
//
// A[0] = 3    A[1] = 4    A[2] =  3
// A[3] = 2    A[4] = 3    A[5] = -1
// A[6] = 3    A[7] = 3
// The dominator of A is 3 because it occurs in 5 out of 8 elements of A (namely in those with indices 0, 2, 4, 6 and 7) and 5 is more than a half of 8.

module.exports = (A) => {
  // write your code in JavaScript (Node.js 8.9.4)
  let answer = -1;

  let tmp = {};
  for (const item of A) {
    tmp[item] = (tmp[item] || 0) + 1;
  }

  for (const [key, value] of Object.entries(tmp)) {
    if (tmp[key] > A.length / 2) {
      answer = A.indexOf(Number(key));
    }
  }

  return answer;
};
