/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGB8BWA',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'deBudeliao',
  name: 'Adj. +  得不得了',
  description:
    '得不得了 (de bùdéliǎo) can be used as a complement to suggest a situation is serious, or is likely to result in perhaps terrible consequences. It can be used in a positive sense, such as in English when we say "I\'m terribly happy."',
  sources: [allSetSrc],
  match: sentence => mergeLocMatchGroups([regexMatchLocs(sentence.text, /(得不得了)/)]),
  examples: [
    {
      zh: '升职的事情让他高兴得不得了。',
      en: 'The fact that he got promoted made him extremely happy.',
      src: allSetSrc,
    },
    {
      zh: '嗨，他跟老总的关系好得不得了，你一定要小心！',
      en:
        'The relationship between him and the chief officer is really good, you need to be careful!',
      src: allSetSrc,
    },
    {
      zh: '爸爸气得不得了，你要倒霉啦。',
      en: "Dad is super angry. You're going to be unlucky.",
      src: allSetSrc,
    },
    {
      zh: '她的妈妈刚去世，她难过得不得了。',
      en: 'Her mom just passed away, she is extremely sad.',
      src: allSetSrc,
    },
  ],
};
