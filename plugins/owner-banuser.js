let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 @𝚝𝚊𝚐 𝙾𝙵 𝙰𝙽𝚈 𝚄𝚂𝙴𝚁*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 @𝚝𝚊𝚐 𝙾𝙵 𝙰𝙽𝚈 𝚄𝚂𝙴𝚁*'
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴 𝚄𝚂𝙴𝚁 𝚆𝙰𝚂 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙱𝙰𝙽𝙽𝙴𝙳*\n*—◉ 𝚃𝙷𝙴 𝚄𝚂𝙴𝚁 𝚆𝙸𝙻𝙻 𝙽𝙾𝚃 𝙱𝙴 𝙰𝙱𝙻𝙴 𝚃𝙾 𝚄𝚂𝙴 𝚃𝙷𝙴 𝙱𝙾𝚃 𝚄𝙽𝚃𝙸𝙻 𝙸𝚃 𝙸𝚂 𝚄𝙽𝙱𝙾𝙾𝙴𝙳*`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
export default handler
