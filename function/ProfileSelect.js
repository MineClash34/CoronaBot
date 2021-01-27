const Query = require("./Query.js")
const Lang = require("../lang/Lang.json")
module.exports = function (message, UserID) {
    Query("SELECT * FROM profile WHERE DiscordID = " + UserID, function(err, result) {
        if (result.length  <= 0) return message.reply(Lang.UserNotFound)
        if(err) throw err
        return result;
    })
}