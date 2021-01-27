exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji) => 
{
    var requete = message.content.split(" ")[1]
    if (!requete) return message.reply("Précise moi une commande :)")
    var CommandFilter = CommandsList.filter(command => command.toLowerCase().startsWith(requete))
    if (CommandFilter.length >= 2) return message.reply(Lang.ManyCommandsFind + "```" + CommandFilter.join(", ") + "```")
    const cmd = client.commands.get(CommandFilter.join(""))
    if (!cmd) return message.reply(Lang.NoCommandsFind);
    delete require.cache[require.resolve(`../Game/${CommandFilter.join("")}.js`)];
    client.commands.delete(CommandFilter.join(""));
    const props = require(`../Game/${CommandFilter.join("")}.js`);
    client.commands.set(CommandFilter.join(""), props);
    message.reply(`La commande : **${CommandFilter.join("")}** a été rechargé avec succès.`);
  };