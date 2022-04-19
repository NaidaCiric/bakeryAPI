'use strict';
let mongoose = require('mongoose');
const Schema = mongoose.Schema;


let BakeryModulesSchema = new Schema({
    modules: {
        type: String,
        required: 'existing saved modules'
    },
    last_updated: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('modules', BakeryModulesSchema);