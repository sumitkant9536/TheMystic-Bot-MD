let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 @𝚝𝚊𝚐 𝙾𝙵 𝙰𝙽𝚈 𝚄𝚂𝙴𝚁*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 @𝚝𝚊𝚐 𝙾𝙵 𝙰𝙽𝚈 𝚄𝚂𝙴𝚁*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴 𝚄𝚂𝙴𝚁 𝚆𝙰𝚂 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝚄𝙽𝚂𝙴𝙰𝚃𝙴𝙳*\n*—◉ 𝚃𝙷𝙴 𝚄𝚂𝙴𝚁 𝙲𝙰𝙽 𝙽𝙾𝚆 𝚄𝚂𝙴 𝚃𝙷𝙴 𝙱𝙾𝚃*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler
