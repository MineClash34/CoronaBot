exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername) => 
{
    try {
    var Page = 1
    var UserPlace = null
    var UserName = null
    const Top = function(Page, message, BotTopMessage) {
    const TopMessage = []
    query.query("SELECT * FROM level ORDER BY Level DESC, LevelHas DESC", async function(err, StartResult) {
        StartResult.forEach(async result => {
            let User = client.users.get(result.DiscordID)
            if (!User) UserName = result.Username
            if (User) UserName = User.username
            if (result.DiscordID === message.author.id) UserPlace = StartResult.indexOf(result) + 1
            if (TopMessage.length === 0) {
                TopMessage.push(`🥇 • ${UserName} • Level : ${result.Level} • Exp : ${result.LevelHas}`)
            } else
            if (TopMessage.length === 1) {
                TopMessage.push(`🥈 • ${UserName} • Level : ${result.Level} • Exp : ${result.LevelHas}`)
            } else
            if (TopMessage.length === 2) {
                TopMessage.push(`🥉 • ${UserName} • Level : ${result.Level} • Exp : ${result.LevelHas}`)
            } else {
            if ((Page - 1) * 10 >= TopMessage.length + 1 && TopMessage.length + 1 >= Page * 10) return;
            TopMessage.push(`${TopMessage.length + 1} • ${UserName} • Level : ${result.Level} • Exp : ${result.LevelHas}`)
            }
})
        TopMessage.unshift(`**PAGE [${Page}/${Math.ceil((StartResult.length) / 10)}]**`)
        TopMessage.push(Lang.TopOwnPosition + "**" + UserPlace + "/" + (StartResult.length) + "** (Page : **" + Math.ceil(UserPlace / 10) + "/" + Math.ceil((StartResult.length) / 10) + "**)")
        BotTopMessage.edit(TopMessage.join("\n")).then(async (BotTopMessage) => {
                let filter = (reaction, userreact) => {
                    return ["▶️", "◀️", "🗂️"].includes(reaction.emoji.name) && userreact.id === User.id
                }
                BotTopMessage.awaitReactions(filter, {max: 1, time: 180000, errors: ['time']})
                .then(collected => {
                    const reaction = collected.first();
                    if (reaction.emoji.name === "▶️") {
                        if (Page !== Math.ceil((StartResult.length) / 10)) Page++
                        reaction.remove(User)
                        Top(Page, message, BotTopMessage)
                    } else if (reaction.emoji.name === "◀️") {
                        if (Page !== 1) Page--
                        reaction.remove(User)
                        Top(Page, message, BotTopMessage)
                    } else if (reaction.emoji.name === "🗂️") {
                        message.channel.send(Lang.TopPageGo)
                        const filter = (message2, user) => {
                            return message2.author.id === message.author.id
                        }
                        message.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                        .then(async collected =>{
                            const MessageCollected = collected.first()
                            if (MessageCollected) {
                                if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                                if (Number(MessageCollected) <= 0 || Number(MessageCollected) > Math.ceil((StartResult.length) / 10)) return;
                                Page = Number(MessageCollected)
                                reaction.remove(User)
                                Top(Page, message, BotTopMessage)
                            }
                        })
                    }
                })
        })
})
}

const TopMessage = []
    query.query("SELECT * FROM level ORDER BY Level DESC, LevelHas DESC", async function(err, StartResult) {
        StartResult.forEach(async result => {
            let User = client.users.get(result.DiscordID)
            if (!User) UserName = result.Username
            if (User) UserName = User.username
            if (result.DiscordID === message.author.id) UserPlace = StartResult.indexOf(result) + 1
            if (TopMessage.length === 0) {
                TopMessage.push(`🥇 • ${UserName} • Level : ${result.Level} • Exp : ${result.LevelHas}`)
            } else
            if (TopMessage.length === 1) {
                TopMessage.push(`🥈 • ${UserName} • Level : ${result.Level} • Exp : ${result.LevelHas}`)
            } else
            if (TopMessage.length === 2) {
                TopMessage.push(`🥉 • ${UserName} • Level : ${result.Level} • Exp : ${result.LevelHas}`)
            } else {
            if ((Page - 1) * 10 >= TopMessage.length + 1 && TopMessage.length + 1 >= Page * 10) return;
            TopMessage.push(`${TopMessage.length + 1} • ${UserName} • Level : ${result.Level} • Exp : ${result.LevelHas}`)
            }
})
        TopMessage.unshift(`**PAGE [${Page}/${Math.ceil((StartResult.length) / 10)}]**`)
        TopMessage.push(Lang.TopOwnPosition + "**" + UserPlace + "/" + (StartResult.length) + "** (Page : **" + Math.ceil(UserPlace / 10) + "/" + Math.ceil((StartResult.length) / 10) + "**)")
        message.channel.send(TopMessage.join("\n")).then(async (BotTopMessage) => {
            await BotTopMessage.react("◀️")
            await BotTopMessage.react("▶️")
            await BotTopMessage.react("🗂️").then(() => {
                let filter = (reaction, userreact) => {
                    return ["▶️", "◀️", "🗂️"].includes(reaction.emoji.name) && userreact.id === User.id
                }
                BotTopMessage.awaitReactions(filter, {max: 1, time: 180000, errors: ['time']})
                .then(collected => {
                    const reaction = collected.first();
                    if (reaction.emoji.name === "▶️") {
                        if (Page !== Math.ceil((StartResult.length) / 10)) Page++
                        reaction.remove(User)
                        Top(Page, message, BotTopMessage)
                    } else if (reaction.emoji.name === "◀️") {
                        if (Page !== 1) Page--
                        reaction.remove(User)
                        Top(Page, message, BotTopMessage)
                    } else if (reaction.emoji.name === "🗂️") {
                        message.channel.send(Lang.TopPageGo)
                        const filter = (message2, user) => {
                            return message2.author.id === message.author.id
                        }
                        message.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                        .then(async collected =>{
                            const MessageCollected = collected.first()
                            if (MessageCollected) {
                                if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                                if (Number(MessageCollected) <= 0 || Number(MessageCollected) > Math.ceil((StartResult.length) / 10)) return;
                                Page = Number(MessageCollected)
                                reaction.remove(User)
                                Top(Page, message, BotTopMessage)
                            }
                        })
                    }
                })
            })
        })
})

} catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${CleanText(err)}\n\`\`\``);
  } 
}
const Lang = require("../lang/fr.json")
module.exports.help = {
    name: "Top",
    description: Lang.TopCommandDescription
}