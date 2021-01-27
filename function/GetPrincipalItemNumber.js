const query = require("../MySQL.js")
const GetUserID = require("./GetUserID.js")
module.exports = function(user, item) {
    return new Promise(function(resolve, reject){
    query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(user)}`, function(err, result) {
        if (err) return reject(err);
        if (item === "Stone") resolve(result[0].Stone);
        if (item === "Wood") resolve(result[0].Wood);
        if (item === "Iron") resolve(result[0].Iron);
        if (item === "Coal") resolve(result[0].Coal);
    })
})
}