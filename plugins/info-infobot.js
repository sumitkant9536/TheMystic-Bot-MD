import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╠═〘 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 〙 ═
╠
╠➥ [🤴🏻] 𝙲𝚁𝙴𝙰𝚃𝙾𝚁: *𝚂𝙸𝚁𝙸𝚄𝚂*
╠➥ [#️⃣] 𝙽𝙾 𝙾𝙵 𝙲𝚁𝙴𝙰𝚃𝙾𝚁: *+919758523260*
╠➥ [🎳] 𝙿𝚁𝙴𝙵𝙸𝚇: *${usedPrefix}*
╠➥ [🔐] 𝙿𝚁𝙸𝚅𝙰𝚃𝙴 𝙲𝙷𝙰𝚃: *${chats.length - groups.length}*
╠➥ [🦜] 𝙶𝚁𝙾𝚄𝙿 𝙲𝙷𝙰𝚃: *${groups.length}* 
╠➥ [💡] 𝚃𝙾𝚃𝙰𝙻 𝙲𝙷𝙰𝚃: *${chats.length}* 
╠➥ [🚀] 𝙰𝙲𝚃𝙸𝚅𝙰𝚃𝙴𝙳: *${uptime}*
╠➥ [🎩] 𝚄𝚂𝙴𝚁𝚂: *${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜*
╠➥ [👨‍🦯] 𝚂𝙿𝙴𝙴𝙳: 
╠  *${speed}* 
╠  *𝚖𝚒𝚕𝚕𝚒𝚜𝚎𝚌𝚘𝚗𝚍𝚜*
╠➥ [☑️] 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳: ${autoread ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
╠➥ [❗] 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃: ${restrict ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'} 
╠
╠═〘 𝐓𝐡𝐞 𝐌𝐲𝐬𝐭𝐢𝐜 - 𝐁𝐨𝐭 〙 ═
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: 'ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
