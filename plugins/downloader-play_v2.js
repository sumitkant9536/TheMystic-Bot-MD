import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙰𝙼𝙴 𝙾𝙵 𝚃𝙷𝙴 𝙼𝙸𝚂𝚂𝙸𝙽𝙶 𝚂𝙾𝙽𝙶, 𝙿𝙻𝙴𝙰𝚂𝙴 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙿𝙻𝚄𝚂 𝚃𝙷𝙴 𝙽𝙰𝙼𝙴/𝚃𝙸𝚃𝙻𝙴 𝙾𝚁 𝙻𝙸𝙽𝙺 𝙾𝙵 𝙰𝙽𝚈 𝚂𝙾𝙽𝙶 𝙾𝚁 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝚅𝙸𝙳𝙴𝙾\n\n0*—◉ 𝙴𝚇𝙰𝙼𝙿𝙻𝙴:\n#play.1 Good Feeling - Flo Rida*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `*_⏳𝚈𝙾𝚄𝚁 𝙰𝚄𝙳𝙸𝙾 𝙱𝙴𝙸𝙽𝙶 𝙿𝚁𝙾𝙲𝙴𝚂𝚂𝙴𝙳...⏳_*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙰𝚄𝙳𝙸𝙾 𝙿𝙻𝙰𝚈𝙴𝚁',
body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/sumitkant9536/TheMystic-Bot-MD`}}})
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_⏳Sᴇ ᴇsᴛᴀ ᴘʀᴏᴄᴇsᴀɴᴅᴏ Sᴜ ᴠɪᴅᴇᴏ...⏳_*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝚅𝙸𝙳𝙴𝙾 𝙿𝙻𝙰𝚈𝙴𝚁',
body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/sumitkant9536/TheMystic-Bot-MD`}}})
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp4?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `_𝐓𝐡𝐞 𝐌𝐲𝐬𝐭𝐢𝐜 - 𝐁𝐨𝐭_`, m)}
}catch(e){
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚃𝚁𝚈 𝙰𝙶𝙰𝙸𝙽*')
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
