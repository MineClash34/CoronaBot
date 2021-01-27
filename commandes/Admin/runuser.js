exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername, Logs, GetItem, GetLang) => 
{
var User = message.mentions.users.first()
if (!User) return message.reply("Mentionne un pelo :)")
query.query(`SELECT * FROM ban WHERE DiscordID = ${GetUserID(User)}`, async function(err, result) {
    if (result.length > 0) return message.channel.send(Lang.YouAreBanned)
const ContentCaracterSeparated = message.content.split(" ")
ContentCaracterSeparated.shift()
ContentCaracterSeparated.shift()
if (ContentCaracterSeparated.includes(" ")) {
    var requete = ContentCaracterSeparated.join("").split(" ")[0]
}
else {
    var requete = ContentCaracterSeparated.join("")
}
var CommandFilter = CommandsList.filter(command => command.toLowerCase().startsWith(requete.toLowerCase()) === true)
if (CommandFilter.length >= 2) return message.reply(Lang.ManyCommandsFind + "```" + CommandFilter.join(", ") + "```")
const cmd = client.commands.get(CommandFilter.join(""))
if (!cmd) return message.reply(Lang.NoCommandsFind);
query.query(`SELECT * FROM userinfo WHERE DiscordID = ${GetUserID(User)}`, async function(err, result) {
    if (result.length > 0) {
        cmd.run(GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername, Logs, GetItem, GetLang)
} else {
    NewUserRegistration(message, User);
}
})
})
}
