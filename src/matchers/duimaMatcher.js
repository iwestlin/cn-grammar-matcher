/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups, regexMatchLocs } = require('../lib/regexMatchers');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGSJYZ2',
  name: 'AllSet Chinese Grammar Wiki',
};


module.exports = {
  id: 'duima',
  name: '⋯⋯， 好 / 对 / 是 / 可以 +  吗？',
  description: 'As well as yes/no questions, you can also form tag questions with 吗 (ma). Tag questions are quick questions that are tagged on the end of a sentence to ask for confirmation. In English, this is often done with "right?" or negatively with "isn\'t it?"',
  sources: [
    allSetSrc,
  ],
  match: (sentence) => {
    const text = sentence.original;
    return mergeLocMatchGroups([
      regexMatchLocs(text, /((?:好|对|是|可以)吗？)/),
    ]);
  },
  examples: [
    {
      zh: '这样做，对吗？',
      en: 'Do it like this, right?',
      src: allSetSrc,
    },
    {
      zh: '你们见过，对吗？',
      en: 'You’ve met, right?',
      src: allSetSrc,
    },
    {
      zh: '他们昨天都没去，是吗？',
      en: 'They didn\'t go yesterday, right?',
      src: allSetSrc,
    },
    {
      zh: '你没来过，是吗？',
      en: 'You haven\'t been here, right?',
      src: allSetSrc,
    },
    {
      zh: '你喜欢我妹妹，是吗？',
      en: 'You like my younger sister, huh?',
      src: allSetSrc,
    },
    {
      zh: '我们去你家，好吗？',
      en: 'Let\'s go to your place, OK?',
      src: allSetSrc,
    },
    {
      zh: '不要告诉他，好吗？',
      en: 'Don\'t tell him, OK?',
      src: allSetSrc,
    },
    {
      zh: '今天我们都不喝酒，好吗？',
      en: 'Let\'s all not drink alcohol today, OK?',
      src: allSetSrc,
    },
    {
      zh: '我现在想去洗手间，可以吗？',
      en: 'I want to go to the bathroom now. Is that OK?',
      src: allSetSrc,
    },
    {
      zh: '妈妈，我要吃巧克力，可以吗？',
      en: 'Mom, I want to eat chocolate. May I?',
      src: allSetSrc,
    },
  ],
};
