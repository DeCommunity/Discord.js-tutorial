let discord = require("discord.js");
let botconfig = require("./botconfig.json");
let bot = new discord.Client();

bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find('name', 'log');
    const user = member.user.tag
    const embed = new Discord.RichEmbed()
            .setTimestamp()
            .setFooter('Speler is gejoind')
            .setColor(0x62f442)
            .setAuthor(`${user}`, member.user.displayAvatarURL);
    channel.send({ embed });
});
  
bot.on('guildMemberRemove', member => {
  
    const channel = member.guild.channels.find('name', 'log');
    const user = member.user.tag
    const embed = new Discord.RichEmbed()
            .setTimestamp()
            .setFooter('Speler is geleaved')
            .setColor(0xea2b09)
            .setAuthor(`${user}`, member.user.displayAvatarURL);
    channel.send({ embed });
});

bot.on("ready", async => {
    console.log(`${bot.user.username} is online op ${bot.guilds.size} servers!`)
    bot.user.setActivity("De Community", {type: "PLAYING"})
    bot.user.setStatus("online")
});

bot.login(botconfig.token)