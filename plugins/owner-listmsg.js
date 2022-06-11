let handler = m => {
let msgs = global.db.data.msgs
m.reply(`
*🔰 𝙻𝙸𝚂𝚃 𝙾𝙵 𝚃𝙴𝚇𝚃𝚂/𝙼𝙴𝚂𝚂𝙰𝙶𝙴𝚂/𝙺𝙴𝚈𝚆𝙾𝚁𝙳𝚂 🔰*

*✳️ 𝙼𝙴𝚂𝚂𝙰𝙶𝙴𝚂 ✳️*
${Object.keys(msgs).map(v => '*👉🏻 ' + v).join('*\n*')}*
`.trim())
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^lista(vn|msg|video|audio|img|sticker)$/
export default handler
