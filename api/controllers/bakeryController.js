'use strict';


let mongoose = require('mongoose'),
    processes = mongoose.model('processes');

exports.getProcesses = function(req, res) {
    processes.find({}, function(err, processes) {
        if (err)
            res.send(err);
        res.json(processes);
    });
};
exports.insertProcesses = function(req, res) {
    let new_task = new processes(req.body);
    new_task.save(function(err, processes) {
        if (err)
            res.send(err);
        res.json(processes);
    });
};
exports.updateProcesses = function(req, res) {
    processes.findOneAndUpdate({_id: req.params.processes}, req.body, {new: true}, function(err, processes) {
        if (err)
            res.send(err);
        res.json(processes);
    });
};



