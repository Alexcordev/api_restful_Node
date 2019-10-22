'use strict'

var Employe = require('../models/employe');

var controller = {

saveEmploye: function(req, res) {
    var employe = new Employe();

    var params = req.body;
    employe.name = params.name;
    employe.surname = params.surname;
    employe.address = params.address;
    employe.tel = params.tel;
    employe.email = params.email;
    employe.title = params.title;
    employe.rate = params.rate;
    employe.hired = params.hired;

    employe.save((err, employeStored) => {
        if(err) return res.status(500).send({message: 'Erreur lors de la sauvegarde'});

        if(!employeStored) return res.status(404).send({message: 'Erreur lors de la sauvegarde'});

        return res.status(200).send({employe: employeStored});
    });


    }
};

module.exports = controller;