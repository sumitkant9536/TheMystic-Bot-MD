import axiostal from "axios"
import fetch from 'node-fetch'
let handler = async(m, { conn, text, xteamkey }) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝙰 𝙻𝙸𝙽𝙺/𝚄𝚁𝙻 𝚆𝙷𝙸𝙲𝙷 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝚂𝙷𝙾𝚁𝚃𝙴𝙽*'
let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=cb15ed422c71a2fb`)).json()
if (!json.status) throw json
let hasil = `*𝙻𝙸𝙽𝙺 𝚂𝙷𝙾𝚁𝚃𝙴𝙽𝙴𝙳 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙻𝚈!!*\n\n*𝙿𝚁𝙴𝚅𝙸𝙾𝚄𝚂 𝙻𝙸𝙽𝙺:*\n${text}\n*𝚂𝙷𝙾𝚁𝚃𝙴𝙽𝙴𝙳 𝙻𝙸𝙽𝙺:*\n*${json.result}*`.trim()   
m.reply(hasil)
}
handler.help = ['short'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.fail = null
export default handler
