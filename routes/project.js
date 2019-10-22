'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');
var EmployeController = require('../controllers/employe');

var router = express.Router();

router.post('/save-project', ProjectController.saveProject);
router.post('/save-employe', EmployeController.saveEmploye);

module.exports = router;