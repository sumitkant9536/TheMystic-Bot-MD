import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❗] 𝙴𝙽𝚃𝙴𝚁 𝙰 𝚃𝙴𝚇𝚃 𝚃𝙾 𝚃𝙰𝙻𝙺 𝚃𝙾 𝚂𝙸𝙼𝚂𝙸𝙼𝙸 𝙾𝚁 𝚃𝙷𝙴 𝙱𝙾𝚃*\n\n*𝙴𝚇𝙰𝙼𝙿𝙻𝙴: ${usedPrefix + command} Hello bot*`
let res = await fetch(`https://api-sv2.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
m.reply(`${tes}`) 
}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'simsimi'] 
export default handler
