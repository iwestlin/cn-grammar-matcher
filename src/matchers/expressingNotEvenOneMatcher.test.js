/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const expressingNotEvenOneMatcher = require('./expressingNotEvenOneMatcher');
const {
  assertAllExamplesMatch,
  assertNoneMatch,
} = require('../lib/testUtils');

test('matches all examples', async () => {
  await assertAllExamplesMatch(expressingNotEvenOneMatcher);
});

// TODO: Add more tests

test("doesn't match negative examples", async () => {
  await assertNoneMatch(expressingNotEvenOneMatcher, [
    // TODO: add negative examples here
  ]);
});
