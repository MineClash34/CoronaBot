const query = require("../MySQL.js")
const GetUserID = require("./GetUserID.js")
module.exports = function(user, item) {
    return new Promise(function(resolve, reject){
    query.query(`SELECT * FROM inventairepart2 WHERE DiscordID = ${GetUserID(user)}`, function(err, result) {
        if (err) return reject(err);
        if (item === "CarboneBrut") resolve(result[0].CarboneBrut);
        if (item === "Carbone") resolve(result[0].Carbone);
    })
})
}