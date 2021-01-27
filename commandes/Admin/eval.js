const Discord = require("discord.js")
exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add) => 
{
    args.shift()
    try {
        var code = args.join(" ")
        let evaled = eval(await code);
    if (typeof evaled !== "string")
        evaled = require("util").inspect(await evaled);
        if (CleanText(await evaled).includes(client.token)) return message.channel.send("T'as cru tu pouvais avoir le token ? Mdr")
        if (CleanText(await evaled).includes("}") && CleanText(await evaled).includes("Packet") && CleanText(await evaled).includes("Row")) 
        {
            message.channel.send(CleanText(await evaled), {code:"xl"});
        } 
        else 
        {
            message.channel.send(CleanText(await evaled));
        }
    } 
    catch (err) 
    {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${CleanText(err)}\n\`\`\``);
    }
}