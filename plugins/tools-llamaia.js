/* Codigo Hecho Por WillZek 
- https://github.com/WillZek
*/

import fetch from 'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, '🍭 Ingrese un texto para hablar con Llama AI', m)
    try {
        let api = await fetch(`https://delirius-apiofc.vercel.app/ia/llamaia?query=${text}`)
        let json = await api.json()
        let txt = { contextInfo: { externalAdReply: { title: 'Llama AI - WhatsApp', body: null, mediaType: 1, previewType: 0, mediaUrl: channel, sourceUrl: redes, thumbnailUrl: 'https://files.catbox.moe/c77b2w.jpg', renderLargerThumbnail: false }}}

        await conn.reply(m.chat, json.data, m, txt)

    } catch (error) { 
        console.error(error)
    }
}

handler.command = ['llamaai', 'llama']

export default handler