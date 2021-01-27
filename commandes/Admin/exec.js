const exec = require("child_process")
exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add) => 
{
    args.shift()
    try {
        if (User.id !== "359218206897995776") return;
        var code = args.join(" ")
        exec.exec(code, (error, stdout, stderr) => {
            if (error) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${CleanText(error)}\n\`\`\``);
            }
            if (stderr) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${CleanText(stderr)}\n\`\`\``);
            }
            message.channel.send(`\`\`\`${stdout}\`\`\``)
        })
    } 
    catch (err) 
    {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${CleanText(err)}\n\`\`\``);
    }
}