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

client.on('message', async message => {
	if(message.content === prefix + "join"){
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            console.log(connection);
        }else{
            message.reply("sorry your not connected");
        }
}});
client.on('message',async msg=>{
    if(msg.content === prefix + "leave"){
        if (msg.member.voice.channel) {
            const connection = await message.member.voice.channel.leave();
            console.log(connection);
        }
}});

client.on('message', msg => {
  if (msg.content.split(" "[0]) === prefix+'Setprefix'||prefix+'setprefix') {
    const prefix = (msg.content).split(" "[1]).slice(0,1)
    msg.reply("```"+"Your new prefix is: "+prefix+"```")
  }else{
      msg.reply(console.error())
  }
});
client.on('message', msg=>{
    if (msg.content==="shutdown"){
        apikey = null;
    }
})

client.login(apikey);
