exports.run = async (GetUserAvatarURL, Send, query, GetImageByURL, StartTyping, StopTyping, GetRandomColor, Lang, NewUserRegistration, Query, GetUserID, GetPrincipalItemNumber, NumberConvert, GetXCordonate, GetBackGround, GetAvancedItemNumber, GetEnergyGenerationPerSeconde, GetUserJobs, GetUserLevelPourcentage, GetUserExpRequire, GetUserExp, GetUserLevel, AddEmoji, message, User, client, args, CommandsList, ConvertMsToDate, GetUserJobsEmoji, HelpCommandsList, CleanText, Add, GetUsername, Logs, GetItem, GetLang) =>
{
var pm2 = require("pm2")
message.channel.send("Connexion et actualisation du système...")
pm2.connect(function(err){
    if( err ) {
        message.channel.send("Connexion échoué")
        console.error(err)
        process.exit(2)
    } else {
        message.channel.send("Connecté prêt à redémarrer...")
    }
})

        pm2.restart({
            script : "bot.js"
        }, function (err, apps){
            message.channel.send("Redémarrage en cours...")
            pm2.disconnect()
            if  (err) {
                message.channel.send("Une erreur s'est produite lors du redémarrage...")
            } else {
                message.channel.send("Redémarrage effectué avec succès !")
            }
        })
}