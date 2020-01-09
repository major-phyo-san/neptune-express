module.exports.index = function(req, res){
res.send("List all countries");
}

module.exports.findCountryById = function(req, res) {
res.send("List a country by id");
}
