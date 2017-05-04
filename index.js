const MessageHandler = require("./handler");
const Discord = require("discord.js");
const client = new Discord.Client();

client.login("MzA5NTU4NTk0ODU1MTA4NjA4.C-xPGQ.NPFFeOcJIFWhlsu1ptybYPOpT08");

client.on('ready', () => {
  console.log('I am ready!');
});

client.on("error", (error) => {
  console.log(error);
});

client.on("message", (message) => {
  if (message.content.startsWith("!")) {
    new MessageHandler(message).process();
  }
});