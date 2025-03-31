var express=require('express');
const creditosController = require('../controllers/creditosController');
var router=express.Router();

/* rutas */
router.get('/', creditosController.index);


module.exports=router;