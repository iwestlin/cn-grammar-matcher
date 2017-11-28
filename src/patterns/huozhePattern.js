/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGYXI5X',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'huozhe',
  structures: ['或者 A，或者 B'],
  description:
    'One easy way to give two options is to precede each one with 或者 (huòzhě).',
  sources: [allSetSrc],
  match: sentence =>
    mergeLocMatchGroups([regexMatchLocs(sentence.text, /(或者)[^或者]+(或者)/)]),
  examples: [
    {
      zh: '只有一块蛋糕，或者你吃或者我吃。',
      en: "There's only one piece of cake. Either you eat it, or I eat it.",
      src: allSetSrc,
    },
    {
      zh: '你或者学汉语，或者学法律，别的就别学了。',
      en: "Either study Chinese or law. Don't study anything else.",
      src: allSetSrc,
    },
    {
      zh: '咱们或者去爬山或者泡温泉。',
      en: "Let's either go hiking or go to the hot springs.",
      src: allSetSrc,
    },
  ],
};
