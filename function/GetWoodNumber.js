const query = require("../MySQL.js")
const GetUserID = require("./GetUserID.js")
module.exports = function(message) {
    return new Promise(function(resolve, reject){
    query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(message)}`, function(err, result) {
        if (err) return reject(err);
          resolve(result[0].Wood);
    })
})
}