const Discord = require('discord.js');
const path = require('path')
const x = require('dotenv').config({path: path.
    resolve('/../home/joseph/Desktop', '.env')
});
const apikey = process.env.Api_key;
const client = new Discord.Client();
const  prefix = "!"
client.on('ready', () => {
    console.log(x);
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'why are we here') {
    msg.reply('Pong!');
  }
});

client.login(apikey);
