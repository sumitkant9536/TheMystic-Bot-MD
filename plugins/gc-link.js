import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙻𝙸𝙽𝙺 𝙾𝙵 𝙶𝚁𝙾𝚄𝙿',
body: 'ᴛʜᴇ ᴍʏsᴛᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/sumitkant9536/TheMystic-Bot-MD`}}})   
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.group = true
handler.botAdmin = true
export default handler
