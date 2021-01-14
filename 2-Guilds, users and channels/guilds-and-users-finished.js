require('dotenv').config('./.env');
const Discord = require('discord.js');
const debug = require('debug');

const discordClient = new Discord.Client();
discordClient.login(process.env.DISCORD_BOT_TOKEN);
const guildId = ''; // Server ID goes here
const channelId = ''; // Channel ID goes here
const userId = ''; // User ID goes here

// Managing client ready event
discordClient.on('ready', async () => {
  // Informing ready state
  debug(`Logged in as ${discordClient.user.tag}!`);

  // Getting the guild object from the client's chache
  const guild = discordClient.guilds.cache.get(guildId);
  // Getting the channel from the guild's cache using the channelId
  const channel = guild ? guild.channels.cache.get(channelId) : undefined;
  // If there's a channel with such ID, send a message to the channel mentioning the user withuserId
  if (channel) {
    // To mention a user use the notation <@userId> when sending a message
    channel.send(`<@${userId}>`);
  }
});
