var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Customer', { title: 'Search Results for Customer' });
});

module.exports = router;

var express = require('express');
const customer_controlers= require('../controllers/customer');
var router = express.Router();
/* GET costumes */
router.get('/', customer_controlers.customer_view_all_Page );
module.exports = router;
