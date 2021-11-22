var express = require('express');
var router = express.Router();

const {index, detail} = require('../controllers/indexController')

/* GET home page. */
router.get('/', index);
router.get('/detalle/:id',detail)

module.exports = router;
