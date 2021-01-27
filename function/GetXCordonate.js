module.exports = function(GivenNumber) {
    var caracters = GivenNumber.toString().split("")
    if (caracters.length === 1) {
        var XCordonate = 405
    }
    else
    if (caracters.length === 2)
    {
        var XCordonate = 383
    }
    else
    if (caracters.length === 3)
    {
        var XCordonate = 360
    }
    else
    if (caracters.length === 5)
    {
        var XCordonate = 330
    }
    else
    if (caracters.length === 6)
    {
        var XCordonate = 305
    }
    else
    if (caracters.length === 7)
    {
        var XCordonate = 285
    }
    return XCordonate;
}