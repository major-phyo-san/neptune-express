module.exports.index = function(req, res){
res.send("List all historical rates countries");
}

module.exports.findRateById = function(req, res) {
res.send("List a historical rate by id");
}
