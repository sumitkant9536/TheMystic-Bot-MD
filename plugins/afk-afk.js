let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴 𝚄𝚂𝙴𝚁 ${conn.getName(m.sender)} 𝚈𝙾𝚄 𝚆𝙸𝙻𝙻 𝙱𝙴 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙴 (𝙰𝙵𝙺), 𝙿𝙻𝙴𝙰𝚂𝙴 𝙳𝙾 𝙽𝙾𝚃 𝚃𝙰𝙶 𝙸𝚃*\n\n*—◉ 𝚁𝙴𝙰𝚂𝙾𝙽 𝙵𝙾𝚁 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝚃𝚈 (𝙰𝙵𝙺)${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler
