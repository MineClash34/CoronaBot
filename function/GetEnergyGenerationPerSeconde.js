const query = require("../MySQL.js")
const GetUserID = require("./GetUserID.js")
module.exports = async function(user, item) {
    return new Promise(function(resolve, reject){
    query.query(`SELECT * FROM machine WHERE DiscordID = ${GetUserID(user)}`, async function(err, result) {
        var GenerationByEolienne = result[0].Eolienne * 150
        if (new Date().getMinutes().toString().includes("6") || new Date().getMinutes().toString().includes("7") || new Date().getMinutes().toString().includes("8") || new Date().getMinutes().toString().includes("9") || new Date().getMinutes().toString().includes("0")) {
             var GenerationBySolarPanel = result[0].SolarPanel * 500
        } else {
            var GenerationBySolarPanel = 0
        }
        var GenerationByReactorHydro = result[0].ReactorHydro * 1250
        var GenerationByReactorVapeur = result[0].ReactorVapeur * 3000
        var GenerationByReactorNuclear = result[0].ReactorNuclear * 7500
        var Total = GenerationByEolienne + GenerationBySolarPanel + GenerationByReactorHydro + GenerationByReactorVapeur + GenerationByReactorNuclear
        resolve(Total)
    })
})
}