import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃 𝚃𝙷𝙴 𝙽𝙰𝙼𝙴 𝙾𝙵 𝚂𝙾𝙼𝙴 𝚅𝙸𝙳𝙴𝙾 𝙾𝚁 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙲𝙷𝙰𝙽𝙽𝙴𝙻*'
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
📌 *${v.title}* (${v.url})
⌚ 𝙳𝚞𝚛𝚊𝚌𝚒𝚘𝚗: ${v.durationH}
⏲️ 𝙿𝚞𝚋𝚕𝚒𝚜𝚑𝚎𝚍 ${v.publishedTime}
👁️ ${v.view} 𝚅𝚒𝚎𝚠𝚜
`.trim()
case 'channel': return `
📌 *${v.channelName}* (${v.url})
🧑‍🤝‍🧑 _${v.subscriberH} 𝚜𝚞𝚜𝚌𝚛𝚒𝚙𝚝𝚘𝚛𝚎𝚜_
🎥 ${v.videoCount} 𝚟𝚒𝚍𝚎𝚘𝚜
`.trim()
}
}).filter(v => v).join('\n\n========================\n\n')
m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
export default handler
