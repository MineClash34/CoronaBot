const query = require("../MySQL.js")
const GetUserID = require("./GetUserID.js")
module.exports = function(user, item) {
    return new Promise(function(resolve, reject){
    query.query(`SELECT * FROM inventairepart1 WHERE DiscordID = ${GetUserID(user)}`, function(err1, result1) {
        query.query(`SELECT * FROM inventairepart2 WHERE DiscordID = ${GetUserID(user)}`, function(err2, result2) {
            if (err1) return reject(err1);
            if (err2) return reject(err2);
            if (item === "CarboneBrut") resolve(result2[0].CarboneBrut);
            if (item === "Carbone") resolve(result2[0].Carbone);
            if (item === "Stone") resolve(result1[0].Stone);
            if (item === "Wood") resolve(result1[0].Wood);
            if (item === "Iron") resolve(result1[0].Iron);
            if (item === "Coal") resolve(result1[0].Coal);
        })
    })
})
}