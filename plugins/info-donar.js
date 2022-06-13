/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「 𝐃𝐎𝐍𝐀𝐓𝐄 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ 𝙷𝙴𝙻𝙻𝙾 ${name} 💙*
*┃*
*┃ 👉🏻 𝙷𝙴𝚁𝙴 𝙰𝚁𝙴 𝚂𝙾𝙼𝙴 𝙵𝙰𝙲𝚃𝚂*
*┃ 𝙸𝙽 𝙲𝙰𝚂𝙴 𝚈𝙾𝚄 𝙻𝙸𝙺𝙴 𝚃𝙾 𝚂𝚄𝙿𝙿𝙾𝚁𝚃 :𝟹*
*┃*
*┃
*┃ ➤ 𝙿𝙰𝚈𝚃𝙼: https://www.paypal.me/TheShadowBrokers133*
*┃*
*┃ 👉🏻 𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝙼𝙴 𝚈𝙴𝚂* 
*┃ 𝚈𝙾𝚄 𝙽𝙴𝙴𝙳 𝙼𝙾𝚁𝙴*
*┃ 𝙳𝙰𝚃𝙰 𝙰𝙽𝙳 𝚃𝙾* 
*┃ 𝚃𝙷𝙰𝙽𝙺 𝚈𝙾𝚄 <𝟹*
*┃ wa.me/919758523260*
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.paypal.me/TheShadowBrokers133', '𝙿𝙰𝚈𝚃𝙼', null, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
