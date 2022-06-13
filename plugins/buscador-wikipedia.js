import axios from "axios"
import fetch from "node-fetch"
import cheerio from "cheerio"
async function wikipedia(querry) {
try {
const link = await axios.get(`https://en.wikipedia.org/wiki/${querry}`)
const $ = cheerio.load(link.data)
let judul = $('#firstHeading').text().trim()
let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
let isi = []
$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
let penjelasan = $(Ra).find('p').text().trim() 
isi.push(penjelasan)})
for (let i of isi) {
const data = {
status: link.status,
result: {
judul: judul,
thumb: 'https:' + thumb,
isi: i}}
return data}
} catch (err) {
var notFond = {
status: link.status,
Pesan: eror}
return notFond}}
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗️𝐈𝐍𝐅𝐎❗️] 𝚈𝙾𝚄 𝙰𝚁𝙴 𝙼𝙸𝚂𝚄𝚂𝙸𝙽𝙶 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳!!*\n*𝙲𝙾𝚁𝚁𝙴𝙲𝚃 𝚄𝚂𝙴:*\n*${usedPrefix + command} Keyword to search for*\n\n*𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n*${usedPrefix + command}  sirius*`
wikipedia(`${text}`).then(res => {
m.reply(`*𝙷𝙴𝚁𝙴 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝚃𝙷𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽 𝙵𝙾𝚄𝙽𝙳:*\n\n` + res.result.isi)
}).catch(() => { m.reply('*[❗️𝐈𝐍𝐅𝐎❗️] 𝙽𝙾 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽 𝙵𝙾𝚄𝙽𝙳, 𝙿𝚁𝙾𝙾𝙵 𝚃𝙷𝙰𝚃 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝚆𝚁𝙸𝚃𝚃𝙴𝙽 𝙰 𝚂𝙸𝙽𝙶𝙻𝙴 𝚆𝙾𝚁𝙳 𝙰𝙽𝙳 𝚃𝚈𝙿𝙴𝙳 𝙸𝚃 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙻𝚈*') })}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = [ 'internet']
handler.command = /^(wiki|wikipedia)$/i
export default handler
