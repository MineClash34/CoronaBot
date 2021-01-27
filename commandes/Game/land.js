const util = require("util")
exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername, Logs, GetItem, GetLang) =>
{
    try {
        const dbNamePlacementList = ["Eolienne", "SolarPanel", "ReactorHydro", "ReactorVapeur", "ReactorNuclear"]
        const ValablePlacement = ["wind turbine", "solar panel", "hydraulic central", "steam central", "nuclear central"]
        const Place = function(message, args, User, query, Lang, RealPlacementAsk, dbNamePlacement) {
            query.query(`SELECT * FROM machine WHERE DiscordID = ${User.id}`, function(err, MachineResult) {
            query.query(`SELECT * FROM land WHERE DiscordID = ${User.id}`, function(err, LandResult) {
            query.query(`SELECT * FROM level WHERE DiscordID = ${User.id}`, function(err, LevelResult) {
                query.query(`SELECT * FROM vote WHERE DiscordID = ${User.id}`, function(err, VoteResult) {
                    query.query(`SELECT * FROM mapsinventory WHERE DiscordID = ${User.id}`, function(err, MapsResult) {
                        if (Number(util.inspect(eval(`MachineResult[0].${dbNamePlacement}`))) === 0) return message.channel.send(`${AddEmoji("tom")} Hey ! **${User.username}** ${Lang.YouNotPossedThisBuild}`);
                        if (args[1].toUpperCase().startsWith("A") && args[1].toUpperCase().split("A")[1] > LevelResult[0].Level) return message.channel.send(`${AddEmoji("tom")} Hey ! **${User.username}** ${Lang.PositionNotUnlocked}`);
                        if (args[1].toUpperCase().startsWith("B") && args[1].toUpperCase().split("B")[1] > VoteResult[0].Month) return message.channel.send(`${AddEmoji("tom")} Hey ! **${User.username}** ${Lang.PositionNotUnlocked}`);
                        if (args[1].toUpperCase().startsWith("C") && args[1].toUpperCase().split("C")[1] > MapsResult[0].Number) return message.channel.send(`${AddEmoji("tom")} Hey ! **${User.username}** ${Lang.PositionNotUnlocked}`);
                        var content = util.inspect(eval(`LandResult[0].${args[1].toUpperCase()}`))
                        if (content.toLowerCase() === "'empty'") {
                            query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${User.id}`, function(err, InvResult) {
                                if (InvResult[0].Stone < 500 || InvResult[0].Wood < 500 || InvResult[0].Iron < 50) return message.channel.send(`${AddEmoji("tom")} Hey ! **${User.username}** ${Lang.NoEnoughResources}`)
                                    message.channel.send(`${Lang.PlacementCost.replace("{batiment}", RealPlacementAsk)}`).then(async (ConfirmationMessage) => {
                                    await ConfirmationMessage.react("✅")
                                    await ConfirmationMessage.react("❌")
                                    let filter = (reaction, user) => {
                                        return ["✅", "❌"].includes(reaction.emoji.name) && user.id === User.id
                                    }
                                    ConfirmationMessage.awaitReactions(filter, {max: 1, time: 180000, errors: ['time']})
                                    .then(collected => {
                                        const reaction = collected.first();
                                        if (reaction.emoji.name === "✅") {
                                            Query(`UPDATE machine SET ${dbNamePlacement} = ${Number(util.inspect(eval(`MachineResult[0].${dbNamePlacement}`))) - 1} WHERE DiscordID = ${User.id}`)
                                            Query(`UPDATE land SET ${args[1].toUpperCase()} = '${RealPlacementAsk}' WHERE DiscordID = ${User.id}`)
                                            Add(["Stone", "Wood"], "inventairepart1", -500, User)
                                            Add(["Iron"], "inventairepart1", -50, User)
                                            message.channel.send(Lang.ConfirmPlacement.replace("{batiment}", RealPlacementAsk).replace("{emplacement}", args[1].toUpperCase()))
                                        } else {
                                            return message.channel.send(Lang.CancelPlacement)
                                        }
                                    })
                                })
                            })
                        } else {
                            query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${User.id}`, function(err, InvResult) {
                                if (InvResult[0].Stone < 650 || InvResult[0].Wood < 650 || InvResult[0].Iron < 65) return message.channel.send(`${AddEmoji("tom")} Hey ! **${User.username}** ${Lang.NoEnoughResources}`)
                                    message.channel.send(`${Lang.PlacementAndSupressionCost.replace("{batiment1}", RealPlacementAsk).replace("{batiment2}", content.split("'")[1])}`).then(async (ConfirmationMessage) => {
                                    await ConfirmationMessage.react("✅")
                                    await ConfirmationMessage.react("❌")
                                    let filter = (reaction, user) => {
                                        return ["✅", "❌"].includes(reaction.emoji.name) && user.id === User.id
                                    }
                                    ConfirmationMessage.awaitReactions(filter, {max: 1, time: 180000, errors: ['time']})
                                    .then(collected => {
                                        const reaction = collected.first();
                                        if (reaction.emoji.name === "✅") {
                                            Query(`UPDATE machine SET ${dbNamePlacementList[ValablePlacement.indexOf(content.toLowerCase().split("'")[1])]} = ${Number(util.inspect(eval(`MachineResult[0].${dbNamePlacementList[ValablePlacement.indexOf(content.toLowerCase().split("'")[1])]}`))) + 1} WHERE DiscordID = ${User.id}`)
                                            query.query(`SELECT * FROM machine WHERE DiscordID = ${User.id}`, function(err, MachineResult) {
                                            Query(`UPDATE machine SET ${dbNamePlacement} = ${Number(util.inspect(eval(`MachineResult[0].${dbNamePlacement}`))) - 1} WHERE DiscordID = ${User.id}`)
                                            Query(`UPDATE land SET ${args[1].toUpperCase()} = '${RealPlacementAsk}' WHERE DiscordID = ${User.id}`)
                                            Add(["Stone", "Wood"], "inventairepart1", -650, User)
                                            Add(["Iron"], "inventairepart1", -65, User)
                                            message.channel.send(Lang.ConfirmPlacementAndSupression.replace("{batiment1}", RealPlacementAsk).replace("{batiment2}", content.split("'")[1]).replace("{emplacement}", args[1].toUpperCase()))
                                            })
                                        } else {
                                            return message.channel.send(Lang.CancelPlacement)
                                        }
                                    })
                                })
                            })
                        }
                    })
                })
            })
        })
            })
        } 


        const Suprime = function(message, args, User, query, Lang, RealPlacementAsk, dbNamePlacement) {
            query.query(`SELECT * FROM machine WHERE DiscordID = ${User.id}`, function(err, MachineResult) {
                query.query(`SELECT * FROM land WHERE DiscordID = ${User.id}`, function(err, LandResult) {
                    query.query(`SELECT * FROM level WHERE DiscordID = ${User.id}`, function(err, LevelResult) {
                        query.query(`SELECT * FROM vote WHERE DiscordID = ${User.id}`, function(err, VoteResult) {
                            query.query(`SELECT * FROM mapsinventory WHERE DiscordID = ${User.id}`, function(err, MapsResult) {
                                if (Number(util.inspect(eval(`MachineResult[0].${dbNamePlacement}`))) === 0) return message.channel.send(`${AddEmoji("tom")} Hey ! **${User.username}** ${Lang.YouNotPossedThisBuild}`);
                                if (args[1].toUpperCase().startsWith("A") && args[1].toUpperCase().split("A")[1] > LevelResult[0].Level) return message.channel.send(`${AddEmoji("tom")} Hey ! **${User.username}** ${Lang.PositionNotUnlocked}`);
                                if (args[1].toUpperCase().startsWith("B") && args[1].toUpperCase().split("B")[1] > VoteResult[0].Month) return message.channel.send(`${AddEmoji("tom")} Hey ! **${User.username}** ${Lang.PositionNotUnlocked}`);
                                if (args[1].toUpperCase().startsWith("C") && args[1].toUpperCase().split("C")[1] > MapsResult[0].Number) return message.channel.send(`${AddEmoji("tom")} Hey ! **${User.username}** ${Lang.PositionNotUnlocked}`);
                                var content = util.inspect(eval(`LandResult[0].${args[1].toUpperCase()}`))
                                if (content.toLowerCase() === "'empty'") return message.channel.send(`${AddEmoji("tom")} Hey ! **${User.username}** ${Lang.EmptyEmplacement}`);
                                query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${User.id}`, function(err, InvResult) {
                                    if (InvResult[0].Stone < 150 || InvResult[0].Wood < 150 || InvResult[0].Iron < 15) return message.channel.send(`${AddEmoji("tom")} Hey ! **${User.username}** ${Lang.NoEnoughResources}`)
                                        message.channel.send(`${Lang.SupressionCost.replace("{batiment}", content.toLowerCase().split("'")[1])}`).then(async (ConfirmationMessage) => {
                                        await ConfirmationMessage.react("✅")
                                        await ConfirmationMessage.react("❌")
                                        let filter = (reaction, user) => {
                                            return ["✅", "❌"].includes(reaction.emoji.name) && user.id === User.id
                                        }
                                        ConfirmationMessage.awaitReactions(filter, {max: 1, time: 180000, errors: ['time']})
                                        .then(collected => {
                                            const reaction = collected.first();
                                            if (reaction.emoji.name === "✅") {
                                                Query(`UPDATE machine SET ${dbNamePlacementList[ValablePlacement.indexOf(content.toLowerCase().split("'")[1])]} = ${Number(util.inspect(eval(`MachineResult[0].${dbNamePlacementList[ValablePlacement.indexOf(content.toLowerCase().split("'")[1])]}`))) + 1} WHERE DiscordID = ${User.id}`)
                                                Query(`UPDATE land SET ${args[1].toUpperCase()} = 'empty' WHERE DiscordID = ${User.id}`)
                                                Add(["Stone", "Wood"], "inventairepart1", -150, User)
                                                Add(["Iron"], "inventairepart1", -15, User)
                                                message.channel.send(Lang.ConfirmSupression.replace("{batiment}", content.toLowerCase().split("'")[1]).replace("{emplacement}", args[1].toUpperCase()))
                                            } else {
                                                return message.channel.send(Lang.CancelPlacement)
                                            }
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }



        args.shift()
        if (!args[0]) {
        var A = []
        var B = []
        var C = []
            query.query(`SELECT * FROM level WHERE DiscordID = ${User.id}`, function(err, LevelResult) {
                query.query(`SELECT * FROM land WHERE DiscordID = ${User.id}`, function(err, LandResult) {
                    query.query(`SELECT * FROM vote WHERE DiscordID = ${User.id}`, function(err, VoteResult) {
                        query.query(`SELECT * FROM mapsinventory WHERE DiscordID = ${User.id}`, function(err, MapsResult) {
                        var Placement = 1
                        let foreach = "0123456789".split("")
                        foreach.forEach(element => {
                            if (LevelResult[0].Level < Placement) 
                            {
                                A.push("🔒")
                            }
                            else
                            {
                                let add = eval(`LandResult[0].A${Placement}`)
                                A.push(AddEmoji(util.inspect(add).split("'").join("")))
                            } 
                            if (VoteResult[0].Month < Placement) 
                            {
                                B.push("🔒")
                            }
                            else
                            {
                                let add = eval(`LandResult[0].B${Placement}`)
                                B.push(AddEmoji(util.inspect(add).split("'").join("")))
                            } 
                            if (2 < Placement) return Placement++;
                            if (MapsResult[0].Number < Placement) 
                            {
                                C.push("🔒")
                            }
                            else
                            {
                                let add = eval(`LandResult[0].C${Placement}`)
                                C.push(AddEmoji(util.inspect(add).split("'").join("")))
                            } 
                            Placement++
                        })
                        message.channel.send(`🟦 1️⃣ | 2️⃣ | 3️⃣ | 4️⃣ | 5️⃣ | 6️⃣ | 7️⃣ | 8️⃣ | 9️⃣ | 🔟\n🇦 ${A.join(" | ")}\n🇧 ${B.join(" | ")}\n🇨 ${C.join(" | ")}`)
                    })
                })
            })
        })
    } 
    else 
    if (args[0].startsWith("i"))
    {
        query.query(`SELECT * FROM level WHERE DiscordID = ${User.id}`, function(err, LevelResult) {
            query.query(`SELECT * FROM vote WHERE DiscordID = ${User.id}`, function(err, VoteResult) {
                query.query(`SELECT * FROM mapsinventory WHERE DiscordID = ${User.id}`, function(err, MapsResult) {
                    if (LevelResult[0].Level > 10) var Level = 10
                    else var Level = LevelResult[0].Level
                    if (VoteResult[0].Month > 10) var Vote = 10
                    else var Vote = VoteResult[0].Month
                    message.channel.send(`🇦 **Level** : ${Level}/10\n🇧 **Vote** : ${Vote}/10\n🇨 **PvP** : ${MapsResult[0].Number}/2`)
                })
            })
        })
    } 
    else
    if (args[0].startsWith("p"))
    {
        if (!args[1]) return message.channel.send(`${AddEmoji("tom")} Hey ! **${User.username}** ${Lang.NoPositionFind}`);
        const dbNamePlacement = ["Eolienne", "SolarPanel", "ReactorHydro", "ReactorVapeur", "ReactorNuclear"]
        const ValablePlacement = ["wind turbine", "solar panel", "hydraulic central", "steam central", "nuclear central"]
        const ValablePosition = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "C1", "C2"]
        if (ValablePosition.includes(args[1].toUpperCase())) 
        {   
            const FilterValablePlacement = ValablePlacement.filter(Placement => Placement.toLowerCase().includes(args[2].toLowerCase()) === true)
            if (FilterValablePlacement.length <= 0) return message.channel.send(`${AddEmoji("tom")} Hey ! **${User.username}** ${Lang.NoPlacementFind}`);
            if (FilterValablePlacement > 1) {
                    var Find = []
                    FilterValablePlacement.forEach(Args => {
                        Find.push(`${Find.length + 1}-${Args}`)
                    })
                    message.channel.send(`${Lang.ManyBuildFind}\n\`\`\`${Find.join(" \n")}\`\`\``).then((ManyPlacementFindMessage) => {
                        const filter = (message2, user) => {
                            return message2.author.id === message.author.id
                        }
                        ManyPlacementFindMessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                        .then(async collected => {
                            const MessageCollected = collected.first()
                            if (MessageCollected) {
                                var dbName = dbNamePlacement[ValablePlacement.indexOf(Find[Number(MessageCollected) - 1].split("-")[1].trim())]
                                if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                                if (Number(MessageCollected) > Find.length + 1 || Number(MessageCollected) < 1) return message.reply(`${AddEmoji("tom")} Hey ! **${User.username}** ${Lang.NoPlacementFind}`)
                                var RealPlacementAsk = Find[Number(MessageCollected) - 1].split("-")[1].trim()
                                var dbName = dbNamePlacement[ValablePlacement.indexOf(Find[Number(MessageCollected) - 1].split("-")[1].trim())]
                                Place(message, args, User, query, Lang, RealPlacementAsk, dbName)
                            }
                        })
                    })
            }
            else 
            {
                var dbName = dbNamePlacement[ValablePlacement.indexOf(FilterValablePlacement[0])]
                var RealPlacementAsk = FilterValablePlacement[0]
                Place(message, args, User, query, Lang, RealPlacementAsk, dbName)
            }
        }
        else
        {
            return message.channel.send(Lang.NoExistPlacement);
        }
    } else
    if (args[0].startsWith("s"))
    {
        if (!args[1]) return message.channel.send(`${AddEmoji("tom")} Hey ! **${User.username}** ${Lang.NoPositionFind}`);
        const dbNamePlacement = ["Eolienne", "SolarPanel", "ReactorHydro", "ReactorVapeur", "ReactorNuclear"]
        const ValablePlacement = ["wind turbine", "solar panel", "hydraulic central", "steam central", "nuclear central"]
        const ValablePosition = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "C1", "C2"]
        if (ValablePosition.includes(args[1].toUpperCase())) 
        {   
            
            Suprime(message, args, User, query, Lang)
        }
        else
        {
            return message.channel.send(Lang.NoExistPlacement);
        }
    }
    } catch (err) {
        console.log(err)
        message.channel.send(`\`ERROR\` \`\`\`xl\n${CleanText(err)}\n\`\`\``);
      } 
}


const Lang = require("../lang/fr.json")
module.exports.help = {
    name: "Market",
    description: Lang.MarketCommandDescription
}