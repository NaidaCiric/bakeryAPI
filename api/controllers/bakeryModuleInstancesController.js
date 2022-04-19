'use strict';


let mongoose = require('mongoose'),
    moduleInstances = mongoose.model('moduleInstances');

exports.getModuleInstances = function(req, res) {
    moduleInstances.find({}, function(err, moduleInstances) {
        if (err)
            res.send(err);
        res.json(moduleInstances);
    });
};
exports.insertModuleInstances = function(req, res) {
    let new_task = new moduleInstances(req.body);
    new_task.save(function(err, moduleInstances) {
        if (err)
            res.send(err);
        res.json(moduleInstances);
    });
};
exports.updateModuleInstances = function(req, res) {
    moduleInstances.findOneAndUpdate({_id: req.params._id}, req.body, {new: true}, function(err, moduleInstances) {
        if (err)
            res.send(err);
        res.json(moduleInstances);
    });
};



