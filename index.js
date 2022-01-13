const Discord = require("discord.js");
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});

let botname = "Teszt bot"

bot.on("ready", async() => {
    console.log(`${bot.user.username} elindult!`)

    let státuszok = [
        "!help",
        "SkyCraft",
        "SkyCraft"
    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]

        bot.user.setActivity(status, {type: "WATCHING"})
    }, 3000)
})

bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    if(cmd === `${prefix}hello`){
        message.channel.send("szia");
    }


    if(cmd === `${prefix}help2`){
        let TesztEmbed = new Discord.MessageEmbed()
        .setColor("#98AA12")
        .setAuthor(message.author.username)
        .setTitle("Szerver FelügyelőBOT")
        .addField("Szerver felügyelő:", "figyelem én egy szerver felügyelő BOT vagyok.A munkám az hogy a szervert karbantartsam :D")
        .setThumbnail(message.author.displayAvatarURL())

        message.channel.send(TesztEmbed)
    }
})