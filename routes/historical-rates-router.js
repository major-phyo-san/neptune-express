var express = require('express');
var router = express.Router();
var historicalRatesController = require('../controllers/historical-rates-controller');

router.get('/', historicalRatesController.index);
router.get('/:id', historicalRatesController.findRateById);

module.exports = router;
