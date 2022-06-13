import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝙰 𝚃𝙸𝙺𝚃𝙾𝙺 𝚄𝚂𝙴𝚁S 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴*'
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
conn.sendFile(m.chat, res, 'error.jpg', `*[ ✔ ] 𝙷𝙴𝚁𝙴 𝙸𝚂 𝚃𝙷𝙴 𝙿𝚁𝙾𝙵𝙸𝙻𝙴 𝙿𝙸𝙲𝚃𝚄𝚁𝙴 𝙾𝙵 ${text}*`, m, false)
}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|pptiktok)$/i
export default handler
