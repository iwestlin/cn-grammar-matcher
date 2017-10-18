/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGTKXFR',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'yuanlai',
  name: '原来 + 的 + Noun',
  description:
    '原来 (yuánlái) means "originally" (similar to 本来) or "former." It can also mean "all along," and can be used to indicate a sudden realization of something previously unknown, a bit like "so it\'s been like that all along, how could I not have realized?"',
  sources: [allSetSrc],
  match: sentence =>
    mergeLocMatchGroups([
      regexMatchLocs(sentence.text, /(原来的)/),
      regexMatchLocs(sentence.text, /(原来)/),
    ]),
  examples: [
    {
      zh: '你原来的发型很可爱。',
      en: 'Your original hairstyle was very cute.',
      src: allSetSrc,
    },
    {
      zh: '这件衣服原来的价格是999块。',
      en: 'The original price is 999 RMB.',
      src: allSetSrc,
    },
    {
      zh: '他原来不知道这件事，是我刚刚跟他说的。',
      en: "Originally he didn't know about this. I just told him.",
      src: allSetSrc,
    },
    {
      zh: '我们原来住在浦东，几个月以前搬到了这边。',
      en: 'Originally we lived in Pudong. We moved here a few months ago.',
      src: allSetSrc,
    },
    {
      zh: '她原来是他的中文老师，现在是他老婆。',
      en: 'She was originally his Chinese teacher. She is now his wife.',
      src: allSetSrc,
    },
    {
      zh: '原来是你！',
      en: 'So it was you all along!',
      src: allSetSrc,
    },
    {
      zh: '原来你们认识！',
      en: "So you've known each other this whole time!",
      src: allSetSrc,
    },
    {
      zh: '原来他是你前男友！',
      en: 'It turns out he was you ex-boyfriend!',
      src: allSetSrc,
    },
    {
      zh: '原来你这么有钱！',
      en: 'It turns out you are so rich!',
      src: allSetSrc,
    },
    {
      zh: '原来你在骗我！我怎么那么傻？',
      en: 'You have been tricking me, how could I be so stupid?',
      src: allSetSrc,
    },
  ],
};
