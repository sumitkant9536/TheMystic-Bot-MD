let handler = async (m, { conn, command, usedPrefix, text }) => {
let which = command.replace(/ver/i, '')
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚄𝚂𝙰𝚁 *${usedPrefix}list${which}* 𝚃𝙾 𝚅𝙸𝙴𝚆 𝚃𝙷𝙴 𝙻𝙸𝚂𝚃*`
let msgs = global.db.data.msgs
if (!text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' 𝙽𝙾𝚃 𝚁𝙴𝙶𝙸𝚂𝚃𝙴𝚁𝙴𝙳 𝙸𝙽 𝚃𝙷𝙴 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝙻𝙸𝚂𝚃*`
let _m = await conn.serializeM(msgs[text])
await _m.copyNForward(m.chat, true)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'get' + v + ' <text>')
handler.tags = ['database']
handler.command = /^get(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler
