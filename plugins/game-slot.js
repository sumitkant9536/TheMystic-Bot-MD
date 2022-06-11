/* CREDITOS A https://github.com/FG98F */

let handler = async (m, { args, usedPrefix, command }) => {
let fa = `
*[❗] 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙰𝙼𝙾𝚄𝙽𝚃 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙱𝙴𝚃* 

*📌𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*
*${usedPrefix + command} 100*`.trim()
if (!args[0]) throw fa
if (isNaN(args[0])) throw fa
let apuesta = parseInt(args[0])
let users = global.db.data.users[m.sender]
let time = users.lastslot + 10000
if (new Date - users.lastslot < 10000) throw `*⏳ 𝚆𝙰𝙸𝚃 ${msToTime(time - new Date())} 𝚃𝙾 𝙱𝙴𝚃 𝙰𝙶𝙰𝙸𝙽*`
if (apuesta < 100) throw '*[❗] 𝚃𝙷𝙴 𝙼𝙸𝙽𝙸𝙼𝚄𝙼 𝚃𝙾 𝙱𝙴𝚃 𝙸𝚂 𝟷00 𝚇𝙿*'
if (users.exp < apuesta) {
throw `*[❗] 𝚈𝙾𝚄𝚁 𝚇𝙿 𝙸𝚂 𝙽𝙾𝚃 𝙴𝙽𝙾𝚄𝙶𝙷 𝚃𝙾 𝙱𝙴𝚃 𝚃𝙷𝙰𝚃 𝙰𝙼𝙾𝚄𝙽𝚃, 𝙿𝙻𝙰𝚈 𝙾𝚃𝙷𝙴𝚁 𝙶𝙰𝙼𝙴𝚂 𝙾𝚁 𝙸𝙽𝚃𝙴𝚁𝙰𝙲𝚃 𝚆𝙸𝚃𝙷 𝚃𝙷𝙴 𝙱𝙾𝚃 𝚃𝙾 𝙴𝙰𝚁𝙽 𝙼𝙾𝚁𝙴 𝚇𝙿*`
}
let emojis = ["🐋", "🐉", "🕊️"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `*𝙶𝙰𝙽𝙰𝚂𝚃𝙴! 🎁 +${apuesta + apuesta} 𝚇𝙿*`
users.exp += apuesta
} else if (a == b || a == c || b == c) {
end = `*🔮 𝙲𝙰𝚂𝙸 𝙻𝙾 𝙻𝙾𝙶𝚁𝙰𝚂!, 𝚂𝙸𝙶𝚄𝙴 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝙽𝙳𝙾*\n*𝚃𝙾𝙼𝙰 +10 XP*`
users.exp += 10
} else {
end = `*❌ 𝙿𝙴𝚁𝙳𝙸𝚂𝚃𝙴 -${apuesta} 𝚇𝙿*`
users.exp -= apuesta
}
users.lastslot = new Date * 1
return await m.reply(
        `
🎰 | *SLOTS* 
────────
${x[0]} : ${y[0]} : ${z[0]}
${x[1]} : ${y[1]} : ${z[1]}
${x[2]} : ${y[2]} : ${z[2]}
────────
🎰 | ${end}`) 
}
handler.help = ['slot <apuesta>']
handler.tags = ['game']
handler.command = ['slot']
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s "
}

