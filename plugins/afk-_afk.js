export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  *[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙾𝚄 𝚂𝚃𝙾𝙿𝙿𝙴𝙳 𝙱𝙴𝙸𝙽𝙶 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙴 (𝙰𝙵𝙺)${user.afkReason ? ' 𝙰𝙵𝚃𝙴𝚁 𝙱𝙴𝙸𝙽𝙶 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙴 (𝙰𝙵𝙺) 𝙵𝙾𝚁 𝚃𝙷𝙴 𝚁𝙴𝙰𝚂𝙾𝙽: ' + user.afkReason : ''}*
  
  *—◉ 𝙳𝙾𝚆𝙽𝚃𝙸𝙼𝙴 (𝙰𝙵𝙺): ${(new Date - user.afk).toTimeString()}*
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`*[❗] 𝙽𝙾 𝙻𝙾 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴𝚂 [❗]*

*—◉ 𝚃𝙷𝙴 𝚄𝚂𝙴𝚁 𝚈𝙾𝚄 𝚃𝙰𝙶𝙶𝙴𝙳 𝙸𝚂 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙴 (𝙰𝙵𝙺)*      
*—◉ ${reason ? '𝚁𝙴𝙰𝚂𝙾𝙽 𝙵𝙾𝚁 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝚃𝚈 (𝙰𝙵𝙺): ' + reason : '𝚁𝙴𝙰𝚂𝙾𝙽 𝙵𝙾𝚁 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝚃𝚈 (𝙰𝙵𝙺): _𝙴𝙻 𝚄𝚂𝙴𝚁 𝙳𝙸𝙳 𝙽𝙾𝚃 𝚂𝙿𝙴𝙲𝙸𝙵𝚈 𝙰 𝚁𝙴𝙰𝚂𝙾𝙽_'}*
*—◉ 𝚃𝙸𝙴𝙼𝙿𝙾 𝚃𝚁𝙰𝙽𝚂𝙲𝚄𝚁𝚁𝙸𝙳𝙾 𝙳𝙴 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳 (𝙰𝙵𝙺): ${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
