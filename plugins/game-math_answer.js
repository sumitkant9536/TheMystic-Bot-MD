global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
let id = m.chat
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^𝙲𝚄𝙰𝙽𝚃𝙾 𝙴𝚂 𝙴𝙻 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴/i.test(m.quoted.text)) return
if (!(m.chat in global.math)) return conn.sendButton(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙰𝚃 𝚀𝚄𝙴𝚂𝚃𝙸𝙾𝙽 𝙷𝙰𝚂 𝙰𝙻𝚁𝙴𝙰𝙳𝚈 𝙱𝙴𝙴𝙽 𝙰𝙽𝚂𝚆𝙴𝚁𝙴𝙳*', author, null, [['𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙹𝚄𝙶𝙰𝚁', '/mates']], m)
if (m.quoted.id == global.math[id][0].id) {
let math = global.math[id][1]
if (m.text == math.result) {
conn.sendButton(m.chat, `*𝙲𝙾𝚁𝚁𝙴𝙲𝚃 𝚁𝙴𝚂𝙿𝙾𝙽𝚂𝙴!!*\n*𝙴𝙰𝚁𝙽𝙴𝙳: ${math.bonus} 𝚇𝙿*`, author, null, [['𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙹𝚄𝙶𝙰𝚁', `/math ${math.mode}`]], m)
global.db.data.users[m.sender].exp += math.bonus
clearTimeout(global.math[id][3])
delete global.math[id]
} else {
if (--global.math[id][2] == 0) {
conn.sendButton(m.chat, `*𝚈𝙾𝚄𝚁 𝙾𝙿𝙿𝙾𝚁𝚃𝚄𝙽𝙸𝚃𝙸𝙴𝚂 𝙰𝚁𝙴 𝙾𝚅𝙴𝚁*\n*𝚃𝙷𝙴 𝙰𝙽𝚂𝚆𝙴𝚁 𝙸𝚂: ${math.result}*`, author, null, [['𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙹𝚄𝙶𝙰𝚁', `/math ${math.mode}`]], m)
clearTimeout(global.math[id][3])
delete global.math[id]
} else conn.reply(m.chat, `*𝚆𝚁𝙾𝙽𝙶 𝙰𝙽𝚂𝚆𝙴𝚁!!*\n*𝚂𝚃𝙸𝙻𝙻 𝙰𝚅𝙰𝙸𝙻𝙰𝙱𝙻𝙴 ${global.math[id][2]} 𝚘𝚙𝚘𝚛𝚝𝚞𝚗𝚒𝚍𝚊𝚍𝚎𝚜*`, m)
}}}
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
export default handler
