'use strict'

var Project = require('../models/project');

var controller = {

saveProject: function(req, res) {
    var project = new Project();

    var params = req.body;
    project.name = params.name;
    project.address = params.address;
    project.tel = params.tel;
    project.startDate = params.startDate;
    project.endDate = params.endDate;
    project.budget = params.budget;
    project.manager = params.manager;
    project.employees = params.employees;

    project.save((err, projectStored) => {
        if(err) return res.status(500).send({message: 'Erreur lors de la sauvegarde'});

        if(!projectStored) return res.status(404).send({message: 'Erreur lors de la sauvegarde'});

        return res.status(200).send({project: projectStored});
    });


    }
};


module.exports = controller;
