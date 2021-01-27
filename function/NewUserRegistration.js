const query = require("../MySQL.js")
const GetUserAvatarURL = require('../function/GetUserAvatarURL.js')
const Send = require("../function/Send.js")
const GetImageByURL = require("../function/GetImageByURL.js")
const StartTyping = require("../function/StartTyping.js")
const StopTyping = require("../function/StopTyping.js")
const GetRandomColor = require("../function/GetRandomColor")
const NewUserRegistration = require("../function/NewUserRegistration.js")
const Query = require("../function/Query.js")
const GetUserID = require("../function/GetUserID.js")
const GetPrincipalItemNumber = require("../function/GetPrincipalItemNumber.js")
const Lang = require("../lang/fr.json")
const NumberConvert = require("../function/NumberConvert.js")
const GetXCordonate = require("../function/GetXCordonate.js")
const GetBackGround = require("../function/GetBackGround.js")
const GetAvancedItemNumber = require("../function/GetAvancedItemNumber.js")
const GetUserJobs = require("../function/GetUserJobs.js")
const GetEnergyGenerationPerSeconde = require("../function/GetEnergyGenerationPerSeconde.js")
const GetUserLevelPourcentage = require("../function/GetUserPourcentageLevel.js")
const GetUserExpRequire = require("../function/GetUserExpRequire.js")
const GetUserExp = require("../function/GetUserExp.js")
const GetUserLevel = require("../function/GetUserLevel.js")
const ConvertMsToDate = require("../function/ConvertMsToDate.js")
const GetUserUsername = require("./GetUserUsername.js")
const CommandsList = require("../bot.js").CommandsList
const HelpCommandsList = require("../bot.js").HelpCommand
const AddEmoji = require("../function/AddEmoji.js")
const Logs = require("./Logs.js")
const GetUserJobsEmoji = require("../function/GetUserJobsEmoji.js")
const CleanText = require("../function/CleanText.js")
const Add = require("../function/Add.js")
const GetUsername = require("../function/GetUsername.js")
var Message = 0
const client = require("../bot.js").client
module.exports = async function (message, user) {
    message.channel.send(`<@${GetUserID(user)}>, ` + Lang.NewUserRegistrationFirstStape).then(async (BotMessage) => {
        await BotMessage.react("⛏️")
        await BotMessage.react("🪓")
        await BotMessage.react("🔨")
        await BotMessage.react("🔬").then(() => {
            let filter = (reaction, userreact) => {
                return ["⛏️", "🪓", "🔨", "🔬"].includes(reaction.emoji.name) && userreact.id === user.id
            }
            BotMessage.awaitReactions(filter, {max: 1, time: 90000, errors: ['time']})
            .then(collected => {
                const reaction = collected.first();
                if (reaction.emoji.name === "⛏️") {
                        message.channel.send(`<@${GetUserID(user)}>, ` + Lang.NewUserRegistrationSecondStapeMineur)
                        Query(`INSERT INTO userinfo (DiscordID, Username, RegisterTime) VALUES ('${GetUserID(user)}', '${GetUserUsername(user)}', ${Date.now()})`)
                        Query(`INSERT INTO inventairepart1 (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO inventairepart2 (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO machine (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO jobs (DiscordID, Jobs) VALUES ('${GetUserID(user)}', "Forgeron")`)
                        Query(`INSERT INTO level (DiscordID, Username) VALUES ('${GetUserID(user)}', '${GetUserUsername(user)}')`)
                        Query(`INSERT INTO usertiming (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO market (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO barracks (DiscordID) VALUES (${GetUserID(user)})`)
                        Query(`INSERT INTO land (DiscordID) VALUES (${GetUserID(user)})`)
                        Query(`INSERT INTO vote (DiscordID) VALUES (${GetUserID(user)})`)
                        Query(`INSERT INTO mapsinventory (DiscordID) VALUES (${GetUserID(user)})`)
                        var CommandFilter = CommandsList.filter(command => command.toLowerCase().indexOf("profile") !== -1)
                        const cmd = client.commands.get(CommandFilter.join(""))
                        const args = message.content.split(" ")
                        const User = message.author
                        cmd.run(GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername)
                        Logs("new user", User, message.createdTimestamp, client, "", "", message)
                    }
                    if(reaction.emoji.name === "🪓") {
                        message.channel.send(`<@${GetUserID(user)}>, ` + Lang.NewUserRegistrationSecondStapeBucheron)
                        Query(`INSERT INTO userinfo (DiscordID, Username, RegisterTime) VALUES ('${GetUserID(user)}', '${GetUserUsername(user)}', ${Date.now()})`)
                        Query(`INSERT INTO inventairepart1 (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO inventairepart2 (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO machine (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO jobs (DiscordID, Jobs) VALUES ('${GetUserID(user)}', "Forgeron")`)
                        Query(`INSERT INTO level (DiscordID, Username) VALUES ('${GetUserID(user)}', '${GetUserUsername(user)}')`)
                        Query(`INSERT INTO usertiming (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO market (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO barracks (DiscordID) VALUES (${GetUserID(user)})`)
                        Query(`INSERT INTO land (DiscordID) VALUES (${GetUserID(user)})`)
                        Query(`INSERT INTO vote (DiscordID) VALUES (${GetUserID(user)})`)
                        Query(`INSERT INTO mapsinventory (DiscordID) VALUES (${GetUserID(user)})`)
                        var CommandFilter = CommandsList.filter(command => command.toLowerCase().indexOf("profile") !== -1)
                        const cmd = client.commands.get(CommandFilter.join(""))
                        const args = message.content.split(" ")
                        const User = message.author
                        cmd.run(GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername)
                        Logs("new user", User, message.createdTimestamp, client, "", "", message), "", "", message
                    }
                    if(reaction.emoji.name === "🔨") {
                        message.channel.send(`<@${GetUserID(user)}>, ` + Lang.NewUserRegistrationSecondStapeForgeron)
                        Query(`INSERT INTO userinfo (DiscordID, Username, RegisterTime) VALUES ('${GetUserID(user)}', '${GetUserUsername(user)}', ${Date.now()})`)
                        Query(`INSERT INTO inventairepart1 (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO inventairepart2 (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO machine (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO jobs (DiscordID, Jobs) VALUES ('${GetUserID(user)}', "Forgeron")`)
                        Query(`INSERT INTO level (DiscordID, Username) VALUES ('${GetUserID(user)}', '${GetUserUsername(user)}')`)
                        Query(`INSERT INTO usertiming (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO market (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO barracks (DiscordID) VALUES (${GetUserID(user)})`)
                        Query(`INSERT INTO land (DiscordID) VALUES (${GetUserID(user)})`)
                        Query(`INSERT INTO vote (DiscordID) VALUES (${GetUserID(user)})`)
                        Query(`INSERT INTO mapsinventory (DiscordID) VALUES (${GetUserID(user)})`)
                        var CommandFilter = CommandsList.filter(command => command.toLowerCase().indexOf("profile") !== -1)
                        const cmd = client.commands.get(CommandFilter.join(""))
                        const args = message.content.split(" ")
                        const User = message.author
                        cmd.run(GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername)
                        Logs("new user", User, message.createdTimestamp, client, "", "", message)
                    }
                    if(reaction.emoji.name === "🔬") {
                        message.channel.send(`<@${GetUserID(user)}>, ` + Lang.NewUserRegistrationSecondStapeJoaillier)
                        Query(`INSERT INTO userinfo (DiscordID, Username, RegisterTime) VALUES ('${GetUserID(user)}', '${GetUserUsername(user)}', ${Date.now()})`)
                        Query(`INSERT INTO inventairepart1 (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO inventairepart2 (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO machine (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO jobs (DiscordID, Jobs) VALUES ('${GetUserID(user)}', "Forgeron")`)
                        Query(`INSERT INTO level (DiscordID, Username) VALUES ('${GetUserID(user)}', '${GetUserUsername(user)}')`)
                        Query(`INSERT INTO usertiming (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO market (DiscordID) VALUES ('${GetUserID(user)}')`)
                        Query(`INSERT INTO barracks (DiscordID) VALUES (${GetUserID(user)})`)
                        Query(`INSERT INTO land (DiscordID) VALUES (${GetUserID(user)})`)
                        Query(`INSERT INTO vote (DiscordID) VALUES (${GetUserID(user)})`)
                        Query(`INSERT INTO mapsinventory (DiscordID) VALUES (${GetUserID(user)})`)
                        var CommandFilter = CommandsList.filter(command => command.toLowerCase().indexOf("profile") !== -1)
                        const cmd = client.commands.get(CommandFilter.join(""))
                        const args = message.content.split(" ")
                        const User = message.author
                        cmd.run(GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername)
                        Logs("new user", User, message.createdTimestamp, client, "", "", message)
                    }
            })
        })
    })
}