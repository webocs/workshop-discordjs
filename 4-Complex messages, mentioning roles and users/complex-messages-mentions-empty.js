require('dotenv').config('./.env');
const Discord = require('discord.js');
const debugInfo = require('debug')('info');
const debugError = require('debug')('error');

const discordClient = new Discord.Client();
discordClient.login(process.env.DISCORD_BOT_TOKEN);

/* Discord client hooks */

// Managing messages reception
discordClient.on('message', async (msg) => {

});

// Managing client ready event
discordClient.on('ready', async () => {
  // Informing ready state
  debugInfo(`Logged in as ${discordClient.user.tag}!`);
});
