const query = require("../MySQL.js")
module.exports = function (Query) {
    return new Promise(function(resolve, reject){
    query.query(Query, function(err, result) {
        if (err) return reject(err);
          resolve(result);
    })
})
}