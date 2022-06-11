import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `*╔══❰ 𝗥𝗘𝗟𝗘𝗔𝗦𝗘 ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, '𝗧𝗛𝗜𝗦 𝗜𝗦 𝗔𝗡 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗖𝗢𝗠𝗠𝗨𝗡𝗜𝗖𝗔𝗧𝗜𝗢𝗡\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 𝙾𝚆𝙽𝙴𝚁 🤖', '.owner'],['💎 𝙳𝙾𝙽𝙰𝚁 💎', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: '𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻 𝙲𝙾𝙼𝙼𝚄𝙽𝙸𝙲𝙰𝚃𝙸𝙾𝙽 𝚃𝙾 𝙶𝚁𝙾𝚄𝙿𝚂',
body: 'ʙʏ ꜱɪʀɪᴜꜱ ﹣ ʙᴏᴛ', 
sourceUrl: `https://github.com/sumitkant9536/TheMystic-Bot-MD`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝚂𝙴𝙽𝚃 𝚃𝙾 ${groups.length} 𝙶𝚁𝚄𝙿𝙾/𝚂*\n\n*𝐍𝐎𝐓𝐄: 𝙸𝚃 𝙸𝚂 𝙿𝙾𝚂𝚂𝙸𝙱𝙻𝙴 𝚃𝙷𝙰𝚃 𝚃𝙷𝙸𝚂 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙷𝙰𝚂 𝙱𝚄𝙶𝚂 𝙰𝙽𝙳 𝙸𝚂 𝙽𝙾𝚃 𝚂𝙴𝙽𝚃 𝚃𝙾 𝙰𝙻𝙻 𝙲𝙷𝙰𝚃𝚂, 𝚂𝙾𝚁𝚁𝚈 𝙵𝙾𝚁 𝚃𝙷𝙴 𝙼𝙾𝙼𝙴𝙽𝚃*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.rowner = true
export default handler
