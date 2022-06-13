import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙽𝙰𝙼𝙴 𝙾𝙵 𝙰 𝚂𝙾𝙽𝙶 𝚃𝙾 𝚂𝙴𝙰𝚁𝙲𝙷 𝙵𝙾𝚁*`
try {
let res = await fetch(global.API('zeks', '/api/spotify', { q: text }, 'apikey'))
if (!res.ok) throw await res.text()
let json = await res.json()
if(!json.data[0]) throw json
let { title, artists, album, thumb, url, preview_mp3 } = json.data[0]
let spotifyi = `❒═════❬ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 ❭═════╾❒
┬
├‣✨ *𝚃𝙸𝚃𝙻𝙴:* ${title}
┴
┬
├‣🗣️ *𝙰𝚁𝚃𝙸𝚂𝚃:* ${artists}
┴
┬
├‣🎆 *𝙰𝙻𝙱𝚄𝙼:* ${album}
┴
┬
├‣🌐 *𝚄𝚁𝙻*: ${url}
┴
┬
├‣💚 *𝚄𝚁𝙻 𝙳𝙸𝚁𝙴𝙲𝚃𝙾:* ${preview_mp3}\n┴\n\n*_- 𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚖𝚞𝚜𝚒𝚌𝚊 𝚍𝚎 𝚙𝚛𝚎𝚟𝚒𝚜𝚞𝚊𝚕𝚒𝚣𝚊𝚌𝚒𝚘𝚗_*\n\n_﹫ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ_`

conn.sendFile(m.chat, thumb, '', spotifyi, m)
conn.sendFile(m.chat, preview_mp3, 'spotify.mp3', spotifyi, m)
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙸 𝙲𝙾𝚄𝙻𝙳 𝙽𝙾𝚃 𝚂𝙴𝙰𝚁𝙲𝙷 𝙵𝙾𝚁 𝚃𝙷𝙴 𝚂𝙾𝙽𝙶 𝙾𝚁 𝚃𝙷𝙴 𝙷𝙴𝙻𝙿 𝙿𝙰𝙶𝙴 𝚃𝙾 𝙵𝙸𝙽𝙳 𝚃𝙷𝙴 𝚂𝙾𝙽𝙶 𝚃𝙷𝙸𝚂 𝙵𝙰𝙻𝙻, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚁𝙴-𝙴𝙽𝚃𝙴𝚁 𝙸𝚃 𝙻𝙰𝚃𝙴𝚁*'
}}
handler.command = /^(spotify|music)$/i
handler.help = ['spotify']
handler.tags = ['general']
export default handler
