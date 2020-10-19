'use strict';

const planetService = require('./planetService');

exports.findPlanet = async (req, res) => {
  await res.json(planetService.findByName(req.params.name));
};

exports.getAll = async (req, res) => {
  await res.json(planetService.getAll());
};