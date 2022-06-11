let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw '*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓 ⚠️ ] 𝙴𝚁𝚁𝙾𝙽𝙴𝙾𝚄𝚂 𝙾𝚁 𝙼𝙸𝚂𝚂𝙸𝙽𝙶 𝙻𝙸𝙽𝙺*\n*👉🏻 𝙴𝙽𝚃𝙴𝚁 𝙰 𝙶𝚁𝙾𝚄𝙿 𝙻𝙸𝙽𝙺*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*#join https://chat.whatsapp.com/FwEUGxkvZD85fIIp0gKyFC*\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝙳𝙾 𝙽𝙾𝚃 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝙰𝙽𝚈 𝙼𝙴𝚂𝚂𝙰𝙶𝙴, 𝙼𝙰𝚈 𝙲𝙰𝚄𝚂𝙴 𝙸𝙽𝚃𝙴𝚁𝙵𝙴𝚁𝙴𝙽𝙲𝙴, 𝚆𝚁𝙸𝚃𝙴 𝙸𝚃 𝙾𝙽𝙻𝚈 𝙰𝚂 𝙰 𝙽𝙴𝚆 𝙼𝙴𝚂𝚂𝙰𝙶𝙴*'

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚄𝙽𝙸𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾, 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙴 𝙳𝙴𝙻 𝙱𝙾𝚃! ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙴𝚆 𝙱𝙾𝚃 𝚁𝙴𝚀𝚄𝙴𝚂𝚃 𝙵𝙾𝚁 𝙰 𝙶𝚁𝙾𝚄𝙿 [❗𝐈𝐍𝐅𝐎❗]*\n\n*—◉ APPLICANT NUMBER:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ 𝙻𝙸𝙽𝙺 𝙾𝙵 𝚃𝙷𝙴 𝙶𝚁𝙾𝚄𝙿 𝚆𝙷𝙴𝚁𝙴 𝚃𝙷𝙴 𝙱𝙾𝚃 𝙸𝚂 𝚁𝙴𝚀𝚄𝙴𝚂𝚃𝙴𝙳:* ' + link, jid)

await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙾𝚄𝚁 𝙶𝚁𝙾𝚄𝙿 𝙻𝙸𝙽𝙺 𝚆𝙰𝚂 𝚂𝙴𝙽𝚃 𝚃𝙾 𝙼𝚈 𝙾𝚆𝙽𝙴𝚁/𝙰*\n\n*👉🏻 𝚈𝙾𝚄𝚁 𝙶𝚁𝙾𝚄𝙿 𝚆𝙸𝙻𝙻 𝙱𝙴 𝙸𝙽 𝙴𝚅𝙰𝙻𝚄𝙰𝚃𝙸𝙾𝙽 𝙰𝙽𝙳 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁 𝙾𝙵 𝚃𝙷𝙴 𝙱𝙾𝚃 𝚆𝙸𝙻𝙻 𝙳𝙴𝙲𝙸𝙳𝙴 𝚆𝙷𝙴𝚃𝙷𝙴𝚁 𝙾𝚁 𝙽𝙾𝚃 𝚃𝙾 𝙰𝙳𝙳 𝙼𝙴*\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾𝙼𝙴 𝙾𝙵 𝚃𝙷𝙴 𝚁𝙴𝙰𝚂𝙾𝙽𝚂 𝚆𝙷𝚈 𝚈𝙾𝚄𝚁 𝙰𝙿𝙿𝙻𝙸𝙲𝙰𝚃𝙸𝙾𝙽 𝙼𝙰𝚈 𝙱𝙴 𝚁𝙴𝙹𝙴𝙲𝚃𝙴𝙳 𝙰𝚁𝙴:*\n*1.- 𝚃𝙷𝙴 𝙱𝙾𝚃 𝙸𝚂 𝚂𝙰𝚃𝚄𝚁𝙰𝚃𝙴𝙳*\n*2.- 𝚃𝙷𝙴 𝙱𝙾𝚃 𝚆𝙰𝚂 𝙿𝚁𝙴𝚅𝙸𝙾𝚄𝚂𝙻𝚈 𝚁𝙴𝙼𝙾𝚅𝙴𝙳 𝙵𝚁𝙾𝙼 𝚃𝙷𝙴 𝙶𝚁𝙾𝚄𝙿*\n*3.- c*\n*4.-𝚃𝙷𝙴 𝙱𝙾𝚃 𝙸𝚂 𝙽𝙾𝚃 𝙰𝙳𝙳𝙴𝙳 𝚃𝙾 𝙶𝚁𝙾𝚄𝙿𝚂 𝙱𝚈 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁 𝙳𝙴𝙲𝙸𝚂𝙸𝙾𝙽*\n\n*👉🏻 𝙺𝙴𝙴𝙿 𝙸𝙽 𝙼𝙸𝙽𝙳 𝚃𝙷𝙰𝚃 𝚈𝙾𝚄𝚁 𝚁𝙴𝚀𝚄𝙴𝚂𝚃 𝚃𝙾 𝙹𝙾𝙸𝙽 𝚃𝙷𝙴 𝙱𝙾𝚃 𝚃𝙾 𝙰 𝙶𝚁𝙾𝚄𝙿 𝙼𝙰𝚈 𝚃𝙰𝙺𝙴 𝙷𝙾𝚄𝚁𝚂 𝙾𝚁 𝙳𝙰𝚈𝚂 𝚃𝙾 𝙱𝙴 𝙰𝙽𝚂𝚆𝙴𝚁𝙴𝙳, 𝙱𝙴 𝙿𝙰𝚃𝙸𝙴𝙽𝚃*')}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^join|nuevogrupo$/i
export default handler
