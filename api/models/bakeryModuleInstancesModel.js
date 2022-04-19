'use strict';
let mongoose = require('mongoose');
const Schema = mongoose.Schema;


let BakeryModuleInstancesSchema = new Schema({
    moduleInstances: {
        type: String,
        required: 'existing module instances'
    },
    last_updated: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('moduleInstances', BakeryModuleInstancesSchema);