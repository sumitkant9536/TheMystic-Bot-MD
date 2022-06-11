let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[❗] 𝙱𝙸𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙴𝙳 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙻𝚈 𝙵𝙾𝚁 𝚃𝙷𝙸𝚂 𝙶𝚁𝙾𝚄𝙿*')
} else throw `*[❗] 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙰𝙳𝙳, 𝚄𝚂𝙴:*\n*- @user (mención)*\n*- @group (nombre de grupo)*\n*- @desc (description de grupo)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
export default handler
