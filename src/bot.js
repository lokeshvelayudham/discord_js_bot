require('dotenv').config();

const {Client} = require('discord.js');
const client = new Client();
client.login(process.env.DISCORD_JS_TOKEN);