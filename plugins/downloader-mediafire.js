import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝙰 𝚅𝙰𝙻𝙸𝙳 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴 𝙻𝙸𝙽𝙺, 𝙴𝚇𝙰𝙼𝙿𝙻𝙴: ${usedPrefix + command} https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
*𝙽𝙾𝙼𝙱𝚁𝙴:* ${filename}
*𝙿𝙴𝚂𝙾:* ${filesizeH}
*𝚃𝙸𝙿𝙾:* ${ext}

*⏳ 𝚆𝙰𝙸𝚃 𝙾𝙽 𝚆𝙷𝙰𝚃 𝚈𝙾𝚄 𝚂𝙴𝙽𝙳 𝚈𝙾𝚄𝚁 𝙵𝙸𝙻𝙴. . . .* 
*_- 𝙵𝙸𝙻𝙴𝚂 𝙻𝙰𝚁𝙶𝙴𝚁 𝚃𝙷𝙰𝙽 𝟷00 𝙼𝙱 𝙼𝙰𝚈 𝙽𝙾𝚃 𝙱𝙴 𝚂𝙴𝙽𝚃_* 
`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙵𝚁𝙾𝙼 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴',
body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚃𝚁𝚈 𝙰𝙶𝙰𝙸𝙽*\n\n*- 𝚅𝙴𝚁𝙸𝙵𝚈 𝚃𝙷𝙰𝚃 𝚃𝙷𝙴 𝙻𝙸𝙽𝙺 𝙸𝚂 𝚂𝙸𝙼𝙸𝙻𝙰𝚁 𝚃𝙾:*\n*◉ https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*')
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
export default handler
