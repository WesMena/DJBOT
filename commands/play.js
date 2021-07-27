module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    
    const music = args.join(" ");

   // console.log(bot);
    
    console.log(message.guild.id);
   // console.log(args);
    bot.distube.play(message, music)
}

module.exports.config = {
    name: "play",
    aliases: ['p']
}