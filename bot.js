const Discord = require('discord.js');

require('dotenv').config();

const apikey = process.env.apikey;

const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

});

client.on("guildBanAdd", (ban, user) => {
    const users = client.guilds.cache.map(guil => guil.id);



    users.forEach(guildholding => {
        if (!(ban.id === guildholding)) {
            if ((ban.fetchBans().then(BannedUsers => {
                    BannedUsers.forEach(BannedUser => {
                        if (BannedUser.user.username === user.username) {
                            return false
                        }
                    });

                    return true
                }))) client.guilds.fetch(guildholding).then(currentguild => currentguild.members.ban(user.id, {
                reason: 'this is a asyncronous ban across all servers server | name: ' + ban.name
            })).then(console.log("ban successful the user was: " + user.username)).catch(err => {
                throw err
            })
        }
    })
});





client.on("guildBanRemove", (guild, user) => {
    const x = client.guilds.cache.map(guil => guil.id);
    x.forEach(guildholding => {
        if (!(guild.id === guildholding)) {
            if ((guild.fetchBans()
                    .then(mann => {
                        mann.forEach(mmm => {
                            if (mmm.user.username === user.username) {
                                return true
                            }
                        });
                        return false;
                    })))
                client.guilds.fetch(guildholding).then(eee => eee.members.unban(user.id, {
                    reason: 'this is a asyncronous unban across all servers | server: ' + guild.name
                })).then(console.log("unban successful the user was: " + user.username)).catch(err => console.log(""))
        }
    })
})
client.login((apikey));