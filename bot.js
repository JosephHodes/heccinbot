const Discord = require('discord.js');
const path = require('path')
const fs = require('fs')


const x = require('dotenv').config({path: path.
    resolve('/../home/joseph/Desktop', '.env')
});

const apikey = process.env.Api_key;
const client = new Discord.Client();
const  prefix = "!";
const serverid = "";

client.on('ready', ()=>{
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
	if(message.content === prefix + "join"){
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            console.log(connection);
        }else{
            message.reply("sorry your not connected");
        }}});
client.on('message', msg=>{
    if (msg.content==="shutdown"){
        apikey = null;
    }
});

client.on('message',msg=>  {
   
    serverid==msg.guild.id
    console.log(msg.guild.id)
})


client.on('message',async msg=>{
    if(msg.content === prefix + "leave"){
        if (msg.member.voice.channel) {
            const connection = await message.member.voice.channel.leave();
            console.log(connection);
        }else{
            message.reply("please join a voice channel")
        }
}
});



client.login((apikey));
