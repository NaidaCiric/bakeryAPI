'use strict';


let mongoose = require('mongoose'),
    modules = mongoose.model('modules');

exports.getModules = function(req, res) {
    modules.find({}, function(err, modules) {
        if (err)
            res.send(err);
        res.json(modules);
    });
};
exports.insertModules = function(req, res) {
    let new_task = new modules(req.body);
    new_task.save(function(err, modules) {
        if (err)
            res.send(err);
        res.json(modules);
    });
};
exports.updateModules = function(req, res) {
    modules.findOneAndUpdate({_id: req.params._id}, req.body, {new: true}, function(err, modules) {
        if (err)
            res.send(err);
        res.json(modules);
    });
};



