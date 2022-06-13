import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `🔎 *𝚁𝙴𝚂𝚄𝙻𝚃 𝙾𝙵:* ${text}
🌎 *𝚂𝙴𝙴𝙺𝙴𝚁:* Google
`, author, link, link, '🔗 𝚄𝚁𝙻', null, null, [
['🔄 𝙽𝙴𝚇𝚃 🔄', `/imagen ${text}`]
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
export default handler
