const Discord = require('discord.js');
const client = new Discord.Client();

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


client.on('message', message => {
    const swearWords = ["heck", "damn","darn"];
    if( swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
        message.author.send('Hey! That word has been banned, please don\'t use it!');
      }
})
