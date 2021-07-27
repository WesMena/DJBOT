  
module.exports.run = async (bot, message, args) => {
    let queue = await bot.distube.getQueue(message);

        if (!queue) return message.channel.send(`There is nothing playing!`)
        
        let mode = null
        switch (args[0]) {
            case "off":
                mode = 0
                break
            case "song":
                mode = 1
                break
            case "queue":
                mode = 2
                break
        }
        mode = bot.distube.setRepeatMode(message, mode)
        mode = mode ? mode === 2 ? "Repeat queue" : "Repeat song" : "Off"
        message.channel.send(`Set repeat mode to \`${mode}\``)

        
    }


module.exports.config ={
    name: "repeat",
    aliases: ["loop", "rp"]
}