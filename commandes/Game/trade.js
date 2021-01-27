const ValableRessource = ["Stone", "Coal", "Wood", "Iron", "Carbone", "CarboneBrut", "pierre", "charbon", "bois", "fer", "carbon", "rawcarbon"]
const ValableRessourceName = ["Stone", "Coal", "Wood", "Iron", "Carbon", "Raw Carbon", "Pierre", "Charbon", "Bois", "Fer", "Carbone", "Carbone Brut"]
const Discord = require("discord.js")
exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername, Logs, GetItem, GetLang) =>
{
    try {
    if (!args[1]) return message.channel.send(Lang.HelpTrade);
    var SecondUser = message.mentions.users.first();
    if (!SecondUser) {
        var SecondUserID = message.content.split("<")[1].split(">")[0];
        console.log(SecondUserID)
        if (isNaN(SecondUserID)) return message.channel.send(Lang.HelpTrade);
        var SecondUser = client.users.get(SecondUserID);
        if (!SecondUser) return message.channel.send(Lang.HelpTrade);
        args.shift()
        var FirstUserSendArgs = args.join(" ").split(`<${SecondUser.id}>`)[0]
        var SecondUserSendArgs = args.join(" ").split(`<${SecondUser.id}>`)[1]
    } else {
        if (message.content.includes(`<@!${SecondUser.id}>`)) {
        args.shift()
        var FirstUserSendArgs = args.join(" ").split(`<@!${SecondUser.id}>`)[0]
        var SecondUserSendArgs = args.join(" ").split(`<@!${SecondUser.id}>`)[1]
        } else {
            args.shift()
            var FirstUserSendArgs = args.join(" ").split(`<@${SecondUser.id}>`)[0]
            var SecondUserSendArgs = args.join(" ").split(`<@${SecondUser.id}>`)[1]
        }
    }
    if (SecondUser.id === User.id) return message.channel.send(Lang.NoTradeWithYourSelf)
    if (SecondUser.bot) return message.channel.send(Lang.NoTradeWithBot)
    var FirstUserSend = []
    var FirstUserNewRessource = []
    var SecondUserSend = []
    var SecondUserNewRessource = []
    var FirstUserSendPart2 = []
    var FirstUserNewRessourcePart2 = []
    var SecondUserSendPart2 = []
    var SecondUserNewRessourcePart2 = []
    var FirstUserPropTrade = []
    var SecondUserPropTrade = []
    query.query(`SELECT * FROM userinfo WHERE DiscordID = ${SecondUser.id}`, function(err, result) {
        if (result.length <= 0) return message.channel.send(`<@${SecondUser.id}>, ${Lang.UserNotFound}`)
        var HasError = new Set()
        var Time1 = 100
        if (FirstUserSendArgs) {
            FirstUserSendArgs = FirstUserSendArgs.split(" ")
            FirstUserSendArgs.forEach(async args => {
                Time1 = Time1 + 100
                setTimeout(async function () {
                    if (args === '' && FirstUserSendArgs.indexOf(args) === 0) return;
                    if (FirstUserSendArgs.indexOf(args) === FirstUserSendArgs.length - 1) return;
            if (FirstUserSendArgs.indexOf(args)%2 !== 0) return;
            const RessourceToSendFilter = ValableRessource.filter(ressource => ressource.toLowerCase().startsWith(args.toLowerCase()) === true)
            if (HasError.has(User.id)) return;
            if (RessourceToSendFilter.length > 1) {
                HasError.add(User.id)
                return message.channel.send(`${Lang.TradeErrorManyResources} \`${args}\` (${ValableRessource.join(", ")})`)
            } else if (RessourceToSendFilter.length <= 0) {
                HasError.add(User.id)
                return message.channel.send(`${Lang.TradeNoResourceFind} \`${args}\``)
            } else if (ValableRessource.indexOf(RessourceToSendFilter.join("")) > 5) {
                var RessourceToSend = ValableRessource[ValableRessource.indexOf(RessourceToSendFilter.join("")) - 5]
            } else {
                var RessourceToSend = ValableRessource[ValableRessource.indexOf(RessourceToSendFilter.join(""))]
            }
            var NumberToSend = FirstUserSendArgs[FirstUserSendArgs.indexOf(args) + 1]
            if (!NumberToSend) {
                HasError.add(User.id)
                return message.channel.send(`${Lang.TradeNoNumberFind} ${FirstUserSendArgs[FirstUserSendArgs.indexOf(args)], FirstUserSendArgs[FirstUserSendArgs.indexOf(args) + 1]}`)
            }
                if (isNaN(NumberToSend)) {
                HasError.add(User.id)
                    return message.channel.send(`${Lang.TradeNoNumberFind} ${FirstUserSendArgs[FirstUserSendArgs.indexOf(args)], FirstUserSendArgs[FirstUserSendArgs.indexOf(args) + 1]}`)
            }
                if (await GetItem(User, RessourceToSend) < NumberToSend) {
                    HasError.add(User.id)
                    return message.channel.send(`<@${User.id}> ${Lang.NoEnoughResources}`)
                }
                if (RessourceToSend === "Carbone" || RessourceToSend === "CarboneBrut") {
                    FirstUserSendPart2.unshift(`${RessourceToSend} = ${await GetItem(User, RessourceToSend) - Number(NumberToSend)}`)
                    SecondUserNewRessourcePart2.unshift(`${RessourceToSend} = ${await GetItem(SecondUser, RessourceToSend) + Number(NumberToSend)}`)
                    if (await GetLang(User) === "fr") {
                        var RessourceName = ValableRessourceName[ValableRessource.indexOf(RessourceToSend) + 6]
                        FirstUserPropTrade.unshift(`**${NumberToSend}** ${AddEmoji(RessourceToSend)} ${RessourceName}`)
                    } else {
                        var RessourceName = ValableRessourceName[ValableRessource.indexOf(RessourceToSend)]
                        FirstUserPropTrade.unshift(`**${NumberToSend}** ${AddEmoji(RessourceToSend)} ${RessourceName}`)
                    }
                } else {
                    FirstUserSend.unshift(`${RessourceToSend} = ${await GetItem(User, RessourceToSend) - Number(NumberToSend)}`)
                    SecondUserNewRessource.unshift(`${RessourceToSend} = ${await GetItem(SecondUser, RessourceToSend) + Number(NumberToSend)}`)
                    if (await GetLang(User) === "fr") {
                        var RessourceName = ValableRessourceName[ValableRessource.indexOf(RessourceToSend) + 6]
                        FirstUserPropTrade.unshift(`**${NumberToSend}** ${AddEmoji(RessourceToSend)} ${RessourceName}`)
                    } else {
                        var RessourceName = ValableRessourceName[ValableRessource.indexOf(RessourceToSend)]
                        FirstUserPropTrade.unshift(`**${NumberToSend}** ${AddEmoji(RessourceToSend)} ${RessourceName}`)
                    }
                }
            }, Time1)
        })
    } else {
        FirstUserPropTrade.unshift(`**Ø ${Lang.TradeNothing}**`)
    }
    var Time2 = 100
    if (SecondUserSendArgs) {
        SecondUserSendArgs = SecondUserSendArgs.split(" ")
        SecondUserSendArgs.shift()
            SecondUserSendArgs.forEach(async args => {
                Time2 = Time2 + 100
                setTimeout(async function () {
            if (SecondUserSendArgs.indexOf(args)%2 !== 0) return;
            const RessourceToSendFilter = ValableRessource.filter(ressource => ressource.toLowerCase().startsWith(args.toLowerCase()) === true)
            if (HasError.has(User.id)) return;
            if (RessourceToSendFilter.length > 1) {
                HasError.add(User.id)
                return message.channel.send(`${Lang.TradeErrorManyResources} \`${args}\` (${ValableRessource.join(", ")})`)
            } else if (RessourceToSendFilter.length <= 0) {
                HasError.add(User.id)
                return message.channel.send(`${Lang.TradeNoResourceFind} \`${args}\``)
            } else if (ValableRessource.indexOf(RessourceToSendFilter.join("")) > 5) {
                var RessourceToSend = ValableRessource[ValableRessource.indexOf(RessourceToSendFilter.join("")) - 5]
            } else {
                var RessourceToSend = ValableRessource[ValableRessource.indexOf(RessourceToSendFilter.join(""))]
            }
            var NumberToSend = SecondUserSendArgs[SecondUserSendArgs.indexOf(args) + 1]
            if (!NumberToSend) {
                HasError.add(User.id)
                return message.channel.send(`${Lang.TradeNoNumberFind} ${SecondUserSendArgs[SecondUserSendArgs.indexOf(args)], SecondUserSendArgs[SecondUserSendArgs.indexOf(args) + 1]}`)
            }
                if (isNaN(NumberToSend)) {
                HasError.add(User.id)
                    return message.channel.send(`${Lang.TradeNoNumberFind} ${SecondUserSendArgs[SecondUserSendArgs.indexOf(args)], SecondUserSendArgs[SecondUserSendArgs.indexOf(args) + 1]}`)
            }
                if (await GetItem(SecondUser, RessourceToSend) < NumberToSend) {
                    HasError.add(User.id)
                    return message.channel.send(`<@${SecondUser.id}> ${Lang.NoEnoughResources}`)
                }
                if (RessourceToSend === "Carbone" || RessourceToSend === "CarboneBrut") {
                    SecondUserSendPart2.unshift(`${RessourceToSend} = ${await GetItem(SecondUser, RessourceToSend) - Number(NumberToSend)}`)
                    FirstUserNewRessourcePart2.unshift(`${RessourceToSend} = ${await GetItem(User, RessourceToSend) + Number(NumberToSend)}`)
                    if (await GetLang(User) === "fr") {
                        var RessourceName = ValableRessourceName[ValableRessource.indexOf(RessourceToSend) + 6]
                        SecondUserPropTrade.unshift(`**${NumberToSend}** ${AddEmoji(RessourceToSend)} ${RessourceName}`)
                    } else {
                        var RessourceName = ValableRessourceName[ValableRessource.indexOf(RessourceToSend)]
                        SecondUserPropTrade.unshift(`**${NumberToSend}** ${AddEmoji(RessourceToSend)} ${RessourceName}`)
                    }
                } else {
                    SecondUserSend.unshift(`${RessourceToSend} = ${await GetItem(SecondUser, RessourceToSend) - Number(NumberToSend)}`)
                    FirstUserNewRessource.unshift(`${RessourceToSend} = ${await GetItem(User, RessourceToSend) + Number(NumberToSend)}`)
                    if (await GetLang(User) === "fr") {
                        var RessourceName = ValableRessourceName[ValableRessource.indexOf(RessourceToSend) + 6]
                        SecondUserPropTrade.unshift(`**${NumberToSend}** ${AddEmoji(RessourceToSend)} ${RessourceName}`)
                    } else {
                        var RessourceName = ValableRessourceName[ValableRessource.indexOf(RessourceToSend)]
                        SecondUserPropTrade.unshift(`**${NumberToSend}** ${AddEmoji(RessourceToSend)} ${RessourceName}`)
                    }
                }
            })
        })
    } else {
        SecondUserPropTrade.unshift(`**Ø ${Lang.TradeNothing}**`)
    }


    var TradeConfirmed = 0
    message.channel.send(Lang.TradeLoading).then(async (LoadingBotMessage) => {
        setTimeout(function () {
        if (!HasError.has(User.id)) {
            var HasReact = []
        LoadingBotMessage.edit(`${Lang.Trade}<@${User.id}> ${Lang.TradeProp} ${FirstUserPropTrade.join(", ")}\n<@${SecondUser.id}> ${Lang.TradeProp} ${SecondUserPropTrade.join(", ")}\n${Lang.TradeAttente}`).then(async (TradeBotConfirmationMessage) => {
            await TradeBotConfirmationMessage.react("✅")
            await TradeBotConfirmationMessage.react("❌").then(() => {
                let filter1 = (reaction, userreact) => {
                    return ["❌", "✅"].includes(reaction.emoji.name) && userreact.id === User.id
                }
                TradeBotConfirmationMessage.awaitReactions(filter1, {max: 1, time: 90000, errors: ['time']})
                .then(async collected1 => {
                    const reaction = collected1.first();
                    if (reaction.emoji.name === "✅") {
                        if (TradeConfirmed !== 0) return;
                                if (HasReact.length !== 1 && SecondUserPropTrade.join(", ") !== `**Ø ${Lang.TradeNothing}**`) {
                                    if (!HasReact.includes(User.id)) {
                                    HasReact.unshift(User.id)
                                    }
                                } else {
                                if (SecondUserNewRessourcePart2.length > 0) Query(`UPDATE inventairepart2 SET ${SecondUserNewRessourcePart2.join(", ")} WHERE DiscordID = ${SecondUser.id}`)
                                if (SecondUserSendPart2.length > 0) Query(`UPDATE inventairepart2 SET ${SecondUserSendPart2.join(", ")} WHERE DiscordID = ${SecondUser.id}`)
                                if (FirstUserNewRessourcePart2.length > 0) Query(`UPDATE inventairepart2 SET ${FirstUserNewRessourcePart2.join(", ")} WHERE DiscordID = ${User.id}`)
                                if (FirstUserSendPart2.length > 0) Query(`UPDATE inventairepart2 SET ${FirstUserSendPart2.join(", ")} WHERE DiscordID = ${User.id}`)
                                if (SecondUserNewRessource.length > 0) Query(`UPDATE inventairepart1  SET ${SecondUserNewRessource.join(", ")} WHERE DiscordID = ${SecondUser.id}`)
                                if (SecondUserSend.length > 0) Query(`UPDATE inventairepart1  SET ${SecondUserSend.join(", ")} WHERE DiscordID = ${SecondUser.id}`)
                                if (FirstUserNewRessource.length > 0) Query(`UPDATE inventairepart1  SET ${FirstUserNewRessource.join(", ")} WHERE DiscordID = ${User.id}`)
                                if (FirstUserSend.length > 0) Query(`UPDATE inventairepart1  SET ${FirstUserSend.join(", ")} WHERE DiscordID = ${User.id}`)
                                await TradeBotConfirmationMessage.edit(`${Lang.Trade}<@${User.id}> ${Lang.TradeProp} ${FirstUserPropTrade.join(", ")}\n<@${SecondUser.id}> ${Lang.TradeProp} ${SecondUserPropTrade.join(", ")}\n${Lang.TradeValide}`)
                                let TradeEmbed = new Discord.RichEmbed()
                                .setTitle("New Trade")
                                .setColor(GetRandomColor())
                                .setDescription(`**${User.username}** Sent ${FirstUserPropTrade.join(", ")} to **${SecondUser.username}**\n**${SecondUser.username}** Sent ${SecondUserPropTrade.join(", ")} to **${User.username}**\n**At** : ${new Date()}`)
                                .setTimestamp()
                                await client.channels.get("714780882346573924").send(TradeEmbed)
                                }
                            } else if (reaction.emoji.name === "❌") {
                                TradeConfirmed = 1
                                TradeBotConfirmationMessage.edit((`${Lang.Trade}<@${User.id}> ${Lang.TradeProp} ${FirstUserPropTrade.join(", ")}\n<@${SecondUser.id}> ${Lang.TradeProp} ${SecondUserPropTrade.join(", ")}\n${Lang.TradeRefuse}`))
                            }
    })
    let filter2 = (reaction, userreact) => {
        return ["❌", "✅"].includes(reaction.emoji.name) && userreact.id === SecondUser.id
    }
    TradeBotConfirmationMessage.awaitReactions(filter2, {max: 1, time: 90000, errors: ['time']})
    .then(async collected2 => {
        const reaction = collected2.first();
        if (reaction.emoji.name === "✅") {
            if (TradeConfirmed !== 0) return;
                    if (HasReact.length !== 1 && FirstUserPropTrade.join(", ") !== `**Ø ${Lang.TradeNothing}**`) {
                        if (!HasReact.includes(SecondUser.id)) {
                        HasReact.unshift(SecondUser.id)
                        }
                    } else {
                        if (SecondUserNewRessourcePart2.length > 0) Query(`UPDATE inventairepart2 SET ${SecondUserNewRessourcePart2.join(", ")} WHERE DiscordID = ${SecondUser.id}`)
                        if (SecondUserSendPart2.length > 0) Query(`UPDATE inventairepart2 SET ${SecondUserSendPart2.join(", ")} WHERE DiscordID = ${SecondUser.id}`)
                        if (FirstUserNewRessourcePart2.length > 0) Query(`UPDATE inventairepart2 SET ${FirstUserNewRessourcePart2.join(", ")} WHERE DiscordID = ${User.id}`)
                        if (FirstUserSendPart2.length > 0) Query(`UPDATE inventairepart2 SET ${FirstUserSendPart2.join(", ")} WHERE DiscordID = ${User.id}`)
                        if (SecondUserNewRessource.length > 0) Query(`UPDATE inventairepart1 SET ${SecondUserNewRessource.join(", ")} WHERE DiscordID = ${SecondUser.id}`)
                        if (SecondUserSend.length > 0) Query(`UPDATE inventairepart1 SET ${SecondUserSend.join(", ")} WHERE DiscordID = ${SecondUser.id}`)
                        if (FirstUserNewRessource.length > 0) Query(`UPDATE inventairepart1 SET ${FirstUserNewRessource.join(", ")} WHERE DiscordID = ${User.id}`)
                        if (FirstUserSend.length > 0) Query(`UPDATE inventairepart1 SET ${FirstUserSend.join(", ")} WHERE DiscordID = ${User.id}`)
                    await TradeBotConfirmationMessage.edit(`${Lang.Trade}<@${User.id}> ${Lang.TradeProp} ${FirstUserPropTrade.join(", ")}\n<@${SecondUser.id}> ${Lang.TradeProp} ${SecondUserPropTrade.join(", ")}\n${Lang.TradeValide}`)
                    let TradeEmbed = new Discord.RichEmbed()
                    .setTitle("New Trade")
                    .setColor(GetRandomColor())
                    .setDescription(`**${User.username}** Sent ${FirstUserPropTrade.join(", ")} to **${SecondUser.username}**\n**${SecondUser.username}** Sent ${SecondUserPropTrade.join(", ")} to **${User.username}**\n**At** : ${new Date()}`)
                    .setTimestamp()
                    await client.channels.get("714780882346573924").send(TradeEmbed)    
                }   
                } else if (reaction.emoji.name === "❌") {
                    TradeConfirmed = 1
                    TradeBotConfirmationMessage.edit((`${Lang.Trade}<@${User.id}> ${Lang.TradeProp} ${FirstUserPropTrade.join(", ")}\n<@${SecondUser.id}> ${Lang.TradeProp} ${SecondUserPropTrade.join(", ")}\n${Lang.TradeRefuse}`))
                }
})
})
    })
} else {
    HasError.delete(User.id)
}
}, 1000)
    })
})
} catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${CleanText(err)}\n\`\`\``);
  } 
};



const Lang = require("../lang/fr.json")
module.exports.help = {
    name: "Trade",
    description: Lang.TradeCommandDescription
}