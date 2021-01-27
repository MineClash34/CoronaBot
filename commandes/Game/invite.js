const Discord = require("discord.js")
exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText) => 
{
    try {
    let InviteEmbed = new Discord.RichEmbed()
    .setAuthor(Lang.InviteEmbedAuthor, GetUserAvatarURL(User))
    .setColor(GetRandomColor())
    .setDescription(`${AddEmoji("bot")} [${Lang.LinkTextBotInvite}](https://discord.com/oauth2/authorize?client_id=675373406039965697&permissions=604367937&redirect_uri=https%3A%2F%2Fdiscord.gg%2F8D64yTF&response_type=code&scope=bot+guilds.join)\n${AddEmoji("discord")} [${Lang.LinkTextServerInvite}](https://discord.gg/8D64yTF)\n${AddEmoji("utip")} [${Lang.LinkTextUtipInvite}](https://utip.io/mineclash)`)
    .setTimestamp()
    Send(message, InviteEmbed)
} catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${CleanText(err)}\n\`\`\``);
  } 
}
const Lang = require("../lang/fr.json")
module.exports.help = {
    name: "Invite",
    description: Lang.InviteCommandDescription
}