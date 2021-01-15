require('dotenv').config('./.env');
const Discord = require('discord.js');
const { MongoClient } = require('mongodb');

const discordClient = new Discord.Client();
discordClient.login(process.env.DISCORD_BOT_TOKEN);

// Initalizing mongodb
const uri = `mongodb+srv://
            ${process.env.DB_USER}:
            ${process.env.DB_PASSWORD}@
            ${process.env.DB_CLUSTER_URL}/
            ${process.env.DB_NAME}
            ?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true });

/* Discord client hooks */

// Managing messages reception
discordClient.on('message', async (msg) => {
  // Look up the messaging user to determine if it's already registered or not
  const registeredUser = await client.db(process.env.DB_NAME).collection('RegisteredUsers').findOne({ userDiscordId: msg.member.user.id });

  // Check if it's a signup message
  if (msg.content === 'bot! add me') {
    // If it's a signup message and the user is not registered, then add it to the DB
    if (!registeredUser) {
      await client.db(process.env.DB_NAME).collection('RegisteredUsers').insertOne({ userDiscordId: msg.member.user.id });
      msg.channel.send(`<@${msg.member.user.id}> you were added to the list!`);
    } else {
    // If it's not registered, tell them
      msg.channel.send(`<@${msg.member.user.id}> you are already on the list!`);
    }
  } else if (msg.content === 'bot! remove me') {
    // If the user wants to leave, and it's registered, then remove it
    if (registeredUser) {
      await client.db(process.env.DB_NAME).collection('RegisteredUsers').removeOne({ userDiscordId: msg.member.user.id });
      msg.channel.send(`<@${msg.member.user.id}> you were removed from the list!`);
    } else {
      // If it's not registered, tell them
      msg.channel.send(`<@${msg.member.user.id}> you were not part of he list!`);
    }
  } else if (msg.content === 'bot! list') {
    // If the user wants to leave, and it's registered, then remove it
    if (registeredUser) {
      const allRegisters = await client.db(process.env.DB_NAME).collection('RegisteredUsers').find({}).toArray();
      let usersString = '';
      allRegisters.forEach((user) => {
        usersString = `<@${user.userDiscordId}>,${usersString}`;
      });
      msg.channel.send(`Here's the list: ${usersString}`);
    } else {
      // If it's not registered, tell them
      msg.channel.send(`<@${msg.member.user.id}> you were not part of he list!`);
    }
  }
});
