let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝙰 𝚁𝙴𝙿𝙾𝚁𝚃*\n\n*𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n*${usedPrefix + command} the command ${usedPrefix}play does not send anything*`
if (text.length < 10) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴 𝚁𝙴𝙿𝙾𝚁𝚃 𝙼𝚄𝚂𝚃 𝙱𝙴 𝙰𝚃 𝙻𝙴𝙰𝚂𝚃 𝟷0 𝙲𝙷𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝚂!*`
if (text.length > 1000) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴 𝚁𝙴𝙿𝙾𝚁𝚃 𝙼𝚄𝚂𝚃 𝙱𝙴 𝙰 𝙼𝙰𝚇𝙸𝙼𝚄𝙼 𝙾𝙵 𝟷000 𝙲𝙷𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝚂!*`
let teks = `*❒═════[𝐑𝐄𝐏𝐎𝐑𝐓]═════❒*\n*┬*\n*├❧ 𝙽𝚄𝙼𝙱𝙴𝚁:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ 𝙼𝙴𝚂𝚂𝙰𝙶𝙴:* ${text}\n*┴*`
conn.reply('5219996125657@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
m.reply(`*[ ✔️ ] 𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝚃 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝚃𝙾 𝚃𝙷𝙴 𝙲𝚁𝙴𝙰𝚃𝙾𝚁 𝙾𝙵 𝚃𝙷𝙴 𝙱𝙾𝚃, 𝚈𝙾𝚄𝚁 𝚁𝙴𝙿𝙾𝚁𝚃 𝚆𝙸𝙻𝙻 𝙱𝙴 𝙰𝚃𝚃𝙴𝙽𝙳𝙴𝙳 𝚃𝙾 𝙰𝚂 𝚂𝙾𝙾𝙽 𝙰𝚂 𝙿𝙾𝚂𝚂𝙸𝙱𝙻𝙴, 𝙸𝙵 𝙸𝚃 𝙸𝚂 𝙵𝙰𝙻𝚂𝙴 𝙾𝚁 𝙹𝙾𝙺𝙴 𝚆𝙸𝙻𝙻 𝙾𝙽𝙻𝚈 𝙱𝙴 𝙸𝙶𝙽𝙾𝚁𝙴𝙳*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i
export default handler
