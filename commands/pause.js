module.exports.run = async (bot, message, args) => {
    let queue = await bot.distube.getQueue(message);

        if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
        if (queue.pause) {
            bot.distube.resume(message)
            return message.channel.send("Resumed the song for you :)")
        }
        bot.distube.pause(message)
        message.channel.send("Paused the song for you :)")
    }


module.exports.config={
    name: "pause",
    aliases: ["pause", "hold"]
}