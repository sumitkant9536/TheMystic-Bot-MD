let handler = async (m, { conn }) => {
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\n—◉ ${await conn.getName(jid)}\n➤ ${jid} [${chat?.metadata?.read_only ? '𝙽𝙾 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴' : '𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴'}]\n\n`
m.reply(`*𝙻𝙸𝚂𝚃 𝙾𝙵 𝙶𝚁𝙾𝚄𝙿𝚂 𝙸𝙽 𝚆𝙷𝙸𝙲𝙷 𝚃𝙷𝙴 𝙱𝙾𝚃 𝙸𝚂:*
${txt}
`.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos)$/i
export default handler
