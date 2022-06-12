import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝚃𝙷𝙴 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙰𝙳𝙳 𝙰 𝙿𝙰𝙲𝙺𝙰𝙶𝙴 𝙰𝙽𝙳 𝙽𝙰𝙼𝙴*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝚃𝙷𝙴 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙰𝙳𝙳 𝙰 𝙿𝙰𝙲𝙺𝙰𝙶𝙴 𝙰𝙽𝙳 𝙽𝙰𝙼𝙴*'
let img = await m.quoted.download()
if (!img) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝚃𝙷𝙴 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙰𝙳𝙳 𝙰 𝙿𝙰𝙲𝙺𝙰𝙶𝙴 𝙰𝙽𝙳 𝙽𝙰𝙼𝙴*'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾𝚁𝚁𝚈, 𝚂𝙾𝙼𝙴𝚃𝙷𝙸𝙽𝙶 𝚆𝚁𝙾𝙽𝙶.. 𝚅𝙴𝚁𝙸𝙵𝚈 𝚃𝙷𝙰𝚃 𝚈𝙾𝚄 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝙳 𝚃𝙾 𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙰𝙽𝙳 𝙰𝙳𝙳𝙴𝙳 𝙰 𝙿𝙰𝙲𝙺𝙰𝙶𝙴 𝙽𝙰𝙼𝙴 𝙰𝙽𝙳 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴*'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm$/i
export default handler
