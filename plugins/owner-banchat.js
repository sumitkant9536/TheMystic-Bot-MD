let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙸𝚂 𝙲𝙷𝙰𝚃 𝚆𝙰𝚂 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙱𝙰𝙽𝙽𝙴𝙳*\n\n*—◉ 𝚃𝙷𝙴 𝙱𝙾𝚃 𝚆𝙸𝙻𝙻 𝙽𝙾𝚃 𝚁𝙴𝙰𝙲𝚃 𝚃𝙾 𝙰𝙽𝚈 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝚄𝙽𝚃𝙸𝙻 𝙸𝚃 𝚄𝙽𝚆𝙸𝙽𝙳𝚂 𝚃𝙷𝙸𝚂 𝙲𝙷𝙰𝚃*')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.rowner = true
export default handler
