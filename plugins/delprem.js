let handler = async (m, { conn, text }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `tag orangnya!`
    if (!global.prems.includes(who.split`@`[0])) throw 'Dia tidak premium!'
    let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.prems.splice(index, 1)
    conn.reply(m.chat, `@${who.split('@')[0]} *Premium* anda telah habis\nHubungi owner jika ingin memperpanjang`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.command = /^(remove|hapus|-|del)prem$/i

handler.owner = true

module.exports = handler
