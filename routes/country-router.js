var express = require('express');
var router = express.Router();
var countryController = require('../controllers/country-controller');

router.get('/', countryController.index);
router.get('/:id', countryController.findCountryById);

module.exports = router;
