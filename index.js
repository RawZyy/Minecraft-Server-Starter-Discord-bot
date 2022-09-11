const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({intents : [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});
const token = "HIDDENTOKEN"; //replace HIDDENTOKEN with your bot's token
const PREFIX = '-'; //change this if you want to use another prefix
const child_process = require('child_process');

client.once('ready', () => {
    console.log('Le bot est en ligne! ;)') //you can change dumbass french sentences 
});

client.on('messageCreate', message=>{
    console.log(message.content)
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'start'){
        console.log('Starting MC server');
        message.channel.send('Starting Minecraft Server...');
        child_process.execFile('FILENAME'); //replace FILENAME with your actual .bat filename
    }
});
client.login(token);
