exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername, Logs) =>
{
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(Lang.NoAllowedToChangePrefix)
    if (!args[1]) return message.reply(Lang.PrecisePrefix)
    query.query(`SELECT * FROM serversettings WHERE DiscordID = ${message.guild.id}`, function(err, result) {
        if (result.length > 0) {
            Query(`UPDATE serversettings SET prefix = '${args[1]}' WHERE DiscordID = ${message.guild.id}`)
            message.channel.send(Lang.PrefixChanged + args[1])
        } else {
            Query(`INSERT INTO serversettings (DiscordID, Name, Prefix) VALUES (${message.guild.id}, '${message.guild.name}', '${args[1]}')`)
            message.channel.send(Lang.PrefixChanged + args[1])
        }
    })
}


const Lang = require("../lang/fr.json")
module.exports.help = {
    name: "Prefix",
    description: Lang.PrefixCommandDescription
}