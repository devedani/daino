const Discord = require("discord.js");
const client = new Discord.Client();
const ffmpeg = require("ffmpeg-binaries");

const TOKEN = "";
const PREFIX = ">";

var bot = new Discord.Client();

var fortunes = [
    "no bitch",
    "lol fuck you",
    "yes",
    "yee"
];


var coinflip = [
    
];

bot.on("ready", function() {
    console.log("Connected!");
    bot.user.setGame(">help");
});

bot.on("message", function(message) {
    console.log(message.content);
    });

client.on('message', message => {
    if (!message.guild) return;
});

    bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");
    

    switch (args[0].toLowerCase()) {
        case "ding":
            message.channel.send("dong!");
            break;
            case "yoink":
                message.channel.send("doink");
                break;
            case "8ball":
                if (args[1]) {
                    message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
                } else {
                    message.channel.send("you have no future m8");
                    break;
                }

                //coinflip, leveling? gacha, user/server inventory.
                case "embed":
                var embed = new Discord.RichEmbed()
            .addField("I AM A TITLE HOES", "i'm a description bitch!", true)
            .addField("bam", "straight in the pan", true)
            .addField("fuck you,", "m8", true)
            .addField("wow", "rly")
            .setFooter("i'm snervous")
            .setColor(0xFF0000)
            .setTitle("weo")
            .setThumbnail(message.author.avatarURL)
            message.channel.send({ embed });
            break;

            case "suggest":
                if (args[1]) {
                    var embed = new Discord.RichEmbed()
            .setTitle(message.content)
            .setColor(0xffbb00)
            message.channel.sendEmbed({ embed });
                } else {
                    message.channel.send("Please enter a suggestion.");
                    break;
                    }
            
case "headliners1":
message.channel.send("http://i.imgur.com/pbstbwZ.png ,  >chatsim to start"); 
break;

case "chatsim":
message.channel.send("http://i.imgur.com/BhAP4y4.png , say >slide1 to unlock."); 
break;

case "slide1":
message.channel.send("http://i.imgur.com/WXtMjw7.png , input >continue1 to continue.");
break;

case "continue1":
message.channel.send("http://i.imgur.com/yFpykuy.png , **Welcome to Messages. This will introduce you to the mechanics of the chatsim. Then you will have the option to return to the menu and pick a story, each in seperate apps. **If you have a checkpoint command, input now to get back to your place.** If not, input >jasper1");
break;

case "jasper1":
message.channel.send("http://i.imgur.com/xNdhHYy.png"); 
break;


            case "help":
             message.channel.send("The current prefix is: > The current commands are: **TO VIEW HEADLINE/MY BIGGEST COMMANDS USE >headliners1** *Now the current commands:* embed, ding, yoink, 8ball, suggest, youtube, join, leave and of course help. ");
                break;
                case "youtube":
                message.channel.send("https://www.youtube.com/channel/UCeStf6c56CZIrNd4mTTQDAA ");
                break;
                 default:
                        var embed = new Discord.RichEmbed()
            .setTitle("Invalid command.")
            .setColor(0xff0000)
            message.channel.send({ embed });
                };
    

  bot.on("guildMemberAdd", function(member) {
      member.guild.channels.find("name", "w-g").sendMessage(member.toString() + "welcome!");

      member.addRole(member.guild.roles.find("name", "random people"));
  });
    

     bot.on("guildMemberRemove", function(member) {
      member.guild.channels.find("name", "w-g").sendMessage(member.toString() + "bye...");
    }); 

});
bot.login(TOKEN);