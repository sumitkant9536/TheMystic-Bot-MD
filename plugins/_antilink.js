let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*𝙷𝙴𝚈!! 𝚃𝙷𝙴 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝙸𝚂 𝙰𝙲𝚃𝙸𝚅𝙴, 𝙱𝚄𝚃 𝚈𝙾𝚄 𝙰𝚁𝙴 𝙰𝙽 𝙰𝙳𝙼𝙸𝙽 😎, 𝚂𝙰𝚅𝙴𝙳!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n*𝚄𝙿 𝚃𝙾 𝚃𝙷𝙴 𝙱𝙰𝙱𝚈 𝚅𝙸𝙴𝚆 👋, ${await this.getName(m.sender)} 𝚈𝙾𝚄 𝙱𝚁𝙴𝙰𝙺 𝚃𝙷𝙴 𝚁𝚄𝙻𝙴𝚂 𝙾𝙵 𝚃𝙷𝙴 𝙶𝚁𝙾𝚄𝙿, 𝚈𝙾𝚄 𝚆𝙸𝙻𝙻 𝙱𝙴 𝙴𝚇𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝚃𝙴𝙳...!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴 𝙱𝙾𝚃 𝙸𝚂 𝙽𝙾𝚃 𝙰𝙳𝙼𝙸𝙽, 𝙸𝚃 𝙲𝙰𝙽𝙽𝙾𝚃 𝙴𝚇𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝚃𝙴 𝙿𝙴𝙾𝙿𝙻𝙴*'}`, author, ['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝚂', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴 𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁 𝙳𝙾𝙴𝚂 𝙽𝙾𝚃 𝙷𝙰𝚅𝙴 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃𝙸𝙾𝙽𝚂 𝙴𝙽𝙰𝙱𝙻𝙴𝙳 (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝚃𝙷𝙴 𝙱𝙾𝚃 𝚃𝙾 𝙴𝙽𝙰𝙱𝙻𝙴 𝙸𝚃*')
}
return !0
}
