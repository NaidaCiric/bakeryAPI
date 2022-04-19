'use strict';

module.exports = function(app) {
    let bakery = require('../controllers/bakeryController');

    // bakery processes Routes
    app.route('/processes')
        .get(bakery.getProcesses)
        .put(bakery.updateProcesses)
        .post(bakery.insertProcesses);
};
