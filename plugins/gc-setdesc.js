let handler = async (m, { conn, args }) => {
await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
m.reply('*✅ 𝚃𝚑𝚎 𝚍𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗 𝚘𝚏 𝚝𝚑𝚎 𝚐𝚛𝚘𝚞𝚙 𝚠𝚊𝚜 𝚖𝚘𝚍𝚒𝚏𝚒𝚎𝚍 𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚕𝚢*')
}
handler.help = ['Setdesc <text>']
handler.tags = ['group']
handler.command = /^setdesk|setdesc$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
