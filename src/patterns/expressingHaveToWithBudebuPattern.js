/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASG0C825',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'expressingHaveToWithBudebu',
  name: 'Subj. + 不得不 + Verb',
  description:
    '不得不 (bùdébù) has a stronger tone than "必须 (bìxū)" meaning "someone cannot help but do something."',
  sources: [allSetSrc],
  match: sentence => mergeLocMatchGroups([regexMatchLocs(sentence.text, /(不得不)/)]),
  examples: [
    {
      zh: '我感冒的时候一般不吃药，但是这次很严重，我不得不吃药。',
      en:
        "I usually don't take medicine when I have cold. But it's very bad this time, and I have to take some pills.",
      src: allSetSrc,
    },
    {
      zh: '你真的太厉害了，我不得不承认。',
      en: 'You are so good. I have to admit it.',
      src: allSetSrc,
    },
    {
      zh: '老板很讨厌应酬，可是她不得不去。',
      en: "The boss doesn't like to business socializing, but she has to go.",
      src: allSetSrc,
    },
    {
      zh: '不好意思，时间有限，我不得不打断你。',
      en: "I'm sorry. We have very limited time. I have to interrupt you.",
      src: allSetSrc,
    },
    {
      zh: '这些情况很重要，我们不得不重视。',
      en: 'The situation is very important. We have to take it very seriously.',
      src: allSetSrc,
    },
  ],
};
