const Discord = require('discord.js');
const path = require('path')
const fs = require('fs');
const { getPriority } = require('os');


const x = require('dotenv').config();
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

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const x = client.guilds.cache.map(guil => guil.id)
    client.guilds.fetch(x[0]).then(man => {
        man.fetchBans().then(banned => {
            let list = banned.map(user => user.tag).join('\n');
            console.log(list);
        })
    }).catch(err => console.log(err))
})





client.login((apikey));
