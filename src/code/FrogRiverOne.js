// Difficult to understand the problem set because the example on codility is poor.
//     Idea is to go through array until you have consecutive characters up to X.
//     for their example,
//     A[0] = 1
// A[1] = 3
// A[2] = 1
// A[3] = 4
// A[4] = 2
// A[5] = 3
// A[6] = 5
// A[7] = 4,
//     you don't get 1 - 5 until 6 seconds later. Your task is to ensure a leaf has fallen on even pad leading up to X. This solution uses a set for that separation. Once the set size matches x, you know you have that many unique characters leading up to x, if you cant get that.. then function will return -1.

module.exports = (X, A) => {
  let holdValues = new Set();
  for (let i = 0; i < A.length; i++) {
    holdValues.add(A[i]);
    if (holdValues.size === X) return i;
  }

  return -1;
};
