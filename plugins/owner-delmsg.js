let handler = async (m, { command, usedPrefix, text }) => {
let which = command.replace(/eliminar/i, '')
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚄𝚂𝙰𝚁 ${usedPrefix}list${which} 𝚃𝙾 𝚅𝙸𝙴𝚆 𝚃𝙷𝙴 𝙻𝙸𝚂𝚃*`
let msgs = global.db.data.msgs
if (!text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' 𝙽𝙾𝚃 𝚁𝙴𝙶𝙸𝚂𝚃𝙴𝚁𝙴𝙳 𝙸𝙽 𝚃𝙷𝙴 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝙻𝙸𝚂𝚃*`
delete msgs[text]
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙳𝙴𝙻𝙴𝚃𝙴𝙳 𝚃𝙷𝙴 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝚆𝙸𝚃𝙷 𝚃𝙷𝙴 𝙽𝙰𝙼𝙴 𝙵𝚁𝙾𝙼 𝚃𝙷𝙴 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝙻𝙸𝚂𝚃 '${text}'*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
handler.tags = ['database']
handler.command = /^eliminar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler
