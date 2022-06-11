let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*[ ⚠️ ] 𝙿𝙻𝙴𝙰𝚂𝙴 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙽𝚄𝙼𝙱𝙴𝚁 𝚃𝙾 𝚆𝙷𝙸𝙲𝙷 𝚃𝙷𝙴 𝚂𝙿𝙰𝙼 𝙾𝙵 𝙼𝙴𝚂𝚂𝙰𝙶𝙴𝚂 𝚆𝙸𝙻𝙻 𝙱𝙴 𝙼𝙰𝙳𝙴!*\n*𝙲𝙾𝚁𝚁𝙴𝙲𝚃 𝚄𝚂𝙴:*\n*—◉ #spamwa numero|texto|cantidad*\n*𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n*—◉ #spamwa 5219999999999|responde :v|25*'
if (!pesan) throw '*[ ⚠️ ] 𝙿𝙻𝙴𝙰𝚂𝙴 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝚃𝙾 𝚂𝙿𝙰𝙼!*\n*𝙲𝙾𝚁𝚁𝙴𝙲𝚃 𝚄𝚂𝙴:*\n*—◉ #spamwa numero|texto|cantidad*\n*𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n*—◉ #spamwa 5219999999999|responde :v|25*'
if (jumlah && isNaN(jumlah)) throw '*[ ⚠️ ] 𝚃𝙷𝙴 𝙰𝙼𝙾𝚄𝙽𝚃 𝙼𝚄𝚂𝚃 𝙱𝙴 𝙰 𝙽𝚄𝙼𝙱𝙴𝚁!*\n*𝙲𝙾𝚁𝚁𝙴𝙲𝚃 𝚄𝚂𝙴:*\n*—◉ #spamwa numero|texto|cantidad*\n*𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n*—◉ #spamwa 5219999999999|responde :v|25*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '*[ ⚠️ ] 𝚃𝙾𝙾 𝙼𝙰𝙽𝚈 𝙼𝙴𝚂𝚂𝙰𝙶𝙴𝚂! 𝚃𝙷𝙴 𝙰𝙼𝙾𝚄𝙽𝚃 𝙼𝚄𝚂𝚃 𝙱𝙴 𝙻𝙴𝚂𝚂 𝚃𝙷𝙰𝙽 𝟻0 𝙼𝙴𝚂𝚂𝙰𝙶𝙴𝚂*️'
await m.reply(`*[❗] 𝚂𝙿𝙰𝙼 𝙾𝙵 𝙼𝙴𝚂𝚂𝙰𝙶𝙴𝚂 𝚃𝙾 𝚃𝙷𝙴 𝙽𝚄𝙼𝙱𝙴𝚁 ${nomor} 𝙸𝚃 𝚆𝙰𝚂 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙿𝙴𝚁𝙵𝙾𝚁𝙼𝙴𝙳*\n*𝚀𝚄𝙰𝙽𝚃𝙸𝚃𝚈 𝚂𝙷𝙸𝙿𝙿𝙴𝙳:*\n*—◉ ${fixedJumlah} 𝚟𝚎𝚌𝚎𝚜!*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
handler.limit = true
export default handler
