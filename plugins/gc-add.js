import fetch from 'node-fetch'
/**
 * @type {import('@adiwajshing/baileys')}
 */
const { getBinaryNodeChild, getBinaryNodeChildren } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ]  𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁 𝙷𝙰𝚂 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃𝙴𝙳 (𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝 / 𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝚃𝙷𝙴 𝚄𝚂𝙴 𝙾𝙵 𝚃𝙷𝙸𝚂 𝙲𝙾𝙼𝙼𝙰𝙽𝙳*'
try {
  let _participants = participants.map(user => user.jid)
  let users = (await Promise.all(
    text.split(',')
      .map(v => v.replace(/[^0-9]/g, ''))
      .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
      .map(async v => [
        v,
        await conn.onWhatsApp(v + '@s.whatsapp.net')
      ])
  )).filter(v => v[1]).map(v => v[0] + '@c.us')
  let response = await conn.query({
        tag: 'iq',
        attrs: {
            type: 'set',
            xmlns: 'w:g2',
            to: m.chat,
        },
        content: users.map(jid => ({
            tag: 'add',
            attrs: {},
            content: [{ tag: 'participant', attrs: { jid } }]
}))})
    const pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
    const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
    const add = getBinaryNodeChild(response, 'add')
    const participant = getBinaryNodeChildren(add, 'participant')
    for (const user of participant.filter(item => item.attrs.error == 403)) {
        const content = getBinaryNodeChild(user, 'add_request')
        const invite_code = content.attrs.code
        const invite_code_exp = content.attrs.expiration
        let teks = `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝚃 𝚆𝙰𝚂 𝙽𝙾𝚃 𝙿𝙾𝚂𝚂𝙸𝙱𝙻𝙴 𝚃𝙾 𝙰𝙳𝙳 𝚃𝙷𝙴 𝙽𝚄𝙼𝙱𝙴𝚁 𝙸 𝙴𝙽𝚃𝙴𝚁, 𝚃𝙷𝙸𝚂 𝙼𝙰𝚈 𝙷𝙰𝙿𝙿𝙴𝙽 𝙱𝙴𝙲𝙰𝚄𝚂𝙴 𝚃𝙷𝙴 𝙽𝚄𝙼𝙱𝙴𝚁 𝙸𝚂 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃, 𝚃𝙷𝙴 𝙿𝙴𝚁𝚂𝙾𝙽 𝙷𝙰𝚂 𝚁𝙴𝙲𝙴𝙽𝚃𝙻𝚈 𝙻𝙴𝙵𝚃 𝚃𝙷𝙴 𝙶𝚁𝙾𝚄𝙿 𝙾𝚁 𝚃𝙷𝙴 𝙿𝙴𝚁𝚂𝙾𝙽 𝙷𝙰𝚂 𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙴𝙳 𝚃𝙷𝙴𝙸𝚁 𝙶𝚁𝙾𝚄𝙿 𝙿𝚁𝙸𝚅𝙰𝙲𝚈, 𝚆𝙴 𝙰𝙳𝚅𝙸𝚂𝙴 𝚈𝙾𝚄 𝚃𝙾 𝚂𝙴𝙽𝙳 𝚃𝙷𝙴 𝙸𝙽𝚅𝙸𝚃𝙰𝚃𝙸𝙾𝙽 𝙼𝙰𝙽𝚄𝙰𝙻𝙻𝚈!!*`
        m.reply(teks, null, {
        mentions: conn.parseMention(teks)
})}
} catch (e) {
throw m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝚃 𝚆𝙰𝚂 𝙽𝙾𝚃 𝙿𝙾𝚂𝚂𝙸𝙱𝙻𝙴 𝚃𝙾 𝙰𝙳𝙳 𝚃𝙷𝙴 𝙽𝚄𝙼𝙱𝙴𝚁 𝙸 𝙴𝙽𝚃𝙴𝚁, 𝚃𝙷𝙸𝚂 𝙼𝙰𝚈 𝙷𝙰𝙿𝙿𝙴𝙽 𝙱𝙴𝙲𝙰𝚄𝚂𝙴 𝚃𝙷𝙴 𝙽𝚄𝙼𝙱𝙴𝚁 𝙸𝚂 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃, 𝚃𝙷𝙴 𝙿𝙴𝚁𝚂𝙾𝙽 𝙷𝙰𝚂 𝚁𝙴𝙲𝙴𝙽𝚃𝙻𝚈 𝙻𝙴𝙵𝚃 𝚃𝙷𝙴 𝙶𝚁𝙾𝚄𝙿 𝙾𝚁 𝚃𝙷𝙴 𝙿𝙴𝚁𝚂𝙾𝙽 𝙷𝙰𝚂 𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙴𝙳 𝚃𝙷𝙴𝙸𝚁 𝙶𝚁𝙾𝚄𝙿 𝙿𝚁𝙸𝚅𝙰𝙲𝚈, 𝚆𝙴 𝙰𝙳𝚅𝙸𝚂𝙴 𝚈𝙾𝚄 𝚃𝙾 𝚂𝙴𝙽𝙳 𝚃𝙷𝙴 𝙸𝙽𝚅𝙸𝚃𝙰𝚃𝙸𝙾𝙽 𝙼𝙰𝙽𝚄𝙰𝙻𝙻𝚈!!*')}
}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(add|agregar|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
