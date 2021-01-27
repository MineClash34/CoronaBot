const Discord = require("discord.js")
const { Canvas } = require("canvas-constructor")
var Maps = ["South", "North", "East", "West"]
exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername, Logs, GetItem, GetLang) =>
{
    try {
        args.shift()
        if (!args[0]) {
            await StartTyping(message)
            let attachement = new Discord.Attachment("./commandes/Images/maps.png", "maps.png")
            await message.channel.send(attachement).then(async () => {
                await StopTyping(message)
            })
        } else {
            var MapsFilter = Maps.filter(map => map.toLowerCase().startsWith(args[0].toLowerCase()) === true)
            if (MapsFilter.length < 1) return message.channel.send(`${Lang.MapsInvalid}\`\`\`${Maps.join(", ")}\`\`\``)
            if (!args[1]) {
                await StartTyping(message)
                query.query(`SELECT * FROM maps WHERE Name = '${MapsFilter[0].toLowerCase()}'`, async function(err, result) {
                    if (err) throw (err);
                    let img = new Canvas(1079, 1080)
                        .addImage(await GetBackGround("maps"), 0, 0, 1079, 1080)
                        .save()
                        .setColor("#FFFFFF")
                        .setTextAlign("center")
                        .setTextFont("50px MS UI Gothic")
                        .addText(result[0].NorthEast.split("-")[0], 195.5, 195)
                        .addText(result[0].NorthEast.split("-")[1], 195.5, 265)
                        .addText(result[0].North.split("-")[0], 539.5, 195)
                        .addText(result[0].North.split("-")[1], 539.5, 265)
                        .addText(result[0].NorthWest.split("-")[0], 882, 195)
                        .addText(result[0].NorthWest.split("-")[1], 882, 265)
                        .addText(result[0].East.split("-")[0], 195.5, 538)
                        .addText(result[0].East.split("-")[1], 195.5, 608)
                        .addText(result[0].Center.split("-")[0], 539.5, 538)
                        .addText(result[0].Center.split("-")[1], 539.5, 608)
                        .addText(result[0].West.split("-")[0], 882, 538)
                        .addText(result[0].West.split("-")[1], 882, 608)
                        .addText(result[0].SouthEast.split("-")[0], 195.5, 881)
                        .addText(result[0].SouthEast.split("-")[1], 195.5, 941)
                        .addText(result[0].South.split("-")[0], 539.5, 881)
                        .addText(result[0].South.split("-")[1], 539.5, 941)
                        .addText(result[0].SouthWest.split("-")[0], 882, 881)
                        .addText(result[0].SouthWest.split("-")[1], 882, 941)
                        .save()
                        .toBuffer()
                        let attachement = new Discord.Attachment(img, "carte.png")
                        await message.channel.send(attachement).then(async () => {
                            await StopTyping(message)
                        })
                    })
            }
        }
    } catch (err) {
        console.log(err)
        message.channel.send(`\`ERROR\` \`\`\`xl\n${CleanText(err)}\n\`\`\``);
      } 
}