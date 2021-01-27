const { Canvas } = require("canvas-constructor")
const Discord = require("discord.js")
exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText) => 
{
            try {
            StartTyping(message)
            let img = new Canvas(512, 657)
                .addImage(await GetBackGround("profile"), 0, 0, 512, 657)
                .addImage(await GetImageByURL(GetUserAvatarURL(User)), 7, 6, 128, 128)
                .save()
                .setColor("#FFFFFF")
                .setTextFont("40px Cambria")
                .addText(await NumberConvert(await GetPrincipalItemNumber(User, "Coal")), 70, 240)
                .addText(await NumberConvert(await GetPrincipalItemNumber(User, "Stone")), 70, 335)
                .addText(await NumberConvert(await GetPrincipalItemNumber(User, "Iron")), await GetXCordonate(await NumberConvert(await GetPrincipalItemNumber(User, "Iron"))), 245)
                .addText(await NumberConvert(await GetPrincipalItemNumber(User, "Wood")), await GetXCordonate(await NumberConvert(await GetPrincipalItemNumber(User, "Wood"))), 335)
                .addText(await NumberConvert(await GetAvancedItemNumber(User, "CarboneBrut")), 70, 485)
                .addText(await NumberConvert(await GetAvancedItemNumber(User, "Carbone")), GetXCordonate(await NumberConvert(await GetAvancedItemNumber(User, "Carbone"))), 490)
                .addText(await NumberConvert(await GetEnergyGenerationPerSeconde(User)) + " J/sec", 70, 610)
                .save()
                .setTextAlign("center")
                .setColor("#FFFFFF")
                .setTextFont("40px Cambria")
                .addText(User.username, 323, 45)
                .save()
                .setColor("#94FF30")
                .addRect(224, 80, await (await GetUserLevelPourcentage(User)/100) * 200, 26)
                .save()
                .setTextAlign("center")
                .setColor("#000000")
                .setTextFont("15px Cambria")
                .addText("EXP " + await GetUserExp(User) + "/" + await GetUserExpRequire(User), 323.5, 97)
                .save()
                .setColor("#FFFFFF")
                .addRect(7, 6, 70, 20)
                .save()
                .setTextAlign("start")
                .setColor("#000000")
                .setTextFont("15px Cambria")
                .addText("LVL", 9 , 20)
                .setTextFont("bold 20px Cambria")
                .addText(await GetUserLevel(User), 41 , 20)
                .save()
                .toBuffer()
                let attachement = new Discord.Attachment(img, "profile.png")
                Send(message, attachement)
            StopTyping(message)
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${CleanText(err)}\n\`\`\``);
          } 
}
const Lang = require("../lang/fr.json")
module.exports.help = {
    name: "Profile",
    description: Lang.ProfileCommandDescription
}

