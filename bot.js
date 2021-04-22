const Discord = require('discord.js');
require('dotenv').config();

const apikey = process.env.apikey;
const client = new Discord.Client();

client.on("ready",()=>{console.log(`Logged in as ${client.user.tag}!`)
const x = client.guilds.cache.map(guil => guil.id)
console.log(x)
})
client.on("guildBanAdd", (ban,user )=> {
    const x = client.guilds.cache.map(guil => guil.id)
    console.log(x)
    x.forEach(guildholding=>{
        if(!(ban.id===guildholding)){
            if(!(ban.fetchBans().then(mann =>{mann.forEach(mmm=>{if(mmm.user.username===user.username){return true} })
            return false})))
            client.guilds.fetch(guildholding).then(eee=>eee.members.ban(user.id)).then(console.log("ban successful the user was: " +user.username)).catch(err=>console.log(err))
        }
    })
    })

// client.on('guildBanAdd', ban => {

// })




client.login((apikey));
