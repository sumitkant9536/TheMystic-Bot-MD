import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝚅𝙸𝙳𝙴𝙾 𝙾𝚁 𝙰𝚄𝙳𝙸𝙾 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝚃𝙾 𝚅𝙾𝙸𝙲𝙴 𝙼𝙴𝙼𝙾*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾𝚁𝚁𝚈, 𝙰𝙽 𝙴𝚁𝚁𝙾𝚁 𝙾𝙲𝙲𝚄𝚁𝚁𝙴𝙳 𝚆𝙷𝙸𝙻𝙴 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 𝚅𝙸𝙳𝙴𝙾, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚃𝚁𝚈 𝙰𝙶𝙰𝙸𝙽*'
if (!media && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾𝚁𝚁𝚈, 𝙰𝙽 𝙴𝚁𝚁𝙾𝚁 𝙾𝙲𝙲𝚄𝚁𝚁𝙴𝙳 𝚆𝙷𝙸𝙻𝙴 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 𝚅𝙸𝙳𝙴𝙾, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚃𝚁𝚈 𝙰𝙶𝙰𝙸𝙽*'
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾𝚁𝚁𝚈, 𝙰𝙽 𝙴𝚁𝚁𝙾𝚁 𝙾𝙲𝙲𝚄𝚁𝚁𝙴𝙳 𝚆𝙷𝙸𝙻𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 𝙰𝚄𝙳𝙸𝙾 𝚃𝙾 𝚅𝙾𝙸𝙲𝙴 𝙼𝙴𝙼𝙾, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚃𝚁𝚈 𝙰𝙶𝙰𝙸𝙽*'
if (!audio.data && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾𝚁𝚁𝚈, 𝙰𝙽 𝙴𝚁𝚁𝙾𝚁 𝙾𝙲𝙲𝚄𝚁𝚁𝙴𝙳 𝚆𝙷𝙸𝙻𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 𝙰𝚄𝙳𝙸𝙾 𝚃𝙾 𝚅𝙾𝙸𝙲𝙴 𝙼𝙴𝙼𝙾, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚃𝚁𝚈 𝙰𝙶𝙰𝙸𝙽*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.command = /^to(vn|(ptt)?)$/i
export default handler
