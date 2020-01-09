var express = require('express')
var app = express();

var countryRouter = require('./routes/country-router');
var historicalRatesRouter = require('./routes/historical-rates-router');
//var latestRatesRouter = require('./routes/latest-rates-router');
//var rateConversionRouter = require('./routes/rate-conversion-router');

app.use('/api/countries', countryRouter);
app.use('/api/historical/', historicalRatesRouter);
//app.use('/api/latest/', latestRatesRouter);
//app.use('/api/convert'/ rateConversionRouter);

var server = app.listen(3000, function(){

console.log("Express server running on port 3000");

});
