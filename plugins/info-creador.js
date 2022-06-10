import fs from 'fs'
function handler(m, { conn }) {
let text = `
*—◉ 𝙼𝚈 𝙾𝚆𝙽𝙴𝚁'𝚂 𝙽𝚄𝙼𝙱𝙴𝚁 𝙸𝚂 wa.me/919758523260*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽 - 𝙾𝚆𝙽𝙴𝚁',
body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://wa.me/9758523260`}}})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
