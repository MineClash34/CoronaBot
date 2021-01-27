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
const CommandsList = require("../bot.js").CommandsList
const HelpCommandsList = require("../bot.js").HelpCommand
const AddEmoji = require("../function/AddEmoji.js")
const GetUserJobsEmoji = require("../function/GetUserJobsEmoji.js")
const CleanText = require("../function/CleanText.js")
const Add = require("../function/Add.js")
const GetUsername = require("../function/GetUsername.js")
const Logs = require("../function/Logs.js")
const GetItem = require("../function/GetItem.js")
const GetLang = require("../function/GetLang.js")
var Message = 0
module.exports = async (client, message) => {
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;
    query.query(`SELECT * FROM serversettings WHERE DiscordID = ${message.guild.id}`, async function(err, result) {
    if (message.content.split("")[0] !== "&" && result.length <= 0) return;
    if (result.length > 0 && message.content.startsWith(result[0].Prefix) === false && message.content.split("")[0] !== "&") return;
    if (message.content.split("")[0] === "&") {
        var Prefix = "&"
    } else {
        var Prefix = result[0].Prefix
    }
    if (message.content.length === 1) return;
    const AdmindID = ["359218206897995776", "383754895724904448", "423956209587191818"]
    const User = message.author
    const Lang = require(`../lang/${await GetLang(User)}.json`)
    query.query(`SELECT * FROM ban WHERE DiscordID = ${GetUserID(User)}`, async function(err, result) {
    const ContentCaracterSeparated = message.content.split("")
    ContentCaracterSeparated.splice(0, Prefix.length)
    if (ContentCaracterSeparated.includes(" ")) {
        var requete = ContentCaracterSeparated.join("").split(" ")[0]
    }
    else {
        var requete = ContentCaracterSeparated.join("")
    }
    if (!AdmindID.includes(User.id)) {
        var CommandFilter = HelpCommandsList.filter(command => command.toLowerCase().startsWith(requete.toLowerCase()) === true)
    } else {
        var CommandFilter = CommandsList.filter(command => command.toLowerCase().startsWith(requete.toLowerCase()) === true)
    }
    if (CommandFilter.length === CommandsList.length) return;
    if (CommandFilter.length === HelpCommandsList.length) return;
    if (CommandFilter.length >= 2) return message.reply(Lang.ManyCommandsFind + "```" + CommandFilter.join(", ") + "```").then((BotMessage) => {
        BotMessage.delete(15000)
        message.delete(15000)
    })
    const cmd = client.commands.get(CommandFilter.join(""))
    if (!cmd) return; //message.reply(Lang.NoCommandsFind);
    if (result.length > 0 && CommandFilter.join("") !== "invite") return message.channel.send(Lang.YouAreBanned)
    const args = message.content.split(" ")
    Message = message
    query.query(`SELECT * FROM userinfo WHERE DiscordID = ${GetUserID(User)}`, async function(err, result) {
        if (result.length > 0) {
            if (result[0].Username !== User.username) {
                Query(`UPDATE userinfo SET Username = '${User.username}' WHERE DiscordID = ${GetUserID(User)}`)
                Query(`UPDATE level SET Username = '${User.username}' WHERE DiscordID = ${GetUserID(User)}`)
            }
    cmd.run(GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername, Logs, GetItem, GetLang)
} else {
    NewUserRegistration(message, User);
}
    })
})
    })
}

