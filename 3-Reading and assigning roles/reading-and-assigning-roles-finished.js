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
    // Check if it's a role assignment message
    if (msg.content === 'bot! GIVE ME A ROLE!') {
      await msg.member.roles.add(roleId);
      await msg.channel.send('Have your role!!');
    } else if (msg.content === 'bot! REMOVE THE ROLE!') {
      // If it's not a role assignment, is it a remove role message?
      await msg.member.roles.remove(roleId);
      await msg.channel.send('Decide already! ROLE IS GONE!');
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
