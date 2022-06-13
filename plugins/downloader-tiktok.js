import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, args}) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙼𝙸𝚂𝚂𝙸𝙽𝙶 𝚃𝙸𝙺𝚃𝙾𝙺 𝙻𝙸𝙽𝙺, 𝙿𝙻𝙴𝙰𝚂𝙴 𝙴𝙽𝚃𝙴𝚁 𝙻𝙸𝙽𝙺/𝙻𝙸𝙽𝙺 𝙾𝙵 𝚂𝙾𝙼𝙴 𝚃𝙸𝙺𝚃𝙾𝙺 𝚅𝙸𝙳𝙴𝙾*\n\n*—◉ 𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n*#tiktok https://vm.tiktok.com/ZML42vSnn/*`
if (command == 'tiktokaudio') {
let espera = '*[❗𝐈𝐍𝐅𝐎❗] 𝚆𝙰𝙸𝚃 𝙰 𝙼𝙾𝙼𝙴𝙽𝚃 𝙾𝙽 𝚆𝙷𝙰𝚃 𝚈𝙾𝚄 𝚂𝙴𝙽𝙳 𝚈𝙾𝚄𝚁 𝚃𝙸𝙺𝚃𝙾𝙺 𝙰𝚄𝙳𝙸𝙾*'
m.reply(espera)
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'tiktok') {
let espera = '*[❗𝐈𝐍𝐅𝐎❗] 𝚆𝙰𝙸𝚃 𝙰 𝙼𝙾𝙼𝙴𝙽𝚃 𝙾𝙽 𝚆𝙷𝙰𝚃 𝚈𝙾𝚄 𝚂𝚄𝙱𝙼𝙸𝚃 𝚈𝙾𝚄𝚁 𝚃𝙸𝙺𝚃𝙾𝙺 𝚅𝙸𝙳𝙴𝙾*'
m.reply(espera)
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
conn.sendFile(m.chat, json.result.nowatermark, 'error.mp4', `_𝐓𝐡𝐞 𝐌𝐲𝐬𝐭𝐢𝐜 - 𝐁𝐨𝐭_`, m)}
}
handler.help = ['tiktok' , 'tiktokaudio'].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = ['tiktok', 'tiktokaudio']
export default handler
