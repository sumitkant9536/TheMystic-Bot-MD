let handler = async (m, { conn, participants, groupMetadata, args }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*𝙼𝙴𝚂𝚂𝙰𝙶𝙴:* ${pesan}`
let text = `*━「* 𝐈𝐍𝐕𝐎𝐂𝐀𝐍𝐃𝐎 𝐀𝐃𝐌𝐈𝐍𝐒 *」━*

${oi}

*𝙰𝙳𝙼𝙸𝙽𝚂:*
${listAdmin}

*[ ⚠ ️] 𝚄𝚂𝙴 𝚃𝙷𝙸𝚂 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙾𝙽𝙻𝚈 𝚆𝙷𝙴𝙽 𝙸𝚃 𝙸𝚂 𝙰𝙽 𝙴𝙼𝙴𝚁𝙶𝙴𝙽𝙲𝚈!!*`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['admins <text>']
handler.tags = ['group']
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true
export default handler
