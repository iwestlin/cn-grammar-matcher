/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGNKKP6',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'nameZheme',
  name: 'Subj. + 那么 / 这么 + Adj.',
  description:
    'In  English, the words "that" and "so" are often used to increase the extent of an adjective (ex. "he is so tall" or "this food is so good"). In Chinese, 那么 (nàme) and 这么 (zhème) serve the same function.',
  sources: [allSetSrc],
  match: sentence => mergeLocMatchGroups([regexMatchLocs(sentence.text, /((?:那么|这么))/)]),
  examples: [
    {
      zh: '你说得这么快，我怎么能听懂？',
      en: 'You speak so fast. How could I understand you?',
      src: allSetSrc,
    },
    {
      zh: '你怎么那么忙？',
      en: 'How come you are so busy?',
      src: allSetSrc,
    },
    {
      zh: '雨这么大，明天再去吧。',
      en: "It's raining so heavily. How about we go tomorrow?",
      src: allSetSrc,
    },
    {
      zh: '你那么有钱，为什么还要工作？',
      en: 'You are so rich. Why are you still working?',
      src: allSetSrc,
    },
    {
      zh: '中国人口这么多，当然会有很多社会问题。',
      en:
        'China has such a big  population. Of course there will be many social problems.',
      src: allSetSrc,
    },
    {
      zh: '我没想到这个考试这么难。',
      en: "I didn't expect this exam is so difficult.",
      src: allSetSrc,
    },
    {
      zh: '你怎么有这么多问题要问？',
      en: 'How come you have so many questions to ask?',
      src: allSetSrc,
    },
    {
      zh: '这个老外怎么会了解那么多中国历史？',
      en: 'How come this foreigner knows so much about Chinese history?',
      src: allSetSrc,
    },
    {
      zh: '今天这么冷，你怎么穿那么少？',
      en: "It's so cold today. How come you wear so little?",
      src: allSetSrc,
    },
    {
      zh: '科技那么发达，什么都是有可能的。',
      en: 'Science and technology is so developed. Nothing is impossible.',
      src: allSetSrc,
    },
  ],
};
