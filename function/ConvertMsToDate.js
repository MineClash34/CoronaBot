const Lang = require("../lang/fr.json")
module.exports = function(Time) {
    var GlobalSeconds = Time / 1000
    var Heure = Math.floor(GlobalSeconds / 3600)
    var Minutes = Math.floor((GlobalSeconds - (Heure * 3600)) / 60)
    var Secondes = Math.round(GlobalSeconds - ((Heure * 3600) + (Minutes * 60)))
    return Heure + " " + Lang.Heures + " " + Minutes + " " + Lang.Minutes + " " + Secondes + " " + Lang.Secondes
}