import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
   await m.react('☁️');

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let edtr = `@${m.sender.split`@`[0]}`;
    let username = conn.getName(m.sender);

    // VCARD
    let list = [{
        displayName: "WillZek-Ofc 🎩",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: WillZek🍭\nitem1.TEL;waid=50557865603:50557865603\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET: ninopina10@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/crowbot-wa\nitem3.X-ABLabel:Internet\nitem4.ADR:;; Argentina;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
    }];

    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: `${list.length} Contacto`,
            contacts: list
        },
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: 'һ᥆ᥣᥲ s᥆ᥡ ᥕіᥣᥣzᥱk-᥆𝖿ᥴ ᥱᥣ mᥱȷ᥆r',
                body: dev,
                thumbnailUrl: 'https://files.catbox.moe/185de7.jpg',
                sourceUrl: channel,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    let txt = `👋 *Hola \`${username}\` este es*\n*el contacto de mi creador*`;

    await conn.sendMessage(m.chat, {
        text: txt,
        footer: '© ᥴrᥱᥲძ᥆r ᥆𝖿іᥴіᥲᥣ ᥕіᥣᥣzᥱk',
        viewOnce: true,
        headerType: 1
    }, { quoted: m });
};

handler.help = ['owner', 'creator'];
handler.tags = ['main'];
handler.command = /^(test|creator|creador|dueño)$/i;

export default handler;