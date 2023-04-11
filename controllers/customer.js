var Costume = require('../models/customer');
// List of all Costumes
exports.customer_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Customer list');
};
// for a specific Costume.
exports.customer_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Customer detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.customer_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Customer create POST');
};
// Handle Costume delete form on DELETE.
exports.customer_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Customer delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.customer_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Customer update PUT' + req.params.id);
};

// List of all Costumes
exports.costume_list = async function(req, res) {
    try{
    theCostumes = await Costume.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };