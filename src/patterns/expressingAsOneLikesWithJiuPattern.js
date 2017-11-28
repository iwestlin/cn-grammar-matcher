/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGDUZ55',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'expressingAsOneLikesWithJiu',
  structures: [
    '想 + Verb (+ Obj.) + 就 + Verb (+ Obj.)',
    '想 + Verb + Question Word + 就 + Verb + Question Word',
  ],
  description:
    'When we want to express "to do something as one pleases," we can use the "想 + verb +就 + verb" form.',
  sources: [allSetSrc],
  match: sentence =>
    mergeLocMatchGroups([regexMatchLocs(sentence.text, /(想)[^就]{1,3}(就)/)]),
  examples: [
    {
      zh: '你想来就来。',
      en: 'If you want to come, come.',
      src: allSetSrc,
    },
    {
      zh: '想唱就大声唱。',
      en: 'If you want to sing, sing loudly.',
      src: allSetSrc,
    },
    {
      zh: '想做就做，不想做就别做。',
      en: "Do what you want to do, don't do what you don't want to do.",
      src: allSetSrc,
    },
    {
      zh: '想去哪儿就去哪儿。',
      en: 'Wherever you want to go, go there.',
      src: allSetSrc,
    },
    {
      zh: '你想吃什么就吃什么，我无所谓。',
      en: "Eat whatever you want, I don't care.",
      src: allSetSrc,
    },
    {
      zh: '我想怎样就怎样，不关你的事。',
      en: 'I will do it how I want to do it. It has nothing to do with you.',
      src: allSetSrc,
    },
  ],
};
