const meiyouPattern = require('./meiyouPattern');
const {
  assertAllExamplesMatch,
  assertNoneMatch,
  findLocsRegex,
  parseSentence,
} = require('../lib/testUtils');

test('matches all examples', async () => {
  await assertAllExamplesMatch(meiyouPattern);
});

test('sentence with multiple occurrences with just 没', async () => {
  const sentence = await parseSentence('我没工作，我老公也没工作');
  expect(meiyouPattern.match(sentence)).toEqual(findLocsRegex(sentence, /(没)/));
});

test('sentence with multiple occurrences with full 没有', async () => {
  const sentence = await parseSentence('我没有工作，我老公也没有工作');
  expect(meiyouPattern.match(sentence)).toEqual(findLocsRegex(sentence, /(没有)/));
});

test("doesn't match negative examples", async () => {
  await assertNoneMatch(meiyouPattern, ['我不是你的爸爸。']);
});
