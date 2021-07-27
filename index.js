const Discord = require('discord.js');
const bot = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const config = require('./settings.json');
const { loadCommands } = require('./utils/loadCommands');
const DisTube = require('distube')
var messageArray = [];



bot.distube = new DisTube(bot, { searchSongs: false, emitNewSongOnly: true });
bot.distube
    .on("playSong", (message, queue, song) => {
        message.channel.send(
            `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
        )


        AddToServerList(message);
    })
	.on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))

require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

loadCommands(bot);

bot.login(config.token);


const express = require('express')
const app = express()
 var bodyParser = require('body-parser')
 app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('<b>If you see this, everything is working as it should</b>')
})
 
app.listen(process.env.PORT|| 3000);

app.post("/changelog",function (req, res) {
 
    var changelogText = req.body.changelogmsg;

    //changelogText=changelogText.replaceAll('/','`\`');

    const search='/';
    const replaceWith='`\`';
    changelogText=changelogText.split(search).join(replaceWith);
    const embed = new Discord.MessageEmbed()
            .setTitle("Changelog")
            .setDescription(changelogText)
            .setTimestamp();

    messageArray.forEach(msg=>msg.channel.send(embed));
    res.send('Message sent to all servers!');
  });

  app.post("/playmusic",function (req, res) {
 
    var song = req.body.song;


    messageArray.forEach(msg=>bot.distube.play(msg, song));
    res.send(`${song} playing on all servers!`);
  });

 function AddToServerList(message){
    //Con esto se revisa si hay que agregar al servidor a la lista 

     var idExists=false;
     messageArray.forEach(msg=>
        {
            if(msg.guild.id===message.guild.id){
                idExists=true;
            }
        });

        if(!idExists){
            messageArray.push(message);
        }

 }
 