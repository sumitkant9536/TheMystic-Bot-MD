let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0
}    
await conn.sendButton(m.chat, `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n𝚄𝙿 𝚃𝙾 𝚃𝙷𝙴 𝙱𝙰𝙱𝚈 𝚅𝙸𝙴𝚆 👋, ${await this.getName(m.sender)} YOU BREAK THE RULES OF THE GROUP, YOU WILL BE EXTERMINATED...!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] THE BOT IS NOT ADMIN, IT CANNOT EXTERMINATE PEOPLE*'}`, author, ['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝚂', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴 𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁 𝙳𝙾𝙴𝚂 𝙽𝙾𝚃 𝙷𝙰𝚅𝙴 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃𝙸𝙾𝙽𝚂 𝙴𝙽𝙰𝙱𝙻𝙴𝙳 (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝚃𝙷𝙴 𝙱𝙾𝚃 𝚃𝙾 𝙴𝙽𝙰𝙱𝙻𝙴 𝙸𝚃*')
}
return !0
}
