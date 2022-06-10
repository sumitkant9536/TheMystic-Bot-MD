let handler = m => m
handler.before = async function (m) {
this.suit = this.suit ? this.suit : {}
if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0
let room = Object.values(this.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender))
if (room) {
let win = ''
let tie = false
if (m.sender == room.p2 && /^(acc(ept)?|acepto|okay|si|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
if (/^(tolak|no|rechazo|fuera|safa|gamau|nanti|ga(k.)?bisa)/i.test(m.text)) {
this.reply(m.chat, `*[❗] @${room.p2.split`@`[0]} 𝚁𝙴𝙹𝙴𝙲𝚃 𝚃𝙷𝙴 𝙿𝚅𝙿, 𝚃𝙷𝙴 𝙿𝚅𝙿 𝙸𝚂 𝙲𝙰𝙽𝙲𝙴𝙻𝙴𝙳, m)
delete this.suit[room.id]
return !0
}
room.status = 'play'
room.asal = m.chat
clearTimeout(room.waktu)
m.reply(`*🎮 𝙶𝙰𝙼𝙴𝚂 - 𝙿𝚅𝙿 - 𝙶𝙰𝙼𝙴𝚂 🎮*

*—◉ 𝚃𝙷𝙴 𝙶𝙰𝙼𝙴 𝚂𝚃𝙰𝚁𝚃𝚂, 𝚃𝙷𝙴 𝙾𝙿𝚃𝙸𝙾𝙽𝚂 𝙷𝙰𝚅𝙴 𝙱𝙴𝙴𝙽 𝚂𝙴𝙽𝚃 𝚃𝙾 𝚃𝙷𝙴 𝙿𝚁𝙸𝚅𝙰𝚃𝙴 𝙲𝙷𝙰𝚃𝚂 𝙾𝙵 ${room.p.split`@`[0]} 𝚈 @${room.p2.split`@`[0]}*

*◉ 𝚂𝙴𝙻𝙴𝙲𝚃 𝙰𝙽 𝙾𝙿𝚃𝙸𝙾𝙽 𝙸𝙽 𝚈𝙾𝚄𝚁 𝙿𝚁𝙸𝚅𝙰𝚃𝙴 𝙲𝙷𝙰𝚃𝚂, 𝚁𝙴𝚂𝙿𝙴𝙲𝚃𝙸𝚅𝙴𝙻𝚈*
*◉ 𝙲𝙷𝙾𝙾𝚂𝙴 𝙾𝙿𝚃𝙸𝙾𝙽 𝙸𝙽 wa.me/${conn.user.jid.split`@`[0]}*`, m.chat, {
contextInfo: {
mentionedJid: [room.p, room.p2]
}
})
    
if (!room.pilih) this.sendHydrated(room.p, '*𝙿𝙻𝙴𝙰𝚂𝙴 𝚂𝙴𝙻𝙴𝙲𝚃 𝙾𝙽𝙴 𝙾𝙵 𝚃𝙷𝙴 𝙵𝙾𝙻𝙻𝙾𝚆𝙸𝙽𝙶 𝙾𝙿𝚃𝙸𝙾𝙽𝚂*', `𝚆𝙸𝙽𝙽𝙴𝚁 +${room.poin} 𝚇𝙿\n𝙻𝙾𝚂𝙴𝚁 -${room.poin_lose} 𝚇𝙿\n𝚃𝙸𝙴 +${room.poin_bot} 𝚇𝙿`, null, null, null, null, null, [['𝗦𝗧𝗢𝗡𝗘 🗿', 'Stone'], ['𝗣𝗔𝗣𝗘𝗥 📄', 'Paper'], ['𝗦𝗖𝗜𝗦𝗦𝗢𝗥 ✂️', 'Scissor']], m)
    
if (!room.pilih2) this.sendHydrated(room.p2, '*𝙿𝙻𝙴𝙰𝚂𝙴 𝚂𝙴𝙻𝙴𝙲𝚃 𝙾𝙽𝙴 𝙾𝙵 𝚃𝙷𝙴 𝙵𝙾𝙻𝙻𝙾𝚆𝙸𝙽𝙶 𝙾𝙿𝚃𝙸𝙾𝙽𝚂*', `𝚆𝙸𝙽𝙽𝙴𝚁 +${room.poin} 𝚇𝙿\n𝙻𝙾𝚂𝙴𝚁 -${room.poin_lose} 𝚇𝙿\n𝚃𝙸𝙴 +${room.poin_bot} 𝚇𝙿`, null, null, null, null, null, [['𝗦𝗧𝗢𝗡𝗘 🗿', 'Stone'], ['𝗣𝗔𝗣𝗘𝗥 📄', 'Paper'], ['𝗦𝗖𝗜𝗦𝗦𝗢𝗥 ✂️', 'Scissor']], m)
                                    
room.waktu_milih = setTimeout(() => {
if (!room.pilih && !room.pilih2) this.sendButton(m.chat, `*[❗] 𝙽𝙾 𝙿𝙻𝙰𝚈𝙴𝚁 𝚃𝙾𝙾𝙺 𝚃𝙷𝙴 𝙸𝙽𝙸𝚃𝙸𝙰𝚃𝙸𝚅𝙴 𝚃𝙾 𝚂𝚃𝙰𝚁𝚃 𝚃𝙷𝙴 𝙶𝙰𝙼𝙴, 𝚃𝙷𝙴 𝙿𝚅𝙿 𝚆𝙰𝚂 𝙲𝙰𝙽𝙲𝙴𝙻𝙴𝙳*', wm, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)
else if (!room.pilih || !room.pilih2) {
win = !room.pilih ? room.p2 : room.p
this.sendButton(m.chat, `*[❗] @${(room.pilih ? room.p2 : room.p).split`@`[0]} 𝚈𝙾𝚄 𝙳𝙸𝙳 𝙽𝙾𝚃 𝙲𝙷𝙾𝙾𝚂𝙴 𝙰𝙽𝚈 𝙾𝙿𝚃𝙸𝙾𝙽, 𝙴𝙽𝙳 𝙾𝙵 𝙿𝚅𝙿*`.trim(), wm, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)    
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose
}
delete this.suit[room.id]
return !0
}, room.timeout)
}
let jwb = m.sender == room.p
let jwb2 = m.sender == room.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(scissor|stone|paper)/i
if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
room.pilih = reg.exec(m.text.toLowerCase())[0]
room.text = m.text
m.reply(`*[ ✔ ] 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙲𝙷𝙾𝚂𝙴𝙽 ${m.text}* ${!room.pilih2 ? `\n\n*𝚆𝙰𝙸𝚃𝙸𝙽𝙶 𝙵𝙾𝚁 𝚃𝙷𝙴 𝙾𝙿𝙿𝙾𝙽𝙴𝙽𝚃 𝚃𝙾 𝙲𝙷𝙾𝙾𝚂𝙴*` : ''}`)
if (!room.pilih2) this.reply(room.p2, '*[❗] 𝚃𝙷𝙴 𝙾𝙿𝙿𝙾𝙽𝙴𝙽𝚃 𝙸𝚂 𝙲𝙷𝙾𝚂𝙴𝙽, 𝙸𝚃 𝙸𝚂 𝚈𝙾𝚄𝚁 𝚃𝚄𝚁𝙽 𝚃𝙾 𝙲𝙷𝙾𝙾𝚂𝙴!!*', 0)
}
if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
room.pilih2 = reg.exec(m.text.toLowerCase())[0]
room.text2 = m.text
m.reply(`*[ ✔ ] 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙲𝙷𝙾𝚂𝙴𝙽 ${m.text}* ${!room.pilih ? `\n\n*𝚆𝙰𝙸𝚃𝙸𝙽𝙶 𝙵𝙾𝚁 𝚃𝙷𝙴 𝙾𝙿𝙿𝙾𝙽𝙴𝙽𝚃 𝚃𝙾 𝙲𝙷𝙾𝙾𝚂𝙴*` : ''}`)
if (!room.pilih) this.reply(room.p, '*[❗] 𝚃𝙷𝙴 𝙾𝙿𝙿𝙾𝙽𝙴𝙽𝚃 𝙸𝚂 𝙲𝙷𝙾𝚂𝙴𝙽, 𝙸𝚃 𝙸𝚂 𝚈𝙾𝚄𝚁 𝚃𝚄𝚁𝙽 𝚃𝙾 𝙲𝙷𝙾𝙾𝚂𝙴!!*', 0)
}
let stage = room.pilih
let stage2 = room.pilih2
if (room.pilih && room.pilih2) {
clearTimeout(room.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = room.p
else if (b.test(stage) && k.test(stage2)) win = room.p2
else if (g.test(stage) && k.test(stage2)) win = room.p
else if (g.test(stage) && b.test(stage2)) win = room.p2
else if (k.test(stage) && b.test(stage2)) win = room.p
else if (k.test(stage) && g.test(stage2)) win = room.p2
else if (stage == stage2) tie = true

this.reply(room.asal, `*🎮 𝙶𝙰𝙼𝙴𝚂 - 𝙿𝚅𝙿 - 𝙶𝙰𝙼𝙴𝚂 🎮*

*—◉ 𝙶𝙰𝙼𝙴 𝚁𝙴𝚂𝚄𝙻𝚃*

*◉ @${room.p.split`@`[0]} (${room.text}) ${tie ? '' : room.p == win ? ` 𝚆𝙾𝙽 \n${room.poin} 𝚇𝙿\n𝚃𝙸𝙴, 𝙱𝙾𝙽𝚄𝚂: ${room.poin_bot} 𝚇𝙿` : ` 𝙻𝙾𝚂𝚃 ${room.poin_lose} 𝚇𝙿`}*
*◉ @${room.p2.split`@`[0]} (${room.text2}) ${tie ? '' : room.p2 == win ? ` 𝚆𝙾𝙽 \n${room.poin} 𝚇𝙿\n𝚃𝙸𝙴, 𝙱𝙾𝙽𝚄𝚂: ${room.poin_bot} 𝚇𝙿` : ` 𝙻𝙾𝚂𝚃 ${room.poin_lose} 𝚇𝙿`}*
`.trim(), m, { contextInfo: { mentionedJid: [room.p, room.p2] } })

if (!tie) {
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose
}
delete this.suit[room.id]
}
return !0
}}
handler.exp = 0
export default handler
function random(arr) {
return arr[Math.floor(Math.random() * arr.length)]}
