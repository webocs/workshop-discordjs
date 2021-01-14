require('dotenv').config('./.env');
const Discord = require('discord.js');
const debug = require('debug');

const discordClient = new Discord.Client();
discordClient.login(process.env.DISCORD_BOT_TOKEN);
const guildId = ''; // Server ID goes here
const channelId = ''; // Channel ID goes here
const userId = ''; // User ID goes here

discordClient.on('ready', async () => {
  // Informing ready state
  debug(`Logged in as ${discordClient.user.tag}!`);
});
