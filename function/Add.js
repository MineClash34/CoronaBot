const Query = require("./Query.js")
const query = require("../MySQL.js")
const GetUserID = require("./GetUserID.js")
const GetPrincipalItemNumber = require("./GetPrincipalItemNumber.js")
const GetAvancedItemNumber = require("./GetAvancedItemNumber.js")
const client = require("../bot.js").client
module.exports = function(Columns, Table, More, User) {
    if (!isNaN(User)) User = client.users.get(User)
    if (!User) return;
    Columns.forEach(async element => {
        if (element === "Carbone") {
            Query(`UPDATE ${Table} SET ${element} = ${await GetAvancedItemNumber(User, "Carbone") + More} WHERE DiscordID = ${GetUserID(User)}`)
        }
        if (element === "CarboneBrut") {
            Query(`UPDATE ${Table} SET ${element} = ${await GetAvancedItemNumber(User, "CarboneBrut") + More} WHERE DiscordID = ${GetUserID(User)}`)
        }
        if (element === "Stone") {
            Query(`UPDATE ${Table} SET ${element} = ${await GetPrincipalItemNumber(User, "Stone") + More} WHERE DiscordID = ${GetUserID(User)}`)
        }
        if (element === "Coal") {
            Query(`UPDATE ${Table} SET ${element} = ${await GetPrincipalItemNumber(User, "Coal") + More} WHERE DiscordID = ${GetUserID(User)}`)
        }
        if (element === "Iron") {
            Query(`UPDATE ${Table} SET ${element} = ${await GetPrincipalItemNumber(User, "Iron") + More} WHERE DiscordID = ${GetUserID(User)}`)
        }
        if (element === "Wood") {
            Query(`UPDATE ${Table} SET ${element} = ${await GetPrincipalItemNumber(User, "Wood") + More} WHERE DiscordID = ${GetUserID(User)}`)
        }
        if (element === "Money") {
            query.query(`SELECT * FROM market WHERE DiscordID = ${GetUserID(User)}`, function(err, MarketResult) {
                Query(`UPDATE ${Table} SET ${element} = ${MarketResult[0].Money + More} WHERE DiscordID = ${GetUserID(User)}`)
            })
        }
        if (element === "Level") {
            query.query(`SELECT * FROM level WHERE DiscordID = ${GetUserID(User)}`, function(err, MarketResult) {
                Query(`UPDATE ${Table} SET ${element} = ${MarketResult[0].Level + More} WHERE DiscordID = ${GetUserID(User)}`)
            })
        }
        if (element === "LevelHas") {
            query.query(`SELECT * FROM level WHERE DiscordID = ${GetUserID(User)}`, function(err, MarketResult) {
                Query(`UPDATE ${Table} SET ${element} = ${MarketResult[0].LevelHas + More} WHERE DiscordID = ${GetUserID(User)}`)
            })
        }
    })
}