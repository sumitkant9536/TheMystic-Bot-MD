let handler = async (m, { conn, usedprefix }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendButton(m.chat, '*🚔🚨 𝐋𝐎𝐋𝐈𝐂𝐎𝐍𝐒 𝐋𝐈𝐊𝐄 𝐘𝐎𝐔𝐑 𝐎𝐍𝐋𝐘 𝐁𝐄𝐋𝐎𝐍𝐆 𝐓𝐎 𝐓𝐇𝐄 𝐉𝐀𝐈𝐋 🚨🚔*', author, global.API('https://some-random-api.ml', '/canvas/lolice', { 
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), [['𝙸 𝙻𝙾𝚅𝙴 𝙻𝙾𝙻𝙸𝚂 💓', `/loli`]], m)}

handler.help = ['lolice']
handler.tags = ['maker']
handler.command = /^(lolice)$/i
export default handler
