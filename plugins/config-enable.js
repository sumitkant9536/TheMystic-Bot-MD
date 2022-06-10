let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `𝐎𝐏𝐓𝐈𝐎𝐍𝐒 𝐋𝐈𝐒𝐓`,
rows: [
{title: "✨ | 𝚆𝙴𝙻𝙲𝙾𝙼𝙴", description: "𝙴𝙽𝙰𝙱𝙻𝙴 𝙾𝚁 𝙳𝙸𝚂𝙰𝙱𝙻𝙴 𝚃𝙷𝙴 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝙸𝙽 𝚃𝙷𝙴 𝙶𝚁𝙾𝚄𝙿", rowId: `${usedPrefix + command} welcome`},
{title: "🌎 | 𝙼𝙾𝙳𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾", description: "𝚃𝙷𝙴 𝙱𝙾𝚃 𝙱𝙴𝙲𝙾𝙼𝙴𝚂 𝙵𝙾𝚁 𝙿𝚄𝙱𝙻𝙸𝙲 𝙰𝙽𝙳/𝙾𝚁 𝙿𝚁𝙸𝚅𝙰𝚃𝙴 𝚄𝚂𝙴", rowId: `${usedPrefix + command} public`},
{title: "🥵 | 𝙼𝙾𝙳𝙾 𝙷𝙾𝚁𝙽𝚈", description: "𝙴𝙽𝙰𝙱𝙻𝙴 𝙾𝚁 𝙳𝙸𝚂𝙰𝙱𝙻𝙴 𝚃𝙷𝙴 +𝟷𝟾 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 | 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺", description: "𝙰𝙲𝚃𝙸𝚅𝙰𝚃𝙴 𝙾𝚁 𝙳𝙴𝙰𝙲𝚃𝙸𝚅𝙰𝚃𝙴 𝚃𝙷𝙴 𝙰𝙽𝚃𝙸 𝙻𝙸𝙽𝙺𝚂 𝙾𝙵 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙶𝚁𝙾𝚄𝙿𝚂", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 | 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝟸", description: "𝙰𝙲𝚃𝙸𝚅𝙰𝚃𝙴 𝙾𝚁 𝙳𝙴𝙰𝙲𝚃𝙸𝚅𝙰𝚃𝙴 𝚃𝙷𝙴 𝙰𝙽𝚃𝙸 𝙻𝙸𝙽𝙺𝚂 𝚃𝙷𝙰𝚃 𝙸𝙽𝙸𝚃𝙸𝙰𝚃𝙴 𝙸𝙽 𝙷𝚃𝚃𝙿𝚂", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔎 | 𝙳𝙴𝚃𝙴𝙲𝚃", description: "𝙴𝙽𝙰𝙱𝙻𝙴 𝙾𝚁 𝙳𝙸𝚂𝙰𝙱𝙻𝙴 𝙽𝙴𝚆 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝚃𝙸𝙾𝙽 𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝚃𝙸𝙾𝙽𝚂 𝙸𝙽 𝙰 𝙶𝚁𝙾𝚄𝙿", rowId: `${usedPrefix + command} detect`},      
{title: "❗ | 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃", description: "𝙴𝙽𝙰𝙱𝙻𝙴 𝙾𝚁 𝙳𝙸𝚂𝙰𝙱𝙻𝙴 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃𝙸𝙾𝙽𝚂 𝚃𝙾 𝚁𝙴𝙼𝙾𝚅𝙴 𝙿𝙴𝙾𝙿𝙻𝙴 𝙵𝚁𝙾𝙼 𝙶𝚁𝙾𝚄𝙿𝚂", rowId: `${usedPrefix + command} restrict`},    
{title: "☑️ | 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳", description: "𝙰𝚄𝚃𝙾𝙼𝙰𝚃𝙸𝙲𝙰𝙻𝙻𝚈 𝙼𝙰𝚁𝙺 𝙲𝙾𝙽𝚅𝙴𝚁𝚂𝙰𝚃𝙸𝙾𝙽𝚂 𝙰𝚂 𝚁𝙴𝙰𝙳", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 | 𝙰𝚄𝙳𝙸𝙾𝚂", description: "𝙴𝙽𝙰𝙱𝙻𝙴 𝙾𝚁 𝙳𝙸𝚂𝙰𝙱𝙻𝙴 𝙰𝚄𝙳𝙸𝙾 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝚆𝙸𝚃𝙷𝙾𝚄𝚃 𝙿𝚁𝙴𝙵𝙸𝚇", rowId: `${usedPrefix + command} audios`},
{title: "👾 | 𝙰𝚄𝚃𝙾𝚂𝚃𝙸𝙲𝙺𝙴𝚁", description: "𝙰𝙻𝙻 𝙸𝙼𝙰𝙶𝙴𝚂, 𝚅𝙸𝙳𝙴𝙾𝚂 𝙾𝚁 𝙻𝙸𝙽𝙺𝚂 𝚂𝙴𝙽𝚃 𝙱𝙴𝙲𝙾𝙼𝙴 𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁", rowId: `${usedPrefix + command} autosticker`},
{title: "💬 | 𝙿𝙲𝙾𝙽𝙻𝚈", description: "𝚃𝙷𝙴 𝙱𝙾𝚃 𝚆𝙸𝙻𝙻 𝙾𝙽𝙻𝚈 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙸𝙵 𝙸𝚃 𝙸𝚂 𝙰 𝙿𝚁𝙸𝚅𝙰𝚃𝙴 𝙲𝙷𝙰𝚃", rowId: `${usedPrefix + command} pconly`},
{title: "🏢 | 𝙶𝙲𝙾𝙽𝙻𝚈", description: "𝚃𝙷𝙴 𝙱𝙾𝚃 𝚆𝙸𝙻𝙻 𝙾𝙽𝙻𝚈 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙸𝙵 𝙸𝚃 𝙸𝚂 𝙰 𝙶𝚁𝙾𝚄𝙿", rowId: `${usedPrefix + command} gconly`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝐇𝐄𝐋𝐋𝐎, ${name}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┣❧ *𝚂𝙴𝙻𝙴𝙲𝚃 𝙾𝙽𝙴 𝙾𝙵 𝚃𝙷𝙴 𝙾𝙿𝚃𝙸𝙾𝙽𝚂 𝚃𝙷𝙰𝚃 𝙲𝙾𝙼𝙴 𝙾𝚄𝚃 𝙸𝙽 𝚃𝙷𝙴 𝙵𝙾𝙻𝙻𝙾𝚆𝙸𝙽𝙶 𝙻𝙸𝚂𝚃 𝙾𝚁 𝙲𝙻𝙸𝙲𝙺 𝙾𝙽 𝙰 𝙱𝚄𝚃𝚃𝙾𝙽 𝙸𝙽 𝚃𝙷𝙸𝚂 𝙼𝙴𝚂𝚂𝙰𝙶𝙴*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ℹ️ _${usedPrefix}enable *welcome*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *welcome*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *autosticker*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *autosticker*_
┗━━━━━━━━━━━━━┛
${author}`,
title: null,
buttonText: "𝐒𝐄𝐋𝐄𝐂𝐓 𝐇𝐄𝐑𝐄",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ 𝐎𝐏𝐓𝐈𝐎𝐍: ${type} 
🎚️ 𝐂𝐎𝐍𝐃𝐈𝐓𝐈𝐎𝐍: ${isEnable ? '𝙰𝙲𝚃𝙸𝚅𝙰𝚃𝙴' : '𝙳𝙸𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚃𝙴'}
📣 𝐅𝐎𝐑: ${isAll ? '𝙵𝙾𝚁 𝙱𝙾𝚃' : isUser ? '' : '𝙵𝙾𝚁 𝙲𝙷𝙰𝚃'}`, author, null, [[`${isEnable ? '✖️ 𝙳𝙸𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚃𝙴 ✖️' : '✔️ 𝙰𝙲𝚃𝙸𝚅𝙰𝚃𝙴 ✔️'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['👾 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 👾', '.menu']],m)}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
