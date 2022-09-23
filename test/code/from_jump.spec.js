const expect = require('chai').expect;
const run = require('../../src/code/frog_jmp');

test('should return correctly', function () {
  expect(run(10, 85, 30)).to.equal(3);
});
