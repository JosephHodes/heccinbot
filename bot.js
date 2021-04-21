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

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const x = client.guilds.cache.map(guil => guil.id)
    
        console.log(x)
    x.forEach(ee=>{
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
