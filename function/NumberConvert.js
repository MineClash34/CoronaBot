module.exports = function(GivenNumber) {
    var caracters = GivenNumber.toString().split("")
    if (caracters.length >=4 && caracters.length <= 6) 
    {
        if (caracters.length === 4) 
        {
        var NumberFormated = caracters[0] + "." + caracters[1] + caracters[2] + "K"
        }
        else
        if (caracters.length === 5) 
        {
            var NumberFormated = caracters[0] + caracters[1] + "." + caracters[2] + caracters[3] + "K"
        }
        else
        if (caracters.length === 6) 
        {
            var NumberFormated = caracters[0] + caracters[1] + caracters[2] + "." + caracters[3] + caracters[4] + "K"
        }
    } 
    else 
    if (caracters.length >= 7 && caracters.length <= 9) 
    {
        if (caracters.length === 7) 
        {
        var NumberFormated = caracters[0] + "." + caracters[1] + caracters[2] + "M"
        }
        else
        if (caracters.length === 8) 
        {
            var NumberFormated = caracters[0] + caracters[1] + "." + caracters[2] + caracters[3] + "M"
        }
        else
        if (caracters.length === 9) 
        {
            var NumberFormated = caracters[0] + caracters[1] + caracters[2] + "." + caracters[3] + caracters[4] + "M"
        }
    }
    else 
    if (caracters.length >= 10 && caracters.length <= 12) 
    {
        if (caracters.length === 10) 
        {
        var NumberFormated = caracters[0] + "." + caracters[1] + caracters[2] + "G"
        }
        else
        if (caracters.length === 11) 
        {
            var NumberFormated = caracters[0] + caracters[1] + "." + caracters[2] + caracters[3] + "G"
        }
        else
        if (caracters.length === 12) 
        {
            var NumberFormated = caracters[0] + caracters[1] + caracters[2] + "." + caracters[3] + caracters[4] + "G"
        }
    }
    else 
    if (caracters.length >= 13 && caracters.length <= 15) 
    {
        if (caracters.length === 13) 
        {
        var NumberFormated = caracters[0] + "." + caracters[1] + caracters[2] + "T"
        }
        else
        if (caracters.length === 14) 
        {
            var NumberFormated = caracters[0] + caracters[1] + "." + caracters[2] + caracters[3] + "T"
        }
        else
        if (caracters.length === 15) 
        {
            var NumberFormated = caracters[0] + caracters[1] + caracters[2] + "." + caracters[3] + caracters[4] + "T"
        }
    }
    else 
    if (caracters.length >= 16 && caracters.length <= 18) 
    {
        if (caracters.length === 16) 
        {
        var NumberFormated = caracters[0] + "." + caracters[1] + caracters[2] + "P"
        }
        else
        if (caracters.length === 17) 
        {
            var NumberFormated = caracters[0] + caracters[1] + "." + caracters[2] + caracters[3] + "P"
        }
        else
        if (caracters.length === 18) 
        {
            var NumberFormated = caracters[0] + caracters[1] + caracters[2] + "." + caracters[3] + caracters[4] + "P"
        }
    }
    else
    {
        var NumberFormated = caracters.join("")
    }
    return NumberFormated;
}