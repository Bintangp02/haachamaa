let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
╭── *〘 Sticker Expression 〙*
┊
┊      Ⓛ  = limit
┊
┊
┊ ⍚ _${usedPrefix}blush_  Ⓛ
┊ ⍚ _${usedPrefix}bonk_  [ @user ] Ⓛ
┊ ⍚ _${usedPrefix}bums_  Ⓛ
┊ ⍚ _${usedPrefix}cringe_  Ⓛ
┊ ⍚ _${usedPrefix}cry_  Ⓛ
┊ ⍚ _${usedPrefix}cuddle_  Ⓛ
┊ ⍚ _${usedPrefix}facepalm_  Ⓛ
┊ ⍚ _${usedPrefix}glomp_  Ⓛ
┊ ⍚ _${usedPrefix}happy_  Ⓛ
┊ ⍚ _${usedPrefix}highfive_  Ⓛ
┊ ⍚ _${usedPrefix}hug_  Ⓛ
┊ ⍚ _${usedPrefix}kill_  Ⓛ
┊ ⍚ _${usedPrefix}kiss_  Ⓛ
┊ ⍚ _${usedPrefix}kitsune_  Ⓛ
┊ ⍚ _${usedPrefix}notstonk_  Ⓛ
┊ ⍚ _${usedPrefix}nyan_  Ⓛ
┊ ⍚ _${usedPrefix}nyam_  Ⓛ
┊ ⍚ _${usedPrefix}pat_  Ⓛ
┊ ⍚ _${usedPrefix}poke_  Ⓛ
┊ ⍚ _${usedPrefix}punch_  Ⓛ
┊ ⍚ _${usedPrefix}slap_  Ⓛ
┊ ⍚ _${usedPrefix}slebew_  Ⓛ
┊ ⍚ _${usedPrefix}smile_  Ⓛ
┊ ⍚ _${usedPrefix}smug_  Ⓛ
┊ ⍚ _${usedPrefix}stonk_  Ⓛ
┊ ⍚ _${usedPrefix}wave_  Ⓛ
┊ ⍚ _${usedPrefix}wink_  Ⓛ
┊ ⍚ _${usedPrefix}wuii  Ⓛ
┊ ⍚ _${usedPrefix}yeey_  Ⓛ
╰────────
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Sticker Wibu', 'status@broadcast')
  }
handler.help = ['eksmenu']
handler.tags = ['menutest']
handler.command = /^eksmenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
