import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚇𝙰𝙼𝙿𝙻𝙴 𝙾𝙵 𝚄𝚂𝙸𝙽𝙶 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 ${usedPrefix + command} Minecraft*`
const json = await pinterest(text)
conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
*𝚂𝙴𝙰𝚁𝙲𝙷 𝚁𝙴𝚂𝚄𝙻𝚃𝚂*
${text}
`.trim(), m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i
export default handler
