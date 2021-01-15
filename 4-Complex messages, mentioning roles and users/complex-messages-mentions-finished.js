require('dotenv').config('./.env');
const Discord = require('discord.js');
const debugInfo = require('debug')('info');
const debugError = require('debug')('error');

const discordClient = new Discord.Client();
discordClient.login(process.env.DISCORD_BOT_TOKEN);

/* Discord client hooks */

// Managing messages reception
discordClient.on('message', async (msg) => {
  try {
    // Check if it's a signup message
    if (msg.content === 'hey bot!') {
      // To mention a user use <@userId>
      await msg.channel.send(`hey! <@${msg.member.user.id}>, how are you?`);
    } else if (msg.content === 'what am I doing here bot?') {
      let allRoles = '';
      // To mention a role, use & after @, something like: <@&roleId>
      msg.member.roles.cache.forEach((role) => {
        allRoles += `<@&${role.id}>,`;
      });
      await msg.channel.send(`Well it looks like you are part of: ${allRoles}`);
    }
  } catch (e) {
    debugError(e);
    msg.channel.send("This is awkward, there's an error with my inner circuits, talk to my maker!");
  }
});

// Managing client ready event
discordClient.on('ready', async () => {
  // Informing ready state
  debugInfo(`Logged in as ${discordClient.user.tag}!`);
});
