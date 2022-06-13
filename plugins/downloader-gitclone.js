import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝙰 𝙶𝙸𝚃𝙷𝚄𝙱 𝙻𝙸𝙽𝙺, 𝙴𝚇𝙰𝙼𝙿𝙻𝙴: ${usedPrefix + command} https://github.com/sumitkant9536/TheMystic-Bot-MD*`
if (!regex.test(args[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙸𝙽𝙺 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃!*'
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝚆𝙰𝙸𝚃 𝙰 𝚆𝙷𝙸𝙻𝙴 𝙵𝙾𝚁 𝚆𝙷𝙰𝚃 𝚈𝙾𝚄 𝚂𝙴𝙽𝙳 𝚈𝙾𝚄𝚁 𝙵𝙸𝙻𝙴, 𝙸𝙵 𝙸𝚃 𝙸𝚂 𝙽𝙾𝚃 𝚂𝙴𝙽𝚃 𝙸𝚃 𝙼𝙰𝚈 𝙱𝙴 𝙱𝙴𝙲𝙰𝚄𝚂𝙴 𝚃𝙷𝙴 𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝚈 𝙸𝚂 𝚃𝙾𝙾 𝙷𝙴𝙰𝚅𝚈*`)
conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone/i
export default handler
