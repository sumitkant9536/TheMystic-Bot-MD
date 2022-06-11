let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('*[❗] 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙴𝙳 𝙵𝙰𝚁𝙴𝚆𝙴𝙻𝙻 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝙵𝙾𝚁 𝚃𝙷𝙸𝚂 𝙶𝚁𝙾𝚄𝙿*')
} else throw `*[❗] 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙵𝙰𝚁𝙴𝚆𝙴𝙻𝙻 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙰𝙳𝙳, 𝚄𝚂𝙴:*\n*- @user (mención)*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.admin = true
export default handler
