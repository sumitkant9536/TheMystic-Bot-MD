let handler = async (m, { text, usedPrefix }) => {
let INTROJUEGO = `*𝙷𝙴𝙻𝙻𝙾 👋🏻, 𝚈𝙾𝚄 𝙰𝚁𝙴 𝙿𝙻𝙰𝚈𝙸𝙽𝙶 "𝚁𝙾𝙲𝙺, 𝙿𝙰𝙿𝙴𝚁 𝙾𝚁 𝚂𝙲𝙸𝚂𝚂𝙾𝚁𝚂"*\n\n*𝙰𝚅𝙰𝙸𝙻𝙰𝙱𝙻𝙴 𝙾𝙿𝚃𝙸𝙾𝙽𝚂:*\n*stone, paper o scissor*\n\n*𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n*${usedPrefix}ppt scissor*\n\n*- 𝚄𝚂𝙴 𝚃𝙷𝙴 𝙾𝙿𝚃𝙸𝙾𝙽𝚂 𝙸𝙽 𝙼𝙸𝙽𝚄𝚂𝙲𝚄𝙻𝙴𝚂 𝙰𝚂 𝚂𝙷𝙾𝚆𝙽 𝙸𝙽 𝚃𝙷𝙴 𝙴𝚇𝙰𝙼𝙿𝙻𝙴*\n\n*𝘉𝘺 𝘛𝘩𝘦 𝘔𝘺𝘴𝘵𝘪𝘤 - 𝘉𝘰𝘵*`
if (!text) throw INTROJUEGO
var astro = Math.random()
if (astro < 0.34) {
astro = 'stone' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'scissor' 
} else {
astro = 'paper'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`*🔰 Tie!*\n\n*👉🏻 you: ${text}*\n*👉🏻 bot: ${astro}*\n*🎁 Points +500 XP*`)
} else if (text == 'paper') {
if (astro == 'stone') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 You win! 🎉*\n\n*👉🏻 you: ${text}*\n*👉🏻 bot: ${astro}*\n*🎁 Points +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ You loss! ❌*\n\n*👉🏻 you: ${text}*\n*👉🏻 bot: ${astro}*\n*❌ Points -300 XP*`)
}
} else if (text == 'scissor') {
if (astro == 'paper') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 You win! 🎉*\n\n*👉 🏻you: ${text}*\n*👉🏻 bot: ${astro}*\n*🎁 Points +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ You loss! ❌*\n\n*👉🏻 you: ${text}*\n*👉🏻 bot: ${astro}*\n*❌ Points -300 XP*`)
}
} else if (text == 'scissor') {
if (astro == 'paper') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 You win! 🎉*\n\n*👉🏻 you: ${text}*\n*👉🏻 bot: ${astro}*\n*🎁 Points +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ You loss! ❌*\n\n*👉🏻 you: ${text}*\n*👉🏻 bot: ${astro}*\n*❌ Points -300 XP*`)
}
} else if (text == 'paper') {
if (astro == 'stone') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 You win! 🎉*\n\n*👉🏻 you: ${text}*\n*👉🏻 bot: ${astro}*\n*🎁 Points +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ You loss! ❌*\n\n*👉🏻 you: ${text}*\n*👉🏻 bot: ${astro}*\n*❌ Points -300 XP*`)
}
} else if (text == 'stone') {
if (astro == 'scissor') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 You win! 🎉*\n\n*👉🏻 you: ${text}*\n*👉🏻 bot: ${astro}*\n*🎁 Points +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ You loss! ❌*\n\n*👉🏻 you: ${text}*\n*👉🏻 bot: ${astro}*\n*❌ Points -300 XP*`)
}
} else {
throw INTROJUEGO
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
