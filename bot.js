const Discord = require('discord.js');
const client = new Discord.Client();

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


        var filterWords = ["fool", "dumb", "couch potato"];
        var rgx = new RegExp(filterWords.join(""), "gi");

        function wordFilter(str) {
        	return str.replace(rgx, "****");
        }
