const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Client({intents : [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});
const token = "HIDDENTOKEN"; //replace HIDDENTOKEN with your bot's token
const PREFIX = '-'; //change this if you want to use another prefix
const child_process = require('child_process');

client.once('ready', () => {
    client.user.setActivity("Made by RawZ", { type: ActivityType.Playing});
    console.log('The bot is online! ;)')});

cclient.on('messageCreate', message=>{
    console.log(message.content)
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'start'){
        message.channel.send('Starting Minecraft Server...');
        child_process.execFile('FILENAME');
    } else if (command === 'stop'){
        message.channel.send('you cannot stop a server with a command yet'); //work in progress ^^
    }else if (command === 'status'){
        message.channel.send("you cannot get server's status with a command yet"); //work in progress ^^
    }
});
client.login(token);
