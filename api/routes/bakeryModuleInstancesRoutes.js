'use strict';


module.exports = function(app) {
    let bakery = require('../controllers/bakeryModuleInstancesController');

    // bakery processes Routes
    app.route('/moduleInstances')
        .get(bakery.getModuleInstances)
        .put(bakery.updateModuleInstances)
        .post(bakery.insertModuleInstances);
};