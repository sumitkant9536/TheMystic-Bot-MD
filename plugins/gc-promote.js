let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `*[❗] USO APROPIADO*\n\n*┯┷*\n*┠≽ ${usedPrefix}daradmin @tag*\n*┠≽ ${usedPrefix}darpoder -> responder a un mensaje*\n*┷┯*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*[ ⚠️ ] 𝚃𝚑𝚎 𝚗𝚞𝚖𝚋𝚎𝚛 𝚎𝚗𝚝𝚎𝚛𝚎𝚍 𝚒𝚜 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝, 𝚙𝚕𝚎𝚊𝚜𝚎 𝚎𝚗𝚝𝚎𝚛 𝚝𝚑𝚎 𝚌𝚘𝚛𝚛𝚎𝚌𝚝 𝚗𝚞𝚖𝚋𝚎𝚛*`, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
conn.reply(m.chat, `*[ ✅ ] 𝙾𝚁𝙳𝙴𝚁𝚂 𝚁𝙴𝙲𝙴𝙸𝚅𝙴𝙳*`, m)
}}
handler.help = ['*593xxx*','*@usuario*','*responder chat*'].map(v => 'promote ' + v)
handler.tags = ['group']
handler.command = /^(promote|daradmin|darpoder)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
