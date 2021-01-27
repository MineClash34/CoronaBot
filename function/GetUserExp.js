const query = require("../MySQL.js")
const GetUserID = require("./GetUserID.js")
module.exports = function(user, item) {
    return new Promise(function(resolve, reject){
    query.query(`SELECT * FROM level WHERE DiscordID = ${GetUserID(user)}`, function(err, result) {
        if (err) return reject(err);
        resolve(result[0].LevelHas);
    })
})
}