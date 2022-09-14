const { Client, GatewayIntentBits, ActivityType, Utils, DiscordAPIError, EmbedBuilder } = require('discord.js');
const client = new Client({intents : [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});
const token = "INSERTTOKEN";
const PREFIX = '-';
const util = require("minecraft-server-util");
const child_process = require('child_process');

client.once('ready', () => {
    client.user.setActivity(`Made by RawZ✨`, { type: ActivityType.Playing});
    console.log('Le bot est en ligne! ;)')});


client.on('messageCreate', message=>{
    console.log(message.content)
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'start'){
        message.channel.send('Starting Minecraft Server...');
        child_process.execFile('starterserver.bat');
    } else if (command === 'stop'){
        message.channel.send('you cannot stop a server with a command yet');
        
    }else if (command === 'status'){
        util.status("INSERTSERVERIP", INSERTSERVERPORT).then((response) =>{
            console.log(response);
            message.channel.send({embeds:[{title: "Server Status: Online 🟢", description: `${response.players.online} online players / ${response.players.max} max players`,color: 5763719}]});
        })
        .catch((error) =>{
            message.channel.send({embeds:[{title: "Server Status: Offline 🔴", description: `type "-start" to start the server!`,color: 15548997}]});
        })
    }
});
client.login(token);
