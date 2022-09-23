const run = require('../../src/code/PassingCars');
const assert = require('assert');
test('should return correctly', function () {
  assert.deepEqual(run([0, 1, 0, 1, 1]), 5);
});
