// Made With 💙 by unx //
let handler = async (m) => {
  
let teks = `
╭─ *「 Haachamaa 」*
│
│ • *Link:* https://github.com/unx21/hachama
│
│
│    _Haachamaa Heree_
│
│ • *Heree:*
│ https://chat.whatsapp.com/Ij7zZoDTDgHAi9TTfzu0ay
│
│  _Made With 💛🖤❤️💙 by unx_
╰────────
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Haachamaa Build With NodeJS', 'status@broadcast')
  }
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^sc|script|scrape$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
