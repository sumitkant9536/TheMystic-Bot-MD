import translate from 'translate-google-api'
const defaultLang = 'es'
const tld = 'cn'
let handler = async (m, { args, usedPrefix, command }) => {
let msg = `*[❗𝐈𝐍𝐅𝐎❗] 𝙲𝙾𝚁𝚁𝙴𝙲𝚃 𝚄𝚂𝙴 𝙾𝙵 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 ${usedPrefix + command} (idioma) (texto)*\n*𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n*${usedPrefix + command} es Hello*\n\n*𝙺𝙽𝙾𝚆 𝚃𝙷𝙴 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴𝚂 𝚂𝚄𝙿𝙿𝙾𝚁𝚃𝙴𝙳 𝙸𝙽:*\n*- https://cloud.google.com/translate/docs/languages*`
if (!args || !args[0]) return m.reply(msg)
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ') }
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {
tld,
to: lang, })
} catch (e) {
result = await translate(`${text}`, {
tld,
to: defaultLang, })
} finally {
m.reply('*Traducción:* ' +  result[0]) }}
handler.help = ['translate', 'traducir']
handler.tags = ['General']
handler.command = /^(tr(anslate)|traducir?)$/i
export default handler
