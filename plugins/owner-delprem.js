let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 @𝚝𝚊𝚐 𝙾𝙵 𝚃𝙷𝙴 𝙿𝙴𝚁𝚂𝙾𝙽 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝚁𝙴𝙼𝙾𝚅𝙴 𝙵𝚁𝙾𝙼 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝚄𝚂𝙴𝚁𝚂*`
if (!global.prems.includes(who.split`@`[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴 𝚄𝚂𝙴𝚁 𝙴𝙽𝚃𝙴𝚁𝙴𝙳 𝙸𝚂 𝙽𝙾𝚃 𝙰 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝚄𝚂𝙴𝚁*'
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] @${who.split`@`[0]} 𝙽𝙾𝚆 𝚈𝙾𝚄 𝙰𝚁𝙴 𝙽𝙾 𝙻𝙾𝙽𝙶𝙴𝚁 𝙿𝙰𝚁𝚃 𝙾𝙵 𝚃𝙷𝙴 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝚄𝚂𝙴𝚁𝚂*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|del)prem$/i
handler.group = true
handler.rowner = true
export default handler
