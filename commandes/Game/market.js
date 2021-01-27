const Discord = require("discord.js")
exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add) => 
{
    try {
        var MaxReact = [1]
        const BuyPage1 = async function (message, CoronaMessage, User, AddEmoji, Lang) {
            query.query(`SELECT * FROM market WHERE DiscordID = ${GetUserID(User)}`, async function(err, MarketResult) {
            let MarketBuyEmbed = new Discord.RichEmbed()
            .setTitle(Lang.MarketBuyEmbedPage1Title)
            .setColor(GetRandomColor())
            .setDescription(`${Lang.MoneyUserHas} **${MarketResult[0].Money}** ${AddEmoji("Money")} ${Lang.Money}\n:one: **100** ${AddEmoji("Stone")} ${Lang.Stone} ➔ **5** ${AddEmoji("Money")} ${Lang.Money}\n:two: **100** ${AddEmoji("Wood")} ${Lang.Wood} ➔ **5** ${AddEmoji("Money")} ${Lang.Money}\n:three: **100** ${AddEmoji("Coal")} ${Lang.Coal} ➔ **5** ${AddEmoji("Money")} ${Lang.Money}\n:four: **50** ${AddEmoji("Iron")} ${Lang.Iron} ➔ **5** ${AddEmoji("Money")} ${Lang.Money}\n:five: **50** ${AddEmoji("CarboneBrut")} ${Lang.RawCarbon} ➔ **5** ${AddEmoji("Money")} ${Lang.Money}\n:six: **50** ${AddEmoji("Stone")} ${Lang.Stone} ➔ **2.5** ${AddEmoji("Money")} ${Lang.Money}\n:seven: **50** ${AddEmoji("Coal")} ${Lang.Coal} ➔ **2.5** ${AddEmoji("Money")} ${Lang.Money}`)
            .setTimestamp()
            //await message.reply(Lang.MarketBuyConfirmedMention)
            await CoronaMessage.edit(MarketBuyEmbed).then(async (MarketBuyMessage) => {
                await CoronaMessage.clearReactions()
                await MarketBuyMessage.react("1️⃣")
                await MarketBuyMessage.react("2️⃣")
                await MarketBuyMessage.react("3️⃣")
                await MarketBuyMessage.react("4️⃣")
                await MarketBuyMessage.react("5️⃣")
                await MarketBuyMessage.react("6️⃣")
                await MarketBuyMessage.react("7️⃣").then(() => {
                    let filter = (reaction, userreact) => {
                        return ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣"].includes(reaction.emoji.name) && userreact.id === User.id
                    }
                    MarketBuyMessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']})
                    .then(collected => {
                        const reaction = collected.first();
                        if (reaction.emoji.name === "1️⃣") 
                            {
                                message.channel.send(Lang.MarketOfferNumberBuy).then((OfferNumberMessage) => {
                                    const filter = (message2, user) => {
                                        return message2.author.id === message.author.id
                                    }
                                    OfferNumberMessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                                    .then(async collected =>{
                                        const MessageCollected = collected.first()
                                        if (MessageCollected) {
                                            if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                                            if (Number(MessageCollected) < 0) return message.reply(Lang.NotANumberError)
                                            query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                if (result[0].Stone < Number(MessageCollected) * 100) return message.reply(Lang.NoEnoughResources)
                                                query.query(`UPDATE inventairepart1 SET Stone = ${result[0].Stone - Number(MessageCollected) * 100} WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                    Add(["Money"], "market", Number(MessageCollected) * 5, User)
                                                    message.channel.send(Lang.PurchaseComplete)
                                                })
                                            })
                                        }
                                    })
                                })
                            }
                            else
                            if (reaction.emoji.name === "2️⃣") 
                            {
                                message.channel.send(Lang.MarketOfferNumberBuy).then((OfferNumberMessage) => {
                                    const filter = (message2, user) => {
                                        return message2.author.id === message.author.id
                                    }
                                    OfferNumberMessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                                    .then(async collected =>{
                                        const MessageCollected = collected.first()
                                        if (MessageCollected) {
                                            if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                                            if (Number(MessageCollected) < 0) return message.reply(Lang.NotANumberError)
                                            query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                if (result[0].Wood < Number(MessageCollected) * 100) return message.reply(Lang.NoEnoughResources)
                                                query.query(`UPDATE inventairepart1 SET Wood = ${result[0].Wood - Number(MessageCollected) * 100} WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                    Add(["Money"], "market", Number(MessageCollected) * 5, User)
                                                    message.channel.send(Lang.PurchaseComplete)
                                                })
                                            })
                                        }
                                    })
                                })
                            }
                            else
                            if (reaction.emoji.name === "3️⃣") 
                            {
                                message.channel.send(Lang.MarketOfferNumberBuy).then((OfferNumberMessage) => {
                                    const filter = (message2, user) => {
                                        return message2.author.id === message.author.id
                                    }
                                    OfferNumberMessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                                    .then(async collected =>{
                                        const MessageCollected = collected.first()
                                        if (MessageCollected) {
                                            if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                                            if (Number(MessageCollected) < 0) return message.reply(Lang.NotANumberError)
                                            query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                if (result[0].Coal < Number(MessageCollected) * 100) return message.reply(Lang.NoEnoughResources)
                                                query.query(`UPDATE inventairepart1 SET Coal = ${result[0].Coal - Number(MessageCollected) * 100} WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                    Add(["Money"], "market", Number(MessageCollected) * 5, User)
                                                    message.channel.send(Lang.PurchaseComplete)
                                                })
                                            })
                                        }
                                    })
                                })
                            }
                            else
                            if (reaction.emoji.name === "4️⃣") 
                            {
                                message.channel.send(Lang.MarketOfferNumberBuy).then((OfferNumberMessage) => {
                                    const filter = (message2, user) => {
                                        return message2.author.id === message.author.id
                                    }
                                    OfferNumberMessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                                    .then(async collected =>{
                                        const MessageCollected = collected.first()
                                        if (MessageCollected) {
                                            if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                                            if (Number(MessageCollected) < 0) return message.reply(Lang.NotANumberError)
                                            query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                if (result[0].Iron < Number(MessageCollected) * 50) return message.reply(Lang.NoEnoughResources)
                                                query.query(`UPDATE inventairepart1 SET Iron = ${result[0].Iron - Number(MessageCollected) * 50} WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                    Add(["Money"], "market", Number(MessageCollected) * 5, User)
                                                    message.channel.send(Lang.PurchaseComplete)
                                                })
                                            })
                                        }
                                    })
                                })
                            }
                            else
                            if (reaction.emoji.name === "5️⃣") 
                            {
                                message.channel.send(Lang.MarketOfferNumberBuy).then((OfferNumberMessage) => {
                                    const filter = (message2, user) => {
                                        return message2.author.id === message.author.id
                                    }
                                    OfferNumberMessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                                    .then(async collected =>{
                                        const MessageCollected = collected.first()
                                        if (MessageCollected) {
                                            if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                                            if (Number(MessageCollected) < 0) return message.reply(Lang.NotANumberError)
                                            query.query(`SELECT * FROM inventairepart2 WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                if (result[0].CarboneBrut < Number(MessageCollected) * 50) return message.reply(Lang.NoEnoughResources)
                                                query.query(`UPDATE inventairepart2 SET CarboneBrut = ${result[0].CarboneBrut - Number(MessageCollected) * 50} WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                    Add(["Money"], "market", Number(MessageCollected) * 5, User)
                                                    message.channel.send(Lang.PurchaseComplete)
                                                })
                                            })
                                        }
                                    })
                                })
                            }
                            else
                            if (reaction.emoji.name === "6️⃣") 
                            {
                                message.channel.send(Lang.MarketOfferNumberBuy).then((OfferNumberMessage) => {
                                    const filter = (message2, user) => {
                                        return message2.author.id === message.author.id
                                    }
                                    OfferNumberMessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                                    .then(async collected =>{
                                        const MessageCollected = collected.first()
                                        if (MessageCollected) {
                                            if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                                            if (Number(MessageCollected) < 0) return message.reply(Lang.NotANumberError)
                                            query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                if (result[0].Stone < Number(MessageCollected) * 50) return message.reply(Lang.NoEnoughResources)
                                                query.query(`UPDATE inventairepart1 SET Stone = ${result[0].Stone - Number(MessageCollected) * 50} WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                    Add(["Money"], "market", Number(MessageCollected) * 2.5, User)
                                                    message.channel.send(Lang.PurchaseComplete)
                                                })
                                            })
                                        }
                                    })
                                })
                            }
                            else
                            if (reaction.emoji.name === "7️⃣") 
                            {
                                message.channel.send(Lang.MarketOfferNumberBuy).then((OfferNumberMessage) => {
                                    const filter = (message2, user) => {
                                        return message2.author.id === message.author.id
                                    }
                                    OfferNumberMessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                                    .then(async collected =>{
                                        const MessageCollected = collected.first()
                                        if (MessageCollected) {
                                            if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                                            if (Number(MessageCollected) < 0) return message.reply(Lang.NotANumberError)
                                            query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                if (result[0].Coal < Number(MessageCollected) * 50) return message.reply(Lang.NoEnoughResources)
                                                query.query(`UPDATE inventairepart1 SET Coal = ${result[0].Coal - Number(MessageCollected) * 50} WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                    Add(["Money"], "market", Number(MessageCollected) * 2.5, User)
                                                    message.channel.send(Lang.PurchaseComplete)
                                                })
                                            })
                                        }
                                    })
                                })
                            }
                        })
                    })
            })
        })
        }
        const BuyPage2 = async function (message, CoronaMessage, User, AddEmoji, Lang) {
            query.query(`SELECT * FROM market WHERE DiscordID = ${GetUserID(User)}`, async function(err, MarketResult) {
            let MarketBuyEmbed2 = new Discord.RichEmbed()
            .setTitle(Lang.MarketBuyEmbedPage2Title)
            .setColor(GetRandomColor())
            .setDescription(`${Lang.MoneyUserHas} **${MarketResult[0].Money}** ${AddEmoji("Money")} ${Lang.Money}\n:one: ${AddEmoji("Stone")} ${Lang.Stone} :　 　　 **1** ${AddEmoji("Money")} ${Lang.Money} ➔ **20** ${AddEmoji("Stone")} ${Lang.Stone}\n:two: ${AddEmoji("Wood")} ${Lang.Wood} :　‏‏‎　　　 **1** ${AddEmoji("Money")} ${Lang.Money} ➔ **20** ${AddEmoji("Wood")} ${Lang.Wood}\n:three: ${AddEmoji("Coal")} ${Lang.Coal} : 　　 **1** ${AddEmoji("Money")} ${Lang.Money} ➔ **20** ${AddEmoji("Coal")} ${Lang.Coal}\n:four: ${AddEmoji("Iron")} ${Lang.Iron} :  　　 　　 ‏‏‎**1** ${AddEmoji("Money")} ${Lang.Money} ➔ **10** ${AddEmoji("Iron")} ${Lang.Iron}\n:five: ${AddEmoji("carbonebrut")} ${Lang.RawCarbon} : ‏‏‎**1** ${AddEmoji("Money")} ${Lang.Money} ➔ **10** ${AddEmoji("carbonebrut")} ${Lang.RawCarbon}\n:six: ${AddEmoji("Carbone")} ${Lang.Carbon} :  　　 **1** ${AddEmoji("Money")} ${Lang.Money} ➔ **1** ${AddEmoji("Carbone")} ${Lang.Carbon}`)
            .setTimestamp()
            //await message.reply(Lang.MarketBuyConfirmedMention)
            await CoronaMessage.edit(MarketBuyEmbed2).then(async (MarketBuyMessage) => {
                await CoronaMessage.clearReactions()
                await MarketBuyMessage.react("1️⃣")
                await MarketBuyMessage.react("2️⃣")
                await MarketBuyMessage.react("3️⃣")
                await MarketBuyMessage.react("4️⃣")
                await MarketBuyMessage.react("5️⃣")
                await MarketBuyMessage.react("6️⃣").then(async () => {
                    let filter = (reaction, userreact) => {
                        return ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣"].includes(reaction.emoji.name) && userreact.id === User.id
                    }
                    MarketBuyMessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']})
                    .then(collected => {
                        const reaction = collected.first();
                        if (reaction.emoji.name === "1️⃣") 
                            {
                                message.channel.send(Lang.MarketOfferNumberBuy).then((OfferNumberMessage) => {
                                    const filter = (message2, user) => {
                                        return message2.author.id === message.author.id
                                    }
                                    OfferNumberMessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                                    .then(async collected =>{
                                        const MessageCollected = collected.first()
                                        if (MessageCollected) {
                                            if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                                            if (Number(MessageCollected) < 0) return message.reply(Lang.NotANumberError)
                                            query.query(`SELECT * FROM market WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                if (result[0].Money < Number(MessageCollected) * 1) return message.reply(Lang.NoEnoughResources)
                                                query.query(`UPDATE market SET Money = ${result[0].Money - Number(MessageCollected)} WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                    Add(["Stone"], "inventairepart1", Number(MessageCollected) * 20, User)
                                                    message.channel.send(Lang.PurchaseComplete)
                                                })
                                            })
                                        }
                                    })
                                })
                            }
                            else
                            if (reaction.emoji.name === "2️⃣") 
                            {
                                message.channel.send(Lang.MarketOfferNumberBuy).then((OfferNumberMessage) => {
                                    const filter = (message2, user) => {
                                        return message2.author.id === message.author.id
                                    }
                                    OfferNumberMessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                                    .then(async collected =>{
                                        const MessageCollected = collected.first()
                                        if (MessageCollected) {
                                            if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                                            if (Number(MessageCollected) < 0) return message.reply(Lang.NotANumberError)
                                            query.query(`SELECT * FROM market WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                if (result[0].Money < Number(MessageCollected) * 1) return message.reply(Lang.NoEnoughResources)
                                                query.query(`UPDATE market SET Money = ${result[0].Money - Number(MessageCollected)} WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                    Add(["Wood"], "inventairepart1", Number(MessageCollected) * 20, User)
                                                    message.channel.send(Lang.PurchaseComplete)
                                                })
                                            })
                                        }
                                    })
                                })
                            }
                            else
                            if (reaction.emoji.name === "3️⃣") 
                            {
                                message.channel.send(Lang.MarketOfferNumberBuy).then((OfferNumberMessage) => {
                                    const filter = (message2, user) => {
                                        return message2.author.id === message.author.id
                                    }
                                    OfferNumberMessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                                    .then(async collected =>{
                                        const MessageCollected = collected.first()
                                        if (MessageCollected) {
                                            if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                                            if (Number(MessageCollected) < 0) return message.reply(Lang.NotANumberError)
                                            query.query(`SELECT * FROM market WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                if (result[0].Money < Number(MessageCollected) * 1) return message.reply(Lang.NoEnoughResources)
                                                query.query(`UPDATE market SET Money = ${result[0].Money - Number(MessageCollected)} WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                    Add(["Coal"], "inventairepart1", Number(MessageCollected) * 20, User)
                                                    message.channel.send(Lang.PurchaseComplete)
                                                })
                                            })
                                        }
                                    })
                                })
                            }
                            else
                            if (reaction.emoji.name === "4️⃣") 
                            {
                                message.channel.send(Lang.MarketOfferNumberBuy).then((OfferNumberMessage) => {
                                    const filter = (message2, user) => {
                                        return message2.author.id === message.author.id
                                    }
                                    OfferNumberMessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                                    .then(async collected =>{
                                        const MessageCollected = collected.first()
                                        if (MessageCollected) {
                                            if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                                            if (Number(MessageCollected) < 0) return message.reply(Lang.NotANumberError)
                                            query.query(`SELECT * FROM market WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                if (result[0].Money < Number(MessageCollected) * 1) return message.reply(Lang.NoEnoughResources)
                                                query.query(`UPDATE market SET Money = ${result[0].Money - Number(MessageCollected)} WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                    Add(["Iron"], "inventairepart1", Number(MessageCollected) * 10, User)
                                                    message.channel.send(Lang.PurchaseComplete)
                                                })
                                            })
                                        }
                                    })
                                })
                            }
                            else
                            if (reaction.emoji.name === "5️⃣") 
                            {
                                message.channel.send(Lang.MarketOfferNumberBuy).then((OfferNumberMessage) => {
                                    const filter = (message2, user) => {
                                        return message2.author.id === message.author.id
                                    }
                                    OfferNumberMessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                                    .then(async collected =>{
                                        const MessageCollected = collected.first()
                                        if (MessageCollected) {
                                            if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                                            if (Number(MessageCollected) < 0) return message.reply(Lang.NotANumberError)
                                            query.query(`SELECT * FROM market WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                if (result[0].Money < Number(MessageCollected) * 1) return message.reply(Lang.NoEnoughResources)
                                                query.query(`UPDATE market SET Money = ${result[0].Money - Number(MessageCollected)} WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                    Add(["CarboneBrut"], "inventairepart2", Number(MessageCollected) * 10, User)
                                                    message.channel.send(Lang.PurchaseComplete)
                                                })
                                            })
                                        }
                                    })
                                })
                            }
                            else
                            if (reaction.emoji.name === "6️⃣") 
                            {
                                message.channel.send(Lang.MarketOfferNumberBuy).then((OfferNumberMessage) => {
                                    const filter = (message2, user) => {
                                        return message2.author.id === message.author.id
                                    }
                                    OfferNumberMessage.channel.awaitMessages(filter, {max: 1, time: 90000, errors: ['time']}).catch(console.error())
                                    .then(async collected =>{
                                        const MessageCollected = collected.first()
                                        if (MessageCollected) {
                                            if (isNaN(MessageCollected)) return message.reply(Lang.NotANumberError)
                                            if (Number(MessageCollected) < 0) return message.reply(Lang.NotANumberError)
                                            query.query(`SELECT * FROM market WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                if (result[0].Money < Number(MessageCollected) * 1) return message.reply(Lang.NoEnoughResources)
                                                query.query(`UPDATE market SET Money = ${result[0].Money - Number(MessageCollected)} WHERE DiscordID = ${message.author.id}`, function(err, result) {
                                                    Add(["Carbone"], "inventairepart2", Number(MessageCollected), User)
                                                    message.channel.send(Lang.PurchaseComplete)
                                                })
                                            })
                                        }
                                    })
                                })
                            }
                        })
                    })
            })
        })
        }
        const Page1 = async function (message, CoronaMessage, User, AddEmoji, Lang) {
            MaxReact.unshift(1)
            const Discord = require("discord.js")
            query.query(`SELECT * FROM market WHERE DiscordID = ${GetUserID(User)}`, function(err, MarketResult) {
                let MarketEmbed = new Discord.RichEmbed()
                .setAuthor(Lang.MarketEmbedTitle1, GetUserAvatarURL(User)) 
                .setColor(GetRandomColor())
                .setDescription(`${Lang.MoneyUserHas} **${MarketResult[0].Money}** ${AddEmoji("Money")} ${Lang.Money}\n${AddEmoji("Money")} ${Lang.Money} : **100** ${AddEmoji("Stone")} ${Lang.Stone} ➔ **5** ${AddEmoji("Money")} ${Lang.Money}\n${AddEmoji("Money")} ${Lang.Money} : **100** ${AddEmoji("Wood")} ${Lang.Wood} ➔ **5** ${AddEmoji("Money")} ${Lang.Money}\n${AddEmoji("Money")} ${Lang.Money} : **100** ${AddEmoji("Coal")} ${Lang.Coal} ➔ **5** ${AddEmoji("Money")} ${Lang.Money}\n${AddEmoji("Money")} ${Lang.Money} : **50** ${AddEmoji("Iron")} ${Lang.Iron} ➔ **5** ${AddEmoji("Money")} ${Lang.Money}\n${AddEmoji("Money")} ${Lang.Money} : **50** ${AddEmoji("CarboneBrut")} ${Lang.RawCarbon} ➔ **5** ${AddEmoji("Money")} ${Lang.Money}\n${AddEmoji("Money")} ${Lang.Money} : **50** ${AddEmoji("Stone")} ${Lang.Stone} ➔ **2.5** ${AddEmoji("Money")} ${Lang.Money}\n${AddEmoji("Money")} ${Lang.Money} : **50** ${AddEmoji("Coal")} ${Lang.Coal} ➔ **2.5** ${AddEmoji("Money")} ${Lang.Money}`)
                .setTimestamp()
                CoronaMessage.edit(MarketEmbed).then(async (MarketMessage) => {
                    await MarketMessage.react("⬅️")
                    await MarketMessage.react("➡️").then(() => {
                        let filter = (reaction, userreact) => {
                            return ["⬅️", "➡️"].includes(reaction.emoji.name) && userreact.id === User.id
                        }
                        MarketMessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']})
                        .then(collected => {
                            const reaction = collected.first();
                            if (reaction.emoji.name === "⬅️" && MaxReact[0] === 1) 
                                {
                                    MaxReact.unshift(0)
                                    Page1(message, MarketMessage, User, AddEmoji, Lang)
                                }
                                else
                                if (reaction.emoji.name === "➡️" && MaxReact[0] === 1) 
                                {
                                    MaxReact.unshift(0)
                                    Page2(message, MarketMessage, User, AddEmoji, Lang)
                                }
                            })
                        })
                    await MarketMessage.react("689547024290414661").then(() => {
                    let filter = (reaction, userreact) => {
                        return ["689547024290414661"].includes(reaction.emoji.id) && userreact.id === User.id
                    }
                    MarketMessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']})
                    .then(collected => {
                        const reaction = collected.first();
                            if (reaction.emoji.id === "689547024290414661" && MaxReact[0] === 1)
                            {
                                MaxReact.unshift(0)
                                BuyPage1(message, MarketMessage, User, AddEmoji, Lang)
                            }
                        })
                    })
                })
            })
        }
        const Page2 = async function (message, CoronaMessage, User, AddEmoji, Lang) {
            MaxReact.unshift(2)
            const Discord = require("discord.js")
            query.query(`SELECT * FROM market WHERE DiscordID = ${GetUserID(User)}`, function(err, MarketResult) {
                let MarketEmbed = new Discord.RichEmbed()
                .setAuthor(Lang.MarketEmbedTitle2, GetUserAvatarURL(User)) 
                .setColor(GetRandomColor())
                .setDescription(`${Lang.MoneyUserHas} **${MarketResult[0].Money}** ${AddEmoji("Money")} ${Lang.Money}\n${AddEmoji("Stone")} ${Lang.Stone} :　 　　 **1** ${AddEmoji("Money")} ${Lang.Money} ➔ **20** ${AddEmoji("Stone")} ${Lang.Stone}\n${AddEmoji("Wood")} ${Lang.Wood} :　‏‏‎　　　 **1** ${AddEmoji("Money")} ${Lang.Money} ➔ **20** ${AddEmoji("Wood")} ${Lang.Wood}\n${AddEmoji("Coal")} ${Lang.Coal} : 　　 **1** ${AddEmoji("Money")} ${Lang.Money} ➔ **20** ${AddEmoji("Coal")} ${Lang.Coal}\n${AddEmoji("Iron")} ${Lang.Iron} :  　　 　　 ‏‏‎**1** ${AddEmoji("Money")} ${Lang.Money} ➔ **10** ${AddEmoji("Iron")} ${Lang.Iron}\n${AddEmoji("carbonebrut")} ${Lang.RawCarbon} : ‏‏‎ ‎**1** ${AddEmoji("Money")} ${Lang.Money} ➔ **10** ${AddEmoji("carbonebrut")} ${Lang.RawCarbon}\n${AddEmoji("Carbone")} ${Lang.Carbon} :  　　 **1** ${AddEmoji("Money")} ${Lang.Money} ➔ **1** ${AddEmoji("Carbone")} ${Lang.Carbon}`)
                .setTimestamp()
                CoronaMessage.edit(MarketEmbed).then(async (MarketMessage) => {
                    await MarketMessage.react("⬅️")
                    await MarketMessage.react("➡️").then(() => {
                        let filter = (reaction, userreact) => {
                            return ["⬅️", "➡️"].includes(reaction.emoji.name) && userreact.id === User.id
                        }
                        MarketMessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']})
                        .then(collected => {
                            const reaction = collected.first();
                            if (reaction.emoji.name === "⬅️" && MaxReact[0] === 2) 
                                {
                                    MaxReact.unshift(0)
                                    Page1(message, MarketMessage, User, AddEmoji, Lang)
                                }
                                else
                                if (reaction.emoji.name === "➡️" && MaxReact[0] === 2) 
                                {
                                    MaxReact.unshift(0)
                                    Page2(message, MarketMessage, User, AddEmoji, Lang)
                                }
                            })
                        })
                    await MarketMessage.react("689547024290414661").then(() => {
                    let filter = (reaction, userreact) => {
                        return ["689547024290414661"].includes(reaction.emoji.id) && userreact.id === User.id
                    }
                    MarketMessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']})
                    .then(collected => {
                        const reaction = collected.first();
                            if (reaction.emoji.id === "689547024290414661" && MaxReact[0] === 2)
                            {
                                MaxReact.unshift(0)
                                BuyPage2(message, MarketMessage, User, AddEmoji, Lang)
                            }
                        })
                    })
                })
            })
        }
        query.query(`SELECT * FROM market WHERE DiscordID = ${GetUserID(User)}`, function(err, MarketResult) {
            let MarketEmbed = new Discord.RichEmbed()
            .setAuthor(Lang.MarketEmbedTitle1, GetUserAvatarURL(User)) 
            .setColor(GetRandomColor())
            .setDescription(`${Lang.MoneyUserHas} **${MarketResult[0].Money}** ${AddEmoji("Money")} ${Lang.Money}\n${AddEmoji("Money")} ${Lang.Money} : **100** ${AddEmoji("Stone")} ${Lang.Stone} ➔ **5** ${AddEmoji("Money")} ${Lang.Money}\n${AddEmoji("Money")} ${Lang.Money} : **100** ${AddEmoji("Wood")} ${Lang.Wood} ➔ **5** ${AddEmoji("Money")} ${Lang.Money}\n${AddEmoji("Money")} ${Lang.Money} : **100** ${AddEmoji("Coal")} ${Lang.Stone} ➔ **5** ${AddEmoji("Money")} ${Lang.Money}\n${AddEmoji("Money")} ${Lang.Money} : **50** ${AddEmoji("Iron")} ${Lang.Iron} ➔ **5** ${AddEmoji("Money")} ${Lang.Money}\n${AddEmoji("Money")} ${Lang.Money} : **50** ${AddEmoji("CarboneBrut")} ${Lang.RawCarbon} ➔ **5** ${AddEmoji("Money")} ${Lang.Money}\n${AddEmoji("Money")} ${Lang.Money} : **50** ${AddEmoji("Stone")} ${Lang.Stone} ➔ **2.5** ${AddEmoji("Money")} ${Lang.Money}\n${AddEmoji("Money")} ${Lang.Money} : **50** ${AddEmoji("Coal")} ${Lang.Coal} ➔ **2.5** ${AddEmoji("Money")} ${Lang.Money}`)
            .setTimestamp()
            message.channel.send(MarketEmbed).then(async (MarketMessage) => {
                await MarketMessage.react("⬅️")
                    await MarketMessage.react("➡️").then(() => {
                        let filter = (reaction, userreact) => {
                            return ["⬅️", "➡️"].includes(reaction.emoji.name) && userreact.id === User.id
                        }
                        MarketMessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']})
                        .then(collected => {
                            const reaction = collected.first();
                            if (reaction.emoji.name === "⬅️" && MaxReact[0] === 1) 
                                {
                                    MaxReact.unshift(0)
                                    Page1(message, MarketMessage, User, AddEmoji, Lang)
                                }
                                else
                                if (reaction.emoji.name === "➡️" && MaxReact[0] === 1) 
                                {
                                    MaxReact.unshift(0)
                                    Page2(message, MarketMessage, User, AddEmoji, Lang)
                                }
                            })
                        })
                    await MarketMessage.react("689547024290414661").then(() => {
                    let filter = (reaction, userreact) => {
                        return ["689547024290414661"].includes(reaction.emoji.id) && userreact.id === User.id
                    }
                    MarketMessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']})
                    .then(collected => {
                        const reaction = collected.first();
                            if (reaction.emoji.id === "689547024290414661" && MaxReact[0] === 1)
                            {
                                MaxReact.unshift(0)
                                BuyPage1(message, MarketMessage, User, AddEmoji, Lang)
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
    name: "Market",
    description: Lang.MarketCommandDescription
}