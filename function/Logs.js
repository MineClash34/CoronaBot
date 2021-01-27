const Discord = require("discord.js")
const GetRandomColor = require("./GetRandomColor.js")
const query = require("../MySQL.js")
const ConvertMsToDate = require("./ConvertMsToDate.js")
module.exports = function (Type, User, Time, client, TimeDispo, Reason, message) {
    if (Type.toLowerCase() === "works") {
        client.channels.get("714781590915645472").send(User.id).then(() => {
            query.query(`SELECT * FROM usertiming WHERE DiscordID = ${User.id}`, function(err, result) {
            let WorkLogEmbed = new Discord.RichEmbed()
            .setAuthor("Works", User.displayAvatarURL)
            .setColor(GetRandomColor())
            .setDescription(`**Username** : ${User.username}\n**ID** : ${User.id}\n**Time** : ${ConvertMsToDate(Time - TimeDispo)}\n**Serveur Name** : ${message.guild.name}\n**Serveur ID** : ${message.guild.id}`)
            .setTimestamp()
            client.channels.get("714781590915645472").send(WorkLogEmbed)
        })
    })
    } else 
    if (Type.toLowerCase() === "new user") {
        client.channels.get("714781624197316644").send(User.id).then(() => {
            let WorkLogEmbed = new Discord.RichEmbed()
            .setAuthor("New User", User.displayAvatarURL)
            .setColor(GetRandomColor())
            .setDescription(`**Username** : ${User.username}\n**ID** : ${User.id}\n**Time** : ${new Date(Time)}\n**Serveur Name** : ${message.guild.name}\n**Serveur ID** : ${message.guild.id}\n**Inscrit sur Discord depuis** : ${User.createdAt.toString().split("T")[0].split("-")[2], User.createdAt.toString().split("T")[0].split("-")[1], User.createdAt.toString().split("T")[0].split("-")[0]}`)
            .setTimestamp()
            client.channels.get("714781624197316644").send(WorkLogEmbed)
        })
    } else
    if (Type.toLowerCase() === "ban") {
        client.channels.get("714781741923172413").send(User.id).then(() => {
            let WorkLogEmbed = new Discord.RichEmbed()
            .setAuthor("Ban", User.displayAvatarURL)
            .setColor(0xdb1f1f)
            .setDescription(`**Username** : ${User.username}\n**ID** : ${User.id}\n**Time** : ${new Date(Time)}\n**Serveur Name** : ${message.guild.name}\n**Serveur ID** : ${message.guild.id}\n**Pour** : ${Reason}\n**Par** : ${message.author.username}`)
            .setTimestamp()
            client.channels.get("714781741923172413").send(WorkLogEmbed)
        })
    } else
    if (Type.toLowerCase() === "deban") {
        client.channels.get("714781741923172413").send(User.id).then(() => {
            let WorkLogEmbed = new Discord.RichEmbed()
            .setAuthor("Unban", User.displayAvatarURL)
            .setColor(0x46d925)
            .setDescription(`**Username** : ${User.username}\n**ID** : ${User.id}\n**Time** : ${new Date(Time)}\n**Serveur Name** : ${message.guild.name}\n**Serveur ID** : ${message.guild.id}\n**Par** : ${message.author.username}`)
            .setTimestamp()
            client.channels.get("714781741923172413").send(WorkLogEmbed)
        })
    } else
    if (Type.toLowerCase() === "walk") {
        client.channels.get("714781606015139850").send(User.id).then(() => {
            query.query(`SELECT * FROM usertiming WHERE DiscordID = ${User.id}`, function(err, result) {
            let WorkLogEmbed = new Discord.RichEmbed()
            .setAuthor("Walk", User.displayAvatarURL)
            .setColor(GetRandomColor())
            .setDescription(`**Username** : ${User.username}\n**ID** : ${User.id}\n**Time** : ${ConvertMsToDate(Time - TimeDispo)}\n**Serveur Name** : ${message.guild.name}\n**Serveur ID** : ${message.guild.id}`)
            .setTimestamp()
            client.channels.get("714781606015139850").send(WorkLogEmbed)
        })
    })
    }
}