import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 𝙾𝙵 𝙰𝙽 𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼 𝚄𝚂𝙴𝚁, 𝙴𝚇𝙰𝙼𝙿𝙻𝙴: ${usedPrefix + command} war_sumit02*`
const {
username,
name,
description,
followersH,
followingH,
postsH,
} = await instagramStalk(args[0])
m.reply(`
${name} *(${username})*
https://instagram.com/${username.replace(/^@/, '')}
*${followersH}* 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂
*${followingH}* 𝙵𝙾𝙻𝙻𝙾𝚆𝙸𝙽𝙶
*${postsH}* 𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝚃𝙸𝙾𝙽𝚂
*𝙱𝙸𝙾:* ${description}
`.trim())
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igstalk)$/i
export default handler
