import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙽𝙰𝙼𝙴 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙱𝙴 𝚃𝙷𝙴 𝙽𝙴𝚆 𝙽𝙰𝙼𝙴 𝙾𝙵 𝚃𝙷𝙴 𝙶𝚁𝙾𝚄𝙿*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾𝚁𝚁𝚈 𝚃𝙷𝙴𝚁𝙴 𝚆𝙰𝚂 𝙰𝙽 𝙴𝚁𝚁𝙾𝚁, 𝚃𝙷𝙴 𝙽𝙰𝙼𝙴 𝙲𝙰𝙽𝙽𝙾𝚃 𝙱𝙴 𝙼𝙾𝚁𝙴 𝚃𝙷𝙰𝙽 𝟸𝟻 𝙲𝙷𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝚂*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(setname)$/i
handler.group = true
handler.admin = true
export default handler
