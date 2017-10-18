/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGIPYFV',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'standardNegationWithBu',
  name: 'Subj. + 不 + Verb + Obj.',
  description:
    '不 (bù) is generally used to negate a verb in the present or future, or to talk about what you do not do, as a habit. So expressing things like "I don\'t want to go" or "I\'m not going" or "I don\'t eat meat" would be typical uses of 不 (bù).',
  sources: [allSetSrc],
  match: sentence => mergeLocMatchGroups([regexMatchLocs(sentence.text, /(不)/)]),
  examples: [
    {
      zh: '他们不是坏孩子。',
      en: 'They are not bad kids.',
      src: allSetSrc,
    },
    {
      zh: '我们不喝酒。',
      en: "We don't drink alcohol.",
      src: allSetSrc,
    },
    {
      zh: '我今天不想工作。',
      en: "I don't want to work today.",
      src: allSetSrc,
    },
    {
      zh: '你不喜欢我吗？',
      en: 'Do you not like me?',
      src: allSetSrc,
    },
    {
      zh: '为什么你不喜欢喝咖啡？',
      en: "Why don't you like to drink coffee?",
      src: allSetSrc,
    },
    {
      zh: '我不饿。',
      en: "I'm not hungry.",
      src: allSetSrc,
    },
    {
      zh: '这个不贵。',
      en: 'This is not expensive.',
      src: allSetSrc,
    },
    {
      zh: '公司不大。',
      en: 'The company is not big.',
      src: allSetSrc,
    },
    {
      zh: '老板今天很不高兴。',
      en: 'The boss is very unhappy today.',
      src: allSetSrc,
    },
    {
      zh: '我哥哥不高，但是很帅。',
      en: 'My older brother is not tall, but he is very handsome.',
      src: allSetSrc,
    },
  ],
};
