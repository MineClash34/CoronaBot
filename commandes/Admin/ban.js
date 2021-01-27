exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername, Logs) =>
{
        if (!args[1]) return;
        var BanUser = message.mentions.users.first()
        if (!BanUser) {
        if (isNaN(args[1])) return;
        if (!BanUser) var BanUser = client.users.get(args[1])
        }
        const AdmindID = ["359218206897995776", "383754895724904448", "423956209587191818"]
        if (AdmindID.includes(BanUser.id) && message.author.id !== "359218206897995776") return;
        query.query(`SELECT * FROM ban WHERE DiscordID = ${BanUser.id}`, async function(err, result) {
            if (result.length > 0) return message.channel.send("Cet utilisateur est déjà banni.")
        if (!args[2]) {
        Query(`INSERT INTO ban (DiscordID, Time, Username) VALUES (${BanUser.id}, ${message.createdTimestamp}, '${BanUser.username}')`)
        BanUser.send(Lang.BanMP + "No specified")
        message.channel.send("Vous avez correctement banni " + BanUser.username)
        Logs("ban", BanUser, message.createdTimestamp, client, "t", "No specified", message)
        } else {
            args.shift()
            args.shift()
            Query(`INSERT INTO ban (DiscordID, Time, Username, Reason) VALUES (${BanUser.id}, ${message.createdTimestamp}, '${BanUser.username}', '${args.join(" ")}')`)
            BanUser.send(Lang.BanMP + args.join(""))
            message.channel.send("Vous avez correctement banni " + BanUser.username)
            Logs("ban", BanUser, message.createdTimestamp, client,"t", args.join(" "), message)
        }
    })
}