import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import MessageType from '@adiwajshing/baileys'
let handler = async(m, { conn }) => {
  let res = await fetch(global.API('https://api.waifu.pics', '/sfw/happy'))
  let json = await res.json()
  let stiker = await sticker(null, json.url, global.packname, global.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
}
handler.help = ['stickerhappy']
handler.tags = ['sticker']
handler.command = /^happy|stickerhappy|stikerhappy$/i
handler.limit = true

export default handler
