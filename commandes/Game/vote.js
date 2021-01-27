const Discord = require("discord.js")
const { Convert } = require("convert-svg-to-png")
const svgToImg = require("svg-to-img");
exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername, Logs, GetItem, GetLang) =>
{
(async () => {
  const image = await svgToImg.from("<svg xmlns='https://top.gg/api/widget/675373406039965697.svg'/>").toPng();
    let VoteEmbed = new Discord.RichEmbed()
    .setTitle("VOTE")
    .setColor(GetRandomColor())
    .setDescription(Lang.ClickHere)
    .setImage(image)
    .setTimestamp()
    message.channel.send(VoteEmbed)
    })();
}


const Lang = require("../lang/fr.json")
module.exports.help = {
    name: "Market",
    description: Lang.MarketCommandDescription
}