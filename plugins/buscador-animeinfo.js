import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙽𝙰𝙼𝙴 𝙾𝙵 𝙰𝙽𝚈 𝙰𝙽𝙸𝙼𝙴 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝚂𝙴𝙰𝚁𝙲𝙷 𝙵𝙾𝚁*`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
let animeingfo = `✨ *Titulo:* ${title}
🎆 *𝙴𝚙𝚒𝚜𝚘𝚍𝚎𝚜:* ${episodes}
💬 *𝙱𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝 𝚘𝚗:* ${type}
💌 *Rating:* ${rated}
❤️ *Score:* ${score}
👥 *𝙻𝚒𝚖𝚋𝚜:* ${members}
💚 *𝚂𝚢𝚗𝚘𝚙𝚜𝚒𝚜 𝚒𝚗 𝙴𝚗𝚐𝚕𝚒𝚜𝚑:* ${synopsis}
🌐 *URL*: ${url}`
conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(animeinfo)$/i
export default handler
