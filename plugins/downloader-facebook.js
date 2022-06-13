import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝙰 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 𝙻𝙸𝙽𝙺, 𝙴𝚇𝙰𝙼𝙿𝙻𝙴: ${usedPrefix + command} https://www.facebook.com/watch?v=636541477595139*`
try {
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `🔗 *Url:* ${url}`, m)
} catch (e) {
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚃𝚁𝚈 𝙰𝙶𝙰𝙸𝙽*\n\n*- 𝙿𝙻𝙴𝙰𝚂𝙴 𝙲𝙷𝙴𝙲𝙺 𝚃𝙷𝙰𝚃 𝚃𝙷𝙴 𝙻𝙸𝙽𝙺 𝙸𝚂 𝚂𝙸𝙼𝙸𝙻𝙰𝚁 𝚃𝙾:*\n*◉ https://www.facebook.com/watch?v=636541477595139*')
console.log(e)
}}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler
