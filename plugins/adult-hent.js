import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
	let res = await fetch(API('https://hmtai.herokuapp.com', '/nsfw/' + command, {}))
	if (!res.ok) throw `${res.status} ${res.statusText}`
	let json = await res.json()
	if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'like anime ?', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['ass', 'bdsm', 'blowjob', 'boobjob', 'cum', 'creampie', 'cuckold', 'ero', 'elves', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'incest', 'masturbation', 'pantsu', 'orgy', 'tentacles', 'thighs', 'uniform', 'vagina', 'yuri' ]
handler.tags = ['nsfw']
handler.command = /^(ass|bdsm|blowjob|boobjob|cum|creampie|cuckold|ero|elves|femdom|foot|gangbang|glasses|hentai|incest|masturbation|pantsu|orgy|tentacles|thighs|uniform|vagina|yuri)$/i

handler.premium = false

export default handler