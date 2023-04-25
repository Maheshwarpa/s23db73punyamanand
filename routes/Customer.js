var express = require('express');
var router = express.Router();
var customer_controller = require('../controllers/customer');

/* GET home page. */
router.get('/', customer_controller.customer_view_all_Page)
router.get('/detail', customer_controller.customer_view_one_Page);
/* GET create costume page */
router.get('/create', customer_controller.customer_create_Page);
/* GET delete costume page */
router.get('/delete', customer_controller.customer_delete_Page);
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
router.get('/update',secured,customer_controller.customer_update_Page);
module.exports = router;