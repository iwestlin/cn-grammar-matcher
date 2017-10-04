/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGPM3MY',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'youyidian',
  name: 'Subj. + 有一点(儿) + Adj.',
  description:
    'At times you may want to politely diss something using the phrase "a little too."  For example, if you are getting lunch with a friend who wants to be seated outside, you might say, "It is a little too hot" to suggest you sit inside. In a case like this, you can use 有一点 (yǒuyīdiǎn) or 有点 (yǒudiǎn). The two are interchangeable.',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([
      regexMatchLocs(text, /(有一点儿?)/),
      regexMatchLocs(text, /(有点儿?)/),
    ]);
  },
  examples: [
    {
      zh: '我有一点饿。',
      en: "I'm a little hungry.",
      src: allSetSrc,
    },
    {
      zh: '这个菜有一点辣。',
      en: 'This dish is a little too spicy.',
      src: allSetSrc,
    },
    {
      zh: '昨天有一点热。',
      en: 'Yesterday it was a little too hot.',
      src: allSetSrc,
    },
    {
      zh: '上海的冬天有一点冷。',
      en: 'Winter in Shanghai is a bit too cold.',
      src: allSetSrc,
    },
    {
      zh: '我弟弟有点胖。',
      en: 'My younger brother is a bit fat.',
      src: allSetSrc,
    },
    {
      zh: '今天有点累。',
      en: 'Today I am a little bit tired.',
      src: allSetSrc,
    },
    {
      zh: '这个月公司有点忙。',
      en: 'This month the company is a little bit busy.',
      src: allSetSrc,
    },
    {
      zh: '这个地方有点吵，我们走吧。',
      en: "This place is a little too noisy. Let's go.",
      src: allSetSrc,
    },
    {
      zh: '爸爸回来有点晚，妈妈有点不高兴。',
      en: 'Dad came back home a bit too late, so mom was a little unhappy.',
      src: allSetSrc,
    },
    {
      zh: '老师今天有点不舒服，所以没来上课。',
      en: "Today, the teacher felt a little unwell, so she didn't come to class.",
      src: allSetSrc,
    },
  ],
};