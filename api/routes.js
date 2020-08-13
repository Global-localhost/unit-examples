'use strict';

module.exports = (app) => {

    const planetsController = require('./planets/PlanetsController');
    const cors = require('cors');

    app.use(cors());
    app.route('/api/planets').get( planetsController.getAll);
    app.route('/api/planets/:name')
        .get(planetsController.findPlanet)
        .post(function (req,res) {res.json('Posted')})
        .put(function (req,res) {res.json('Posted')})
        .delete(function (req,res) {res.json('Deleted')})
};