module.exports.run = async (bot, message, args) => {
    let queue = await bot.distube.getQueue(message);

        if (!queue) return message.channel.send(`There is nothing playing!`)
        const q = queue.songs.map((song, i) => `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
        message.channel.send(`| **Server Queue**\n${q}`)
    }



module.exports.config = {
    name: "queue",
    aliases: ["q"]
}