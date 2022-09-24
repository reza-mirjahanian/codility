// You are going to build a stone wall. The wall should be straight and N meters long, and its thickness should be constant; however, it should have different heights in different places. The height of the wall is specified by an array H of N positive integers. H[I] is the height of the wall from I to I+1 meters to the right of its left end. In particular, H[0] is the height of the wall's left end and H[N−1] is the height of the wall's right end.

// The wall should be built of cuboid stone blocks (that is, all sides of such blocks are rectangular). Your task is to compute the minimum number of blocks needed to build the wall.

module.exports = (H) => {
  let sum = 0;
  let stackIndex = 0;
  let stack = [];

  for (const item of H) {
    while (stackIndex > 0 && stack[stackIndex - 1] > item) {
      stackIndex--;
    }
    if (!(stackIndex > 0 && stack[stackIndex - 1] === item)) {
      sum++;
      stack[stackIndex] = item;
      stackIndex++;
    }
  }

  return sum;
};
