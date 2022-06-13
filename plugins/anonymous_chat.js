async function handler(m, { command }) {
command = command.toLowerCase()
this.anonymous = this.anonymous ? this.anonymous : {}
switch (command) {
case 'next':
case 'leave': {
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) return this.sendButton(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙾𝚄 𝙰𝚁𝙴 𝙽𝙾𝚃 𝙸𝙽 𝙰𝙽 𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂 𝙲𝙷𝙰𝚃*\n\n*𝙳𝙾 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝚂𝚃𝙰𝚁𝚃 𝙾𝙽𝙴?*\n_𝙳𝙰 𝙲𝙻𝙸𝙲𝙺 𝙾𝙽 𝚃𝙷𝙴 𝙽𝙴𝚇𝚃 𝙱𝚄𝚃𝚃𝙾𝙽_', author, null, [['𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾', `.start`]], m)
m.reply('*[ ✔ ] 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙴𝚇𝙸𝚃𝙴𝙳 𝚃𝙷𝙴 𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂 𝙲𝙷𝙰𝚃*')
let other = room.other(m.sender) 
if (other) await this.sendButton(other, '*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴 𝙾𝚃𝙷𝙴𝚁 𝚄𝚂𝙴𝚁 𝙷𝙰𝚂 𝙰𝙱𝙰𝙽𝙳𝙾𝙽𝙴𝙳 𝚃𝙷𝙴 𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂 𝙲𝙷𝙰𝚃*\n\n*¿𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙶𝙾 𝚃𝙾 𝙰𝙽𝙾𝚃𝙷𝙴𝚁 𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂 𝙲𝙷𝙰𝚃?*\n_𝙲𝙻𝙸𝙲𝙺 𝙾𝙽 𝚃𝙷𝙴 𝙵𝙾𝙻𝙻𝙾𝚆𝙸𝙽𝙶 𝙱𝚄𝚃𝚃𝙾𝙽_', author, null, [['𝚂𝚃𝙰𝚁𝚃 𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂 𝙲𝙷𝙰𝚃', `.start`]], m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'start': {
if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendButton(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙾𝚄 𝙰𝚁𝙴 𝚂𝚃𝙸𝙻𝙻 𝙸𝙽 𝙰𝙽 𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂 𝙲𝙷𝙰𝚃 𝙾𝚁 𝚆𝙰𝙸𝚃𝙸𝙽𝙶 𝙵𝙾𝚁 𝙰𝙽𝙾𝚃𝙷𝙴𝚁 𝚄𝚂𝙴𝚁 𝚃𝙾 𝙹𝙾𝙸𝙽 𝚃𝙾 𝚂𝚃𝙰𝚁𝚃*\n\n*𝙳𝙾 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙻𝙴𝙰𝚅𝙴 𝚃𝙷𝙴 𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂 𝙲𝙷𝙰𝚃?*\n_𝙲𝙻𝙸𝙲𝙺 𝙾𝙽 𝚃𝙷𝙴 𝙽𝙴𝚇𝚃 𝙱𝚄𝚃𝚃𝙾𝙽_', author, null, [['𝙴𝚇𝙸𝚃 𝚃𝙷𝙴 𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂 𝙲𝙷𝙰𝚃', `.leave`]], m)
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
await this.sendButton(room.a, '*[ ✔ ] 𝙰 𝙿𝙴𝚁𝚂𝙾𝙽 𝙸𝚂 𝙹𝙾𝙸𝙽𝙴𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂 𝙲𝙷𝙰𝚃, 𝚃𝙷𝙴𝚈 𝙲𝙰𝙽 𝚂𝚃𝙰𝚁𝚃 𝙲𝙷𝙰𝚃𝚃𝙸𝙽𝙶*', author, null, [['𝙸𝚁 𝙰 𝙾𝚃𝚁𝙾 𝙲𝙷𝙰𝚃', `.next`]], m)
room.b = m.sender
room.state = 'CHATTING'
await this.sendButton(m.chat, '*[ ✔ ] 𝙰 𝙿𝙴𝚁𝚂𝙾𝙽 𝙸𝚂 𝙹𝙾𝙸𝙽𝙴𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂 𝙲𝙷𝙰𝚃, 𝚃𝙷𝙴𝚈 𝙲𝙰𝙽 𝚂𝚃𝙰𝚁𝚃 𝙲𝙷𝙰𝚃𝚃𝙸𝙽𝙶*', author, null, [['𝙸𝚁 𝙰 𝙾𝚃𝚁𝙾 𝙲𝙷𝙰𝚃', `.next`]], m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
await this.sendButton(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝚆𝙰𝙸𝚃𝙸𝙽𝙶 𝙵𝙾𝚁 𝙰𝙽𝙾𝚃𝙷𝙴𝚁 𝚄𝚂𝙴𝚁 𝚃𝙾 𝚂𝚃𝙰𝚁𝚃 𝚃𝙷𝙴 𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂 𝙲𝙷𝙰𝚃*\n\n*𝙳𝙾 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙴𝚇𝙸𝚃 𝚃𝙷𝙴 𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂 𝙲𝙷𝙰𝚃?*\n_𝙲𝙻𝙸𝙲𝙺 𝙾𝙽 𝚃𝙷𝙴 𝙽𝙴𝚇𝚃 𝙱𝚄𝚃𝚃𝙾𝙽_', author, null, [['𝙴𝚇𝙸𝚃 𝚃𝙷𝙴 𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂 𝙲𝙷𝙰𝚃', `.leave`]], m)
}
break
}}}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']
handler.private = true
export default handler
