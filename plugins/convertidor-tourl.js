import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝙰𝙽 𝙸𝙼𝙰𝙶𝙴 𝙾𝚁 𝚅𝙸𝙳𝙴𝙾 𝚆𝙷𝙸𝙲𝙷 𝚆𝙸𝙻𝙻 𝙱𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝙳 𝚃𝙾 𝙻𝙸𝙽𝙺*'
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
m.reply(`*𝙴𝙽𝙻𝙰𝙲𝙴 𝙰 𝚂𝚄 𝙰𝚁𝙲𝙷𝙸𝚅𝙾:* ${link}`)
}
handler.help = ['tourl <reply image>']
handler.tags = ['sticker']
handler.command = /^(upload|tourl)$/i
export default handler
