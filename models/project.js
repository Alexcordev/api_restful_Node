'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProjectSchema = Schema({
    
        name: String, 
        address: String,
        tel: String,
        startDate: String,
        endDate: String,
        budget: Number,
        manager: String,
        employees: Number
      
});

module.exports = mongoose.model('Project', ProjectSchema);