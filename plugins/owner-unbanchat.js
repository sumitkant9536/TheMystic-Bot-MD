let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙸𝚂 𝙲𝙷𝙰𝚃 𝚆𝙰𝚂 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝚄𝙽𝙱𝙰𝙽*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.rowner = true
export default handler
