const Discord = require('discord.js');
const path = require('path')
const fs = require('fs')


const x = require('dotenv').config();

const apikey = process.env.Api_key;
const client = new Discord.Client();
const prefix = "!";
const serverid = "";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});




client.login((apikey));
