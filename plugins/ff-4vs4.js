let handler = async(m, { conn, usedPrefix }) => {

let vs = `🩵 4 VS 4 - FREE FIRE\n\n`
    vs += `🛡️ PARTICIPANTES:\n
    vs += `•\n•\n•\n•\n•\n•\n•\n•`
    vs += `💫 REGLAS:\n`
    vs += `•\n•\n•`
    vs += `🍨 ${dev}`

let vsimg = 'https://files.catbox.moe/ev7gjp.jpg';

conn.sendMessage(m.chat, { image: { url: vsimg }, caption: vs }, { quoted: m });
}

handler.command = ['4vs4'];

export default handler