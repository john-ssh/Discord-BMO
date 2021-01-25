const Discord = require('discord.js');
const bot = new Discord.Client();
const {prefix, token} = require('./config.json');

bot.on('ready', () =>{
    console.log('BMO is here!');
})

bot.on('message',  msg=>{
    if(msg.content === "bmo"){
        msg.reply("hii bmo here");
    }
})
bot.on




bot.login(token);