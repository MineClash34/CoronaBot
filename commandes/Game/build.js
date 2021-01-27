const Discord = require("discord.js")
exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername) =>
{
    const ValableArgs = ["inventory", "solar panel", "wind turbine", "hydraulic central", "steam central", "nuclear central"]
    
    const Building = function(message, BuildAsk) {
        if (BuildAsk === "inventory") {
            query.query(`SELECT * FROM machine WHERE DiscordID = ${GetUserID(User)}`, async function(err, result) {
            let BuildInventory = new Discord.RichEmbed()
            .setAuthor(Lang.BuildInventoryTitle, GetUserAvatarURL(User))
            .setColor(GetRandomColor())
            .setDescription(`${AddEmoji("eolienne")} ${result[0].Eolienne} ${Lang.Eolienne}\n${AddEmoji("solar panel")} ${result[0].SolarPanel} ${Lang.SolarPanel}\n${AddEmoji("hydraulique")} ${result[0].ReactorHydro} ${Lang.HydrauliqueCentral}\n${AddEmoji("vapeur")} ${result[0].ReactorVapeur} ${Lang.VapeurCentral}\n${AddEmoji("nuclear")} ${result[0].ReactorNuclear} ${Lang.NuclearCentral}`)
            .setTimestamp()
            message.channel.send(BuildInventory)
            })
        } else
        if (BuildAsk === "wind turbine") {
            if (args[2] && args[2] === "confirm") {
                query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventaireResult2) {
                if (InventaireResult2[0].Iron < 50 || InventaireResult2[0].Wood < 250 || InventaireResult2[0].Stone < 500) return message.reply(`${Lang.NoEnoughResources}\n${Lang.Need} **50** ${AddEmoji("iron")} ${Lang.Iron}, **250** ${AddEmoji("wood")} ${Lang.Wood}, **500** ${AddEmoji("Stone")} ${Lang.Stone}`)
                query.query(`SELECT * FROM machine WHERE DiscordID = ${GetUserID(User)}`, async function(err, MachineResult2) {
                Query(`UPDATE inventairepart1 SET Iron = ${InventaireResult2[0].Iron - 50}, Wood = ${InventaireResult2[0].Wood - 250}, Stone = ${InventaireResult2[0].Stone - 500} WHERE DiscordID = ${message.author.id}`)
                Query(`UPDATE machine SET Eolienne = ${MachineResult2[0].Eolienne + 1} WHERE DiscordID = ${message.author.id}`)
                message.channel.send(Lang.EolienneBuildFinish)
                    })
                })
            } else {
            query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventaireResult) {
                if (InventaireResult[0].Iron < 50 || InventaireResult[0].Wood < 250 || InventaireResult[0].Stone < 500) return message.reply(`${Lang.NoEnoughResources}\n${Lang.Need} **50** ${AddEmoji("iron")} ${Lang.Iron}, **250** ${AddEmoji("wood")} ${Lang.Wood}, **500** ${AddEmoji("Stone")} ${Lang.Stone}`)
                message.channel.send(`${Lang.BuildConfirmationEolienne} **50** ${AddEmoji("iron")} ${Lang.Iron}, **250** ${AddEmoji("wood")} ${Lang.Wood}, **500** ${AddEmoji("Stone")} ${Lang.Stone}`).then(async (BotBuildConfirmationEolienneMessage) => {
                    await BotBuildConfirmationEolienneMessage.react("✅")
                    await BotBuildConfirmationEolienneMessage.react("❌").then(() => {
                        let filter = (reaction, userreact) => {
                            return ["❌", "✅"].includes(reaction.emoji.name) && userreact.id === User.id
                        }
                        BotBuildConfirmationEolienneMessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']})
                        .then(collected => {
                            const reaction = collected.first();
                            if (reaction.emoji.name === "✅") {
                                query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventaireResult2) {
                                    if (InventaireResult2[0].Iron < 50 || InventaireResult2[0].Wood < 250 || InventaireResult2[0].Stone < 500) return message.reply(`${Lang.NoEnoughResources}\n${Lang.Need} **50** ${AddEmoji("iron")} ${Lang.Iron}, **250** ${AddEmoji("wood")} ${Lang.Wood}, **500** ${AddEmoji("Stone")} ${Lang.Stone}`)
                                query.query(`SELECT * FROM machine WHERE DiscordID = ${GetUserID(User)}`, async function(err, MachineResult2) {
                                Query(`UPDATE inventairepart1 SET Iron = ${InventaireResult2[0].Iron - 50}, Wood = ${InventaireResult2[0].Wood - 250}, Stone = ${InventaireResult2[0].Stone - 500} WHERE DiscordID = ${message.author.id}`)
                                Query(`UPDATE machine SET Eolienne = ${MachineResult2[0].Eolienne + 1} WHERE DiscordID = ${message.author.id}`)
                                message.channel.send(Lang.EolienneBuildFinish)
                                    })
                                })
                            } else
                            if (reaction.emoji.name === "❌") {
                                BotBuildConfirmationEolienneMessage.edit(Lang.BuildCancel)
                            }
                        })
                    })
                })
            })
        }
        } else
        if (BuildAsk === "solar panel") {
            if (args[2] && args[2] === "confirm") {
                query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart1Result2) {
                    query.query(`SELECT * FROM inventairepart2 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart2Result2) {
                if (InventairePart1Result2[0].Iron < 100 || InventairePart1Result2[0].Wood < 500 || InventairePart1Result2[0].Stone < 1000 || InventairePart2Result2[0].Carbone < 10) return message.reply(`${Lang.NoEnoughResources}\n${Lang.Need} **10** ${AddEmoji("carbone")} ${Lang.Carbon}, **100** ${AddEmoji("iron")} ${Lang.Iron}, **500** ${AddEmoji("wood")} ${Lang.Wood}, **1000** ${AddEmoji("Stone")} ${Lang.Stone}`)
                query.query(`SELECT * FROM machine WHERE DiscordID = ${GetUserID(User)}`, async function(err, MachineResult2) {
                Query(`UPDATE inventairepart1 SET Iron = ${InventairePart1Result2[0].Iron - 100}, Wood = ${InventairePart1Result2[0].Wood - 500}, Stone = ${InventairePart1Result2[0].Stone - 1000} WHERE DiscordID = ${message.author.id}`)
                Query(`UPDATE inventairepart2 SET Carbone = ${InventairePart2Result2[0].Carbone - 10} WHERE DiscordID = ${message.author.id}`)
                Query(`UPDATE machine SET SolarPanel = ${MachineResult2[0].SolarPanel + 1} WHERE DiscordID = ${message.author.id}`)
                message.channel.send(Lang.SolarPanelBuildFinish)
                    })
                })
                })
            } else {
                query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart1Result2) {
                    query.query(`SELECT * FROM inventairepart2 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart2Result2) {
                if (InventairePart1Result2[0].Iron < 100 || InventairePart1Result2[0].Wood < 500 || InventairePart1Result2[0].Stone < 1000 || InventairePart2Result2[0].Carbone < 10) return message.reply(`${Lang.NoEnoughResources}\n${Lang.Need} **10** ${AddEmoji("carbone")} ${Lang.Carbon}, **100** ${AddEmoji("iron")} ${Lang.Iron}, **500** ${AddEmoji("wood")} ${Lang.Wood}, **1000** ${AddEmoji("Stone")} ${Lang.Stone}`)
                message.channel.send(`${Lang.BuildConfirmationSolarPanel} **10** ${AddEmoji("carbone")} ${Lang.Carbon}, **100** ${AddEmoji("iron")} ${Lang.Iron}, **500** ${AddEmoji("wood")} ${Lang.Wood}, **1000** ${AddEmoji("Stone")} ${Lang.Stone}`).then(async (BotBuildConfirmationEolienneMessage) => {
                    await BotBuildConfirmationEolienneMessage.react("✅")
                    await BotBuildConfirmationEolienneMessage.react("❌").then(() => {
                        let filter = (reaction, userreact) => {
                            return ["❌", "✅"].includes(reaction.emoji.name) && userreact.id === User.id
                        }
                        BotBuildConfirmationEolienneMessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']})
                        .then(collected => {
                            const reaction = collected.first();
                            if (reaction.emoji.name === "✅") {
                                query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart1Result2) {
                                    query.query(`SELECT * FROM inventairepart2 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart2Result2) {
                                if (InventairePart1Result2[0].Iron < 100 || InventairePart1Result2[0].Wood < 500 || InventairePart1Result2[0].Stone < 1000 || InventairePart2Result2[0].Carbone < 10) return message.reply(`${Lang.NoEnoughResources}\n${Lang.Need} **10** ${AddEmoji("carbone")} ${Lang.Carbon}, **100** ${AddEmoji("iron")} ${Lang.Iron}, **500** ${AddEmoji("wood")} ${Lang.Wood}, **1000** ${AddEmoji("Stone")} ${Lang.Stone}`)
                                query.query(`SELECT * FROM machine WHERE DiscordID = ${GetUserID(User)}`, async function(err, MachineResult2) {
                                Query(`UPDATE inventairepart1 SET Iron = ${InventairePart1Result2[0].Iron - 100}, Wood = ${InventairePart1Result2[0].Wood - 500}, Stone = ${InventairePart1Result2[0].Stone - 1000} WHERE DiscordID = ${message.author.id}`)
                                Query(`UPDATE inventairepart2 SET Carbone = ${InventairePart2Result2[0].Carbone - 10} WHERE DiscordID = ${message.author.id}`)
                                Query(`UPDATE machine SET SolarPanel = ${MachineResult2[0].SolarPanel + 1} WHERE DiscordID = ${message.author.id}`)
                                message.channel.send(Lang.SolarPanelBuildFinish)
                                    })
                                })
                                })
                            } else
                            if (reaction.emoji.name === "❌") {
                                BotBuildConfirmationEolienneMessage.edit(Lang.BuildCancel)
                            }
                        })
                    })
                })
                })
            })
        }
        } else
        if (BuildAsk === "hydraulic central") {
            if (args[2] && args[2] === "confirm") {
                query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart1Result2) {
                    query.query(`SELECT * FROM inventairepart2 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart2Result2) {
                if (InventairePart1Result2[0].Iron < 250 || InventairePart1Result2[0].Wood < 1250 || InventairePart1Result2[0].Stone < 2500 || InventairePart2Result2[0].Carbone < 25) return message.reply(`${Lang.NoEnoughResources}\n${Lang.Need} **25** ${AddEmoji("carbone")} ${Lang.Carbon}, **250** ${AddEmoji("iron")} ${Lang.Iron}, **1250** ${AddEmoji("wood")} ${Lang.Wood}, **2500** ${AddEmoji("Stone")} ${Lang.Stone}`)
                query.query(`SELECT * FROM machine WHERE DiscordID = ${GetUserID(User)}`, async function(err, MachineResult2) {
                Query(`UPDATE inventairepart1 SET Iron = ${InventairePart1Result2[0].Iron - 250}, Wood = ${InventairePart1Result2[0].Wood - 1250}, Stone = ${InventairePart1Result2[0].Stone - 2500} WHERE DiscordID = ${message.author.id}`)
                Query(`UPDATE inventairepart2 SET Carbone = ${InventairePart2Result2[0].Carbone - 25} WHERE DiscordID = ${message.author.id}`)
                Query(`UPDATE machine SET ReactorHydro = ${MachineResult2[0].ReactorHydro + 1} WHERE DiscordID = ${message.author.id}`)
                message.channel.send(Lang.HydraulicCentralBuildFinish)
                    })
                })
                })
            } else {
                query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart1Result2) {
                    query.query(`SELECT * FROM inventairepart2 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart2Result2) {
                if (InventairePart1Result2[0].Iron < 250 || InventairePart1Result2[0].Wood < 1250 || InventairePart1Result2[0].Stone < 1000 || InventairePart2Result2[0].Carbone < 25) return message.reply(`${Lang.NoEnoughResources}\n${Lang.Need} **25** ${AddEmoji("carbone")} ${Lang.Carbon}, **250** ${AddEmoji("iron")} ${Lang.Iron}, **1250** ${AddEmoji("wood")} ${Lang.Wood}, **2500** ${AddEmoji("Stone")} ${Lang.Stone}`)
                message.channel.send(`${Lang.BuildConfirmationHydraulicCentral} **25** ${AddEmoji("carbone")} ${Lang.Carbon}, **250** ${AddEmoji("iron")} ${Lang.Iron}, **1250** ${AddEmoji("wood")} ${Lang.Wood}, **2500** ${AddEmoji("Stone")} ${Lang.Stone}`).then(async (BotBuildConfirmationEolienneMessage) => {
                    await BotBuildConfirmationEolienneMessage.react("✅")
                    await BotBuildConfirmationEolienneMessage.react("❌").then(() => {
                        let filter = (reaction, userreact) => {
                            return ["❌", "✅"].includes(reaction.emoji.name) && userreact.id === User.id
                        }
                        BotBuildConfirmationEolienneMessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']})
                        .then(collected => {
                            const reaction = collected.first();
                            if (reaction.emoji.name === "✅") {
                                query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart1Result2) {
                                    query.query(`SELECT * FROM inventairepart2 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart2Result2) {
                                if (InventairePart1Result2[0].Iron < 250 || InventairePart1Result2[0].Wood < 1250 || InventairePart1Result2[0].Stone < 2500 || InventairePart2Result2[0].Carbone < 25) return message.reply(`${Lang.NoEnoughResources}\n${Lang.Need} **25** ${AddEmoji("carbone")} ${Lang.Carbon}, **250** ${AddEmoji("iron")} ${Lang.Iron}, **1250** ${AddEmoji("wood")} ${Lang.Wood}, **2500** ${AddEmoji("Stone")} ${Lang.Stone}`)
                                query.query(`SELECT * FROM machine WHERE DiscordID = ${GetUserID(User)}`, async function(err, MachineResult2) {
                                Query(`UPDATE inventairepart1 SET Iron = ${InventairePart1Result2[0].Iron - 250}, Wood = ${InventairePart1Result2[0].Wood - 1250}, Stone = ${InventairePart1Result2[0].Stone - 2500} WHERE DiscordID = ${message.author.id}`)
                                Query(`UPDATE inventairepart2 SET Carbone = ${InventairePart2Result2[0].Carbone - 25} WHERE DiscordID = ${message.author.id}`)
                                Query(`UPDATE machine SET ReactorHydro = ${MachineResult2[0].ReactorHydro + 1} WHERE DiscordID = ${message.author.id}`)
                                message.channel.send(Lang.HydraulicCentralBuildFinish)
                                    })
                                })
                                })
                            } else
                            if (reaction.emoji.name === "❌") {
                                BotBuildConfirmationEolienneMessage.edit(Lang.BuildCancel)
                            }
                        })
                    })
                })
                })
            })
        }
        } else
        if (BuildAsk === "steam central") {
            if (args[2] && args[2] === "confirm") {
                query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart1Result2) {
                    query.query(`SELECT * FROM inventairepart2 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart2Result2) {
                        if (InventairePart1Result2[0].Iron < 600 || InventairePart1Result2[0].Wood < 3000 || InventairePart1Result2[0].Stone < 6000 || InventairePart2Result2[0].Carbone < 60) return message.reply(`${Lang.NoEnoughResources}\n${Lang.Need} **60** ${AddEmoji("carbone")} ${Lang.Carbon}, **600** ${AddEmoji("iron")} ${Lang.Iron}, **3000** ${AddEmoji("wood")} ${Lang.Wood}, **6000** ${AddEmoji("Stone")} ${Lang.Stone}`)
                        query.query(`SELECT * FROM machine WHERE DiscordID = ${GetUserID(User)}`, async function(err, MachineResult2) {
                            Query(`UPDATE inventairepart1 SET Iron = ${InventairePart1Result2[0].Iron - 600}, Wood = ${InventairePart1Result2[0].Wood - 3000}, Stone = ${InventairePart1Result2[0].Stone - 6000} WHERE DiscordID = ${message.author.id}`)
                            Query(`UPDATE inventairepart2 SET Carbone = ${InventairePart2Result2[0].Carbone - 60} WHERE DiscordID = ${message.author.id}`)
                            Query(`UPDATE machine SET ReactorVapeur = ${MachineResult2[0].ReactorVapeur + 1} WHERE DiscordID = ${message.author.id}`)
                            message.channel.send(Lang.SteamCentralBuildFinish)
                        })
                    })
                })
            } else {
                query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart1Result2) {
                    query.query(`SELECT * FROM inventairepart2 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart2Result2) {
                        if (InventairePart1Result2[0].Iron < 600 || InventairePart1Result2[0].Wood < 3000 || InventairePart1Result2[0].Stone < 6000 || InventairePart2Result2[0].Carbone < 60) return message.reply(`${Lang.NoEnoughResources}\n${Lang.Need} **60** ${AddEmoji("carbone")} ${Lang.Carbon}, **600** ${AddEmoji("iron")} ${Lang.Iron}, **3000** ${AddEmoji("wood")} ${Lang.Wood}, **6000** ${AddEmoji("Stone")} ${Lang.Stone}`)
                        message.channel.send(`${Lang.BuildConfirmationSteamCentral} **60** ${AddEmoji("carbone")} ${Lang.Carbon}, **600** ${AddEmoji("iron")} ${Lang.Iron}, **3000** ${AddEmoji("wood")} ${Lang.Wood}, **6000** ${AddEmoji("Stone")} ${Lang.Stone}`).then(async (BotBuildConfirmationEolienneMessage) => {
                        await BotBuildConfirmationEolienneMessage.react("✅")
                        await BotBuildConfirmationEolienneMessage.react("❌").then(() => {
                        let filter = (reaction, userreact) => {
                            return ["❌", "✅"].includes(reaction.emoji.name) && userreact.id === User.id
                        }
                        BotBuildConfirmationEolienneMessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']})
                        .then(collected => {
                            const reaction = collected.first();
                            if (reaction.emoji.name === "✅") {
                                query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart1Result2) {
                                    query.query(`SELECT * FROM inventairepart2 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart2Result2) {
                                        if (InventairePart1Result2[0].Iron < 600 || InventairePart1Result2[0].Wood < 3000 || InventairePart1Result2[0].Stone < 6000 || InventairePart2Result2[0].Carbone < 60) return message.reply(`${Lang.NoEnoughResources}\n${Lang.Need} **60** ${AddEmoji("carbone")} ${Lang.Carbon}, **600** ${AddEmoji("iron")} ${Lang.Iron}, **3000** ${AddEmoji("wood")} ${Lang.Wood}, **6000** ${AddEmoji("Stone")} ${Lang.Stone}`)
                                        query.query(`SELECT * FROM machine WHERE DiscordID = ${GetUserID(User)}`, async function(err, MachineResult2) {
                                            Query(`UPDATE inventairepart1 SET Iron = ${InventairePart1Result2[0].Iron - 600}, Wood = ${InventairePart1Result2[0].Wood - 3000}, Stone = ${InventairePart1Result2[0].Stone - 6000} WHERE DiscordID = ${message.author.id}`)
                                            Query(`UPDATE inventairepart2 SET Carbone = ${InventairePart2Result2[0].Carbone - 60} WHERE DiscordID = ${message.author.id}`)
                                            Query(`UPDATE machine SET ReactorVapeur = ${MachineResult2[0].ReactorVapeur + 1} WHERE DiscordID = ${message.author.id}`)
                                            message.channel.send(Lang.SteamCentralBuildFinish)
                                        })
                                    })
                                })
                            } else
                            if (reaction.emoji.name === "❌") {
                                BotBuildConfirmationEolienneMessage.edit(Lang.BuildCancel)
                            }
                        })
                    })
                })
                })
            })
        }
        } else
        if (BuildAsk === "nuclear central") {
            if (args[2] && args[2] === "confirm") {
                query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart1Result2) {
                    query.query(`SELECT * FROM inventairepart2 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart2Result2) {
                        if (InventairePart1Result2[0].Iron < 1500 || InventairePart1Result2[0].Wood < 7500 || InventairePart1Result2[0].Stone < 15000 || InventairePart2Result2[0].Carbone < 150) return message.reply(`${Lang.NoEnoughResources}\n${Lang.Need} **150** ${AddEmoji("carbone")} ${Lang.Carbon}, **1500** ${AddEmoji("iron")} ${Lang.Iron}, **7500** ${AddEmoji("wood")} ${Lang.Wood}, **15000** ${AddEmoji("Stone")} ${Lang.Stone}`)
                        query.query(`SELECT * FROM machine WHERE DiscordID = ${GetUserID(User)}`, async function(err, MachineResult2) {
                            Query(`UPDATE inventairepart1 SET Iron = ${InventairePart1Result2[0].Iron - 1500}, Wood = ${InventairePart1Result2[0].Wood - 7500}, Stone = ${InventairePart1Result2[0].Stone - 15000} WHERE DiscordID = ${message.author.id}`)
                            Query(`UPDATE inventairepart2 SET Carbone = ${InventairePart2Result2[0].Carbone - 150} WHERE DiscordID = ${message.author.id}`)
                            Query(`UPDATE machine SET ReactorNuclear = ${MachineResult2[0].ReactorNuclear + 1} WHERE DiscordID = ${message.author.id}`)
                            message.channel.send(Lang.NuclearCentralBuildFinish)
                        })
                    })
                })
            } else {
                query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart1Result2) {
                    query.query(`SELECT * FROM inventairepart2 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart2Result2) {
                        if (InventairePart1Result2[0].Iron < 1500 || InventairePart1Result2[0].Wood < 7500 || InventairePart1Result2[0].Stone < 15000 || InventairePart2Result2[0].Carbone < 150) return message.reply(`${Lang.NoEnoughResources}\n${Lang.Need} **150** ${AddEmoji("carbone")} ${Lang.Carbon}, **1500** ${AddEmoji("iron")} ${Lang.Iron}, **7500** ${AddEmoji("wood")} ${Lang.Wood}, **15000** ${AddEmoji("Stone")} ${Lang.Stone}`)
                        message.channel.send(`${Lang.BuildConfirmationNuclearCentral} **150** ${AddEmoji("carbone")} ${Lang.Carbon}, **1500** ${AddEmoji("iron")} ${Lang.Iron}, **7500** ${AddEmoji("wood")} ${Lang.Wood}, **15000** ${AddEmoji("Stone")} ${Lang.Stone}`).then(async (BotBuildConfirmationEolienneMessage) => {
                        await BotBuildConfirmationEolienneMessage.react("✅")
                        await BotBuildConfirmationEolienneMessage.react("❌").then(() => {
                        let filter = (reaction, userreact) => {
                            return ["❌", "✅"].includes(reaction.emoji.name) && userreact.id === User.id
                        }
                        BotBuildConfirmationEolienneMessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']})
                        .then(collected => {
                            const reaction = collected.first();
                            if (reaction.emoji.name === "✅") {
                                query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart1Result2) {
                                    query.query(`SELECT * FROM inventairepart2 WHERE DiscordID = ${GetUserID(User)}`, async function(err, InventairePart2Result2) {
                                        if (InventairePart1Result2[0].Iron < 1500 || InventairePart1Result2[0].Wood < 7500 || InventairePart1Result2[0].Stone < 15000 || InventairePart2Result2[0].Carbone < 150) return message.reply(`${Lang.NoEnoughResources}\n${Lang.Need} **150** ${AddEmoji("carbone")} ${Lang.Carbon}, **1500** ${AddEmoji("iron")} ${Lang.Iron}, **7500** ${AddEmoji("wood")} ${Lang.Wood}, **15000** ${AddEmoji("Stone")} ${Lang.Stone}`)
                                            query.query(`SELECT * FROM machine WHERE DiscordID = ${GetUserID(User)}`, async function(err, MachineResult2) {
                                                Query(`UPDATE inventairepart1 SET Iron = ${InventairePart1Result2[0].Iron - 1500}, Wood = ${InventairePart1Result2[0].Wood - 7500}, Stone = ${InventairePart1Result2[0].Stone - 15000} WHERE DiscordID = ${message.author.id}`)
                                                Query(`UPDATE inventairepart2 SET Carbone = ${InventairePart2Result2[0].Carbone - 150} WHERE DiscordID = ${message.author.id}`)
                                                Query(`UPDATE machine SET ReactorNuclear = ${MachineResult2[0].ReactorNuclear + 1} WHERE DiscordID = ${message.author.id}`)
                                                message.channel.send(Lang.NuclearCentralBuildFinish)
                                        })
                                    })
                                })
                            } else
                            if (reaction.emoji.name === "❌") {
                                BotBuildConfirmationEolienneMessage.edit(Lang.BuildCancel)
                            }
                        })
                    })
                })
                })
            })
        }
        }
    }
    
    const Build = function(message, Page, BuildBotMessage) {
        if (Page === 1) {
            var Emoji = AddEmoji("eolienne")
            var Name = Lang.Eolienne
            var Description = Lang.EolienneDescription
        } else if (Page === 2) {
            var Emoji = AddEmoji("solar panel")
            var Name = Lang.SolarPanel
            var Description = Lang.SolarPanelDescription
        } else if (Page === 3) {
            var Emoji = AddEmoji("hydraulique")
            var Name = Lang.HydrauliqueCentral
            var Description = Lang.HydrauliqueCentralDescription
        } else if (Page === 4) {
            var Emoji = AddEmoji("vapeur")
            var Name = Lang.VapeurCentral
            var Description = Lang.VapeurCentralDescription
        } else if (Page === 5) {
            var Emoji = AddEmoji("nuclear")
            var Name = Lang.NuclearCentral
            var Description = Lang.NuclearCentralDescription
        }
    let BuildEmbed = new Discord.RichEmbed()
    .setAuthor(`[${Page}${Lang.BuildTitle}`, GetUserAvatarURL(User))
    .setColor(GetRandomColor())
    .setDescription(`▰ **${Emoji} ${Name}** ▰\n${Description}`)
    .setTimestamp()
    BuildBotMessage.edit(BuildEmbed).then(async (BuildBotMessage) => {
            let filter = (reaction, userreact) => {
                return ["▶️", "◀️"].includes(reaction.emoji.name) && userreact.id === User.id
            }
            BuildBotMessage.awaitReactions(filter, {max: 1, time: 180000, errors: ['time']})
            .then(collected => {
                const reaction = collected.first();
                if (reaction.emoji.name === "▶️") {
                    if (Page !== 5) Page++
                    reaction.remove(User)
                    Build(message, Page, BuildBotMessage)
                } else if (reaction.emoji.name === "◀️") {
                    if (Page !== 1) Page--
                    reaction.remove(User)
                    Build(message, Page, BuildBotMessage)
                }
            })
    })
    }
    if (!args[1]) {
        var Page = 1
    if (Page === 1) {
        var Emoji = AddEmoji("eolienne")
        var Name = Lang.Eolienne
        var Description = Lang.EolienneDescription
    } else if (Page === 2) {
        var Emoji = AddEmoji("solar panel")
        var Name = Lang.SolarPanel
        var Description = Lang.SolarPanelDescription
    } else if (Page === 3) {
        var Emoji = AddEmoji("hydraulique")
        var Name = Lang.HydrauliqueCentral
        var Description = Lang.HydrauliqueCentralDescription
    } else if (Page === 4) {
        var Emoji = AddEmoji("vapeur")
        var Name = Lang.VapeurCentral
        var Description = Lang.VapeurCentralDescription
    } else if (Page === 5) {
        var Emoji = AddEmoji("nuclear")
        var Name = Lang.NuclearCentral
        var Description = Lang.NuclearCentralDescription
    }
let BuildEmbed = new Discord.RichEmbed()
.setAuthor(`[${Page}${Lang.BuildTitle}`, GetUserAvatarURL(User))
.setColor(GetRandomColor())
.setDescription(`▰ **${Emoji} ${Name}** ▰\n${Description}`)
.setTimestamp()
message.channel.send(BuildEmbed).then(async (BuildBotMessage) => {
    await BuildBotMessage.react("◀️")
    await BuildBotMessage.react("▶️").then(() => {
        let filter = (reaction, userreact) => {
            return ["▶️", "◀️"].includes(reaction.emoji.name) && userreact.id === User.id
        }
        BuildBotMessage.awaitReactions(filter, {max: 1, time: 180000, errors: ['time']})
        .then(collected => {
            const reaction = collected.first();
            if (reaction.emoji.name === "▶️") {
                if (Page !== 5) Page++
                reaction.remove(User)
                        Build(message, Page, BuildBotMessage)
                    } else if (reaction.emoji.name === "◀️") {
                        if (Page !== 1) Page--
                        reaction.remove(User)
                Build(message, Page, BuildBotMessage)
            }
        })
    })
})
    } else
    if (args[1]) {
        var BuildAsk = args[1]
        const FilterValableArgs = ValableArgs.filter(BuildArgs => BuildArgs.toLowerCase().includes(BuildAsk.toLowerCase()) === true)
        if (FilterValableArgs.length === 0) {
            return message.reply(Lang.NoBuildFind).then(() => {
                var Page = 1
    if (Page === 1) {
        var Emoji = AddEmoji("eolienne")
        var Name = Lang.Eolienne
        var Description = Lang.EolienneDescription
    } else if (Page === 2) {
        var Emoji = AddEmoji("solar panel")
        var Name = Lang.SolarPanel
        var Description = Lang.SolarPanelDescription
    } else if (Page === 3) {
        var Emoji = AddEmoji("hydraulique")
        var Name = Lang.HydrauliqueCentral
        var Description = Lang.HydrauliqueCentralDescription
    } else if (Page === 4) {
        var Emoji = AddEmoji("vapeur")
        var Name = Lang.VapeurCentral
        var Description = Lang.VapeurCentralDescription
    } else if (Page === 5) {
        var Emoji = AddEmoji("nuclear")
        var Name = Lang.NuclearCentral
        var Description = Lang.NuclearCentralDescription
    }
let BuildEmbed = new Discord.RichEmbed()
.setAuthor(`[${Page}${Lang.BuildTitle}`, GetUserAvatarURL(User))
.setColor(GetRandomColor())
.setDescription(`▰ **${Emoji} ${Name}** ▰\n${Description}`)
.setTimestamp()
message.channel.send(BuildEmbed).then(async (BuildBotMessage) => {
    await BuildBotMessage.react("◀️")
    await BuildBotMessage.react("▶️").then(() => {
        let filter = (reaction, userreact) => {
            return ["▶️", "◀️"].includes(reaction.emoji.name) && userreact.id === User.id
        }
        BuildBotMessage.awaitReactions(filter, {max: 1, time: 180000, errors: ['time']})
        .then(collected => {
            const reaction = collected.first();
            if (reaction.emoji.name === "▶️") {
                if (Page !== 5) Page++
                reaction.remove(User)
                        Build(message, Page, BuildBotMessage)
                    } else if (reaction.emoji.name === "◀️") {
                        if (Page !== 1) Page--
                        reaction.remove(User)
                Build(message, Page, BuildBotMessage)
            }
        })
    })
})
            })
        } else
        if (FilterValableArgs.length > 1) {
            var Find = []
            FilterValableArgs.forEach(Args => {
                Find.push(`${Find.length + 1}-${Args}`)
            })
            message.channel.send(`${Lang.ManyBuildFind}\n\`\`\`${Find.join(" \n")}\`\`\``).then((ManyBuildFindMessage) => {
                const filter = (message2, user) => {
                    return message2.author.id === message.author.id
                }
                ManyBuildFindMessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                .then(async collected => {
                    const MessageCollected = collected.first()
                    if (MessageCollected) {
                        if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                        if (Number(MessageCollected) > Find.length + 1 || Number(MessageCollected) < 1) return message.reply(Lang.BuildCancel)
                        let RealBuildAsk = Find[Number(MessageCollected) - 1].split("-")[1].trim()
                        Building(message, RealBuildAsk)
                    }
                })
            })
        } else {
            let RealBuildAsk = FilterValableArgs[0]
                        Building(message, RealBuildAsk)
        }
    }

}

const Lang = require("../lang/fr.json")
module.exports.help = {
    name: "Build",
    description: Lang.BuildCommandDescription
}