var express = require('express');
const heroeController = require('../controllers/heroeControler');
const homeController = require('../controllers/homeController');
var router = express.Router();

/* GET home page. */
router.get('/', homeController.index);

module.exports = router;
