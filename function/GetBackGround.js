const axios = require("axios")
module.exports = function (Name) {
    return new Promise(async(resolve, reject) => {
        if (Name === "profile") {
        await axios.get("https://cdn.discordapp.com/attachments/530889965048037388/688720914803851295/FondV0.0.13.png", {
            responseType: "arraybuffer"
        }).then((res) => {
            if(res.data) {
                resolve(res.data);
            }
        }).catch((err) => {
            if(err) {
                reject(new Error(err));
            }
        })
    } else if (Name === "maps") {
        await axios.get("https://cdn.discordapp.com/attachments/699251757641105569/700732457489793044/unknown.png", {
            responseType: "arraybuffer"
        }).then((res) => {
            if(res.data) {
                resolve(res.data);
            }
        }).catch((err) => {
            if(err) {
                reject(new Error(err));
            }
        })
    }
    })
}