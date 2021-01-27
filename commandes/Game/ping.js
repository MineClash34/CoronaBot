const Discord = require("discord.js")
exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText) => 
{

  let startTime = Date.now();

let embed = new Discord.RichEmbed()

    .setColor(GetRandomColor())

    .setDescription(

      "⏲ Ping du Bot : ***" +

        (new Date() - startTime).toFixed(0) +

        " ms***\n💓 Ping de l'API  : ***" +

        Math.round(client.ping).toFixed(0) +

        " ms***"

    );

  message.channel.send(embed).then((botmessage) => {

    let embed = new Discord.RichEmbed()

      .setColor(GetRandomColor())

      .setDescription(

        "⏲ Ping du Bot : ***" +

          (new Date() - startTime - Math.round(client.ping)).toFixed(0) +

          " ms***\n💓 Ping de l'API : ***" +

          Math.round(client.ping).toFixed(0) +

          " ms***\n" +

          ":satellite: Ping Total : ***" +

          (new Date() - startTime).toFixed(0) +

          " ms***"

      );

    botmessage.edit(embed);

  });


}
const Lang = require("../lang/fr.json")
module.exports.help = {
    name: "Ping",
    description: Lang.PingCommandDescription
}