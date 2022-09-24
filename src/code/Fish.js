// We assume that all the fish are flowing at the same speed. That is, fish moving in the same direction never meet. The goal is to calculate the number of fish that will stay alive.
//
//     For example, consider arrays A and B such that:
//
//     A[0] = 4    B[0] = 0
// A[1] = 3    B[1] = 1
// A[2] = 2    B[2] = 0
// A[3] = 1    B[3] = 0
// A[4] = 5    B[4] = 0
// Initially all the fish are alive and all except fish number 1 are moving upstream. Fish number 1 meets fish number 2 and eats it, then it meets fish number 3 and eats it too. Finally, it meets fish number 4 and is eaten by it. The remaining two fish, number 0 and 4, never meet and therefore stay alive

module.exports = (A, B) => {
  let stack = [];
  let c = B.length;
  for (let j = 0; j < B.length; j++) {
    if (B[j] === 1) {
      stack.push(A[j]);
    } else if (B[j] === 0) {
      while (stack.length > 0) {
        if (stack[stack.length - 1] > A[j]) {
          c = c - 1;
          break;
        } else if (stack[stack.length - 1] < A[j]) {
          c = c - 1;
          stack.pop();
        }
      }
    }
  }
  return c;
};
