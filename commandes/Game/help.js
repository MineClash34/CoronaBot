const fs = require("fs")
const Discord = require("discord.js")
exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText) => 
{
    try {
    var HelpEmbed = new Discord.RichEmbed()
        HelpCommandsList.forEach(command => {
            if (command === "help") return;
        var Command = require(`./${command}.js`)
            HelpEmbed.addField(Command.help.name, Command.help.description)
        })
        HelpEmbed.setAuthor(Lang.HelpEmbedTitle, GetUserAvatarURL(User))
        HelpEmbed.setColor(GetRandomColor())
        message.channel.send(HelpEmbed)
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${CleanText(err)}\n\`\`\``);
      } 
}