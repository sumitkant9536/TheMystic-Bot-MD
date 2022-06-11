let handler = async (m, { command, text }) => m.reply(`
*⁉️ 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍 ⁉️*
  
*𝚀𝚄𝙴𝚂𝚃𝙸𝙾𝙽:* ${text}
*𝙰𝙽𝚂𝚆𝙴𝚁:* ${['Yes','Maybe yes','Possibly','Probably not','No','Impossible'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['ques <texto>?']
handler.tags = ['kerang']
handler.command = /^ques|preguntas|apakah$/i
export default handler
