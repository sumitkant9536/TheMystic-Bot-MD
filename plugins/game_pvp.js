let timeout = 60000
let poin = 500
let poin_lose = -100
let poin_bot = 200
let handler = async (m, { conn, usedPrefix }) => {
conn.suit = conn.suit ? conn.suit : {}
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*[ ⚠ ] 𝚈𝙾𝚄 𝙰𝚁𝙴 𝙰𝙻𝚁𝙴𝙰𝙳𝚈 𝙸𝙽 𝙰 𝙿𝚅𝙿, 𝙵𝙸𝙽𝙸𝚂𝙷 𝙱𝙴𝙵𝙾𝚁𝙴 𝚂𝚃𝙰𝚁𝚃𝙸𝙽𝙶 𝙰𝙽𝙾𝚃𝙷𝙴𝚁*'
if (!m.mentionedJid[0]) return m.reply(`*[❗] ¿𝚆𝙷𝙾 𝙳𝙾 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙿𝙻𝙰𝚈 𝚆𝙸𝚃𝙷?*\n*𝚃𝙰𝙶 𝚃𝙷𝙴 𝙿𝙴𝚁𝚂𝙾𝙽!*\n\n*𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n*${usedPrefix}suit @tag*`)
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*[ ⚠ ] 𝚃𝙷𝙴 𝙿𝙴𝚁𝚂𝙾𝙽 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙲𝙷𝙰𝙻𝙻𝙴𝙽𝙶𝙴 𝙸𝚂 𝙰𝙻𝚁𝙴𝙰𝙳𝚈 𝙸𝙽 𝙰𝙽𝙾𝚃𝙷𝙴𝚁 𝙶𝙰𝙼𝙴, 𝚆𝙰𝙸𝚃 𝙵𝙾𝚁 𝙸𝚃 𝚃𝙾 𝙴𝙽𝙳*`
let id = 'suit_' + new Date() * 1
let caption = `*🎮 𝙶𝙰𝙼𝙴𝚂 - 𝙿𝚅𝙿 - 𝙶𝙰𝙼𝙴𝚂 🎮*

*—◉ @${m.sender.split`@`[0]} 𝙳𝙸𝚂𝙰𝙵𝙸𝙰 𝙰 @${m.mentionedJid[0].split`@`[0]} 𝙸𝙽 𝙰 𝙿𝚅𝙿 𝙾𝙵 𝚂𝚃𝙾𝙽𝙴, 𝙿𝙰𝙿𝙴𝚁 𝙾𝚁 𝚂𝙲𝙸𝚂𝚂𝙾𝚁𝚂*
`.trim()𝙳𝙸𝚂𝙰𝙵𝙸𝙰 𝙰
let footer = `◉ 𝚃𝚈𝙿𝙴 "ok" 𝚃𝙾 𝚂𝚃𝙰𝚁𝚃 𝚃𝙷𝙴 𝙶𝙰𝙼𝙴`
conn.suit[id] = {
chat: await conn.sendButton(m.chat, caption, footer, null, [[`Ok`]], m, { contextInfo: { mentionedJid: conn.parseMention(caption) } }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `*[ ⏳ ] 𝚃𝙸𝙼𝙴𝙾𝚄𝚃 𝙴𝙽𝙳𝙴𝙳, 𝙿𝚅𝙿 𝚆𝙰𝚂 𝙲𝙰𝙽𝙲𝙴𝙻𝙻𝙴𝙳 𝙳𝚄𝙴 𝚃𝙾 𝙽𝙾𝙽-𝚁𝙴𝚂𝙿𝙾𝙽𝚂𝙴*`, m)
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}
handler.tags = ['games']
handler.help = ['suitpvp', 'suit'].map(v => v + ' @tag')
handler.command = /^suitpvp|suit|pvp|ppt2?$/i
handler.group = true
export default handler
