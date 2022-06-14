import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
*ミ💖 𝙷𝙴𝙻𝙻𝙾 ✨${name}✨, 𝙷𝙴𝚁𝙴 𝙸𝚂 𝚃𝙷𝙴 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴 𝙼𝙴𝙽𝚄 𝙾𝙵 𝚃𝙷𝙴 𝙼𝚈𝚂𝚃𝙸𝙲 - 𝙱𝙾𝚃 💖彡*

*📅 𝙳𝙰𝚃𝙴: ${week}, ${date}*
*📈 𝙰𝙲𝚃𝙸𝚅𝙴 𝚃𝙸𝙼𝙴: ${uptime}*
*📊 𝚄𝚂𝙴𝚁𝚂: ${rtotalreg}*

*<𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍/>*

°  💟 ${usedPrefix}*linkgc*
°  💟 ${usedPrefix}*status*
°  💟 ${usedPrefix}*infobot*
°  💟 ${usedPrefix}*donate*
°  💟 ${usedPrefix}*grouplist*
°  💟 ${usedPrefix}*owner*
°  💟 ${usedPrefix}*script*
°  💟 *Bot* (use without prefix)

*<𝐉𝐎𝐈𝐍 𝐀 𝐁𝐎𝐓 𝐓𝐎 𝐘𝐎𝐔𝐑 𝐆𝐑𝐎𝐔𝐏/>*

° 👽 _${usedPrefix}*join* <enlace / link / url>

*<𝐆𝐀𝐌𝐄𝐒/>*

° 🎖️ ${usedPrefix}*mates* <noob / easy / medium / hard / extreme /impossible /impossible2>
° 🎖️ ${usedPrefix}*ppt* <paper / scissors / stone>
° 🎖️ ${usedPrefix}*prostituto* <name / @tag>
° 🎖️ ${usedPrefix}*prostituta* <name / @tag>
° 🎖️ ${usedPrefix}*gay2* <name / @tag>
° 🎖️ ${usedPrefix}*lesbiana* <name / @tag>
° 🎖️ ${usedPrefix}*pajero* <name / @tag>
° 🎖️ ${usedPrefix}*pajera* <name / @tag>
° 🎖️ ${usedPrefix}*fucking* <name / @tag>
° 🎖️ ${usedPrefix}*bitch* <name / @tag>
° 🎖️ ${usedPrefix}*manco* <name / @tag>
° 🎖️ ${usedPrefix}*manca* <name / @tag>
° 🎖️ ${usedPrefix}*rata* <name / @tag>
° 🎖️ ${usedPrefix}*love* <name / @tag>
° 🎖️ ${usedPrefix}*doxear* <name / @tag>
° 🎖️ ${usedPrefix}*jj* <jjfreefire/jjpubg/jjml/jjanime>
° 🎖️ ${usedPrefix}*ques* <text>
° 🎖️ ${usedPrefix}*slot* <bet>
° 🎖️ ${usedPrefix}*pvp* <@tag>
° 🎖️ ${usedPrefix}*simi* <texto>
° 🎖️ ${usedPrefix}*topgays*
° 🎖️ ${usedPrefix}*topnoobs*
° 🎖️ ${usedPrefix}*formingpairs*
° 🎖️ ${usedPrefix}*truth*
° 🎖️ ${usedPrefix}*challange*
° 🎖️ ${usedPrefix}*quotes*

*<𝐓𝐔𝐑𝐍 𝐎𝐍 𝐎𝐑 𝐎𝐅𝐅/>*

° ☑️ ${usedPrefix}*enable* welcome
° ☑️ ${usedPrefix}*disable* welcome
° ☑️ ${usedPrefix}*enable* modohorny
° ☑️ ${usedPrefix}*disable* modohorny
° ☑️ ${usedPrefix}*enable* antilink
° ☑️ ${usedPrefix}*disable* antilink
° ☑️ ${usedPrefix}*enable* antilink2
° ☑️ ${usedPrefix}*disable* antilink2
° ☑️ ${usedPrefix}*enable* detect
° ☑️ ${usedPrefix}*disable* detect
° ☑️ ${usedPrefix}*enable* audios
° ☑️ ${usedPrefix}*disable* audios
° ☑️ ${usedPrefix}*enable* autosticker
° ☑️ ${usedPrefix}*disable* autosticker

*<𝐁𝐔𝐆 𝐑𝐄𝐏𝐎𝐑𝐓𝐒/>*

° 🔰 ${usedPrefix}*report* <text>

*<𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒/>*

📥 ${usedPrefix}*facebook* <link / url>
📥 ${usedPrefix}*instagram* <link / url>
📥 ${usedPrefix}*mediafire* <link / url>
📥 ${usedPrefix}*instagram* <link / url>
📥 ${usedPrefix}*gitclone* <link / url>
📥 ${usedPrefix}*tiktok* <link / url>
📥 ${usedPrefix}*ytmp3* <link / url>
📥 ${usedPrefix}*ytmp4* <link / url>
📥 ${usedPrefix}*ytmp3doc* <link / url>
📥 ${usedPrefix}*ytmp4doc* <link / url>
📥 ${usedPrefix}*play.1* <text / link / url>
📥 ${usedPrefix}*play.2* <text / link / url>
📥 ${usedPrefix}*play* <text>
📥 ${usedPrefix}*playdoc* <text>
📥 ${usedPrefix}*spotify* <text>
📥 ${usedPrefix}*gimage* <text>
📥 ${usedPrefix}*pinteret* <text>
📥 ${usedPrefix}*wallpaper* <text>
📥 ${usedPrefix}*wallpaper2* <text>
📥 ${usedPrefix}*pptiktok* <username>
📥 ${usedPrefix}*igstalk* <username>
📥 ${usedPrefix}*igstory* <username>
📥 ${usedPrefix}*tiktokstalk* <username>

*<𝐆𝐑𝐎𝐔𝐏𝐒/>* 

°💎 ${usedPrefix}*add* <number>
°💎 ${usedPrefix}*kick* <@tag>
°💎 ${usedPrefix}*group* <open/close>
°💎 ${usedPrefix}*promote* <@tag>
°💎 ${usedPrefix}*demote* <@tag>
°💎 *admins* <text> (use without prefix)
°💎 ${usedPrefix}*demote* <@tag>
°💎 ${usedPrefix}*infogroup*
°💎 ${usedPrefix}*link*
°💎 ${usedPrefix}*setname* <text>
°💎 ${usedPrefix}*setdesc* <text>
°💎 ${usedPrefix}*tagall* <text>
°💎 ${usedPrefix}*setwelcome* <text>
°💎 ${usedPrefix}*setbye* <text>
°💎 ${usedPrefix}*hidetag* <text>

*<𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑𝐒/>*

°🧧 ${usedPrefix}*toimg* <responds to a sticker>
°🧧 ${usedPrefix}*tomp3* <responde to a video / voice note>
°🧧 ${usedPrefix}*toptt* <responde to a video / audio>
°🧧 ${usedPrefix}*tovideo* <responde to a audio>
°🧧 ${usedPrefix}*tourl* <responde to a video / image / audio>
°🧧 ${usedPrefix}*tts* <language> <text>

*<𝐄𝐅𝐅𝐄𝐂𝐓𝐒 𝐀𝐍𝐃 𝐋𝐎𝐆𝐎𝐒/>*

°🖍️ ${usedPrefix}*logos* <effect> <text>
°🖍️ ${usedPrefix}*simpcard* <@tag>
°🖍️ ${usedPrefix}*hornycard* <@tag>
°🖍️ ${usedPrefix}*lolice* <@tag>
°🖍️ ${usedPrefix}*ytcomment* <text>
°🖍️ ${usedPrefix}*itssostupid*
°🖍️ ${usedPrefix}*pixel*
°🖍️ ${usedPrefix}*blur*

*<𝐑𝐀𝐍𝐃𝐎𝐌/>*

°👾 ${usedPrefix}*cristianoronaldo*
°👾 ${usedPrefix}*messi*
°👾 ${usedPrefix}*meme*
°👾 ${usedPrefix}*itzy*
°👾 ${usedPrefix}*blackpink*
°👾 ${usedPrefix}*kpop* <blackpink / exo / bts>
°👾 ${usedPrefix}*lolivid*
°👾 ${usedPrefix}*loli*
°👾 ${usedPrefix}*navidad*
°👾 ${usedPrefix}*ppcouple*
°👾 ${usedPrefix}*neko*
°👾 ${usedPrefix}*waifu*
°👾 ${usedPrefix}*akira*
°👾 ${usedPrefix}*akiyama*
°👾 ${usedPrefix}*anna*
°👾 ${usedPrefix}*asuna*
°👾 ${usedPrefix}*ayuzawa*
°👾 ${usedPrefix}*boruto*
°👾 ${usedPrefix}*chiho*
°👾 ${usedPrefix}*chitoge*
°👾 ${usedPrefix}*deidara*
°👾 ${usedPrefix}*erza*
°👾 ${usedPrefix}*elaina*
°👾 ${usedPrefix}*eba*
°👾 ${usedPrefix}*emilia*
°👾 ${usedPrefix}*hestia*
°👾 ${usedPrefix}*hinata*
°👾 ${usedPrefix}*inori*
°👾 ${usedPrefix}*isuzu*
°👾 ${usedPrefix}*itachi*
°👾 ${usedPrefix}*itori*
°👾 ${usedPrefix}*kaga*
°👾 ${usedPrefix}*kagura*
°👾 ${usedPrefix}*kaori*
°👾 ${usedPrefix}*keneki*
°👾 ${usedPrefix}*kotori*
°👾 ${usedPrefix}*kurumi*
°👾 ${usedPrefix}*madara*
°👾 ${usedPrefix}*mikasa*
°👾 ${usedPrefix}*miku*
°👾 ${usedPrefix}*minato*
°👾 ${usedPrefix}*naruto*
°👾 ${usedPrefix}*nezuko*
°👾 ${usedPrefix}*sagiri*
°👾 ${usedPrefix}*sasuke*
°👾 ${usedPrefix}*sakura*
°👾 ${usedPrefix}*cosplay*

*<𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 +𝟏𝟖/>*

°🔞 ${usedPrefix}*pack*
°🔞 ${usedPrefix}*pack2*
°🔞 ${usedPrefix}*pack3*
°🔞 ${usedPrefix}*videoxxx*
°🔞 ${usedPrefix}*tits*
°🔞 ${usedPrefix}*booty*
°🔞 ${usedPrefix}*ecchi*
°🔞 ${usedPrefix}*furro*
°🔞 ${usedPrefix}*imagenlesbians*
°🔞 ${usedPrefix}*panties*
°🔞 ${usedPrefix}*penis*
°🔞 ${usedPrefix}*porno*
°🔞 ${usedPrefix}*porno2*
°🔞 ${usedPrefix}*randomxxx*
°🔞 ${usedPrefix}*breasts*
°🔞 ${usedPrefix}*yaoi*
°🔞 ${usedPrefix}*yaoi2*
°🔞 ${usedPrefix}*yuri*
°🔞 ${usedPrefix}*yuri2*
°🔞 ${usedPrefix}*trap*
°🔞 ${usedPrefix}*hentai*
°🔞 ${usedPrefix}*feet*
°🔞 ${usedPrefix}*nsfwloli*
°🔞 ${usedPrefix}*nsfworgy*
°🔞 ${usedPrefix}*nsfwfoot*
°🔞 ${usedPrefix}*nsfwass*
°🔞 ${usedPrefix}*nsfwbdsm*
°🔞 ${usedPrefix}*nsfwcum*
°🔞 ${usedPrefix}*nsfwero*
°🔞 ${usedPrefix}*nsfwfemdom*


*<𝐀𝐔𝐃𝐈𝐎 𝐄𝐅𝐅𝐄𝐂𝐓𝐒/>*
*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝙰𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾𝚁 𝚅𝙾𝙸𝙲𝙴 𝙼𝙴𝙼𝙾*

°🎤 ${usedPrefix}*bass*
°🎤 ${usedPrefix}*blown*
°🎤 ${usedPrefix}*deep*
°🎤 ${usedPrefix}*earrape*
°🎤 ${usedPrefix}*fast*
°🎤 ${usedPrefix}*fat*
°🎤 ${usedPrefix}*nightcore*
°🎤 ${usedPrefix}*reverse*
°🎤 ${usedPrefix}*robot*
°🎤 ${usedPrefix}*slow*
°🎤 ${usedPrefix}*smooth*
°🎤 ${usedPrefix}*tupai*

*<𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒 𝐂𝐇𝐀𝐓/>*

° 📳 ${usedPrefix}*start*
° 📳 ${usedPrefix}*next*
° 📳 ${usedPrefix}*leave*

*<𝐒𝐄𝐀𝐑𝐂𝐇/>*

°🔍 ${usedPrefix}*animeinfo* <text>
°🔍 ${usedPrefix}*google* <text>
°🔍 ${usedPrefix}*lyrics* <text>
°🔍 ${usedPrefix}*wikipedia* <text>
°🔍 ${usedPrefix}*ytsearch* <text>

*<𝐀𝐔𝐃𝐈𝐎/>* 
*- 𝚃𝚈𝙿𝙴 𝚃𝙷𝙴 𝙵𝙾𝙻𝙻𝙾𝚆𝙸𝙽𝙶 𝚆𝙾𝚁𝙳𝚂 𝙾𝚁 𝙿𝙷𝚁𝙰𝚂𝙴𝚂 𝚆𝙸𝚃𝙷𝙾𝚄𝚃 𝙰𝙽𝚈 𝙿𝚁𝙴𝙵𝙸𝚇 (#, /, *, .)* 
(use without prefix)

°🔊 *Quien es tu sempai botsito 7w7*
°🔊 *Te diagnostico con gay*
°🔊 *A nadie le importa*
°🔊 *Fiesta del admin*
°🔊 *Fiesta del administrador* 
°🔊 *Vivan los novios*
°🔊 *Feliz cumpleaños*
°🔊 *Noche de paz*
°🔊 *Buenos dias*
°🔊 *Buenos tardes*
°🔊 *Buenos noches*
°🔊 *Audio hentai*
°🔊 *Chica lgante*
°🔊 *Feliz navidad*
°🔊 *Vete a la vrg*
°🔊 *Pasa pack Bot*
°🔊 *Atencion grupo*
°🔊 *Marica quien*
°🔊 *Murio el grupo*
°🔊 *Oh me vengo*
°🔊 *Viernes*
°🔊 *Baneado*
°🔊 *Sexo*
°🔊 *Hola*
°🔊 *Un pato*
°🔊 *Nyanpasu*
°🔊 *Te amo*
°🔊 *Yamete*
°🔊 *Bañate*
°🔊 *Es puto*
°🔊 *La biblia*
°🔊 *Onichan*
°🔊 *Mierda de Bot*
°🔊 *Siuuu*
°🔊 *Rawr*
°🔊 *UwU*
°🔊 *:c*


*<𝐓𝐎𝐎𝐋𝐒/>*

°🛠️ ${usedPrefix}*afk* <reason>
°🛠️ ${usedPrefix}*short* <link / url>
°🛠️ ${usedPrefix}*calc* <math operation>
°🛠️ ${usedPrefix}*del* <reply to Bot message>
°🛠️ ${usedPrefix}*qrcode* <text>
°🛠️ ${usedPrefix}*readmore* <text1| text2>
°🛠️ ${usedPrefix}*spamwa* <number|text|quantity>
°🛠️ ${usedPrefix}*styletext* <text>
°🛠️ ${usedPrefix}*translate* <text>

*<𝐑𝐏𝐆 - 𝐋𝐈𝐌𝐈𝐓𝐒 - 𝐄𝐂𝐎𝐍𝐎𝐌𝐘/>*

°💵 ${usedPrefix}*balance*
°💵 ${usedPrefix}*claim*
°💵 ${usedPrefix}*top*
°💵 ${usedPrefix}*levelup*
°💵 ${usedPrefix}*myns*
°💵 ${usedPrefix}*perfil*
°💵 ${usedPrefix}*work*
°💵 ${usedPrefix}*minar*
°💵 ${usedPrefix}*buy*
°💵 ${usedPrefix}*buyall*
°💵 ${usedPrefix}*transfer* <type> <cantidad> <@tag>
°💵 ${usedPrefix}*verificar*
°💵 ${usedPrefix}*unreg* <serial number>

*<𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒/>*

°👽 ${usedPrefix}*sticker* <reply to image or video>
°👽 ${usedPrefix}*sticker* <link / url>
°👽 ${usedPrefix}*s* <reply to image or video>
°👽 ${usedPrefix}*s* <link / url>
°👽 ${usedPrefix}*emojimix* <emoji 1>&<emoji 2>
°👽 ${usedPrefix}*semoji* <tip> <emoji>
°👽 ${usedPrefix}*attp* <text>
°👽 ${usedPrefix}*ttp* <text>
°👽 ${usedPrefix}*pat* <@tag>
°👽 ${usedPrefix}*slap* <@tag>
°👽 ${usedPrefix}*kiss* <@tag>
°👽 ${usedPrefix}*happy* <@tag>
°👽 ${usedPrefix}*dice*
°👽 ${usedPrefix}*wm* <packname> <author>
°👽 ${usedPrefix}*stickermarker* <effect> <reply to image>
°👽 ${usedPrefix}*stickerfilter* <effect<reply to image>

*<𝐎𝐖𝐍𝐄𝐑 𝐀𝐍𝐃 𝐌𝐎𝐃𝐄𝐑𝐀𝐓𝐎𝐑𝐒/>*


°👑 ${usedPrefix}*enable restrict*
°👑 ${usedPrefix}*disable restrict*
°👑 ${usedPrefix}*enable autoread*
°👑 ${usedPrefix}*disable autoread*
°👑 ${usedPrefix}*enable public*
°👑 ${usedPrefix}*disable public*
°👑 ${usedPrefix}*enable pconly*
°👑 ${usedPrefix}*disable pconly*
°👑 ${usedPrefix}*enable gconly*
°👑 ${usedPrefix}*disable gconly*
°👑 ${usedPrefix}*banchat*
°👑 ${usedPrefix}*unbanchat*
°👑 ${usedPrefix}*banuser* <@tag>
°👑 ${usedPrefix}*unbanuser* <@tag>
°👑 ${usedPrefix}*banuser* <@tag>
°👑 ${usedPrefix}*bc* <text>
°👑 ${usedPrefix}*bcchats* <text>
°👑 ${usedPrefix}*bcgc* <text>
°👑 ${usedPrefix}*cleartpm*
°👑 ${usedPrefix}*restart*
°👑 ${usedPrefix}*update*
°👑 ${usedPrefix}*addprem* <@tag>
°👑 ${usedPrefix}*delprem* <@tag>
°👑 ${usedPrefix}*listprem*
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/sumitkant9536/TheMystic-Bot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['📮 𝙳𝙾𝙽𝙰𝚃𝙴 📮', '/donasi'],
['🌹 𝙾𝚆𝙽𝙴𝚁 🌹', '/owner'],
['🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾', '/infobot']
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴 𝙼𝙴𝙽𝚄 𝙷𝙰𝚂 𝙰𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙽𝙳 𝙸𝚃 𝚆𝙰𝚂 𝙽𝙾𝚃 𝙿𝙾𝚂𝚂𝙸𝙱𝙻𝙴 𝚃𝙾 𝚂𝙴𝙽𝙳 𝙸𝚃, 𝚁𝙴𝙿𝙾𝚁𝚃 𝙸𝚃 𝚃𝙾 𝚃𝙷𝙴 𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁*', m)
throw e
}}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.command = /^(menucompleto|menu|menú|memu|memú|help|info|comandos|allmenu|ayuda|commands|commandos|m)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

