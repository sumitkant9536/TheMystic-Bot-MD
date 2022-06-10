let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './Menu2.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
╭─[ *𝐓𝐡𝐞 𝐌𝐲𝐬𝐭𝐢𝐜 - 𝐁𝐨𝐭* ]
│ *➤ 𝙷𝙴𝙻𝙻𝙾 ${name}*
│
│ *ミ🤖 𝙱𝙾𝚃 𝚂𝚃𝙰𝚃𝚄𝚂 🤖彡*
│ *=> 𝙱𝙾𝚃 𝙰𝙲𝚃𝙸𝚅𝙴 ✅*
│ *=> 𝙿𝚄𝙱𝙻𝙸𝙲 𝚄𝚂𝙴 𝙱𝙾𝚃 ✅*
│ *=> 𝚆𝙴𝙰𝚃𝙷𝙴𝚁 𝙰𝙲𝚃𝙸𝚅𝙴: ${uptime}*
╰───────────────
`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, 'https://github.com/sumitkant9536/TheMystic-Bot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)}

handler.help = ['status']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
