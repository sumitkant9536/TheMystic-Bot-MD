let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 @𝚝𝚊𝚐 𝙵𝚁𝙾𝙼 𝚃𝙷𝙴 𝙿𝙴𝚁𝚂𝙾𝙽 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙰𝙳𝙳 𝚃𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝚄𝚂𝙴𝚁𝚂*`
if (global.prems.includes(who.split`@`[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴 𝚄𝚂𝙴𝚁 𝙴𝙽𝚃𝙴𝚁𝙴𝙳 𝙸𝚂 𝙰𝙻𝚁𝙴𝙰𝙳𝚈 𝙰 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝚄𝚂𝙴𝚁*'
global.prems.push(`${who.split`@`[0]}`)
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] @${who.split`@`[0]} 𝙽𝙾𝚆 𝚈𝙾𝚄 𝙰𝚁𝙴 𝙰 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝚄𝚂𝙴𝚁, 𝚈𝙾𝚄 𝚆𝙸𝙻𝙻 𝙷𝙰𝚅𝙴 𝙽𝙾 𝙻𝙸𝙼𝙸𝚃𝚂 𝚆𝙷𝙴𝙽 𝚄𝚂𝙸𝙽𝙶 𝚃𝙷𝙴 𝙱𝙾𝚃*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.group = true
handler.rowner = true
export default handler
