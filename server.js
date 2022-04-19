let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    TaskProcesses = require('./api/models/bakeryModel'),
    TaskModuleInstances = require('./api/models/bakeryModuleInstancesModel'),
    TaskModules = require('./api/models/bakeryModulesModel'),
    bodyParser = require('body-parser');

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bakery').then(r => {}
);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing routes
let routesProcesses = require('./api/routes/bakeryRoutes');
let routesModuleInstances = require('./api/routes/bakeryModuleInstancesRoutes');
let routesModules = require('./api/routes/bakeryModulesRoutes');

//registering routes
routesProcesses(app);
routesModuleInstances(app);
routesModules(app);


app.listen(port);


console.log('Bakery RESTful API server started on: ' + port);