const axios = require("axios")
module.exports = function (imageURL) {
    return new Promise(async(resolve, reject) => {
        await axios.get(imageURL, {
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
    })
}