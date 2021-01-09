require('dotenv').config('./.env');
const debug = require('debug');
const Discord = require('discord.js');

const discordClient = new Discord.Client();
discordClient.login(process.env.DISCORD_BOT_TOKEN);

// Discord client hooks
discordClient.on('message', async (msg) => {
  if (msg.content === 'ping') {
    msg.member.send('pong');
  }
});

discordClient.on('ready', () => {
  debug.log(`Logged in as ${discordClient.user.tag}!`);
});
