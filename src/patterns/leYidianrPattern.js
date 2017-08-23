/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGEHTV5',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'leYidianr',
  name: 'Adj. + 了（一）点儿',
  description:
    '了一点儿 (le yīdiǎnr), can be added after an adjective to mean "a little bit too." It is softer in tone than using 太, and so is often used when the speaker doesn\'t want to insult the listener by speaking too directly.',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([regexMatchLocs(text, /(了一?点儿)/)]);
  },
  examples: [
    {
      zh: '这把椅子稍微硬了点儿，我坐得有点难受。',
      en: "This chair is a little too hard. I'm having a hard time sitting in it.",
      src: allSetSrc,
    },
    {
      zh: '这道菜稍微咸了点儿，可以重新炒吗？',
      en: 'This food is a little too salty, could you make it again?',
      src: allSetSrc,
    },
    {
      zh: '我妈妈说你钱挣得少了点儿，人长得矮了点儿。她觉得我需要找一个好点儿的男朋友。',
      en:
        "My mother says you earn too little money, and you're a little too short. She thinks I need to find a boyfriend who's a little better.",
      src: allSetSrc,
    },
  ],
};