import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙿𝙻𝚄𝚂 𝚃𝙷𝙴 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 𝙾𝙵 𝙰 𝚃𝙸𝙺𝚃𝙾𝙺 𝚄𝚂𝙴𝚁*', m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=9b817532fadff8fc7cb86862`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let Mystic = `
*𝚄𝚂𝙴𝚁:* ${json.result.username}
*𝙽𝙰𝙼𝙴:* ${json.result.nickname}
*𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂:* ${json.result.followers}
*𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝙳:* ${json.result.followings}
*𝙻𝙸𝙺𝙴𝚂:* ${json.result.likes}
*𝚅𝙸𝙳𝙴𝙾𝚂:* ${json.result.video}
*𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽:* ${json.result.bio}
`.trim()
conn.sendFile(m.chat, res2, 'error.jpg', Mystic, m, false)
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝚃𝙷𝙴 𝙴𝙽𝚃𝙴𝚁𝙴𝙳 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 𝚆𝙰𝚂 𝙽𝙾𝚃 𝙲𝙷𝙴𝙲𝙺𝙴𝙳*'
}}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
export default handler
