let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
await m.reply(global.wait)
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} logo`
  let res = await fetch(global.API('zeks', '/api/pinimg', {
    q: text
  }, 'apikey'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.status) throw json
  let pint = json.data[Math.floor(Math.random() * json.data.length)];
  conn.sendFile(m.chat, pint, '', '*©ハチャマ*', m, 0, { thumbnail: await (await fetch(pint)).buffer() })
}
handler.command = /^(pint(erest)?)$/i
handler.premium = true
handler.register = true

module.exports = handler
