require('dotenv').config('./.env');
const Discord = require('discord.js');
const debugInfo = require('debug')('info');
const debugError = require('debug')('error');

const discordClient = new Discord.Client();
discordClient.login(process.env.DISCORD_BOT_TOKEN);
const roleId = 'YOUR_ROLE_ID';

/* Discord client hooks */

// Managing messages reception
discordClient.on('message', async (msg) => {
  try {
    // Check if it's a signup message
    if (msg.content === 'bot! GIVE ME A ROLE!') {
      await msg.member.roles.add(roleId);
      await msg.channel.send(`<@${msg.member.user.id}> have your role!!`);
    } else if (msg.content === 'bot! REMOVE THE ROLE!') {
      await msg.member.roles.remove(roleId);
      await msg.channel.send(`<@${msg.member.user.id}> decide already! ROLE IS GONE!`);
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
