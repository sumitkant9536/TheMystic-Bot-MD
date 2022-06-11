let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)},  𝚈𝙾𝚄 𝚂𝙷𝙾𝚄𝙻𝙳 𝙼𝙰𝚁𝚁𝚈 💍 ${toM(b)}, 𝙼𝙰𝙺𝙴 𝙰 𝙶𝙾𝙾𝙳 𝙼𝙰𝚃𝙲𝙷 💓*`, null, {
mentions: [a, b]
})}
handler.help = ['formingpairs']
handler.tags = ['main', 'fun']
handler.command = ['formingpairs','formarparejas']
handler.group = true
export default handler
