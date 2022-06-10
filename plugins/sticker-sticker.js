import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let stiker = false
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴 𝚅𝙸𝙳𝙴𝙾 𝙲𝙰𝙽𝙽𝙾𝚃 𝙻𝙰𝚂𝚃 𝙼𝙾𝚁𝙴 𝚃𝙷𝙰𝙽 𝟽 𝚂𝙴𝙲𝙾𝙽𝙳𝚂*')
let img = await q.download?.()

if (!img) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝙰 𝚅𝙸𝙳𝙴𝙾, 𝙸𝙼𝙰𝙶𝙴 𝙾𝚁 𝙸𝙽𝚂𝙴𝚁𝚃 𝚃𝙷𝙴 𝙻𝙸𝙽𝙺 𝙾𝙵 𝙰𝙽 𝙸𝙼𝙰𝙶𝙴 𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝚃𝙸𝙾𝙽.𝚓𝚙𝚐 𝚆𝙷𝙸𝙲𝙷 𝚆𝙸𝙻𝙻 𝙱𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝙳 𝙸𝙽𝚃𝙾 𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁, 𝚈𝙾𝚄 𝙼𝚄𝚂𝚃 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝙾𝚁 𝚄𝚂𝙴 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 ${usedPrefix + command}*`

let out
try {
stiker = await sticker(img, false, global.packname, global.author)
} catch (e) {
console.error(e)
} finally {
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)
}}
} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)

else return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴 𝙻𝙸𝙽𝙺 /𝚄𝚁𝙻/𝙻𝙸𝙽𝙺 𝙸𝚂 𝙽𝙾𝚃 𝚅𝙰𝙻𝙸𝙳, 𝚃𝙷𝙴 𝙴𝙽𝙳 𝙾𝙵 𝚃𝙷𝙴 𝙻𝙸𝙽𝙺/𝚄𝚁𝙻/𝙻𝙸𝙽𝙺 𝚂𝙷𝙾𝚄𝙻𝙳 𝙱𝙴.𝚓𝚙𝚐, 𝙴𝚇𝙰𝙼𝙿𝙻𝙴: #s https://telegra.ph/file/0dc687c61410765e98de2.jpg*')
  
}
} catch (e) {
console.error(e)
if (!stiker) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)

else throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾𝚁𝚁𝚈, 𝙰𝙽 𝙴𝚁𝚁𝙾𝚁 𝙾𝙲𝙲𝚄𝚁𝚁𝙴𝙳, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚃𝚁𝚈 𝙰𝙶𝙰𝙸𝙽. 𝙳𝙾 𝙽𝙾𝚃 𝙵𝙾𝚁𝙶𝙴𝚃 𝚃𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝙰 𝚅𝙸𝙳𝙴𝙾, 𝙸𝙼𝙰𝙶𝙴 𝙾𝚁 𝙸𝙽𝚂𝙴𝚁𝚃 𝚃𝙷𝙴 𝙻𝙸𝙽𝙺 𝙾𝙵 𝙰𝙽 𝙸𝙼𝙰𝙶𝙴 𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝚃𝙸𝙾𝙽.𝚓𝚙𝚐 𝚆𝙷𝙸𝙲𝙷 𝚆𝙸𝙻𝙻 𝙱𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝙳 𝙸𝙽𝚃𝙾 𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁*'

}}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
