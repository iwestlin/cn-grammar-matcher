/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGZ8OIF',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'bieLe',
  name: '别 + Verb / Verb Phrase + 了',
  description:
    'You may know how to make negative commands with "bie," but what if someone is already doing it? The pattern 别⋯⋯了 (bié... le) is all you need to tell someone to STOP DOING THAT (which they\'re already doing).',
  sources: [allSetSrc],
  match: sentence => mergeLocMatchGroups([regexMatchLocs(sentence.text, /(别)[^了]+(了)/)]),
  examples: [
    {
      zh: '别说了，我不想听。',
      en: "Stop talking. I don't want to listen.",
      src: allSetSrc,
    },
    {
      zh: '别问了，我不想说。',
      en: "Stop asking. I don't want to say.",
      src: allSetSrc,
    },
    {
      zh: '别做了，明天再做吧。',
      en: 'Stop doing it. Do it tomorrow.',
      src: allSetSrc,
    },
    {
      zh: '别看了，睡觉！',
      en: 'Stop watching. Go to sleep!',
      src: allSetSrc,
    },
    {
      zh: '别哭了，烦死了。',
      en: "Stop crying, it's so annoying.",
      src: allSetSrc,
    },
    {
      zh: '别笑了，别人都在看你。',
      en: 'Stop laughing. Other people are looking at you.',
      src: allSetSrc,
    },
    {
      zh: '别吃了，我们要迟到了。',
      en: "Stop eating. We're going to be late.",
      src: allSetSrc,
    },
    {
      zh: '别玩了，去写作业。',
      en: 'Stop playing. Do your homework.',
      src: allSetSrc,
    },
    {
      zh: '别买了，太贵了！',
      en: "Don't buy it. It's too expensive!",
      src: allSetSrc,
    },
    {
      zh: '别喝了，你已经喝了五杯了。',
      en: "Stop drinking. You've already drunk five glasses.",
      src: allSetSrc,
    },
  ],
};
