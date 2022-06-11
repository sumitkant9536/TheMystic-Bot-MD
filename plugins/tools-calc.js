let handler = async (m, { conn, text }) => {
let id = m.chat
conn.math = conn.math ? conn.math : {}
if (id in conn.math) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
m.reply('𝙷𝙴𝚈!! 𝚈𝙾𝚄 𝙰𝚁𝙴 𝙲𝙷𝙴𝙰𝚃𝙸𝙽𝙶')
}
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
m.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙼𝙰𝚃𝙷𝙴𝙼𝙰𝚃𝙸𝙲𝙰𝙻 𝙾𝙿𝙴𝚁𝙰𝚃𝙸𝙾𝙽 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙲𝙰𝙻𝙲𝚄𝙻𝙰𝚃𝙴*'
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙵𝙾𝚁𝙼𝙰𝚃 𝙽𝙾𝚃 𝚂𝚄𝙿𝙿𝙾𝚁𝚃𝙴𝙳, 𝙾𝙽𝙻𝚈 𝙽𝚄𝙼𝙱𝙴𝚁𝚂 𝙰𝙽𝙳 𝚂𝚈𝙼𝙱𝙾𝙻𝚂 𝙰𝚁𝙴 𝚂𝚄𝙿𝙿𝙾𝚁𝚃𝙴𝙳 -, +, *, /, ×, ÷, π, e, (, )*'
}}
handler.help = ['calc <expression>']
handler.tags = ['tools']
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5
export default handler
