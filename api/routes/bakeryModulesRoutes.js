'use strict';


module.exports = function(app) {
    let bakery = require('../controllers/bakeryModulesController');

    // bakery processes Routes
    app.route('/modules')
        .get(bakery.getModules)
        .put(bakery.updateModules)
        .post(bakery.insertModules);
};
