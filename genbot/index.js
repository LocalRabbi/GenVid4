const Discord = require('discord.js');
const { prefix, token, } = require('./config.json');
const client = new Discord.Client();
const { accounts1, accounts2, accounts3, } = require('./accounts.json');
const fs = require('fs');

client.once('ready', () => {
    console.log(('READY'))
    stock1 = accounts1.length
    stock2 = accounts2.length
    stock3 = accounts3.length
})

client.on("message", message => {
    console.log(message.content);
})

client.on("message", message => {
    if(message.content.startsWith(`${prefix}Acc1`)) {
        if(message.channel.type == "text") {
            let result1 = Math.floor((Math.random() * accounts1.length))
            let acc1embed = new Discord.MessageEmbed()
            .setAuthor('TESTgenbot', 'https://i.ibb.co/2j470vK/asdasdssadsssas.png')
            .setColor('#94bf49')
            .setTitle("Acc1 Succesfully generated!")
            .setDescription(`[Click This Link](${accounts1[result1]})\n\n`)
            .setTimestamp()
            .addField('-', "**Instructions:**\nCopy the link, paste it into your browser, and complete the ad for your account!")
            .addField('-', "**Enjoy your New Account!**\n Do not change the password, doing so will get you blacklisted from the bot! Thank you for using TESTgenbot!")
            .setFooter("made by MrshortTall with credit to Bezzy")
            .setThumbnail('https://i.ibb.co/3zgPNj6/600x600wa.png');

        message.author.send(acc1embed);
        message.reply("I've Sent You the Account!").then(message => {
            message.delete({ timeout: 3500 })
        })
        message.delete({ timeout: 3500 })
        }
    }
    if(message.content.startsWith(`${prefix}Acc2`)) {
        if(message.channel.type == "text") {
            let result2 = Math.floor((Math.random() * accounts2.length))
            let acc2embed = new Discord.MessageEmbed()
            .setAuthor('TESTgenbot', 'https://i.ibb.co/2j470vK/asdasdssadsssas.png')
            .setColor('#94bf49')
            .setTitle("Acc2 Succesfully generated!")
            .setDescription(`[Click This Link](${accounts2[result2]})\n\n`)
            .setTimestamp()
            .addField('-', "**Instructions:**\nCopy the link, paste it into your browser, and complete the ad for your account!")
            .addField('-', "**Enjoy your New Account!**\n Do not change the password, doing so will get you blacklisted from the bot! Thank you for using TESTgenbot!")
            .setFooter("made by MrshortTall with credit to Bezzy")
            .setThumbnail('https://i.ibb.co/3zgPNj6/600x600wa.png');

        message.author.send(acc2embed);
        message.reply("I've Sent You the Account!").then(message => {
            message.delete({ timeout: 3500 })
        })
        message.delete({ timeout: 3500 })
        }
    }
    if(message.content.startsWith(`${prefix}Acc3`)) {
        if(message.channel.type == "text") {
            let result3 = Math.floor((Math.random() * accounts3.length))
            let acc3embed = new Discord.MessageEmbed()
            .setAuthor('TESTgenbot', 'https://i.ibb.co/2j470vK/asdasdssadsssas.png')
            .setColor('#94bf49')
            .setTitle("Acc3 Succesfully generated!")
            .setDescription(`[Click This Link](${accounts3[result3]})\n\n`)
            .setTimestamp()
            .addField('-', "**Instructions:**\nCopy the link, paste it into your browser, and complete the ad for your account!")
            .addField('-', "**Enjoy your New Account!**\n Do not change the password, doing so will get you blacklisted from the bot! Thank you for using TESTgenbot!")
            .setFooter("made by MrshortTall with credit to Bezzy")
            .setThumbnail('https://i.ibb.co/3zgPNj6/600x600wa.png');

        message.author.send(acc3embed);
        message.reply("I've Sent You the Account!").then(message => {
            message.delete({ timeout: 3500 })
        })
        message.delete({ timeout: 3500 })
        }
    }


    // STOCK AND STATUS
    client.user.setActivity("+Help | Free Accounts");

    if(message.content.startsWith(`${prefix}Stock`)) {
        let embedstock = new Discord.MessageEmbed()
        .setAuthor('TESTgenbot', 'https://i.ibb.co/pwSvqdL/asdasdssadsssas.png', 'https://localrabbi.wtf')
        .setTitle('Stock of the Accounts!')
        .addFields(
            { name: 'acc1:', value: (stock1), inline: true},
            { name: 'acc2:', value: (stock2), inline: true},
            { name: 'acc3:', value: (stock3), inline: true},
        )
        .setThumbnail('https://i.ibb.co/XpdGXc2/discord-bot-logo-art.png')
        .setFooter('Made by MrShortTall')
        .setTimestamp();
    message.channel.send(embedstock).then(message => {
        message.delete({ timeout: 10000 })
    })
    message.delete({ timeout: 10000})
    }

    if(message.content.startsWith(`${prefix}Help`)) {
        let embedhelp = new Discord.MessageEmbed()
        .setAuthor('TESTgenbot', 'https://i.ibb.co/pwSvqdL/asdasdssadsssas.png', 'https://localrabbi.wtf')
        .setTitle('Stock of the Accounts!')
        .addFields(
            { name: '+Acc1:', value: ("Generates an Acc1 Account!"), inline: true},
            { name: '+Acc2:', value: ("Generates an Acc2 Account!"), inline: true},
            { name: '+Acc3:', value: ("Generates an Acc3 Account!"), inline: true},
            { name: '+Stock:', value: ("Shows the stock of every Account!"), inline: true},
            { name: '+Help:', value: ("Brings this menu up!"), inline: true},
        )
        .setThumbnail('https://i.ibb.co/XpdGXc2/discord-bot-logo-art.png')
        .setFooter('Made by MrShortTall')
        .setTimestamp();
    message.channel.send(embedhelp).then(message => {
        message.delete({ timeout: 10000 })
    })
    message.delete({ timeout: 10000})
    }
if(message.content.startsWith(`${prefix}acc1`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Acc1\'").then(message => {
        message.delete({ timeout: 2000 })
    })
    message.delete({ timeout: 2000 })
}
if(message.content.startsWith(`${prefix}acc2`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Acc2\'").then(message => {
        message.delete({ timeout: 2000 })
    })
    message.delete({ timeout: 2000 })
}
if(message.content.startsWith(`${prefix}acc3`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Acc3\'").then(message => {
        message.delete({ timeout: 2000 })
    })
    message.delete({ timeout: 2000 })
}
if(message.content.startsWith(`${prefix}help`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Help\'").then(message => {
        message.delete({ timeout: 2000 })
    })
    message.delete({ timeout: 2000 })
}
if(message.content.startsWith(`${prefix}stock`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Stock\'").then(message => {
        message.delete({ timeout: 2000 })
    })
    message.delete({ timeout: 2000 })
}
if(message.channel.name == "general") {
    message.delete({ timeout: 10000})

}

})
client.login(token);