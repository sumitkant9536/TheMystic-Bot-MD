let handler = async (m, { command, usedPrefix, text }) => {
    let M = m.constructor
    let which = command.replace(/agregar/i, '')
    if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝙰 𝚃𝙴𝚇𝚃, 𝙼𝙴𝚂𝚂𝙰𝙶𝙴, 𝙸𝙼𝙰𝙶𝙴, 𝙴𝚃𝙲. 𝙰𝙽𝙳 𝙰𝙳𝙳 𝙰 𝚃𝙴𝚇𝚃 𝙰𝚂 𝙰 𝙺𝙴𝚈𝚆𝙾𝚁𝙳*'
    if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚄𝚂𝙴 *${usedPrefix}list${which}* 𝚃𝙾 𝚅𝙸𝙴𝚆 𝚃𝙷𝙴 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝙻𝙸𝚂𝚃`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙱𝙴𝙴𝙽 𝚁𝙴𝙶𝙸𝚂𝚃𝙴𝚁𝙴𝙳 𝙸𝙽 𝚃𝙷𝙴 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝙻𝙸𝚂𝚃`
    msgs[text] = M.toObject(await m.getQuotedObj())
    m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙰𝙳𝙳𝙴𝙳 𝚃𝙾 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝙻𝙸𝚂𝚃 𝙰𝚂 '${text}'*\n*𝙰𝙲𝙲𝙴𝙳𝙴 𝙲𝙾𝙽 ${usedPrefix}ver${which} ${text}*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler
