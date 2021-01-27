exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername, Logs) => 
{
            try {
            query.query(`SELECT * FROM jobs WHERE DiscordID = ${GetUserID(User)}`, async function(err, JobsResult) {
            if (JobsResult[0].Jobs === "Mineur") {
                var ExpWin = Math.round(Math.random() * 100) + 50
                var StoneWin = Math.round(Math.random() * 20) + 5
                var CoalWin = Math.round(Math.random() * 9) + 1
                query.query(`SELECT * FROM usertiming WHERE DiscordID = ${GetUserID(User)}`, async function(err, TimingResult) {
                if (Date.now() >= TimingResult[0].Works) {
                    query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, Part1Result) {
                    query.query(`SELECT * FROM level WHERE DiscordID = ${GetUserID(User)}`, async function(err, LevelResult) {
                    Query(`UPDATE usertiming SET Works = ${Date.now() + 3600000} WHERE DiscordID = ${GetUserID(User)}`)
                    Query(`UPDATE inventairepart1 SET Stone = ${Part1Result[0].Stone + StoneWin}, Coal = ${Part1Result[0].Coal + CoalWin} WHERE DiscordID = ${GetUserID(User)}`)
                    if (await GetUserExpRequire(User) <= LevelResult[0].LevelHas + ExpWin) {
                        Query(`UPDATE level SET Level = ${LevelResult[0].Level + 1}, LevelHas = ${(LevelResult[0].LevelHas + ExpWin) - await GetUserExpRequire(User)} WHERE DiscordID = ${GetUserID(User)}`)
                    }
                    else {
                        Query(`UPDATE level SET LevelHas = ${LevelResult[0].LevelHas + ExpWin} WHERE DiscordID = ${GetUserID(User)}`)
                    }
                    message.channel.send(`**${User.username}**, ${Lang.WorksRecup} : **${StoneWin}** ${AddEmoji("Stone")} ${Lang.Stone} ${Lang.WorksRecupAnd} : **${CoalWin}** ${AddEmoji("Coal")} ${Lang.Coal}. **${ExpWin}** ${AddEmoji("Exp")} Exp.`)
                    Logs("works", User, message.createdTimestamp, client, TimingResult[0].Works, "", message)
            })
        })
            } else {
                message.channel.send(Lang.IndisponibleWorks + ConvertMsToDate(TimingResult[0].Works - Date.now()))
            }
        })
    } else if (JobsResult[0].Jobs === "Bucheron") {
        var ExpWin = Math.round(Math.random() * 100) + 50
        var StoneWin = Math.round(Math.random() * 9) + 1
        var WoodWin = Math.round(Math.random() * 20) + 5
        query.query(`SELECT * FROM usertiming WHERE DiscordID = ${GetUserID(User)}`, async function(err, TimingResult) {
        if (Date.now() >= TimingResult[0].Works) {
            query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, Part1Result) {
            query.query(`SELECT * FROM level WHERE DiscordID = ${GetUserID(User)}`, async function(err, LevelResult) {
            Query(`UPDATE usertiming SET Works = ${Date.now() + 3600000} WHERE DiscordID = ${GetUserID(User)}`)
            Query(`UPDATE inventairepart1 SET Stone = ${Part1Result[0].Stone + StoneWin}, Wood = ${Part1Result[0].Wood + WoodWin} WHERE DiscordID = ${GetUserID(User)}`)
            if (await GetUserExpRequire(User) <= LevelResult[0].LevelHas + ExpWin) {
                Query(`UPDATE level SET Level = ${LevelResult[0].Level + 1}, LevelHas = ${(LevelResult[0].LevelHas + ExpWin) - await GetUserExpRequire(User)} WHERE DiscordID = ${GetUserID(User)}`)
            }
            else {
                Query(`UPDATE level SET LevelHas = ${LevelResult[0].LevelHas + ExpWin} WHERE DiscordID = ${GetUserID(User)}`)
            }
            message.channel.send(`**${User.username}**, ${Lang.WorksRecup} : **${WoodWin}** ${AddEmoji("Wood")} ${Lang.Wood} ${Lang.WorksRecupAnd} : **${StoneWin}** ${AddEmoji("Stone")} ${Lang.Stone}. **${ExpWin}** ${AddEmoji("Exp")} Exp.`)
            Logs("works", User, message.createdTimestamp, client, TimingResult[0].Works, "", message)
    })
})
    } else {
        message.channel.send(Lang.IndisponibleWorks + ConvertMsToDate(TimingResult[0].Works - Date.now()))
    }
})
} else if (JobsResult[0].Jobs === "Forgeron") {
    var ExpWin = Math.round(Math.random() * 100) + 50
    var StoneWin = Math.round(Math.random() * 20) + 5
    var IronWin = Math.round(Math.random() * 4) + 1
    query.query(`SELECT * FROM usertiming WHERE DiscordID = ${GetUserID(User)}`, async function(err, TimingResult) {
    if (Date.now() >= TimingResult[0].Works) {
        query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, Part1Result) {
        query.query(`SELECT * FROM level WHERE DiscordID = ${GetUserID(User)}`, async function(err, LevelResult) {
        Query(`UPDATE usertiming SET Works = ${Date.now() + 3600000} WHERE DiscordID = ${GetUserID(User)}`)
        Query(`UPDATE inventairepart1 SET Stone = ${Part1Result[0].Stone + StoneWin}, Iron = ${Part1Result[0].Iron + IronWin} WHERE DiscordID = ${GetUserID(User)}`)
        if (await GetUserExpRequire(User) <= LevelResult[0].LevelHas + ExpWin) {
            Query(`UPDATE level SET Level = ${LevelResult[0].Level + 1}, LevelHas = ${(LevelResult[0].LevelHas + ExpWin) - await GetUserExpRequire(User)} WHERE DiscordID = ${GetUserID(User)}`)
        }
        else {
            Query(`UPDATE level SET LevelHas = ${LevelResult[0].LevelHas + ExpWin} WHERE DiscordID = ${GetUserID(User)}`)
        }
        message.channel.send(`**${User.username}**, ${Lang.WorksRecup} : **${StoneWin}** ${AddEmoji("Stone")} ${Lang.Stone} ${Lang.WorksRecupAnd} : **${IronWin}** ${AddEmoji("Iron")} ${Lang.Iron}. **${ExpWin}** ${AddEmoji("Exp")} Exp.`)
        Logs("works", User, message.createdTimestamp, client, TimingResult[0].Works, "", message)
})
})
} else {
    message.channel.send(Lang.IndisponibleWorks + ConvertMsToDate(TimingResult[0].Works - Date.now()))
}
})
} else if (JobsResult[0].Jobs === "Joaillier") {
    var ExpWin = Math.round(Math.random() * 100) + 50
    var BrutCarbonWin = Math.round(Math.random() * 4) + 1
    var CoalWin = Math.round(Math.random() * 10) + 5
    query.query(`SELECT * FROM usertiming WHERE DiscordID = ${GetUserID(User)}`, async function(err, TimingResult) {
    if (Date.now() >= TimingResult[0].Works) {
        query.query(`SELECT * FROM inventairepart2 WHERE DiscordID = ${GetUserID(User)}`, async function(err, Part2Result) {
            query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, Part1Result) {
        query.query(`SELECT * FROM level WHERE DiscordID = ${GetUserID(User)}`, async function(err, LevelResult) {
        Query(`UPDATE usertiming SET Works = ${Date.now() + 3600000} WHERE DiscordID = ${GetUserID(User)}`)
        Query(`UPDATE inventairepart2 SET CarboneBrut = ${Part2Result[0].CarboneBrut + BrutCarbonWin} WHERE DiscordID = ${GetUserID(User)}`)
        Query(`UPDATE inventairepart1 SET Coal = ${Part1Result[0].Coal + CoalWin} WHERE DiscordID = ${GetUserID(User)}`)
        if (await GetUserExpRequire(User) <= LevelResult[0].LevelHas + ExpWin) {
            Query(`UPDATE level SET Level = ${LevelResult[0].Level + 1}, LevelHas = ${(LevelResult[0].LevelHas + ExpWin) - await GetUserExpRequire(User)} WHERE DiscordID = ${GetUserID(User)}`)
        }
        else {
            Query(`UPDATE level SET LevelHas = ${LevelResult[0].LevelHas + ExpWin} WHERE DiscordID = ${GetUserID(User)}`)
        }
        message.channel.send(`**${User.username}**, ${Lang.WorksRecup} : **${CoalWin}** ${AddEmoji("Coal")} ${Lang.Coal} ${Lang.WorksRecupAnd} : **${BrutCarbonWin}** ${AddEmoji("carbonebrut")} ${Lang.RawCarbon}. **${ExpWin}** ${AddEmoji("Exp")} Exp.`)
        Logs("works", User, message.createdTimestamp, client, TimingResult[0].Works, "", message)
})
})
        })
} else {
    message.channel.send(Lang.IndisponibleWorks + ConvertMsToDate(TimingResult[0].Works - Date.now()))
}
})
}
        })
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${CleanText(err)}\n\`\`\``);
      } 
}
const Lang = require("../lang/fr.json")
module.exports.help = {
    name: "Works",
    description: Lang.WorksCommandDescription
}


