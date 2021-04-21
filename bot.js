const Discord = require('discord.js');
require('dotenv').config();

const apikey = process.env.apikey;
const client = new Discord.Client();
const prefix = "!";
const serverid = "";

var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.measurementId
};

const fire = require("firebase").default.initializeApp(firebaseConfig);

client.on("guildBanAdd", ban => {
    console.log(`Logged in as ${client.user.tag}!`);
    const x = client.guilds.cache.map(guil => guil.id)
    
        
    x.forEach(ee=>{
        if(!(ban.id==ee)){
            client.guilds.fetch(ee).then(eee=>eee.member().ban({reason:"this is a automated ban through the bot"}).then(xx=>console.log("bann successfull")).catch(ree=>{throw ree}))
        }
    client.guilds.fetch(ee).then(x=>{
        x.fetchBans().then(sys=>{
            console.log(sys)
           
        }
        ).catch(err=>{throw err})})
    })
    })

client.on('guildBanAdd', ban => {

})




client.login((apikey));
