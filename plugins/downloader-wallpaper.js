import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚇𝙰𝙼𝙿𝙻𝙴 𝙾𝙵 𝚄𝚂𝙸𝙽𝙶 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 ${usedPrefix + command} Minecraft*`
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
conn.sendFile(m.chat, img, 'error.jpg', `*𝚁𝙴𝚂𝚄𝙻𝚃 𝙾𝙵 ${text}*`, m)
}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(wallpaper2?)$/i
export default handler
