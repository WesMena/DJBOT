const Discord = require("discord.js")

module.exports.run = 
async (bot, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setTitle("Commands")
            .setDescription(bot.commands.map(cmd => `\`${cmd.config.name}\``).join(", "))
            .setTimestamp()
        message.channel.send(embed)
    }


module.exports.config={
    name: "help",
    aliases: ["h", "cmd", "command"]
}