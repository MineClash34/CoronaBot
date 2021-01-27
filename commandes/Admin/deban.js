exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername, Logs) =>
{
        if (!args[1]) return;
        var BanUser = message.mentions.users.first()
        if (!BanUser) {
        if (isNaN(args[1])) return;
        if (!BanUser) var BanUser = client.users.get(args[1])
        }
        query.query(`SELECT * FROM ban WHERE DiscordID = ${BanUser.id}`, async function(err, result) {
            if (result.length <= 0) return message.channel.send("Cet utilisateur n'est pas banni.")
        if (!args[2]) {
        Query(`DELETE FROM ban WHERE DiscordID = ${BanUser.id}`)
        BanUser.send(Lang.UnbanMP)
        message.channel.send("Vous avez correctement débanni " + BanUser.username)
        Logs("deban", BanUser, message.createdTimestamp, client, "", "", message)
        } else {
            Query(`DELETE FROM ban WHERE DiscordID = ${BanUser.id}`)
            BanUser.send(Lang.UnbanMP)
            message.channel.send("Vous avez correctement débanni " + BanUser.username)
            Logs("deban", BanUser, message.createdTimestamp, client, "", "", message)
        }
    })
}