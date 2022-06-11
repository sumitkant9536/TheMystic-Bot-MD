let handler = function (m) {
if (!m.quoted) throw false
let { chat, fromMe, isBaileys } = m.quoted
if (!fromMe) throw false
if (!isBaileys) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙰𝚃 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝚆𝙰𝚂𝙽'𝚃 𝚂𝙴𝙽𝚃 𝙱𝚈 𝙼𝙴, 𝙸 𝙲𝙰𝙽'𝚃 𝙳𝙴𝙻𝙴𝚃𝙴 𝙸𝚃*'
conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['del', 'delete']
handler.tags = ['tools']
handler.command = /^del(ete)?$/i
handler.group = true
handler.admin = true
export default handler
