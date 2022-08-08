const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '';

client.once('ready', () => {
   console.log('Botul lui neko este online');
});

client.on('message', message =>{
    if(!message.content.startWhit(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ip'){
        message.channel.send('pula mea imi zici ce ip vrei')
    }
});

client.login('OTQ4Mjc0NTE0ODg4ODg0Mjc1.GXmNsj.8dOCa-2g-zOeXcXErn8R7y2V2GZDWkfatsLbu0')
   
