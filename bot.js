const Discord = require('discord.js');
const path = require('path')
const fs = require('fs')


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
});




client.login((apikey));
