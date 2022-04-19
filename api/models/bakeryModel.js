'use strict';
let mongoose = require('mongoose');
const Schema = mongoose.Schema;


let BakerySchema = new Schema({
    processes: {
        type: String,
        required: 'existing saved processes'
    },
    last_updated: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('processes', BakerySchema);