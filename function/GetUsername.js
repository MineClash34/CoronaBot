const query = require("../MySQL.js")
module.exports = function(UserID)  {
    return new Promise(function(resolve, reject){
        query.query(`SELECT * FROM userinfo WHERE DiscordID = ${UserID}`, function(err, result) {
            resolve(result[0].Username)
        })
    })
}