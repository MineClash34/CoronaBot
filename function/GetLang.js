const query = require("../MySQL.js")
const GetUserID = require("./GetUserID.js")
module.exports = function(user) {
    return new Promise(function(resolve, reject){
    query.query(`SELECT * FROM userinfo WHERE DiscordID = ${GetUserID(user)}`, function(err, result) {
        if (result.length > 0) {
        if (err) return reject(err);
        resolve(result[0].Lang);
        } else {
            resolve("fr")
        }
    })
})
}