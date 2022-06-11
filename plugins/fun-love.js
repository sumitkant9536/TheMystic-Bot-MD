let handler = async (m, { conn, command, text }) => {
conn.reply(m.chat, `
*❤️❤️ 𝙻𝙾𝚅𝙴 𝙼𝙴𝚃𝙴𝚁 ❤️❤️*
*The love of ${text} for you is from* *${Math.floor(Math.random() * 100)}%* *of a 100%*
*You should ask him to be your girlfriend ?*
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love)$/i
export default handler
