/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGA0S4T',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'buguo',
  structures: ['Clause 1， 不过 + Clause 2'],
  description:
    'Instead of just using 可是 or 但是, you can also use the softer and more informal 不过 (búguò).',
  sources: [allSetSrc],
  match: sentence => mergeLocMatchGroups([regexMatchLocs(sentence.text, /(，不过)/)]),
  examples: [
    {
      zh: '我可以喝白酒，不过只能喝一点。',
      en: 'I can drink baijiu, but only a little.',
      src: allSetSrc,
    },
    {
      zh: '我们玩得很开心，不过住的地方不太好。',
      en: 'We had a lot of fun, but the place we stayed at was not very good.',
      src: allSetSrc,
    },
    {
      zh: '他的汉语不错，不过发音不太好。',
      en: 'His Chinese is pretty good, but his pronunciation is not very good.',
      src: allSetSrc,
    },
    {
      zh: '这件衣服我很喜欢，不过有点贵。',
      en: "I like this clothing, but it's a little bit expensive.",
      src: allSetSrc,
    },
    {
      zh: '这个房子很好，不过有点远。',
      en: "This house is nice, but it's a little bit far away.",
      src: allSetSrc,
    },
  ],
};
