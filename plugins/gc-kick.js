import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁 𝙷𝙰𝚂 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃𝙴𝙳 (𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝 / 𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝚃𝙷𝙴 𝚄𝚂𝙴 𝙾𝙵 𝚃𝙷𝙸𝚂 𝙲𝙾𝙼𝙼𝙰𝙽𝙳*'
let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
let kickedUser = []
for (let user of users)
if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
const res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
kickedUser.concat(res)
await delay(1 * 1000)
}}
handler.help = ['kick @user']
handler.tags = ['group']
handler.command = /^(kick|sacar|\-)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
                                                       
