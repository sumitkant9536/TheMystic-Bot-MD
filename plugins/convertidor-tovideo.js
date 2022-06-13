import { webp2mp4 } from '../lib/webp2mp4.js'
import { ffmpeg } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙰𝚄𝙳𝙸𝙾 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝚃𝙾 𝚅𝙸𝙳𝙴𝙾 𝚆𝙸𝚃𝙷 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 ${usedPrefix + command}*`
let mime = m.quoted.mimetype || ''
if (!/webp|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙰𝚄𝙳𝙸𝙾 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝚃𝙾 𝚅𝙸𝙳𝙴𝙾 𝚆𝙸𝚃𝙷 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 ${usedPrefix + command}*`
let media = await m.quoted.download()
let out = Buffer.alloc(0)
if (/webp/.test(mime)) {
out = await webp2mp4(media)
} else if (/audio/.test(mime)) {
out = await ffmpeg(media, [
'-filter_complex', 'color',
'-pix_fmt', 'yuv420p',
'-crf', '51',
'-c:a', 'copy',
'-shortest'
], 'mp3', 'mp4')
}
await conn.sendFile(m.chat, out, 'error.mp4', '*DONE*', m, 0, { thumbnail: out })
}
handler.help = ['tovideo']
handler.tags = ['sticker']
handler.command = ['tovideo', 'tomp4', 'mp4']
export default handler
