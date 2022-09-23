const expect = require('chai').expect;
const run = require('../../src/code/permCheck');
const assert = require('assert');

test('should return correctly', function () {
  assert(run([4,1,3,2]) === 1);
  assert(run([4,1,3]) === 0);
});
