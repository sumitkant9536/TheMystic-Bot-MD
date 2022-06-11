global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix, command }) => {
let mat =`
*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙳𝙸𝙵𝙵𝙸𝙲𝚄𝙻𝚃𝚈 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙿𝙻𝙰𝚈 𝚆𝙸𝚃𝙷*

*𝙰𝚅𝙰𝙸𝙻𝙰𝙱𝙻𝙴 𝙳𝙸𝙵𝙵𝙸𝙲𝚄𝙻𝚃𝙸𝙴𝚂: ${Object.keys(modes).join(' | ')}*
*𝙴𝚇𝙰𝙼𝙿𝙻𝙴 𝙾𝙵 𝚄𝚂𝙴: ${usedPrefix}mates medium*
`.trim()
if (args.length < 1) return conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['𝙼𝙰𝚃𝙴𝚂 𝙴𝙰𝚂𝚈', `${usedPrefix + command} easy`], 
['𝙼𝙰𝚃𝙴𝚂 𝙼𝙴𝙳𝙸𝚄𝙼', `${usedPrefix + command} medium`], 
['𝙼𝙰𝚃𝙴𝚂 𝙷𝙰𝚁𝙳', `${usedPrefix + command} hard`]], m)
let mode = args[0].toLowerCase()
if (!(mode in modes)) return conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['𝙼𝙰𝚃𝙴𝚂 𝙴𝙰𝚂𝚈', `${usedPrefix + command} easy`], 
['𝙼𝙰𝚃𝙴𝚂 𝙼𝙴𝙳𝙸𝚄𝙼', `${usedPrefix + command} medium`], 
['𝙼𝙰𝚃𝙴𝚂 𝙷𝙰𝚁𝙳', `${usedPrefix + command} hard`]], m)
let id = m.chat
if (id in global.math) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴𝚁𝙴 𝙰𝚁𝙴 𝚂𝚃𝙸𝙻𝙻 𝚄𝙽𝙰𝙽𝚂𝚆𝙴𝚁𝙴𝙳 𝚀𝚄𝙴𝚂𝚃𝙸𝙾𝙽𝚂 𝙸𝙽 𝚃𝙷𝙸𝚂 𝙲𝙷𝙰𝚃!*', global.math[id][0])
let math = genMath(mode)
global.math[id] = [
await conn.reply(m.chat, `𝙷𝙾𝚆 𝙼𝚄𝙲𝙷 𝙸𝚂 𝚃𝙷𝙴 𝚁𝙴𝚂𝚄𝙻𝚃 𝙾𝙵 *${math.str}*?\n\n*⏳ 𝚃𝙸𝙼𝙴: ${(math.time / 1000).toFixed(2)} Seconds*\n*🏆 𝚆𝙸𝙽 𝚄𝙿 𝚃𝙾: ${math.bonus} 𝚇𝙿*`, m),
math, 4,
setTimeout(() => { 
if (global.math[id]) conn.sendButton(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴 𝚃𝙸𝙼𝙴 𝚃𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝙷𝙰𝚂 𝙴𝙽𝙳𝙴𝙳*\n\n*𝚃𝙷𝙴 𝙰𝙽𝚂𝚆𝙴𝚁 𝙸𝚂 ${math.result}*`, author, null, [['𝚁𝙴𝚃𝚁𝚈', `${usedPrefix + command} ${math.mode}`]], global.math[id][0])
delete global.math[id]
}, math.time)
]}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math|mates|matemáticas/i
export default handler

let modes = {
noob: [-3, 3,-3, 3, '+-', 15000, 10],
easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 5000]
} 

let operators = {
'+': '+',
'-': '-',
'*': '×',
'/': '÷'
}

function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
