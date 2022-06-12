import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙼𝙸𝚂𝚂𝙸𝙽𝙶 𝚂𝙾𝙽𝙶 𝙽𝙰𝙼𝙴, 𝙿𝙻𝙴𝙰𝚂𝙴 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙿𝙻𝚄𝚂 𝚃𝙷𝙴 𝙽𝙰𝙼𝙴/𝚃𝙸𝚃𝙻𝙴 𝙾𝙵 𝙰 𝚂𝙾𝙽𝙶*\n\n*—◉ 𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n*#playdoc Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾𝚁𝚁𝚈, 𝙸 𝙲𝙾𝚄𝙻𝙳 𝙽𝙾𝚃 𝙵𝙸𝙽𝙳 𝚃𝙷𝙴 𝙰𝚄𝙳𝙸𝙾/𝚅𝙸𝙳𝙴𝙾, 𝚃𝚁𝚈 𝙰𝙽𝙾𝚃𝙷𝙴𝚁 𝙽𝙰𝙼𝙴/𝚃𝙸𝚃𝙻𝙴*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
*◉— 𝐏𝐋𝐀𝐘 𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓 —◉*

📌 *𝚃𝙸𝚃𝚃𝙻𝙴:* ${title}
📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽:* ${description}
📆 *𝙿𝚄𝙱𝙻𝙸𝚂𝙷𝙴𝙳:* ${publishedTime}
⌚ *𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽:* ${durationH}
👀 *𝚅𝙸𝙴𝚆𝚂:* ${viewH}
`.trim(), author, thumbnail, `${url}`, '𝚄𝚁𝙻', null, null, [
['𝐀𝐔𝐃𝐈𝐎', `${usedPrefix}yta.2 ${url} yes`],
['𝐕𝐈𝐃𝐄𝐎', `${usedPrefix}ytv.2 ${url} yes`]
], m)
}catch(e){
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚃𝚁𝚈 𝙰𝙶𝙰𝙸𝙽*')
console.log(e)
}}
handler.command = /^play3|playdoc?$/i
export default handler
