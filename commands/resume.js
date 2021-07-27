module.exports.run = async (bot, message, args) => {
    let queue = await bot.distube.getQueue(message);

        if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
        bot.distube.resume(message)
        message.channel.send("Resumed the song for you :)")
    }


module.exports.config={
    name: "resume",
    aliases: ["resume", "unpause"]
}