'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var EmployeSchema = Schema({
    
        name: String, 
        surname: String,
        address: String,
        tel: String,
        email: String,
        title: String,
        rate: String,
        hired: String
        
      
});

module.exports = mongoose.model('Employe', EmployeSchema);