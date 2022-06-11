import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { 
conn.sendButton(id, `*╔══❰ 𝗥𝗘𝗟𝗘𝗔𝗦𝗘 ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, '𝗧𝗛𝗜𝗦 𝗜𝗦 𝗔𝗡 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗖𝗢𝗠𝗠𝗨𝗡𝗜𝗖𝗔𝗧𝗜𝗢𝗡\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 𝙾𝚆𝙽𝙴𝚁 🤖', '.owner'],['💎 𝙳𝙾𝙽𝙰𝚁 💎', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'ᴄᴏᴍᴜɴɪᴄᴀᴅᴏ ᴏғɪᴄɪᴀʟ ᴀ ᴛᴏᴅᴏs ʟᴏs ᴄʜᴀᴛs',
body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ', 
sourceUrl: `https://github.com/sumitkant9536/TheMystic-Bot-MD`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝚂𝙴𝙽𝚃 𝚃𝙾 𝙰𝙻𝙻 𝙲𝙷𝙰𝚃𝚂*\n\n*𝐍𝐎𝐓𝐀: 𝙸𝚃 𝙸𝚂 𝙿𝙾𝚂𝚂𝙸𝙱𝙻𝙴 𝚃𝙷𝙰𝚃 𝚃𝙷𝙸𝚂 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙷𝙰𝚂 𝙱𝚄𝙶𝚂 𝙰𝙽𝙳 𝙸𝚂 𝙽𝙾𝚃 𝚂𝙴𝙽𝚃 𝚃𝙾 𝙰𝙻𝙻 𝙲𝙷𝙰𝚃𝚂, 𝚂𝙾𝚁𝚁𝚈 𝙵𝙾𝚁 𝚃𝙷𝙴 𝙼𝙾𝙼𝙴𝙽𝚃*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
export default handler
