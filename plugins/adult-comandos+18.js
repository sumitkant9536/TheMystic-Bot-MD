import axios from "axios"
let handler = async (m, {command, conn}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙷𝙴 +𝟷𝟾 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙰𝚁𝙴 𝙳𝙸𝚂𝙰𝙱𝙻𝙴𝙳 𝙸𝙽 𝚃𝙷𝙸𝚂 𝙶𝚁𝙾𝚄𝙿, 𝙸𝙵 𝚈𝙾𝚄 𝙰𝚁𝙴 𝙰𝙳𝙼𝙸𝙽 𝙰𝙽𝙳 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙴𝙽𝙰𝙱𝙻𝙴 𝚃𝙷𝙴𝙼 𝚄𝚂𝙴 𝚃𝙷𝙴 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 #𝚎𝚗𝚊𝚋𝚕𝚎 𝚖𝚘𝚍ohorny*'   
if (command == 'nsfwloli') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/wallpaper/nsfwloli?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'nsfwfoot') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/foot?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'nsfwass') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/ass?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'nsfwbdsm') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/bdsm?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'nsfwcum') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/cum?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}    
if (command == 'nsfwero') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/ero?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'nsfwfemdom') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/femdom?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}     
if (command == 'nsfwglass') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/glasses?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'feet') {
let haha = await conn.getFile(`https://api-alc.herokuapp.com/api/nsfw/foot?apikey=ConfuMods`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}    
if (command == 'hentai') {
let haha = await conn.getFile(`https://api.xteam.xyz/randomimage/hentai?APIKEY=29d4b59a4aa687ca`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'nsfworgy') {
let haha = await conn.getFile(`https://api.xteam.xyz/randomimage/orgy?APIKEY=29d4b59a4aa687ca`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'tits') {
let res = await axios("https://meme-api.herokuapp.com/gimme/boobs")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'booty') {
let res = await axios("https://meme-api.herokuapp.com/gimme/booty")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'ecchi') {
let res = await axios("https://meme-api.herokuapp.com/gimme/ecchi")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)} 
if (command == 'furro') {
let res = await axios("https://meme-api.herokuapp.com/gimme/Furryporn")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)} 
if (command == 'trap') {
let res = await axios("https://api.waifu.pics/nsfw/trap")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)} 
if (command == 'imagenlesbians') {
let res = await axios("https://meme-api.herokuapp.com/gimme/lesbians")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}     
if (command == 'panties') {
let res = await axios("https://meme-api.herokuapp.com/gimme/panties")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'penis') {
let res = await axios("https://meme-api.herokuapp.com/gimme/penis")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'porno') {
let res = await axios("https://meme-api.herokuapp.com/gimme/nsfw")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'porno2') {
let res = await axios("https://meme-api.herokuapp.com/gimme/porngif")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'randomxxx') {
let res = await axios("https://meme-api.herokuapp.com/gimme/nsfw")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'breasts') {
let res = await axios("https://meme-api.herokuapp.com/gimme/sideboobs")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'yaoi') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yaoigif")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'yaoi2') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yaoi")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'yuri') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yuri")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
if (command == 'yuri2') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yurigif")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝙽𝙴𝚇𝚃 🔄', `/${command}`]], m)}
}  
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'feet', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tits', 'booty', 'ecchi', 'furro', 'hentai', 'trap', 'imagenlesbians', 'penis', 'porno', 'porno2', 'randomxxx', 'breasts']
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'feet', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tits', 'booty', 'ecchi', 'furro', 'hentai', 'trap', 'imagenlesbians', 'penis', 'porno', 'porno2', 'randomxxx', 'pechos']
handler.tags = ['nsfw']
export default  handler
