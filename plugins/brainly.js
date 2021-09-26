const brainly = require('brainly-scraper-v2')
let handler = async function (m, { text }) {
  if (!text) throw 'Soalnya?'
  await m.reply(global.wait)
  let res = await brainly(text)
  let answer = res.data.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•━━━━━━━━━━━━━━━•\n\n')
  m.reply(answer)
}
handler.command = /^brainly$/i
handler.group = true
handler.register = true
handler.limit = true

module.exports = handler
