/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups, regexMatchLocs } = require('../lib/regexMatchers');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGFPV2C',
  name: 'AllSet Chinese Grammar Wiki',
};


module.exports = {
  id: 'nanguai',
  name: '难怪 / 怪不得 + ([Observation])',
  description: '难怪 (nánguài) can be used to express that the speaker finds something unsurprising. It can be used alone or in a variety of different structures, as shown below.  怪不得 (guàibude) is another way to express exactly the same thing, in a slightly more informal way.',
  sources: [
    allSetSrc,
  ],
  match: (sentence) => {
    const text = sentence.original;
    return mergeLocMatchGroups([
      regexMatchLocs(text, /((?:难怪|怪不得))/),
      regexMatchLocs(text, /((?:难怪|怪不得))[^原来]+(原来)/),
      regexMatchLocs(text, /((?:这也)?难怪)/),
    ]);
  },
  examples: [
    {
      zh: '难怪！',
      en: 'No wonder!',
      src: allSetSrc,
    },
    {
      zh: '他和女朋友分手了，难怪他最近一直不高兴。',
      en: 'He and his girlfriend broke up. No wonder he\'s been so unhappy recently.',
      src: allSetSrc,
    },
    {
      zh: '小张请假了，难怪今天没有看到他。',
      en: 'Little Zhang asked for some vacation time, no wonder I haven\'t seen him today.',
      src: allSetSrc,
    },
    {
      zh: '老板过年要发红包，难怪大家最近都这么开心。',
      en: 'Boss is going to give out red envelopes. No wonder everyone looks so happy recently.',
      src: allSetSrc,
    },
    {
      zh: '你的手机丢了？难怪你的手机一直打不通。',
      en: 'Your cell phone is lost? No wonder I couldn\'t get through.',
      src: allSetSrc,
    },
    {
      zh: '难怪老板这么生气，原来那个大客户取消了订单。',
      en: 'No wonder the boss is so angry. It turns out that that important customer cancelled his order.',
      src: allSetSrc,
    },
    {
      zh: '难怪这里人这么多，原来在打折。',
      en: 'No wonder there are so many people here. There\'s a sale going on.',
      src: allSetSrc,
    },
    {
      zh: '难怪他天天都迟到，原来他要自己照顾孩子。',
      en: 'No wonder he\'s late every day. It turns out he\'s raising his kids by himself.',
      src: allSetSrc,
    },
    {
      zh: '难怪他一直都不告诉我，原来是不想让我担心。',
      en: 'No wonder he hasn\'t told me.It turns out that he doesn\'t want me to worry about this.',
      src: allSetSrc,
    },
    {
      zh: '难怪这么多人都想认识她，原来她爸是市长。',
      en: 'No wonder so many people want to meet her. It turned out that her father is the mayor.',
      src: allSetSrc,
    },
    {
      zh: '这也难怪他，还是个孩子呢，什么都不懂。',
      en: 'Don\'t blame him. He\'s just a kid. He doesn\'t know better.',
      src: allSetSrc,
    },
    {
      zh: '这也难怪你，他昨天才给你回复。',
      en: 'Don\'t blame yourself. He just replied to you yesterday.',
      src: allSetSrc,
    },
    {
      zh: '这也难怪，你们第一次到这个地方还不了解这里的风俗。',
      en: 'Don\'t blame yourselves. It\'s your first time here, and you don\'t understand the customs.',
      src: allSetSrc,
    },
    {
      zh: 'A:他迟到了。B:这也难怪。今天地铁坏了。',
      en: 'A: He\'s late.  B: Don\'t blame him. The subway broke down today.',
      src: allSetSrc,
    },
    {
      zh: '这也难怪，他们工作这么累，工资还这么低。',
      en: 'Don\'t blame them. Their job is so tiring but they get such a low pay.',
      src: allSetSrc,
    },
  ],
};
